import { Check, Megaphone, PencilSimple, Rocket } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/button-link";
import { DevrelArt } from "@/components/devrel-art";
import { Sticker } from "@/components/sticker";
import { retainer, sprint, task } from "@/lib/content";

const board = "rounded-[1.25rem] border-2 border-ink";

export function ServiceStack() {
  return (
    <div className="mx-auto grid max-w-[1400px] gap-6 px-4 pb-8 md:px-8">
      <article className={`${board} relative bg-surface p-6 md:p-10`}>
        <Sticker className="absolute -top-4 right-8 size-12 -rotate-6" delay={0.2}>
          <PencilSimple size={22} weight="bold" />
        </Sticker>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="inline-flex rounded-full border-2 border-ink bg-sun px-3 py-1 text-sm font-semibold text-on-sun">
              {task.lead}
            </p>
            <p className="mt-5 font-mono text-3xl font-semibold tracking-tight text-accent sm:text-4xl md:text-5xl">
              {task.price}
            </p>
            <p className="mt-3 text-sm text-muted">
              {task.meta.join(" \u00b7 ")}
            </p>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-3xl font-extrabold tracking-tight">{task.name}</h3>
            <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-muted">
              {task.summary}
            </p>
            <p className="mt-6 text-sm font-semibold">{task.menuLabel}</p>
            <dl className="mt-3 rounded-2xl border-2 border-ink bg-bg px-4 md:px-5">
              {task.menu.map((row) => (
                <div
                  key={row.item}
                  className="flex flex-col gap-1 border-b-2 border-dashed border-ink/30 py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="text-[15px] leading-snug">{row.item}</dt>
                  <dd className="shrink-0 font-mono text-[15px] font-semibold whitespace-nowrap text-accent">
                    {row.price}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-muted">
              {task.fit}
            </p>
            <div className="mt-8">
              <ButtonLink>Let&apos;s talk</ButtonLink>
            </div>
          </div>
        </div>
      </article>

      <article className={`${board} relative bg-bg p-6 md:p-10`}>
        <Sticker
          shape="circle"
          tone="accent"
          className="absolute -top-4 right-16 size-12 rotate-12"
          delay={0.5}
        >
          <Rocket size={22} weight="bold" />
        </Sticker>
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {sprint.name}
            </h3>
            <p className="mt-4 font-mono text-3xl font-semibold tracking-tight text-accent sm:text-4xl md:text-5xl">
              {sprint.price}
            </p>
            <p className="mt-3 text-sm text-muted">
              {sprint.time}. {sprint.scope}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">{sprint.summary}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{sprint.fit}</p>
            <div className="mt-8">
              <ButtonLink>Let&apos;s talk</ButtonLink>
            </div>
          </div>
          <ul className="grid gap-3 lg:col-span-7">
            {sprint.deliverables.map((item) => (
              <li
                key={item}
                className="rounded-2xl border-2 border-ink px-4 py-4 text-base leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <article className={`${board} relative bg-accent/15 p-6 md:p-10`}>
        <Sticker
          shape="circle"
          tone="surface"
          className="absolute -top-4 right-10 size-12 -rotate-12"
          delay={0.8}
        >
          <Megaphone size={22} weight="bold" />
        </Sticker>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="inline-flex rounded-full border-2 border-ink bg-surface px-3 py-1 text-sm font-semibold">
              The ongoing seat
            </p>
            <h3 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              {retainer.name}
            </h3>
            <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-muted">
              {retainer.summary}
            </p>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed">{retainer.note}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {retainer.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border-2 border-ink bg-surface px-4 py-3.5 text-[15px] leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-sun text-on-sun"
                  >
                    <Check size={11} weight="bold" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-muted">
              {retainer.fit}
            </p>
            <div className="mt-8">
              <ButtonLink>Let&apos;s talk</ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5 lg:self-center lg:text-center">
            <DevrelArt className="mb-8 h-auto w-full max-w-[420px] lg:mx-auto" />
            <p className="font-mono text-3xl font-semibold tracking-tight text-accent sm:text-4xl md:text-5xl">
              {retainer.price}
            </p>
            <p className="mt-3 text-sm text-muted">{retainer.time}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
