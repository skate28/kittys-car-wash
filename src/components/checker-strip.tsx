import { cn } from "@/lib/cn";

/** Diner floor-tile band. Decorative only. */
export function CheckerStrip({ className, size = 12 }: { className?: string; size?: number }) {
  return (
    <div
      aria-hidden="true"
      className={cn("checker h-3 w-full", className)}
      style={{ ["--checker-size" as string]: `${size * 2}px` }}
    />
  );
}
