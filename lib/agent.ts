import { readFile } from "node:fs/promises";
import path from "node:path";

export type ChatTurn = { role: "user" | "assistant"; content: string };

const FILE = path.join(process.cwd(), "content/agent-knowledge.md");

export const OFF_TOPIC_REPLY =
  "I only answer questions about me and the work I take on. Ask about fractional DevRel, a task, a sprint, rates, or how to start.";

const GREETING_REPLY =
  "Hi. Ask me about the work, the rates, or how a project starts.";

const REFUSE_REPLY =
  "I don't do that in this box. Ask about my services, or email ranavanshika172000@gmail.com if you want to scope real work.";

const ABOUT_ME =
  /\b(vanshika|devrel|fractional|audit|onboarding|sprint|docs|documentation|demo|demos|quickstart|readme|community|ambassador|billing|invoice|invoices|rate|rates|price|pricing|cost|charge|charges|blog|blogs|video|videos|workshop|workshops|talk|talks|conference|availability|available|india|zerops|payman|valist|instadapp|optexity|task|tasks|portfolio|sample|samples|example|examples|study|studied|education|degree|college|university|cgpa|skill|skills|tool|tools|stack|competitor|competitors|live demo|python|typescript|node|react|language|languages|webinar|white paper|whitepaper|retainer|retain|retained|technical content|technical writing|tutorial|tutorials|ongoing|monthly|hire|hiring|client|pre-seed|preseed|early-stage|series b|quick start)\b/i;

const ABOUT_WORK =
  /\b(who are you|about you|your background|your experience|where are you|based|timezone|how (soon|fast) can you|when can you start|how do (i|we) (get )?start(ed)?|get(ting)? started|work with you|email you|book a call)\b/i;

const GREETING = /^(hi|hey|hello|yo|sup|thanks|thank you|bye|good morning|good afternoon)\b[.! ]*$/i;

const ABUSE =
  /\b(ignore (all |any |your |previous |the )?instructions|you are now|system prompt|jailbreak|developer mode|do anything now)\b|\b(write|generate|draft|code|compose|make)\b.{0,40}\b(poem|essay|script|story|song|email|homework|function|app|malware|exploit|blog post|article)\b|\b(weather|stock price|bitcoin|president|world cup|recipe)\b/i;

export async function loadKnowledge() {
  const raw = await readFile(FILE, "utf8");
  return raw.replace(/<!--[\s\S]*?-->/g, "").trim();
}

