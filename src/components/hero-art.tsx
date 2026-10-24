"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Droplets, Sparkles, SprayCan } from "lucide-react";
import type { ReactNode } from "react";

import { SpinBadge } from "@/components/spin-badge";
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
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <circle
        cx="24"
        cy="24"
        r="20"
        fill="color-mix(in oklab, var(--fs-teal) 26%, white)"
        stroke="var(--fs-ink)"
        strokeWidth="3"
      />
      <path
        d="M14 17C16.5 13 21 11 26 11.5"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="30" r="3" fill="var(--fs-mustard)" />
    </svg>
  );
}

/** Ambient floating soap bubbles & shine sparkles for the Hero backdrop. */
export function FloatingBubblesAndSparkles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float-slow absolute left-[4%] top-[12%] hidden sm:block">
        <SoapBubble size={42} />
      </div>
      <div className="animate-float-slow absolute left-[48%] top-[8%] opacity-85" style={{ animationDelay: "1.2s" }}>
        <SoapBubble size={30} />
      </div>
      <div className="animate-float-slow absolute bottom-[14%] left-[42%] hidden lg:block" style={{ animationDelay: "2.1s" }}>
        <SoapBubble size={36} />
      </div>
      <div className="animate-twinkle absolute right-[8%] top-[10%]">
        <ShineStar className="size-7 sm:size-9" />
      </div>
      <div className="animate-twinkle absolute left-[38%] bottom-[20%] hidden sm:block" style={{ animationDelay: "0.9s" }}>
        <ShineStar className="size-6" />
      </div>
    </div>
  );
}

const token = "grid place-items-center rounded-full border-[3px] border-ink shadow-[4px_4px_0_0_var(--fs-ink)]";

/**
 * Illustrated car rolling through suds, wash brushes, water droplets & shine sparkles.
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
        {/* Top Retro Wash Arch Header */}
        <div className="flex items-center justify-between rounded-2xl border-[3px] border-ink bg-brand px-3.5 py-2 text-paper shadow-[0_4px_0_0_var(--fs-ink)]">
          <span className="flex items-center gap-1.5 font-display text-xs uppercase tracking-wider sm:text-sm">
            <Sparkles className="size-4 fill-mustard text-mustard" aria-hidden="true" />
            Suds &amp; Shine Bay
          </span>
          <span className="rounded-full border-2 border-ink bg-mustard px-2.5 py-0.5 font-display text-[0.68rem] uppercase tracking-wider text-ink">
            100% Hand Wash
          </span>
        </div>

        {/* Illustrated Car Rolling Through Suds & Brushes */}
        <div className="relative mt-3 overflow-hidden rounded-2xl border-[3px] border-ink bg-gradient-to-b from-cream via-cream to-teal/25 pt-3 pb-1.5">
          <svg
            viewBox="0 0 420 250"
            className="h-auto w-full"
            role="img"
            aria-label="Illustrated glossy car rolling through foamy car wash brushes and sparkles"
          >
            {/* Wash Bay Arch Pillars */}
            <rect x="24" y="10" width="18" height="210" rx="6" fill="var(--fs-ink)" />
            <rect x="378" y="10" width="18" height="210" rx="6" fill="var(--fs-ink)" />
            <rect x="18" y="8" width="384" height="20" rx="8" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="3.5" />

            {/* Water Spray Streams from Top Arch */}
            <g stroke="var(--fs-teal)" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 6">
              <line x1="115" y1="28" x2="130" y2="95" />
              <line x1="165" y1="28" x2="170" y2="88" />
              <line x1="210" y1="28" x2="210" y2="85" />
              <line x1="255" y1="28" x2="250" y2="88" />
              <line x1="305" y1="28" x2="290" y2="95" />
            </g>

            {/* Left Spinning Suds Brush */}
            <g transform="translate(56, 112)">
              <circle
                r="42"
                fill="var(--fs-teal)"
                stroke="var(--fs-ink)"
                strokeWidth="3.5"
                strokeDasharray="12 6"
              />
              <circle r="26" fill="var(--fs-brand)" stroke="var(--fs-ink)" strokeWidth="3" />
              <circle r="10" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="3" />
            </g>

            {/* Right Spinning Suds Brush */}
            <g transform="translate(364, 112)">
              <circle
                r="42"
                fill="var(--fs-teal)"
                stroke="var(--fs-ink)"
                strokeWidth="3.5"
                strokeDasharray="12 6"
              />
              <circle r="26" fill="var(--fs-brand)" stroke="var(--fs-ink)" strokeWidth="3" />
              <circle r="10" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="3" />
            </g>

            {/* Rolling Car Group */}
            <motion.g
              initial={reduce ? false : { x: -24 }}
              animate={reduce ? { x: 0 } : { x: [-6, 6, -6], y: [0, -2, 0] }}
              transition={reduce ? { duration: 0 } : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
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

              {/* Fluffy White Soap Suds Clouds on Hood, Roof & Trunk */}
              <g fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="3">
                <path d="M150 74 C150 62 166 58 174 66 C182 54 204 56 210 68 C220 58 240 62 242 74 Z" />
                <path d="M92 130 C94 118 110 116 118 124 C126 116 142 120 142 130 Z" />
                <path d="M282 130 C286 116 304 114 312 124 C320 116 336 120 336 130 Z" />
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

            {/* Floating Suds Bubbles & 4-Point Sparkles in Foreground */}
            <circle cx="96" cy="70" r="10" fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="3" />
            <circle cx="324" cy="64" r="12" fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="3" />
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
          <div className="rounded-xl border-2 border-ink bg-cream px-2 py-1.5 font-display text-[0.68rem] uppercase tracking-wide text-ink">
            Suds Bath
          </div>
          <div className="rounded-xl border-2 border-ink bg-mustard px-2 py-1.5 font-display text-[0.68rem] uppercase tracking-wide text-ink">
            Wax &amp; Shine
          </div>
          <div className="rounded-xl border-2 border-ink bg-teal px-2 py-1.5 font-display text-[0.68rem] uppercase tracking-wide text-ink">
            Full Detail
          </div>
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
