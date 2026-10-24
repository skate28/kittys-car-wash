import { eyebrow, sectionTitle } from "@/components/styles";
import { cn } from "@/lib/cn";

export function SectionHeading({
  id,
  kicker,
  title,
  note,
  tone = "ink",
  align = "left",
}: {
  id: string;
  kicker?: string;
  title: string;
  note?: string;
  tone?: "ink" | "cream";
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "text-center")}>
      {kicker && (
        <p className={cn(eyebrow, "-rotate-2", tone === "ink" ? "text-teal" : "text-mustard")}>{kicker}</p>
      )}
      <h2
        id={id}
        className={cn(sectionTitle, "mt-2", tone === "ink" ? "text-brand sign-extrude-sm" : "text-cream sign-extrude-sm")}
      >
        {title}
      </h2>
      {note && <p className={cn("mt-4 max-w-2xl text-base", tone === "ink" ? "text-ink/70" : "text-cream/80", align === "center" && "mx-auto")}>{note}</p>}
    </div>
  );
}
