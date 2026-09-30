"use client";

import { useId, useState } from "react";
import { useReducedMotion } from "motion/react";

type Item = { question: string; answer: string };

export function FaqList({ items }: { items: readonly Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const reduce = useReducedMotion();

  return (
    <ul className="border-t-2 border-ink">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-${index}`;
        return (
          <li key={item.question} className="border-b-2 border-ink">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base text-ink sm:gap-6 sm:text-lg"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className={`shrink-0 font-mono text-xl leading-none text-accent ${reduce ? "" : "transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"} ${open ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            {open ? (
              <div id={panelId} className="max-w-[65ch] pb-6 pr-10 text-base leading-relaxed text-muted">
                {item.answer}
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
