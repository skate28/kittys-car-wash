"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { focusRing } from "@/components/styles";
import { cn } from "@/lib/cn";

export type BubbleTint = "aqua" | "mustard" | "white" | "cobalt";

type AmbientBubble = {
  id: number;
  left: number; // percentage 4..96
  size: number; // px 28..64
  duration: number; // sec 9..17
  delay: number; // sec
  tint: BubbleTint;
  wobble: number; // px
};

type BurstBubble = {
  id: number;
  x: number; // vw %
  y: number; // vh %
  size: number;
  tint: BubbleTint;
  dx: number;
  dy: number;
};

type PopEffect = {
  id: number;
  x: number; // clientX px
  y: number; // clientY px
  tint: BubbleTint;
};

type TrailBubble = {
  id: number;
  x: number;
  y: number;
  size: number;
  tint: BubbleTint;
};

const AMBIENT_BUBBLES: AmbientBubble[] = [
  { id: 1, left: 5, size: 46, duration: 13, delay: 0, tint: "aqua", wobble: 18 },
  { id: 2, left: 14, size: 32, duration: 10.5, delay: 2.2, tint: "white", wobble: -14 },
  { id: 3, left: 24, size: 54, duration: 15, delay: 1.1, tint: "mustard", wobble: 22 },
  { id: 4, left: 35, size: 36, duration: 11.5, delay: 3.6, tint: "aqua", wobble: -16 },
  { id: 5, left: 48, size: 42, duration: 14, delay: 0.7, tint: "white", wobble: 15 },
  { id: 6, left: 59, size: 30, duration: 9.8, delay: 4.1, tint: "cobalt", wobble: -12 },
  { id: 7, left: 68, size: 50, duration: 13.5, delay: 1.8, tint: "aqua", wobble: 20 },
  { id: 8, left: 78, size: 38, duration: 12, delay: 2.9, tint: "mustard", wobble: -18 },
  { id: 9, left: 88, size: 48, duration: 14.5, delay: 0.4, tint: "white", wobble: 16 },
  { id: 10, left: 94, size: 34, duration: 11, delay: 3.2, tint: "aqua", wobble: -14 },
];

function fillForTint(tint: BubbleTint): string {
  switch (tint) {
    case "mustard":
      return "color-mix(in oklab, var(--fs-mustard) 42%, white)";
    case "cobalt":
      return "color-mix(in oklab, var(--fs-brand) 32%, white)";
    case "white":
      return "color-mix(in oklab, var(--fs-paper) 92%, var(--fs-teal))";
    case "aqua":
    default:
      return "color-mix(in oklab, var(--fs-teal) 36%, white)";
  }
}

/**
 * Illustrated cartoon soap bubble SVG with bold ink outline, iridescent rim, and glossy specular shine.
 */
export function CartoonBubbleSvg({
  size = 44,
  tint = "aqua",
  className,
}: {
  size?: number;
  tint?: BubbleTint;
  className?: string;
}) {
  const fill = fillForTint(tint);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={cn("select-none overflow-visible", className)}
    >
      {/* Drop shadow offset */}
      <circle cx="34" cy="35" r="25" fill="var(--fs-ink)" opacity="0.18" />
      {/* Main bubble body */}
      <circle
        cx="32"
        cy="32"
        r="25"
        fill={fill}
        fillOpacity="0.88"
        stroke="var(--fs-ink)"
        strokeWidth="3.5"
      />
      {/* Inner iridescent crescent */}
      <path
        d="M17 41 C22 50 36 53 46 45"
        stroke={tint === "mustard" ? "var(--fs-teal)" : "var(--fs-mustard)"}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Top-left glossy white highlight arc */}
      <path
        d="M17 24 C19.5 16.5 26.5 13 34 13.5"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Small secondary shine dot */}
      <circle cx="43" cy="21" r="3.2" fill="white" />
      <circle cx="45" cy="39" r="3.5" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="2" />
    </svg>
  );
}

/**
 * Cartoon foam-suds cap to perch on top of cards, photo frames, or badges.
 */
