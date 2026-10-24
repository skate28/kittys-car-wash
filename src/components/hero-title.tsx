"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Diner-sign lettering: block letters pop in one by one, then the script swoops underneath. */
export function HeroTitle({ main, script }: { main: string; script: string }) {
  const reduce = useReducedMotion();
  const letters = Array.from(main);

  return (
    <h1 className="relative">
      <span className="sr-only">{[main, script].filter(Boolean).join(" ")}</span>
      <span aria-hidden="true" className="block">
        <span className="flex whitespace-nowrap font-display text-[clamp(3.25rem,18vw,8.5rem)] uppercase leading-[0.85] tracking-tight text-brand sign-extrude">
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              className="inline-block"
              initial={reduce ? false : { opacity: 0, y: 50, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 16, delay: 0.05 + index * 0.06 }}
            >
              {letter === " " ? "\u00a0" : letter}
            </motion.span>
          ))}
        </span>
        {script && (
          <motion.span
            className="relative -mt-1 ml-1 block w-fit -rotate-6 font-script text-[clamp(2.6rem,11vw,5.25rem)] leading-[1.05] text-teal drop-shadow-[4px_4px_0_var(--fs-ink)] sm:ml-8"
            initial={reduce ? false : { opacity: 0, x: -40, rotate: -14 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 160, damping: 13, delay: 0.15 + letters.length * 0.06 }}
          >
            {script}
            <motion.svg
              viewBox="0 0 300 20"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-3 w-full"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.path
                d="M4 14 C 80 2, 200 2, 296 10"
                fill="none"
                stroke="var(--fs-mustard)"
                strokeWidth="7"
                strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.5 + letters.length * 0.06 }}
              />
            </motion.svg>
          </motion.span>
        )}
      </span>
    </h1>
  );
}