function sections(knowledge: string) {
  return knowledge
    .split(/\n# /)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const [titleLine, ...rest] = block.split("\n");
      return { title: titleLine.replace(/^# /, ""), body: rest.join("\n").trim() };
    });
}

function wants(question: string, words: string[]) {
  const q = question.toLowerCase();
  return words.some((word) => q.includes(word));
}

function rateLine(body: string) {
  const line = body.split("\n").find((row) => row.toLowerCase().startsWith("rate:"));
  return line?.slice(5).trim() ?? "";
}

function section(knowledge: string, title: string) {
  return sections(knowledge).find((item) => item.title.toLowerCase() === title.toLowerCase());
}

export function answerFromNotes(question: string, knowledge: string) {
  const task = section(knowledge, "Pick a Task");
  const sprint = section(knowledge, "Docs and demo sprint");
  const fractional = section(knowledge, "Fractional DevRel");
  const blogs = section(knowledge, "Blog posts");
  const videos = section(knowledge, "Videos");
  const talks = section(knowledge, "Workshops, talks, and live demos");

  const unpublished = (label: string, body: string | undefined, extra = "") => {
    if (!body || rateLine(body) === "not set" || rateLine(body) === "") {
      return `I haven't published a ${label} rate yet. Email me and we'll scope it.`;
    }
    const rate = rateLine(body).replace(/\.$/, "");
    return extra ? `${rate}. ${extra}` : `${rate}.`;
  };
  const combo = "A blog and a video on the same topic together is $700-$1,200.";
  const priceWords = ["price", "pricing", "cost", "charge", "rate", "how much"];

  if (wants(question, ["retain", "retainer", "ongoing", "monthly", "long-term", "recurring"])) {
    const rate = fractional ? rateLine(fractional.body) : "";
    return `Yes, that's fractional DevRel${rate ? `, ${rate}` : ""}, 10 to 20 hours a week, including regular technical writing. I take limited clients at a time. If I'm full, I'll say so before we scope anything. A short call is the way to start.`;
  }
  if (
    wants(question, ["portfolio", "sample", "example", "your work", "past work", "show me", "see your", "work history"]) &&
    !wants(question, priceWords)
  ) {
    return "Easiest is to look at the work itself. Writing: https://www.van.codes/#writing. Videos: https://www.van.codes/#videos. Full experience: https://www.van.codes/#experience.";
  }
  if (wants(question, ["competitor"])) {
    return "Direct competitors of clients I already work with are off the table. If you're not sure whether that includes you, ask on the call.";
  }
  if (wants(question, ["study", "studied", "education", "degree", "college", "university", "cgpa"])) {
    return "I studied BE Computer Science at Vel Tech High Tech, Chennai, graduating in 2022.";
  }
  if (wants(question, ["skill", "what tools", "which tools", "tools do you", "tech stack", "language", "python", "typescript", "react"])) {
    return "Content: technical writing, API docs, developer campaigns. DevRel: community, ambassador programs, onboarding, workshops, speaking. Code: Python, Node.js, TypeScript, React. Tools: Figma, VS Code, JIRA, Notion, Discord, Google Analytics.";
  }
  if (wants(question, ["white paper", "whitepaper"])) {
    return "A white paper starts at $900-$1,800, scoped on a quick call.";
  }
  if (wants(question, ["sprint"]) && wants(question, ["fractional", "retainer", "difference", "different"])) {
    const sprintRate = sprint ? rateLine(sprint.body) : "";
    const fractionalRate = fractional ? rateLine(fractional.body) : "";
    return `A sprint is a fixed piece of work with a start and an end${sprintRate ? `, ${sprintRate}` : ""}, usually 2-4 weeks. Fractional DevRel is monthly capacity${fractionalRate ? `, ${fractionalRate}` : ""}, for teams that need someone in the role every week.`;
  }
  if (wants(question, ["blog", "post", "article"]) && wants(question, ["video", "film"])) {
    return `${unpublished("blog", blogs?.body).replace(/\.$/, "")}. ${unpublished("video", videos?.body, combo)}`;
  }
  if (wants(question, ["blog", "post", "article", "writing rate"])) {
    return unpublished("blog", blogs?.body, combo);
  }
  if (wants(question, ["video", "youtube", "film"])) {
    return unpublished("video", videos?.body, combo);
  }
  if (wants(question, ["workshop", "talk", "conference", "speak", "live demo", "webinar"])) {
    const reply = unpublished("workshop", talks?.body);
    const pick = wants(question, ["full-day", "full day"])
      ? "full-day"
      : wants(question, ["half-day", "half day"])
        ? "half-day"
        : wants(question, ["live demo", "webinar"])
          ? "live demo"
          : wants(question, ["talk", "conference", "speak"])
            ? "conference talk"
            : "";
    const match = pick
      ? reply.split(/\.\s+(?=[A-Z])/).find((part) => part.toLowerCase().includes(pick))
      : undefined;
    return match ? `${match.replace(/\.$/, "")}. Scoped on a quick call.` : reply;
  }
  if (wants(question, ["price", "pricing", "cost", "charge", "rate", "how much"])) {
    return [
      task
        ? `Pick a Task runs ${rateLine(task.body)} for one deliverable: a blog is $300-$600, a video $400-$800, an onboarding audit $600-$1,200.`
        : "",
      sprint ? `A docs and demo sprint is ${rateLine(sprint.body)}.` : "",
      fractional
        ? `Fractional DevRel is ${rateLine(fractional.body)}, 10 to 20 hours a week, limited clients at a time.`
        : "",
      "Talks, workshops, and live demos are priced by format, roughly $600 to $6,000.",
    ]
      .filter(Boolean)
      .join(" ");
  }
  if (wants(question, ["pre-seed", "preseed", "early-stage", "early stage", "startup", "seed"])) {
    return "Yes, I work with early-stage and pre-seed teams. We usually start with one task, so both of us know where to focus before scoping anything bigger.";
  }
  if (wants(question, ["billing", "invoice", "payment", "pay you", "deposit", "usd", "currency"])) {
    return "Invoices are in USD. Fixed-scope work is half to start and half on delivery. Fractional DevRel is billed monthly, at the start of the month.";
  }
  if (/\b(start|started|starting|soon|available|availability|when)\b/i.test(question)) {
    return "A single task can usually start within a week. Sprints and fractional work depend on what I'm already in. I'll give you a real date on a call.";
  }
  if (wants(question, ["who", "about", "background", "experience"])) {
    return "I'm Vanshika. I do fractional DevRel for developer-tool teams. I ship the docs and the working demos, in Python, Node, TypeScript, and React. The longer story is at van.codes.";
  }
  if (wants(question, ["where", "based", "hours", "timezone", "india"])) {
    return "I'm based in India. I work remotely with teams wherever they are.";
  }
  if (wants(question, ["email", "contact", "talk", "book", "call"])) {
    return "Email ranavanshika172000@gmail.com. Twenty minutes is enough. I'll tell you if a single task, a sprint, or fractional DevRel should come first.";
  }

  const tokens = question
    .toLowerCase()
    .split(/[^a-z0-9+]+/)
    .filter((token) => token.length > 3);
  const ranked = sections(knowledge)
    .map((item) => {
      const hay = `${item.title} ${item.body}`.toLowerCase();
      const score = tokens.reduce((sum, token) => sum + (hay.includes(token) ? 1 : 0), 0);
      return { item, score };
    })
    .sort((a, b) => b.score - a.score);

  const best = ranked[0];
  if (!best || best.score === 0) {
    return "I don't have that in my notes. Email ranavanshika172000@gmail.com and I'll answer it directly.";
  }
  const sentence = best.item.body
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.toLowerCase().startsWith("rate: not set"))
    .slice(0, 3)
    .join(" ");
  return sentence;
}

