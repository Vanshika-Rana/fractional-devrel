import { TerminalWindow } from "@phosphor-icons/react/dist/ssr";
import { Sticker } from "@/components/sticker";
import { process } from "@/lib/content";

const stamps = ["sun", "accent", "surface", "ink"] as const;

export function ProcessRail() {
  return (
    <section id="process" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <div className="flex items-end justify-between gap-4 sm:gap-6">
          <h2 className="min-w-0 text-3xl font-extrabold tracking-tight md:text-5xl">
            How a project goes
          </h2>
          <Sticker className="size-14 rotate-6" delay={0.3}>
            <TerminalWindow size={26} weight="bold" />
          </Sticker>
        </div>
        <ol className="mt-10 overflow-hidden rounded-[1.25rem] border-2 border-ink">
          {process.map((step, index) => (
            <li
              key={step.name}
              className="grid gap-3 border-b-2 border-ink p-5 last:border-b-0 md:grid-cols-12 md:items-center md:gap-8 md:p-6"
            >
              <h3 className="flex items-center gap-3 text-xl font-extrabold tracking-tight md:col-span-3">
                <span
                  aria-hidden
                  className={`flex size-11 shrink-0 -rotate-6 items-center justify-center rounded-full border-2 border-ink font-mono text-sm ${
                    stamps[index] === "sun"
                      ? "bg-sun text-on-sun"
                      : stamps[index] === "accent"
                        ? "bg-accent text-on-sun"
                        : stamps[index] === "ink"
                          ? "bg-ink text-bg"
                          : "bg-surface text-ink"
                  }`}
                >
                  0{index + 1}
                </span>
                {step.name}
              </h3>
              <p className="max-w-[52ch] text-base leading-relaxed text-muted md:col-span-8">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
