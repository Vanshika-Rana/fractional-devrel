"use client";

import { ArrowUp, Circle } from "@phosphor-icons/react";
import { useState } from "react";
import { useReducedMotion } from "motion/react";
import { track } from "@vercel/analytics";

type Turn = { role: "user" | "assistant"; content: string };

const IDLE = "Ask Fractional AI!";

const starters = [
  "What's the rate for a single blog post or video?",
  "What's the difference between a sprint and fractional DevRel?",
  "Can I see samples of your writing or video work?",
  "How fast can you start?",
];

const LINK = /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[\w.-]+)/g;

// Turns URLs and email addresses in an answer into real links.
// Trailing punctuation stays outside the link, so "van.codes/#writing." links cleanly.
function Linkified({ text }: { text: string }) {
  return text.split(LINK).map((part, index) => {
    if (index % 2 === 0) return part;
    const trimmed = part.replace(/[.,;:!?)]+$/, "");
    const tail = part.slice(trimmed.length);
    const isEmail = !trimmed.startsWith("http");
    return (
      <span key={index}>
        <a
          href={isEmail ? `mailto:${trimmed}` : trimmed}
          {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 break-all hover:decoration-4"
        >
          {trimmed}
        </a>
        {tail}
      </span>
    );
  });
}

export function AskBox() {
  const reduce = useReducedMotion();
  const [turns, setTurns] = useState<Turn[]>([]);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState(IDLE);
  const [busy, setBusy] = useState(false);

  async function ask(question: string) {
    const text = question.trim();
    if (!text || busy) return;
    track("chat_question_asked", { question: text.slice(0, 255) });
    const history = turns;
    setTurns((current) => [...current, { role: "user", content: text }]);
    setDraft("");
    setBusy(true);
    setStatus("Checking the notes");
    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text, history }),
      });
      const data = (await response.json()) as { answer?: string; error?: string };
      const answer = data.answer || data.error || "Email me and I'll answer that directly.";
      if (reduce) {
        setTurns((current) => [...current, { role: "assistant", content: answer }]);
      } else {
        setTurns((current) => [...current, { role: "assistant", content: "" }]);
        let index = 0;
        const step = () => {
          index += 2;
          const next = answer.slice(0, index);
          setTurns((current) => {
            const copy = [...current];
            copy[copy.length - 1] = { role: "assistant", content: next };
            return copy;
          });
          if (index < answer.length) {
            window.setTimeout(step, 16);
          } else {
            setBusy(false);
            setStatus(IDLE);
          }
        };
        step();
        return;
      }
    } catch {
      setTurns((current) => [
        ...current,
        { role: "assistant", content: "That didn't go through. Email ranavanshika172000@gmail.com." },
      ]);
    }
    setBusy(false);
    setStatus(IDLE);
  }

  return (
    <div className="flex h-full min-h-[15rem] flex-col sm:min-h-[17rem]">
      <p className="flex items-center gap-2 font-mono text-xs text-muted">
        <Circle size={10} weight="fill" className="text-accent" aria-hidden />
        {status === IDLE ? (
          <span className="rounded-md border-2 border-ink bg-sun px-2 py-0.5 text-sm font-bold text-on-sun">
            {status}
          </span>
        ) : (
          status
        )}
      </p>
      <div className="mt-3 flex-1 space-y-3 overflow-y-auto pr-1 text-sm leading-relaxed" aria-live="polite">
        {turns.length === 0 ? (
          <div className="flex flex-wrap gap-2">
            {starters.map((starter) => (
              <button
                key={starter}
                type="button"
                onClick={() => ask(starter)}
                className="rounded-full border-2 border-ink bg-bg px-3 py-1.5 text-left text-sm font-medium hover:bg-ink/5"
              >
                {starter}
              </button>
            ))}
          </div>
        ) : (
          turns.map((turn, index) => (
            <p key={`${turn.role}-${index}`} className={turn.role === "user" ? "font-semibold" : "text-muted"}>
              {turn.role === "assistant" ? <Linkified text={turn.content} /> : turn.content}
            </p>
          ))
        )}
      </div>
      <form
        className="mt-3 flex items-center gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          void ask(draft);
        }}
      >
        <label className="sr-only" htmlFor="ask-vanshika">
          Ask a question
        </label>
        <input
          id="ask-vanshika"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Ask about the work"
          maxLength={400}
          className="h-11 min-w-0 flex-1 rounded-full border-2 border-ink bg-bg px-4 text-base outline-none"
        />
        <button
          type="submit"
          aria-label="Send question"
          disabled={busy || draft.trim().length === 0}
          className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-sun text-on-sun shadow-[3px_3px_0_0_var(--ink)] disabled:opacity-50"
        >
          <ArrowUp size={18} weight="bold" aria-hidden />
        </button>
      </form>
    </div>
  );
}