const SYSTEM = `You answer as Vanshika, in the first person, on her fractional DevRel page.
Use only the notes below. If a rate says "not set", say that rate is not published yet and they can email her.
If the notes do not contain the answer, say you don't have it and give the email.
Do not invent prices, employers, metrics, or dates.
Keep it under 80 words. Use contractions. No em dash. No bullet list unless they asked for prices.
End price answers by pointing them to a short call.

NOTES:
`;

export function preparedReply(question: string, knowledge: string) {
  const text = question.trim();
  if (GREETING.test(text)) return GREETING_REPLY;
  if (ABUSE.test(text)) return REFUSE_REPLY;
  if (!ABOUT_ME.test(text) && !ABOUT_WORK.test(text)) return OFF_TOPIC_REPLY;

  const clear =
    wants(text, [
      "retain",
      "retainer",
      "ongoing",
      "monthly",
      "blog",
      "post",
      "article",
      "video",
      "youtube",
      "workshop",
      "talk",
      "conference",
      "price",
      "pricing",
      "cost",
      "charge",
      "rate",
      "how much",
      "start",
      "soon",
      "available",
      "availability",
      "who",
      "about",
      "background",
      "experience",
      "where",
      "based",
      "hours",
      "timezone",
      "email",
      "contact",
      "book",
      "call",
      "portfolio",
      "sample",
      "example",
      "your work",
      "past work",
      "show me",
      "see your",
      "competitor",
      "study",
      "studied",
      "education",
      "degree",
      "college",
      "university",
      "skill",
      "what tools",
      "which tools",
      "tools do you",
      "tech stack",
      "language",
      "python",
      "typescript",
      "react",
      "live demo",
      "webinar",
      "billing",
      "invoice",
      "payment",
      "startup",
      "early-stage",
      "pre-seed",
    ]) || sectionScore(text, knowledge) >= 2;

  if (clear) return answerFromNotes(text, knowledge);
  return null;
}

function sectionScore(question: string, knowledge: string) {
  const tokens = question
    .toLowerCase()
    .split(/[^a-z0-9+]+/)
    .filter((token) => token.length > 3);
  return sections(knowledge).reduce((best, item) => {
    const hay = `${item.title} ${item.body}`.toLowerCase();
    const score = tokens.reduce((sum, token) => sum + (hay.includes(token) ? 1 : 0), 0);
    return Math.max(best, score);
  }, 0);
}

const modelHits = new Map<string, { count: number; reset: number }>();

export function modelAllowed(ip: string) {
  const now = Date.now();
  const current = modelHits.get(ip);
  if (!current || current.reset < now) {
    modelHits.set(ip, { count: 1, reset: now + 60 * 60 * 1000 });
    return true;
  }
  if (current.count >= 8) return false;
  current.count += 1;
  return true;
}

export async function answerWithModel(
  question: string,
  history: ChatTurn[],
  knowledge: string,
  ip = "local",
) {
  const ready = preparedReply(question, knowledge);
  if (ready) return ready;

  const key = process.env.OPENROUTER_API_KEY;
  if (!key || !modelAllowed(ip)) return answerFromNotes(question, knowledge);

  const model = process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://devrel.van.codes",
      "X-Title": "Vanshika fractional DevRel",
    },
    body: JSON.stringify({
      model,
      temperature: 0.3,
      max_tokens: 220,
      messages: [
        { role: "system", content: SYSTEM + knowledge },
        ...history,
        { role: "user", content: question },
      ],
    }),
  });

  if (!response.ok) return answerFromNotes(question, knowledge);
  const data = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const text = data.choices?.[0]?.message?.content?.trim();
  return text || answerFromNotes(question, knowledge);
}
