"use client";

import { track } from "@vercel/analytics";
import type { ReactNode } from "react";
import { TALK_HREF } from "@/lib/content";

type ButtonLinkProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  // Where on the page the button sits. When set, clicks are sent to Vercel Analytics.
  location?: string;
};

const press =
  "transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";

export function ButtonLink({
  href = TALK_HREF,
  children,
  variant = "primary",
  size = "md",
  location,
}: ButtonLinkProps) {
  const onClick = location
    ? () => track("lets_talk_click", { location })
    : undefined;

  const height = size === "sm" ? "h-10 px-4 text-sm" : "h-12 px-5 text-sm";

  if (variant === "secondary") {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`inline-flex items-center justify-center rounded-full border-2 border-ink bg-bg font-semibold text-ink hover:bg-ink/5 ${press} ${height}`}
      >
        <span className="whitespace-nowrap">{children}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-sun font-semibold text-on-sun shadow-[3px_3px_0_0_var(--ink)] ${press} ${height}`}
    >
      <span className="whitespace-nowrap">{children}</span>
      <span aria-hidden>→</span>
    </a>
  );
}