export function SudsCap({
  className,
  variant = "card",
}: {
  className?: string;
  variant?: "card" | "photo" | "pill";
}) {
  if (variant === "pill") {
    return (
      <svg
        viewBox="0 0 120 28"
        fill="none"
        aria-hidden="true"
        className={cn("pointer-events-none select-none overflow-visible", className)}
      >
        <path
          d="M8 24 C8 14 20 11 27 17 C33 7 49 7 56 16 C64 6 82 7 88 17 C95 11 110 13 112 24 Z"
          fill="var(--fs-paper)"
          stroke="var(--fs-ink)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="8" r="5" fill="var(--fs-teal)" stroke="var(--fs-ink)" strokeWidth="2.5" />
        <circle cx="96" cy="7" r="4" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="2.2" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 360 54"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none select-none overflow-visible", className)}
    >
      {/* Back aqua foam shadow */}
      <path
        d="M14 44 C12 25 36 18 52 28 C66 10 98 8 116 25 C134 6 176 4 196 24 C214 10 248 11 264 27 C282 12 316 14 328 30 C338 22 352 28 350 44 Z"
        fill="var(--fs-teal)"
        stroke="var(--fs-ink)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Front crisp white soap suds puffs */}
      <path
        d="M8 48 C6 30 28 22 46 32 C62 14 96 12 114 29 C134 9 178 8 198 28 C218 13 254 14 270 31 C288 16 322 19 334 34 C344 26 356 32 354 48 Z"
        fill="var(--fs-paper)"
        stroke="var(--fs-ink)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Gloss highlights */}
      <path d="M70 24 C78 18 92 18 100 24" stroke="var(--fs-cream)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M144 19 C156 13 174 13 184 20" stroke="var(--fs-cream)" strokeWidth="4" strokeLinecap="round" />
      <path d="M226 22 C236 17 250 17 258 23" stroke="var(--fs-cream)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Perched soap bubbles & shine star */}
      <circle cx="42" cy="14" r="8" fill="var(--fs-paper)" stroke="var(--fs-ink)" strokeWidth="3" />
      <circle cx="40" cy="12" r="2.2" fill="var(--fs-teal)" />
      <circle cx="122" cy="10" r="6" fill="var(--fs-mustard)" stroke="var(--fs-ink)" strokeWidth="2.5" />
      <circle cx="282" cy="11" r="9" fill="var(--fs-teal)" stroke="var(--fs-ink)" strokeWidth="3" />
      <path d="M278 8 C280 6 283 6 285 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M210 4 L212.5 11.5 L220 14 L212.5 16.5 L210 24 L207.5 16.5 L200 14 L207.5 11.5 Z"
        fill="var(--fs-mustard)"
        stroke="var(--fs-ink)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Helper to trigger a full-screen Foam Cannon Suds Blast from any button on the site.
 */
export function triggerFoamBlast() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("kittys:foam-blast"));
  }
}

/**
 * Interactive Suds & Bubbles Layer:
 * - Clickable rising cartoon soap bubbles that POP into droplets + "POP!" comic tags
 * - Subtle cursor/tap soap-bubble trail
 * - Floating "🫧 Blast Suds!" Foam Cannon button that erupts 36+ foamy bubbles & a bottom foam wave
 */
