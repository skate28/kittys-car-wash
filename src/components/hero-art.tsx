"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Droplets, Sparkles, SprayCan } from "lucide-react";
import { type ReactNode, useState } from "react";

import { SpinBadge } from "@/components/spin-badge";
import { CartoonBubbleSvg, triggerFoamBlast } from "@/components/suds-bubbles";
import { cn } from "@/lib/cn";

function Bob({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={cn("absolute", className)}
      initial={reduce ? false : { opacity: 0, scale: 0.4 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={
        reduce
          ? { duration: 0 }
          : {
              opacity: { duration: 0.4, delay: 0.4 + delay },
              scale: { type: "spring", stiffness: 260, damping: 14, delay: 0.4 + delay },
              y: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.9 + delay },
            }
      }
    >
      {children}
    </motion.div>
  );
}

/** Decorative 4-point shine sparkle star in SVG. */
export function ShineStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path
        d="M16 1C17.4 9.5 22.5 14.6 31 16C22.5 17.4 17.4 22.5 16 31C14.6 22.5 9.5 17.4 1 16C9.5 14.6 14.6 9.5 16 1Z"
        fill="var(--fs-mustard)"
        stroke="var(--fs-ink)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Decorative glossy soap bubble in SVG. */
export function SoapBubble({ className, size = 36 }: { className?: string; size?: number }) {
  return <CartoonBubbleSvg size={size} tint="aqua" className={className} />;
}

/** Ambient floating soap bubbles, foam clusters & shine sparkles for the Hero backdrop. */
export function FloatingBubblesAndSparkles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float-slow absolute left-[2%] top-[8%]">
        <CartoonBubbleSvg size={52} tint="aqua" />
      </div>
      <div className="animate-float-slow absolute left-[18%] top-[4%] hidden sm:block" style={{ animationDelay: "0.8s" }}>
        <CartoonBubbleSvg size={32} tint="white" />
      </div>
      <div className="animate-float-slow absolute left-[46%] top-[7%] opacity-95" style={{ animationDelay: "1.2s" }}>
        <CartoonBubbleSvg size={44} tint="mustard" />
      </div>
      <div className="animate-float-slow absolute left-[53%] top-[16%] hidden md:block" style={{ animationDelay: "2.4s" }}>
        <CartoonBubbleSvg size={28} tint="aqua" />
      </div>
      <div className="animate-float-slow absolute bottom-[14%] left-[42%] hidden lg:block" style={{ animationDelay: "2.1s" }}>
        <CartoonBubbleSvg size={48} tint="white" />
      </div>
      <div className="animate-float-slow absolute bottom-[8%] left-[8%] hidden sm:block" style={{ animationDelay: "1.6s" }}>
        <CartoonBubbleSvg size={38} tint="aqua" />
      </div>
      <div className="animate-float-slow absolute right-[4%] bottom-[18%] hidden md:block" style={{ animationDelay: "0.5s" }}>
        <CartoonBubbleSvg size={42} tint="mustard" />
      </div>
      <div className="animate-twinkle absolute right-[8%] top-[9%]">
        <ShineStar className="size-7 sm:size-9" />
      </div>
      <div className="animate-twinkle absolute left-[38%] bottom-[20%] hidden sm:block" style={{ animationDelay: "0.9s" }}>
        <ShineStar className="size-6" />
      </div>
      <div className="animate-twinkle absolute left-[12%] top-[48%] hidden lg:block" style={{ animationDelay: "1.7s" }}>
        <ShineStar className="size-5" />
      </div>
    </div>
  );
}

const token = "grid place-items-center rounded-full border-[3px] border-ink shadow-[4px_4px_0_0_var(--fs-ink)]";

