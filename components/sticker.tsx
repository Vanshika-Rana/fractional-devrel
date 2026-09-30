"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const tones = {
  sun: "bg-sun text-on-sun",
  accent: "bg-accent text-on-sun",
  surface: "bg-surface text-ink",
  ink: "bg-ink text-bg",
};

export function Sticker({
  className = "",
  children,
  delay = 0,
  tone = "sun",
  shape = "tile",
}: {
  className?: string;
  children: ReactNode;
  delay?: number;
  tone?: keyof typeof tones;
  shape?: "tile" | "circle" | "pill";
}) {
  const reduce = useReducedMotion();
  const radius =
    shape === "circle" ? "rounded-full" : shape === "pill" ? "rounded-full" : "rounded-2xl";

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none z-10 flex items-center justify-center border-2 border-ink shadow-[3px_3px_0_0_var(--ink)] ${tones[tone]} ${radius} ${className}`}
      animate={reduce ? undefined : { y: [0, -8, 0] }}
      transition={{
        duration: 5.5,
        delay,
        repeat: Infinity,
        repeatType: "mirror",
        ease: [0.45, 0.05, 0.55, 0.95],
      }}
    >
      {children}
    </motion.div>
  );
}
