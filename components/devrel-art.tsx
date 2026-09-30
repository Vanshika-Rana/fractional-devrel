// Decorative sticker-style illustration: a terminal, a chat bubble, and a rising chart.
// Pure SVG, colored through the theme tokens.

export function DevrelArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 300"
      role="presentation"
      aria-hidden="true"
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <pattern id="devrel-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" className="fill-ink" opacity="0.2" />
        </pattern>
      </defs>

      {/* dotted backdrop */}
      <rect x="14" y="30" width="392" height="250" rx="28" fill="url(#devrel-dots)" />

      {/* terminal window */}
      <rect x="46" y="72" width="236" height="152" rx="16" className="fill-ink" />
      <rect x="38" y="64" width="236" height="152" rx="16" className="fill-surface stroke-ink" strokeWidth="3" />
      <path d="M38 96h236" className="stroke-ink" strokeWidth="3" />
      <circle cx="58" cy="80" r="5" className="fill-accent stroke-ink" strokeWidth="2" />
      <circle cx="76" cy="80" r="5" className="fill-sun stroke-ink" strokeWidth="2" />
      <circle cx="94" cy="80" r="5" className="fill-bg stroke-ink" strokeWidth="2" />
      <path d="M58 122l14 10-14 10" className="stroke-accent" strokeWidth="5" />
      <path d="M86 142h70" className="stroke-ink" strokeWidth="5" />
      <path d="M58 166h44" className="stroke-ink" strokeWidth="5" opacity="0.45" />
      <path d="M112 166h84" className="stroke-sun" strokeWidth="5" />
      <path d="M58 188h96" className="stroke-ink" strokeWidth="5" opacity="0.45" />
      <path d="M164 188h30" className="stroke-accent" strokeWidth="5" />

      {/* rising chart card */}
      <rect x="258" y="158" width="140" height="106" rx="14" className="fill-ink" transform="translate(6 6)" />
      <rect x="258" y="158" width="140" height="106" rx="14" className="fill-sun stroke-ink" strokeWidth="3" />
      <rect x="276" y="220" width="16" height="26" rx="3" className="fill-surface stroke-ink" strokeWidth="2.5" />
      <rect x="302" y="206" width="16" height="40" rx="3" className="fill-surface stroke-ink" strokeWidth="2.5" />
      <rect x="328" y="192" width="16" height="54" rx="3" className="fill-surface stroke-ink" strokeWidth="2.5" />
      <path d="M274 200l32-22 24 8 42-30" className="stroke-ink" strokeWidth="4" />
      <path d="M362 156h14v14" className="stroke-ink" strokeWidth="4" />

      {/* chat bubble */}
      <path
        d="M254 24h116a18 18 0 0 1 18 18v40a18 18 0 0 1-18 18h-70l-26 20v-20h-20a18 18 0 0 1-18-18V42a18 18 0 0 1 18-18z"
        className="fill-ink"
        transform="translate(6 6)"
      />
      <path
        d="M254 24h116a18 18 0 0 1 18 18v40a18 18 0 0 1-18 18h-70l-26 20v-20h-20a18 18 0 0 1-18-18V42a18 18 0 0 1 18-18z"
        className="fill-accent stroke-ink"
        strokeWidth="3"
      />
      <path d="M270 62l10 10 20-22" className="stroke-ink" strokeWidth="5" />
      <path d="M314 54h50" className="stroke-ink" strokeWidth="5" />
      <path d="M314 72h32" className="stroke-ink" strokeWidth="5" opacity="0.6" />

      {/* sparkles */}
      <path d="M22 44l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" className="fill-sun stroke-ink" strokeWidth="2.5" />
      <path d="M402 128l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" className="fill-surface stroke-ink" strokeWidth="2.5" />
    </svg>
  );
}
