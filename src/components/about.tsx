import { Check, Droplets, Phone, ShieldCheck, Sparkles, Truck } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { container, focusRing } from "@/components/styles";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { hasAbout } from "@/lib/nav";
import { photoDimensions, storyPhoto } from "@/lib/photos";

/** Retro car-wash inspection & shine ticket shown when there is no storefront photo yet. */
function WashBayTicket() {
  const tel = telHref(site.phone);
  const streetNum = site.address.street.trim().split(/\s+/)[0] ?? "";
  const steps = [
    { label: "Foam Suds Hand Bath", value: "✓" },
    { label: "Wheels, Rims & Tire Shine", value: "✓" },
    { label: "Interior Vacuum & Wipe-Down", value: "✓" },
    { label: "Spot-Free Hand Towel Dry", value: "✓" },
    { label: "Fresh Cabin Scent", value: "✓" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[22rem] rotate-1 drop-shadow-[8px_8px_0_var(--fs-ink)] sm:max-w-sm sm:rotate-2">
      <div className="scallop-bottom rounded-t-2xl border-x-[3px] border-t-[3px] border-ink bg-paper pb-10">
        <div className="flex items-center justify-between rounded-t-xl border-b-[3px] border-ink bg-brand px-5 py-3 text-paper">
          <span className="flex items-center gap-1.5 font-display text-sm uppercase tracking-[0.16em]">
            <Sparkles className="size-4 fill-mustard text-mustard" aria-hidden="true" />
            Shine Ticket
          </span>
          {/^\d+$/.test(streetNum) && (
            <span className="rounded-full bg-mustard px-2.5 py-0.5 font-display text-xs tracking-wider text-ink">
              Bay #{streetNum}
            </span>
          )}
        </div>
        <div className="px-6 pt-5">
          <p className="font-script text-3xl text-brand">{site.name}</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-wider text-ink/60">
            {site.address.street} · {site.address.city}
          </p>
          <ul className="mt-4 space-y-3">
            {steps.map((line) => (
              <li
                key={line.label}
                className="flex items-baseline gap-2 border-b-2 border-dashed border-ink/20 pb-2"
              >
                <span className="font-display text-base uppercase text-ink">{line.label}</span>
                <span aria-hidden="true" className="flex-1" />
                <span className="inline-flex size-6 items-center justify-center rounded-full border-2 border-ink bg-mustard font-display text-xs text-ink">
                  <Check className="size-3.5 stroke-[3]" aria-hidden="true" />
                </span>
              </li>
            ))}
          </ul>
          {tel && (
            <a
              href={tel}
              className={cn(
                "mt-5 inline-flex items-center gap-2 font-display text-lg text-ink hover:text-brand",
                focusRing,
              )}
            >
              <Phone className="size-4 text-brand" aria-hidden="true" />
              {phoneLabel(site.phone)}
            </a>
          )}
          <p className="mt-5 text-center font-script text-2xl text-brand">Pull up &amp; shine!</p>
        </div>
      </div>
    </div>
  );
}

/** "Why Pull Up / About" block. Hidden when there are no paragraphs. */
export function About() {
  if (!hasAbout()) return null;
  const paragraphs = site.about.paragraphs.map((p) => p.trim()).filter(Boolean);
  const photo = storyPhoto(site.photos);

  const highlights = [
    { icon: Droplets, label: "100% Hand Wash Care" },
    { icon: Sparkles, label: "Deep Interior Detailing" },
    { icon: Truck, label: "Cars, SUVs & Trucks" },
    { icon: ShieldCheck, label: "No Harsh Track Brushes" },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden border-b-[3px] border-ink bg-paper py-20 sm:py-28"
    >
      <div className={cn(container, "grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]")}>
        <Reveal>
          <SectionHeading
            id="about-title"
            kicker="Why Pull Up"
            title={site.about.heading.trim() || "Hand Wash Pride on Lem Turner"}
          />
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/85">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl border-[3px] border-ink bg-cream px-4 py-3 font-display text-sm uppercase tracking-wide text-ink shadow-[4px_4px_0_0_var(--fs-ink)]"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl border-2 border-ink bg-mustard text-ink">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          {photo ? (
            <figure className="mx-auto max-w-md -rotate-2 rounded-3xl border-[3px] border-ink bg-cream p-3 shadow-[8px_8px_0_0_var(--fs-ink)]">
              <Image
                src={photo.src}
                alt={photo.alt}
                {...photoDimensions(photo)}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </figure>
          ) : (
            <WashBayTicket />
          )}
        </Reveal>
      </div>
    </section>
  );
}
