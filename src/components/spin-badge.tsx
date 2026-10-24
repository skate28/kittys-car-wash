import type { ReactNode } from "react";

/** Rotating round counter sticker. `text` runs around the edge; `children` sits in the middle. Decorative only. */
export function SpinBadge({ text, children, className }: { text: string; children: ReactNode; className?: string }) {
  const ring = text.length > 24 ? `${text} ✶ ` : `${text} ✶ ${text} ✶ `;
  return (
    <div aria-hidden="true" className={className}>
      <div className="relative grid aspect-square w-full place-items-center rounded-full border-[3px] border-ink bg-mustard shadow-[8px_8px_0_0_var(--fs-ink)]">
        <svg viewBox="0 0 200 200" className="absolute inset-0 size-full animate-spin-slow">
          <defs>
            <path id="badge-ring" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
          </defs>
          <text className="fill-ink font-display uppercase" style={{ fontSize: 12, letterSpacing: 1.5 }}>
            <textPath href="#badge-ring" textLength={495} lengthAdjust="spacing">
              {ring}
            </textPath>
          </text>
        </svg>
        <div className="grid size-[60%] place-items-center rounded-full border-[3px] border-ink bg-brand text-cream">{children}</div>
      </div>
    </div>
  );
}
