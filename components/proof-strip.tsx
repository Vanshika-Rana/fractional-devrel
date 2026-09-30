import { ChartLine } from "@phosphor-icons/react/dist/ssr";
import { Sticker } from "@/components/sticker";
import { proof, proofNote } from "@/lib/content";

export function ProofStrip() {
  return (
    <section aria-label="Selected results" className="relative">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="relative rounded-[1.25rem] border-2 border-ink bg-surface p-6 md:p-8">
          <Sticker className="absolute -top-5 right-8 size-12 rotate-6" delay={0.3}>
            <ChartLine size={22} weight="bold" />
          </Sticker>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
            {proof.map((item) => (
              <div key={item.label} className="min-w-0">
                <dt className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                  {item.value}
                </dt>
                <dd className="mt-2 max-w-[18ch] text-sm leading-relaxed text-muted">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-[46rem] border-t-2 border-ink pt-6 text-lg leading-relaxed">
            {proofNote}
          </p>
        </div>
      </div>
    </section>
  );
}