const BAY_RISING_BUBBLES = [
  { cx: 88, cy: 175, r: 9, fill: "var(--fs-paper)", delay: 0, dx: -10 },
  { cx: 124, cy: 160, r: 7, fill: "var(--fs-teal)", delay: 0.5, dx: 8 },
  { cx: 168, cy: 145, r: 11, fill: "var(--fs-paper)", delay: 1.1, dx: -6 },
  { cx: 215, cy: 150, r: 8, fill: "var(--fs-mustard)", delay: 0.3, dx: 10 },
  { cx: 262, cy: 148, r: 10, fill: "var(--fs-paper)", delay: 0.8, dx: -8 },
  { cx: 308, cy: 162, r: 8, fill: "var(--fs-teal)", delay: 1.4, dx: 9 },
  { cx: 338, cy: 174, r: 9, fill: "var(--fs-paper)", delay: 0.2, dx: -7 },
];

/**
 * Illustrated car rolling through suds, wash brushes, water droplets & shine sparkles.
 * Includes an interactive "Extra Suds!" foam blaster mode right inside the wash bay card.
 */
export function HeroArt({
  ringText,
  center,
  compact = false,
}: {
  ringText: string;
  center: string;
  compact?: boolean;
}) {
  const reduce = useReducedMotion();
  const [extraSuds, setExtraSuds] = useState(false);

  const handleToggleSuds = () => {
    setExtraSuds((prev) => !prev);
    triggerFoamBlast();
  };

  return (
    <div className={cn("relative mx-auto w-full", compact ? "max-w-md lg:max-w-none" : "max-w-[26rem] sm:max-w-[30rem]")}>
      {!compact && <div aria-hidden="true" className="sunburst animate-sunburst absolute -inset-[22%] rounded-full opacity-90" />}

      {/* Main Illustrated Car Wash Bay Card */}
      <motion.div
        className={cn(
          "relative z-10 overflow-hidden rounded-3xl border-[3px] border-ink bg-paper shadow-[8px_8px_0_0_var(--fs-ink)]",
          compact ? "p-3.5 sm:p-4" : "p-4 sm:p-6 shadow-[10px_10px_0_0_var(--fs-ink)]",
        )}
        initial={reduce ? false : { opacity: 0, y: 24, rotate: compact ? -1 : -2 }}
        animate={{ opacity: 1, y: 0, rotate: compact ? -1 : 1.5 }}
        whileHover={reduce ? undefined : { rotate: 0, scale: 1.01 }}
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 150, damping: 15, delay: 0.15 }}
      >
        {/* Top Retro Wash Arch Header with Interactive Foam Blaster Button */}
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border-[3px] border-ink bg-brand px-3.5 py-2 text-paper shadow-[0_4px_0_0_var(--fs-ink)]">
          <span className="flex items-center gap-1.5 font-display text-xs uppercase tracking-wider sm:text-sm">
            <Sparkles className="size-4 fill-mustard text-mustard" aria-hidden="true" />
            Suds &amp; Shine Bay
          </span>
          <button
            type="button"
            onClick={handleToggleSuds}
            className={cn(
              "cursor-pointer rounded-full border-2 border-ink px-3 py-0.5 font-display text-[0.68rem] uppercase tracking-wider text-ink shadow-[0_2px_0_0_var(--fs-ink)] transition active:translate-y-0.5",
              extraSuds ? "bg-teal" : "bg-mustard hover:bg-teal",
            )}
          >
            {extraSuds ? "🫧 Triple Foam ON!" : "🫧 Hit With Extra Suds!"}
          </button>
        </div>

        {/* Illustrated Car Rolling Through Suds & Brushes */}
        <div className="relative mt-3 overflow-hidden rounded-2xl border-[3px] border-ink bg-gradient-to-b from-cream via-cream to-teal/35 pt-3 pb-1.5">
          <svg
            viewBox="0 0 420 250"
            className="h-auto w-full"
            role="img"
            aria-label="Illustrated glossy car rolling through foamy car wash brushes, soap suds, and sparkles"
          >
            {/* Wash Bay Arch Pillars */}
            <rect x="24" y="10" width="18" height="210" rx="6" fill="var(--fs-ink)" />
            <rect x="378" y="10" width="18" height="210" rx="6" fill="var(--fs-ink)" />
            <rect x="18" y="8" width="384" height="22" rx="8" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="3.5" />

            {/* Top Arch Foam Nozzles */}
            {[115, 165, 210, 255, 305].map((nx) => (
              <rect
                key={nx}
                x={nx - 6}
                y="24"
                width="12"
                height="9"
                rx="3"
                fill="var(--fs-paper)"
                stroke="var(--fs-ink)"
                strokeWidth="2.5"
              />
            ))}

            {/* Animated Water & Foam Spray Streams from Top Arch */}
            <g
              stroke={extraSuds ? "var(--fs-mustard)" : "var(--fs-teal)"}
              strokeWidth={extraSuds ? "4.5" : "3.2"}
              strokeLinecap="round"
              strokeDasharray="6 6"
            >
              <line x1="115" y1="33" x2="132" y2="102" />
              <line x1="165" y1="33" x2="172" y2="92" />
              <line x1="210" y1="33" x2="210" y2="88" />
              <line x1="255" y1="33" x2="248" y2="92" />
              <line x1="305" y1="33" x2="288" y2="102" />
            </g>
            <g
              stroke="var(--fs-paper)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="4 8"
            >
              <line x1="140" y1="33" x2="152" y2="96" />
              <line x1="190" y1="33" x2="192" y2="88" />
              <line x1="232" y1="33" x2="230" y2="88" />
              <line x1="280" y1="33" x2="268" y2="96" />
            </g>

            {/* Left Spinning Suds Brush */}
            <g transform="translate(56, 112)">
              <motion.g
                animate={reduce ? undefined : { rotate: 360 }}
                transition={
                  reduce
                    ? undefined
                    : { duration: extraSuds ? 3 : 7, repeat: Infinity, ease: "linear" }
                }
              >
                <circle
                  r="44"
                  fill="var(--fs-teal)"
                  stroke="var(--fs-ink)"
                  strokeWidth="3.5"
                  strokeDasharray="12 6"
                />
                <circle r="30" fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="3" strokeDasharray="9 5" />
                <circle r="19" fill="var(--fs-brand)" stroke="var(--fs-ink)" strokeWidth="3" />
                <circle r="8" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="2.5" />
              </motion.g>
            </g>

            {/* Right Spinning Suds Brush */}
            <g transform="translate(364, 112)">
              <motion.g
                animate={reduce ? undefined : { rotate: -360 }}
                transition={
                  reduce
                    ? undefined
                    : { duration: extraSuds ? 3 : 7, repeat: Infinity, ease: "linear" }
                }
              >
                <circle
                  r="44"
                  fill="var(--fs-teal)"
                  stroke="var(--fs-ink)"
                  strokeWidth="3.5"
                  strokeDasharray="12 6"
                />
                <circle r="30" fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="3" strokeDasharray="9 5" />
                <circle r="19" fill="var(--fs-brand)" stroke="var(--fs-ink)" strokeWidth="3" />
                <circle r="8" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="2.5" />
              </motion.g>
            </g>

            {/* Thick Floor Foam Bank in Wash Bay */}
            <path
              d="M28 214 C46 196 74 198 92 210 C112 194 146 194 166 210 C188 192 226 192 248 210 C270 194 306 194 326 210 C346 196 376 196 392 214 Z"
              fill="var(--fs-paper)"
              stroke="var(--fs-ink)"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            {/* Rolling Car Group */}
            <motion.g
              initial={reduce ? false : { x: -24 }}
              animate={reduce ? { x: 0 } : { x: [-6, 6, -6], y: [0, -2.5, 0] }}
              transition={reduce ? { duration: 0 } : { duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Ground Shadow */}
              <ellipse cx="210" cy="208" rx="132" ry="10" fill="var(--fs-ink)" opacity="0.22" />

              {/* Car Cabin / Roof */}
              <path
                d="M118 132 L148 82 C153 74 162 70 172 70 L256 70 C268 70 278 75 284 85 L310 132 Z"
                fill="var(--fs-brand)"
                stroke="var(--fs-ink)"
                strokeWidth="4"
                strokeLinejoin="round"
              />

              {/* Car Windows with Glossy Reflection */}
              <path
                d="M134 128 L156 84 L208 84 L208 128 Z"
                fill="var(--fs-cream)"
                stroke="var(--fs-ink)"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              <path
                d="M218 128 L218 84 L268 84 L292 128 Z"
                fill="var(--fs-cream)"
                stroke="var(--fs-ink)"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              {/* Window Shine Slash */}
              <line x1="162" y1="92" x2="148" y2="120" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <line x1="234" y1="92" x2="222" y2="120" stroke="white" strokeWidth="4" strokeLinecap="round" />

              {/* Car Main Body */}
              <path
                d="M68 158 C68 140 82 128 100 128 L322 128 C342 128 356 142 356 160 L356 184 C356 191 350 196 342 196 L82 196 C74 196 68 191 68 184 Z"
                fill="var(--fs-teal)"
                stroke="var(--fs-ink)"
                strokeWidth="4"
                strokeLinejoin="round"
              />

              {/* Retro Side Chrome Stripe */}
              <path d="M84 162 L338 162" stroke="var(--fs-mustard)" strokeWidth="6" strokeLinecap="round" />
              <path d="M84 162 L338 162" stroke="var(--fs-ink)" strokeWidth="1.5" strokeLinecap="round" />

              {/* Headlight & Taillight */}
              <rect x="338" y="140" width="18" height="14" rx="5" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="3" />
              <rect x="66" y="142" width="14" height="14" rx="4" fill="#FF4D4D" stroke="var(--fs-ink)" strokeWidth="3" />

              {/* Chrome Bumpers */}
              <rect x="58" y="176" width="24" height="12" rx="6" fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="3" />
              <rect x="340" y="176" width="26" height="12" rx="6" fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="3" />

              {/* Fluffy White & Aqua Soap Suds Clouds on Hood, Roof, Windshield & Trunk */}
              <g stroke="var(--fs-ink)" strokeWidth="3" strokeLinejoin="round">
                {/* Roof Suds Crown */}
                <path
                  d="M144 76 C142 58 164 52 176 64 C186 46 214 46 224 64 C236 50 262 54 264 76 Z"
                  fill="var(--fs-paper)"
                />
                {/* Rear Trunk Suds Puff */}
                <path
                  d="M84 132 C86 114 108 110 118 122 C128 110 150 114 150 132 Z"
                  fill="var(--fs-paper)"
                />
                {/* Front Hood Suds Puff */}
                <path
                  d="M274 132 C278 112 302 108 314 122 C324 110 344 114 344 132 Z"
                  fill="var(--fs-paper)"
                />
                {/* Door Panel Suds Drips */}
                <path
                  d="M172 134 C176 122 194 122 200 132 C208 120 228 122 232 134 C232 143 222 146 215 140 C206 148 192 148 185 140 C178 145 170 142 172 134 Z"
                  fill={extraSuds ? "var(--fs-mustard)" : "var(--fs-paper)"}
                />
                {extraSuds && (
                  <>
                    <path
                      d="M110 166 C114 150 138 148 148 160 C158 148 182 150 184 166 Z"
                      fill="var(--fs-paper)"
                    />
                    <path
                      d="M238 166 C242 150 266 148 276 160 C286 148 308 152 310 166 Z"
                      fill="var(--fs-teal)"
                    />
                  </>
                )}
              </g>

              {/* Left Wheel with Tire Shine */}
              <g transform="translate(130, 194)">
                <circle r="26" fill="var(--fs-ink)" />
                <circle r="21" fill="none" stroke="var(--fs-teal)" strokeWidth="2" strokeDasharray="6 5" />
                <circle r="13" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="3" />
                <circle r="5" fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="2.5" />
              </g>

              {/* Right Wheel with Tire Shine */}
              <g transform="translate(294, 194)">
                <circle r="26" fill="var(--fs-ink)" />
                <circle r="21" fill="none" stroke="var(--fs-teal)" strokeWidth="2" strokeDasharray="6 5" />
                <circle r="13" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="3" />
                <circle r="5" fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="2.5" />
              </g>
            </motion.g>

            {/* Continuously Rising Soap Bubbles Inside the Wash Bay */}
            {BAY_RISING_BUBBLES.map((b, i) => (
              <motion.g
                key={i}
                initial={reduce ? false : { y: 0, x: 0, opacity: 0.95 }}
                animate={
                  reduce
                    ? undefined
                    : {
                        y: [0, -115],
                        x: [0, b.dx, -b.dx * 0.5, 0],
                        opacity: [0, 1, 1, 0],
                        scale: [0.6, 1.1, 1.25],
                      }
                }
                transition={
                  reduce
                    ? undefined
                    : {
                        duration: extraSuds ? 2.1 : 3.4,
                        repeat: Infinity,
                        delay: b.delay,
                        ease: "easeOut",
                      }
                }
              >
                <circle cx={b.cx} cy={b.cy} r={b.r} fill={b.fill} stroke="var(--fs-ink)" strokeWidth="2.8" />
                <circle cx={b.cx - b.r * 0.3} cy={b.cy - b.r * 0.3} r={b.r * 0.25} fill="white" />
              </motion.g>
            ))}

            {/* Floating Suds Bubbles & 4-Point Sparkles in Foreground */}
            <circle cx="96" cy="70" r="10" fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="3" />
            <circle cx="93" cy="67" r="3" fill="var(--fs-teal)" />
            <circle cx="324" cy="64" r="12" fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="3" />
            <circle cx="320" cy="60" r="3.5" fill="var(--fs-teal)" />
            <circle cx="348" cy="86" r="7" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="2.5" />
            <circle cx="76" cy="92" r="6" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="2.5" />
            <path
              d="M210 34 L213 44 L223 47 L213 50 L210 60 L207 50 L197 47 L207 44 Z"
              fill="var(--fs-mustard)"
              stroke="var(--fs-ink)"
              strokeWidth="2.5"
            />
            <path
              d="M352 132 L354 139 L361 141 L354 143 L352 150 L350 143 L343 141 L350 139 Z"
              fill="var(--fs-mustard)"
              stroke="var(--fs-ink)"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Bottom Mini Feature Strip inside Hero Card */}
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <button
            type="button"
            onClick={handleToggleSuds}
            className="cursor-pointer rounded-xl border-2 border-ink bg-cream px-2 py-1.5 font-display text-[0.68rem] uppercase tracking-wide text-ink transition hover:bg-teal"
          >
            🫧 Suds Bath
          </button>
          <button
            type="button"
            onClick={handleToggleSuds}
            className="cursor-pointer rounded-xl border-2 border-ink bg-mustard px-2 py-1.5 font-display text-[0.68rem] uppercase tracking-wide text-ink transition hover:bg-teal"
          >
            ✨ Wax &amp; Shine
          </button>
          <button
            type="button"
            onClick={handleToggleSuds}
            className="cursor-pointer rounded-xl border-2 border-ink bg-teal px-2 py-1.5 font-display text-[0.68rem] uppercase tracking-wide text-ink transition hover:bg-mustard"
          >
            🧼 Full Detail
          </button>
        </div>
      </motion.div>

      {!compact && (
        <>
          {/* Spinning Retro Sticker Badge */}
          <SpinBadge
            text={ringText}
            className="absolute -bottom-8 -left-3 z-20 w-28 -rotate-6 sm:-bottom-10 sm:-left-8 sm:w-34"
          >
            <span className="px-1 text-center font-display text-xs uppercase leading-tight sm:text-sm">{center}</span>
          </SpinBadge>

          {/* Floating Bobbing Tokens */}
          <Bob className="-left-3 -top-5 z-20 sm:-left-6" delay={0}>
            <span className={cn(token, "size-14 bg-mustard text-ink sm:size-16")}>
              <Droplets className="size-7 sm:size-8" strokeWidth={2} />
            </span>
          </Bob>
          <Bob className="-right-2 -top-4 z-20 sm:-right-5" delay={0.25}>
            <span className={cn(token, "size-13 bg-teal text-ink sm:size-15")}>
              <SprayCan className="size-6 sm:size-7" strokeWidth={2} />
            </span>
          </Bob>
        </>
      )}
    </div>
  );
}
