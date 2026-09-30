import { answerWithModel, loadKnowledge, type ChatTurn } from "@/lib/agent";

export const runtime = "nodejs";

const hits = new Map<string, { count: number; reset: number }>();

function limited(ip: string) {
  const now = Date.now();
  const current = hits.get(ip);
  if (!current || current.reset < now) {
    hits.set(ip, { count: 1, reset: now + 60 * 60 * 1000 });
    return false;
  }
  current.count += 1;
  return current.count > 30;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return Response.json({ error: "Too many questions. Email me instead." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Send a question." }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "Send a question." }, { status: 400 });
  }
  const payload = body as { question?: unknown; history?: unknown };

  const question = typeof payload.question === "string" ? payload.question.trim() : "";
  if (!question || question.length > 400) {
    return Response.json({ error: "Ask in a sentence or two." }, { status: 400 });
  }

  const history: ChatTurn[] = (Array.isArray(payload.history) ? payload.history : [])
    .filter(
      (turn): turn is { role: "user" | "assistant"; content: unknown } =>
        typeof turn === "object" &&
        turn !== null &&
        ((turn as { role?: unknown }).role === "user" ||
          (turn as { role?: unknown }).role === "assistant"),
    )
    .slice(-6)
    .map((turn) => ({
      role: turn.role,
      content: String(turn.content ?? "").slice(0, 600),
    }));

  const knowledge = await loadKnowledge();
  const answer = await answerWithModel(question, history, knowledge, ip);
  return Response.json({ answer });
}
