import { cn } from "@/lib/cn";

/** Splits the shop name for sign lettering: first word in block type, the rest in script. */
export function nameLines(name: string): { main: string; script: string } {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length < 2) return { main: words.join(" "), script: "" };
  return { main: words[0], script: words.slice(1).join(" ") };
}

export function Wordmark({
  name,
  tone = "ink",
  className,
}: {
  name: string;
  tone?: "ink" | "cream";
  className?: string;
}) {
  const { main, script } = nameLines(name);
  return (
    <span className={cn("inline-flex flex-wrap items-baseline gap-x-1.5 leading-none", className)}>
      <span className={cn("font-display text-2xl uppercase tracking-tight", tone === "ink" ? "text-brand" : "text-mustard")}>
        {main}
      </span>
      {script && (
        <span className={cn("-rotate-3 font-script text-2xl", tone === "ink" ? "text-teal" : "text-cream")}>{script}</span>
      )}
    </span>
  );
}