export function SudsBubbleOverlay() {
  const reduce = useReducedMotion();
  const [poppedCount, setPoppedCount] = useState(0);
  const [hiddenAmbient, setHiddenAmbient] = useState<Record<number, boolean>>({});
  const [pops, setPops] = useState<PopEffect[]>([]);
  const [burstBubbles, setBurstBubbles] = useState<BurstBubble[]>([]);
  const [trailBubbles, setTrailBubbles] = useState<TrailBubble[]>([]);
  const [foamWaveActive, setFoamWaveActive] = useState(false);
  const nextId = useRef(100);
  const lastTrailTime = useRef(0);

  const spawnPop = useCallback((clientX: number, clientY: number, tint: BubbleTint) => {
    const id = nextId.current++;
    setPoppedCount((c) => c + 1);
    setPops((prev) => [...prev.slice(-10), { id, x: clientX, y: clientY, tint }]);
    window.setTimeout(() => {
      setPops((prev) => prev.filter((p) => p.id !== id));
    }, 650);
  }, []);

  const popAmbientBubble = useCallback(
    (bubble: AmbientBubble, e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      spawnPop(e.clientX, e.clientY, bubble.tint);
      setHiddenAmbient((prev) => ({ ...prev, [bubble.id]: true }));
      window.setTimeout(() => {
        setHiddenAmbient((prev) => {
          const copy = { ...prev };
          delete copy[bubble.id];
          return copy;
        });
      }, 2200);
    },
    [spawnPop],
  );

  const popBurstBubble = useCallback(
    (bubble: BurstBubble, e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      spawnPop(e.clientX, e.clientY, bubble.tint);
      setBurstBubbles((prev) => prev.filter((b) => b.id !== bubble.id));
    },
    [spawnPop],
  );

  const launchFoamCannon = useCallback(() => {
    if (reduce) return;
    const tints: BubbleTint[] = ["aqua", "mustard", "white", "cobalt"];
    const created: BurstBubble[] = Array.from({ length: 28 }, (_, i) => {
      const id = nextId.current++;
      return {
        id,
        x: 6 + ((i * 3.3) % 88),
        y: 88 + (i % 4) * 3,
        size: 28 + ((i * 11) % 38),
        tint: tints[i % tints.length],
        dx: (i % 2 === 0 ? 1 : -1) * (15 + ((i * 7) % 45)),
        dy: -(320 + ((i * 29) % 420)),
      };
    });

    setBurstBubbles((prev) => [...prev.slice(-20), ...created]);
    setFoamWaveActive(true);

    window.setTimeout(() => {
      setFoamWaveActive(false);
    }, 2800);

    const createdIds = new Set(created.map((b) => b.id));
    window.setTimeout(() => {
      setBurstBubbles((prev) => prev.filter((b) => !createdIds.has(b.id)));
    }, 3400);
  }, [reduce]);

  useEffect(() => {
    const handler = () => launchFoamCannon();
    window.addEventListener("kittys:foam-blast", handler);
    return () => window.removeEventListener("kittys:foam-blast", handler);
  }, [launchFoamCannon]);

  useEffect(() => {
    if (reduce) return;
    const onPointerMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - lastTrailTime.current < 150) return;
      lastTrailTime.current = now;
      const id = nextId.current++;
      const tints: BubbleTint[] = ["aqua", "white", "mustard"];
      const tint = tints[id % tints.length];
      const size = 16 + (id % 14);
      setTrailBubbles((prev) => [
        ...prev.slice(-8),
        { id, x: e.clientX, y: e.clientY, size, tint },
      ]);
      window.setTimeout(() => {
        setTrailBubbles((prev) => prev.filter((t) => t.id !== id));
      }, 900);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [reduce]);

  if (reduce) return null;

  return (
    <>
      {/* Fixed non-blocking layer for ambient rising bubbles, burst bubbles, cursor trail & pop effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      >
        {/* Ambient rising bubbles (clickable to pop!) */}
        {AMBIENT_BUBBLES.map((bubble) => {
          if (hiddenAmbient[bubble.id]) return null;
          return (
            <motion.button
              key={bubble.id}
              type="button"
              tabIndex={-1}
              onClick={(e) => popAmbientBubble(bubble, e)}
              title="Pop bubble!"
              style={{ left: `${bubble.left}%` }}
              className="pointer-events-auto absolute -bottom-20 cursor-pointer rounded-full p-1 transition-transform hover:scale-125 active:scale-90"
              animate={{
                y: ["0vh", "-118vh"],
                x: [0, bubble.wobble, -bubble.wobble * 0.7, bubble.wobble * 0.4, 0],
                rotate: [0, 8, -8, 4, 0],
              }}
              transition={{
                y: {
                  duration: bubble.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: bubble.delay,
                },
                x: {
                  duration: bubble.duration * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: bubble.delay,
                },
                rotate: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <CartoonBubbleSvg size={bubble.size} tint={bubble.tint} />
            </motion.button>
          );
        })}

        {/* Foam Cannon Burst Bubbles */}
        <AnimatePresence>
          {burstBubbles.map((b) => (
            <motion.button
              key={b.id}
              type="button"
              tabIndex={-1}
              onClick={(e) => popBurstBubble(b, e)}
              style={{ left: `${b.x}%`, top: `${b.y}%` }}
              initial={{ opacity: 0, scale: 0.2, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.3, 1.15, 1, 1.25],
                x: b.dx,
                y: b.dy,
              }}
              exit={{ scale: 1.6, opacity: 0 }}
              transition={{ duration: 2.9, ease: "easeOut" }}
              className="pointer-events-auto absolute cursor-pointer rounded-full"
            >
              <CartoonBubbleSvg size={b.size} tint={b.tint} />
            </motion.button>
          ))}
        </AnimatePresence>

        {/* Cursor Trail Mini Bubbles */}
        <AnimatePresence>
          {trailBubbles.map((t) => (
            <motion.div
              key={t.id}
              style={{ left: t.x - t.size / 2, top: t.y - t.size / 2 }}
              initial={{ opacity: 0.85, scale: 0.4, y: 0 }}
              animate={{ opacity: 0, scale: 1.15, y: -42 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="pointer-events-none fixed"
            >
              <CartoonBubbleSvg size={t.size} tint={t.tint} />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Popped Bubble Comic Splash + Droplets */}
        <AnimatePresence>
          {pops.map((pop) => (
            <motion.div
              key={pop.id}
              style={{ left: pop.x, top: pop.y }}
              initial={{ opacity: 1, scale: 0.5 }}
              animate={{ opacity: 0, scale: 1.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative flex items-center justify-center">
                {/* Radiating droplet ring */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <span
                    key={deg}
                    style={{ transform: `rotate(${deg}deg) translateY(-26px)` }}
                    className="absolute h-3 w-2 rounded-full border-2 border-ink bg-teal"
                  />
                ))}
                <span className="-rotate-6 rounded-full border-2 border-ink bg-mustard px-2.5 py-0.5 font-display text-xs uppercase tracking-wider text-ink shadow-[2px_2px_0_0_var(--fs-ink)]">
                  POP! ✨
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Bottom Billowing Foam Wave when Foam Cannon fires */}
        <AnimatePresence>
          {foamWaveActive && (
            <motion.div
              initial={{ y: 140, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 150, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="pointer-events-none absolute inset-x-0 bottom-0"
            >
              <svg
                viewBox="0 0 1440 150"
                 preserveAspectRatio="none"
                className="h-28 w-full sm:h-36"
              >
                <path
                  d="M0 150 L0 85 C45 35 120 35 170 78 C230 22 330 20 395 75 C460 18 570 15 640 72 C710 20 820 18 890 76 C960 22 1070 22 1140 75 C1210 25 1315 25 1380 78 C1410 50 1430 60 1440 80 L1440 150 Z"
                  fill="var(--fs-teal)"
                  stroke="var(--fs-ink)"
                  strokeWidth="5"
                />
                <path
                  d="M0 150 L0 100 C55 48 140 48 195 92 C260 36 360 32 430 88 C500 30 610 28 680 86 C755 34 860 32 930 88 C1005 34 1110 36 1180 90 C1250 38 1350 40 1410 92 L1440 88 L1440 150 Z"
                  fill="var(--fs-paper)"
                  stroke="var(--fs-ink)"
                  strokeWidth="5"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Interactive "Blast Suds!" Foam Cannon Button */}
      <div
        className="fixed bottom-24 right-4 z-40 md:bottom-6 md:right-6"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        <motion.button
          type="button"
          onClick={launchFoamCannon}
          whileHover={{ scale: 1.06, rotate: -2 }}
          whileTap={{ scale: 0.94 }}
          className={cn(
            "group relative flex items-center gap-2.5 rounded-full border-[3px] border-ink bg-mustard px-4 py-2.5 font-display text-xs uppercase tracking-wider text-ink shadow-[0_5px_0_0_var(--fs-ink)] transition hover:bg-teal sm:px-5 sm:py-3 sm:text-sm",
            focusRing,
          )}
          aria-label="Blast extra soap suds and bubbles across the screen"
        >
          <span className="relative flex size-7 items-center justify-center rounded-full border-2 border-ink bg-paper">
            <CartoonBubbleSvg size={24} tint="aqua" />
          </span>
          <span>Blast Suds!</span>
          <Sparkles className="size-4 fill-brand text-ink transition-transform group-hover:rotate-45" aria-hidden="true" />
          {poppedCount > 0 && (
            <span className="ml-0.5 rounded-full border-2 border-ink bg-paper px-2 py-0.5 font-sans text-[0.7rem] font-extrabold text-brand">
              {poppedCount} popped
            </span>
          )}
        </motion.button>
      </div>
    </>
  );
}
