"use client";

import { Code, Microphone, Rocket, UsersThree } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { AskBox } from "@/components/ask-box";
import { ButtonLink } from "@/components/button-link";
import { Sticker } from "@/components/sticker";

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroStage() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 md:px-8 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -left-28 hidden size-40 rounded-full border-[14px] border-accent xl:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-44 -right-12 hidden size-20 rounded-full border-2 border-ink bg-sun xl:block"
      />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-10 xl:grid-cols-12 xl:gap-12">
        <div className="xl:col-span-7">
          <motion.p
            className="text-base text-muted"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            Hi, I&apos;m Vanshika. Fractional DevRel for developer tool teams.
          </motion.p>
          <h1 className="mt-4 text-[1.7rem] font-extrabold leading-[1.08] tracking-tight sm:text-[2rem] md:text-[2.3rem] lg:text-[2.75rem] xl:text-[2.35rem] 2xl:text-[2.6rem]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease }}
              >
                Developers show up.
              </motion.span>
            </span>
            <span className="mt-1 block overflow-hidden pb-1 text-accent">
              <motion.span
                className="block"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.85, delay: 0.1, ease }}
              >
                I make sure they actually stick around.
              </motion.span>
            </span>
          </h1>
          <motion.p
            className="mt-5 max-w-[36rem] text-lg leading-relaxed text-muted"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            I help developer-tool teams go from curious to shipped: docs, demos,
            onboarding, and the community that keeps people around.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-start gap-3"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease }}
          >
            <ButtonLink location="hero">Let&apos;s talk</ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              See what I do
            </ButtonLink>
          </motion.div>
        </div>

        <div className="relative xl:col-span-5">
          <div className="pattern-dots relative rounded-[1.75rem] border-2 border-dashed border-ink bg-surface/80 px-4 py-4 sm:px-5 xl:pt-16 xl:pb-12">
            <AskBox />
          </div>
            <div className="absolute -top-6 left-4 hidden xl:block">
              <Sticker
                shape="pill"
                tone="accent"
                className="h-12 -rotate-6 gap-2 px-4 text-sm font-semibold"
                delay={0.15}
              >
                <Microphone size={18} weight="bold" />
                Fractional DevRel
              </Sticker>
            </div>
            <div className="absolute top-3 right-0 hidden xl:block">
              <Sticker className="size-16 rotate-12" delay={0.45}>
                <Code size={28} weight="bold" />
              </Sticker>
            </div>
            <div className="absolute -right-2 -bottom-5 hidden xl:block">
              <Sticker shape="circle" tone="surface" className="size-14 -rotate-12" delay={0.8}>
                <UsersThree size={24} weight="bold" />
              </Sticker>
            </div>
            <div className="absolute -bottom-4 left-4 hidden xl:block">
              <Sticker shape="circle" tone="ink" className="size-12 rotate-6" delay={1.1}>
                <Rocket size={22} weight="bold" />
              </Sticker>
            </div>
          </div>
        </div>
    </section>
  );
}
