export const focusRing =
  "focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal";

/** Rounded diner buttons with a chunky offset shadow. */
export const buttonBase = `inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border-[3px] border-ink px-6 py-3 text-center font-display text-base uppercase leading-none tracking-wide transition duration-150 shadow-[0_5px_0_0_var(--fs-ink)] hover:-translate-y-0.5 hover:shadow-[0_7px_0_0_var(--fs-ink)] active:translate-y-1 active:shadow-[0_1px_0_0_var(--fs-ink)] ${focusRing}`;

export const buttonRed = `${buttonBase} bg-brand text-cream`;

export const buttonMustard = `${buttonBase} bg-mustard text-ink`;

export const buttonCream = `${buttonBase} bg-paper text-ink`;

export const buttonTeal = `${buttonBase} bg-teal text-cream`;

export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export const eyebrow = "font-script text-2xl leading-none sm:text-3xl";

export const sectionTitle = "font-display text-[clamp(2.6rem,8vw,4.75rem)] uppercase leading-[0.92] tracking-tight";

/** Cream card with an ink border and a solid drop. */
export const card = "rounded-3xl border-[3px] border-ink bg-paper p-6 shadow-[8px_8px_0_0_var(--fs-ink)] sm:p-8";
