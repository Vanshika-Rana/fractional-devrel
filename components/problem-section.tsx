import { Lightning, PencilSimple } from "@phosphor-icons/react/dist/ssr";
import { Sticker } from "@/components/sticker";

export function ProblemSection() {
  return (
    <section className="relative mx-auto max-w-[1400px] overflow-hidden px-4 py-20 md:px-8 md:py-28">
      <div
        aria-hidden
        className="pattern-hatch pointer-events-none absolute top-16 -right-6 hidden size-28 rounded-full border-2 border-ink lg:block"
      />
      <div className="absolute top-24 right-10 hidden lg:block">
        <Sticker shape="circle" tone="surface" className="size-14 -rotate-12" delay={0.4}>
          <PencilSimple size={24} weight="bold" />
        </Sticker>
      </div>
      <div className="absolute right-28 bottom-10 hidden lg:block">
        <Sticker className="size-12 rotate-12" delay={0.9}>
          <Lightning size={22} weight="bold" />
        </Sticker>
      </div>
      <h2 className="max-w-[16ch] text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
        You probably don&apos;t need another blog post.
      </h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-7">
          <p>
            Developers land, get stuck, and leave. The docs look finished. The
            quickstart is not. The demo is a screenshot of someone else&apos;s
            success.
          </p>
          <p>
            I find the exact step where they drop, then I fix it: the
            quickstart, a working sample, the community that answers the next
            question.
          </p>
          <p>
            This is for seed-to-Series-B developer-tool, API, and infrastructure
            teams with a live product or a launch coming, and nobody whose job
            is getting developers through the door.
          </p>
        </div>
        <p className="border-t-2 border-ink pt-6 text-xl font-semibold leading-snug tracking-tight lg:col-span-5 lg:border-t-0 lg:border-l-2 lg:pt-0 lg:pl-8">
          Docs people actually finish.
          <br />
          Demos that run on the first try.
          <br />
          <span className="box-decoration-clone bg-sun px-1.5 text-on-sun">
            I write the code, not just the caption.
          </span>
        </p>
      </div>
    </section>
  );
}
