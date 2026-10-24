import { CartoonBubbleSvg } from "@/components/suds-bubbles";
import { cn } from "@/lib/cn";

/**
 * Billowing cartoon soap-suds section divider with bold 3px ink outlines,
 * aqua shadow puffs, crisp white foam peaks, dripping suds, and bobbing bubbles.
 */
export function FoamDivider({
  variant = "wave",
  bg = "bg-cream",
  className,
}: {
  variant?: "wave" | "drip";
  bg?: string;
  className?: string;
}) {
  if (variant === "drip") {
    return (
      <div
        aria-hidden="true"
        className={cn("relative w-full overflow-hidden border-b-[3px] border-ink", bg, className)}
      >
        <svg
          viewBox="0 0 1440 84"
          fill="none"
          preserveAspectRatio="none"
          className="block h-12 w-full sm:h-16"
        >
          {/* Back aqua suds drip layer */}
          <path
            d="M0 0 H1440 V38 C1390 66 1330 66 1280 36 C1225 74 1150 74 1095 36 C1040 68 975 68 920 38 C860 78 780 78 720 38 C660 72 590 72 530 38 C470 76 390 76 330 36 C270 68 205 68 150 38 C95 70 40 68 0 40 Z"
            fill="var(--fs-teal)"
            stroke="var(--fs-ink)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Front white foam cloud drips */}
          <path
            d="M0 0 H1440 V26 C1395 54 1335 54 1285 24 C1230 62 1155 62 1100 24 C1045 56 980 56 925 26 C865 66 785 66 725 26 C665 60 595 60 535 26 C475 64 395 64 335 24 C275 56 210 56 155 26 C100 58 45 56 0 28 Z"
            fill="var(--fs-paper)"
            stroke="var(--fs-ink)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Gloss highlights & hanging soap droplets */}
          <circle cx="190" cy="64" r="7" fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="3" />
          <circle cx="435" cy="68" r="8" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="3" />
          <circle cx="825" cy="70" r="7.5" fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="3" />
          <circle cx="1190" cy="66" r="8" fill="var(--fs-teal)" stroke="var(--fs-ink)" strokeWidth="3" />
        </svg>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn("relative w-full overflow-hidden border-b-[3px] border-ink", bg, className)}
    >
      {/* Floating decorative soap bubbles perched along the foam ridge */}
      <div className="pointer-events-none absolute inset-x-0 top-1 z-10 mx-auto flex max-w-6xl justify-between px-8">
        <div className="animate-float-slow">
          <CartoonBubbleSvg size={32} tint="aqua" />
        </div>
        <div className="animate-float-slow hidden sm:block" style={{ animationDelay: "1.1s" }}>
          <CartoonBubbleSvg size={26} tint="mustard" />
        </div>
        <div className="animate-float-slow" style={{ animationDelay: "0.6s" }}>
          <CartoonBubbleSvg size={36} tint="white" />
        </div>
        <div className="animate-float-slow hidden md:block" style={{ animationDelay: "1.9s" }}>
          <CartoonBubbleSvg size={28} tint="aqua" />
        </div>
      </div>

      <svg
        viewBox="0 0 1440 96"
        fill="none"
        preserveAspectRatio="none"
        className="block h-14 w-full sm:h-20"
      >
        {/* Back aqua foam shadow bank */}
        <path
          d="M0 96 V52 C48 16 125 16 175 50 C235 8 335 8 398 48 C462 12 565 10 632 48 C700 8 808 8 876 48 C945 14 1048 12 1116 50 C1185 10 1288 12 1354 50 C1390 24 1420 28 1440 48 V96 Z"
          fill="var(--fs-teal)"
          stroke="var(--fs-ink)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Front crisp white soap suds bank */}
        <path
          d="M0 96 V66 C54 28 132 28 186 62 C248 20 348 18 412 60 C478 24 580 22 648 60 C718 20 824 20 892 60 C962 26 1064 24 1132 62 C1202 22 1304 24 1370 62 C1402 38 1426 42 1440 60 V96 Z"
          fill="var(--fs-paper)"
          stroke="var(--fs-ink)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Cartoon shine arcs inside the foam puffs */}
        <path d="M268 42 C288 30 322 30 342 42" stroke="var(--fs-cream)" strokeWidth="4" strokeLinecap="round" />
        <path d="M742 38 C766 26 802 26 824 38" stroke="var(--fs-cream)" strokeWidth="4" strokeLinecap="round" />
        <path d="M1222 40 C1244 28 1278 28 1298 40" stroke="var(--fs-cream)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}
