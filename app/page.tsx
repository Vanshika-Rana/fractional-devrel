import { BookOpen, ChatsCircle, Question, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { FaqList } from "@/components/faq-list";
import { HeroStage } from "@/components/hero-stage";
import { ProblemSection } from "@/components/problem-section";
import { ProcessRail } from "@/components/process-rail";
import { ProofStrip } from "@/components/proof-strip";
import { Reveal } from "@/components/reveal";
import { ServiceStack } from "@/components/service-stack";
import { SiteHeader } from "@/components/site-header";
import { Sticker } from "@/components/sticker";
import { ButtonLink } from "@/components/button-link";
import { EMAIL, TALK_HREF, faqs, profiles } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vanshika Rana",
  url: "https://devrel.van.codes",
  email: EMAIL,
  description:
    "Fractional DevRel for seed to Series B developer-tool teams. Docs, demos, onboarding, and community.",
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: profiles.map((profile) => profile.href),
};

export default function Home() {
  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="content">
        <HeroStage />
        <ProofStrip />
        <ProblemSection />

        <section id="services">
          <div className="mx-auto max-w-[1400px] px-4 pt-8 md:px-8 md:pt-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              The work
            </h2>
            <p className="mt-5 max-w-[46rem] text-lg leading-relaxed text-muted">
              I have 10 to 20 hours a week for fractional DevRel. That means I
              take limited clients at a time, plus the occasional sprint, not
              everything at full tilt. Picking one task is how most people
              start.
            </p>
          </div>
          <div className="mt-10">
            <ServiceStack />
          </div>
        </section>

        <ProcessRail />

        <section id="about" className="relative overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
            <div className="absolute top-16 right-10 hidden md:block">
              <Sticker className="size-14 -rotate-6" delay={0.2}>
                <Sparkle size={26} weight="bold" />
              </Sticker>
            </div>
            <div className="absolute right-28 bottom-16 hidden md:block">
              <Sticker shape="circle" tone="surface" className="size-12 rotate-12" delay={0.6}>
                <BookOpen size={22} weight="bold" />
              </Sticker>
            </div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                The longer story
              </h2>
              <p className="mt-6 max-w-[40rem] text-lg leading-relaxed text-muted">
                This page is the freelance work. If you want more about me, the
                writing, and the rest of what I do, it lives at van.codes.
              </p>
              <p className="mt-8">
                <a
                  href="https://van.codes"
                  className="text-4xl font-extrabold tracking-tight text-accent underline decoration-2 underline-offset-8 md:text-6xl"
                >
                  van.codes
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        <section id="questions" className="relative overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
            <div className="absolute top-16 right-8 hidden lg:block">
              <Sticker shape="circle" tone="accent" className="size-14 rotate-6" delay={0.35}>
                <Question size={26} weight="bold" />
              </Sticker>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Practical questions
            </h2>
            <div className="mt-10 max-w-3xl">
              <FaqList items={faqs} />
            </div>
          </div>
        </section>

        <section id="talk">
          <div className="mx-auto max-w-[1400px] px-4 pb-20 md:px-8 md:pb-28">
            <Reveal>
              <div className="relative overflow-hidden rounded-[1.25rem] border-2 border-ink bg-surface p-6 md:p-12">
                <div
                  aria-hidden
                  className="pattern-hatch pointer-events-none absolute -top-8 -right-8 size-36 rounded-full border-2 border-ink"
                />
                <div className="absolute top-6 right-8 hidden sm:block">
                  <Sticker shape="circle" tone="sun" className="size-14 -rotate-6" delay={0.25}>
                    <ChatsCircle size={26} weight="bold" />
                  </Sticker>
                </div>
                <h2 className="max-w-[16ch] text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
                  Know where your developers are getting stuck?
                </h2>
                <p className="mt-6 max-w-[40rem] text-lg leading-relaxed text-muted">
                  A short call is enough. I&apos;ll tell you if a single
                  task, a sprint, or fractional DevRel should come first.
                </p>
                <p className="mt-4 text-base text-muted">
                  Twenty minutes. No slides. I&apos;ll tell you if I can help.
                </p>
                <div className="mt-8">
                  <ButtonLink>Let&apos;s talk</ButtonLink>
                </div>
                <p className="mt-6">
                  <a
                    href={TALK_HREF}
                    className="font-mono text-sm break-all text-ink underline decoration-accent decoration-2 underline-offset-4 sm:text-base sm:break-normal md:text-lg"
                  >
                    {EMAIL}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="border-t-2 border-ink">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-sm text-muted">
            &copy; 2026 Vanshika Rana. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {profiles.map((profile) => (
              <li key={profile.href}>
                <a
                  href={profile.href}
                  className="text-sm text-ink underline decoration-accent/60 decoration-1 underline-offset-4 hover:decoration-accent"
                >
                  {profile.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
