"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/button-link";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#questions", label: "Questions" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const motionClass = reduce
    ? ""
    : "transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]";

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed top-3 right-0 left-0 z-40 px-3 md:top-4 md:px-6">
      <div
        className={`site-header mx-auto max-w-5xl border-2 border-ink px-4 shadow-[3px_3px_0_0_var(--ink)] md:px-5 ${open ? "rounded-[1.5rem]" : "rounded-full"} ${reduce ? "" : "transition-[border-radius] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"}`}
      >
        <div className="flex h-14 items-center justify-between">
          <a href="#top" className="text-sm font-extrabold tracking-tight">
            Vanshika
          </a>
          <nav
            className="hidden items-center gap-4 lg:flex xl:gap-7"
            aria-label="Page"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink size="sm" location="header">
              Let&apos;s talk
            </ButtonLink>
          </nav>
          <button
            type="button"
            className="flex size-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute top-1.5 left-0 h-0.5 w-5 origin-center bg-current ${motionClass} ${open ? "rotate-45" : "-translate-y-1.5"}`}
              />
              <span
                className={`absolute top-1.5 left-0 h-0.5 w-5 origin-center bg-current ${motionClass} ${open ? "-rotate-45" : "translate-y-1.5"}`}
              />
            </span>
          </button>
        </div>
        {open ? (
          <nav
            id="mobile-nav"
            aria-label="Page"
            className="border-t-2 border-ink pb-4 lg:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-semibold"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <ButtonLink location="header-mobile-menu">
                Let&apos;s talk
              </ButtonLink>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
