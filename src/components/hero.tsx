import { MapPin, Phone, Sparkles, Star } from "lucide-react";
import Image from "next/image";

import { CheckerStrip } from "@/components/checker-strip";
import { FloatingBubblesAndSparkles, HeroArt } from "@/components/hero-art";
import { HeroTitle } from "@/components/hero-title";
import { ShopStatusPill } from "@/components/shop-status";
import { SpinBadge } from "@/components/spin-badge";
import { buttonCream, buttonMustard, buttonRed, container, focusRing } from "@/components/styles";
import { nameLines } from "@/components/wordmark";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { hoursConfirmed } from "@/lib/hours";
import { directionsHref } from "@/lib/maps";
import { heroPhoto, photoDimensions } from "@/lib/photos";
import { formatCount, reviewScores } from "@/lib/reviews";

export function Hero() {
  const { main, script } = nameLines(site.name);
  const tel = telHref(site.phone);
  const directions = directionsHref(site);
  const scores = reviewScores(site);
  const photo = heroPhoto(site.photos, site.heroImage);
  const kicker = site.heroKicker?.trim() ?? "";
  const tagline = site.tagline.trim();
  const showStatus = hoursConfirmed(site.hours);
  const clock = { hours: site.hours, closedNotice: site.closedNotice, phone: site.phone };
  const ringText = [
    ...(site.servesCuisine ?? []).slice(0, 3),
    site.address.neighborhood.trim(),
    site.address.city.trim(),
  ]
    .filter(Boolean)
    .join(" ✶ ");
  const center = site.opened.trim() ? `Est. ${site.opened.trim()}` : "Lem Turner";

  return (
    <section aria-label="Welcome" className="counter-grain relative overflow-hidden border-b-[3px] border-ink">
      <div aria-hidden="true" className="dots pointer-events-none absolute inset-0 opacity-55" />
      <FloatingBubblesAndSparkles />
      <div
        className={cn(
          container,
          "relative grid items-center gap-14 pb-20 pt-10 sm:pt-16 lg:grid-cols-[1.2fr_1fr] lg:gap-10 lg:pb-24",
        )}
      >
        <div className="relative z-10">
          {kicker && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-mustard px-4 py-1.5 font-display text-[0.68rem] uppercase tracking-[0.12em] text-ink shadow-[0_4px_0_0_var(--fs-ink)] sm:text-sm sm:tracking-[0.18em]">
              <Sparkles className="size-4 fill-brand stroke-ink" aria-hidden="true" />
              {kicker}
            </p>
          )}
          <HeroTitle main={main} script={script} />
          {tagline && (
            <p className="mt-10 max-w-xl text-xl font-semibold leading-snug text-ink sm:mt-12 sm:text-2xl">
              {tagline}
            </p>
          )}

          {(scores.length > 0 || showStatus) && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {scores.map((score) => (
                <a
                  key={score.source}
                  href={score.href ?? "#reviews"}
                  {...(score.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-paper px-4 py-2 text-sm font-bold shadow-[0_4px_0_0_var(--fs-ink)] transition hover:-translate-y-0.5",
                    focusRing,
                  )}
                >
                  <Star className="size-4 fill-mustard stroke-ink" strokeWidth={1.5} aria-hidden="true" />
                  {score.value.toFixed(1)} on {score.source} · {formatCount(score.count)} reviews
                </a>
              ))}
              {showStatus && <ShopStatusPill input={clock} />}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            {tel && (
              <a href={tel} className={buttonRed}>
                <Phone className="size-5" aria-hidden="true" />
                Call {phoneLabel(site.phone)}
              </a>
            )}
            {directions && (
              <a href={directions} target="_blank" rel="noopener noreferrer" className={buttonMustard}>
                <MapPin className="size-5" aria-hidden="true" />
                Get Directions
              </a>
            )}
            <a href="#services" className={buttonCream}>
              <Sparkles className="size-5" aria-hidden="true" />
              Wash Services
            </a>
          </div>
          {site.address.full.trim() && (
            <p className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-ink/80">
              <MapPin className="size-4 shrink-0 text-brand" aria-hidden="true" />
              {site.address.full}
            </p>
          )}
        </div>

        <div className="relative z-10">
          {photo ? (
            <figure className="relative mx-auto mb-10 max-w-md rotate-1 rounded-3xl border-[3px] border-ink bg-paper p-3 shadow-[10px_10px_0_0_var(--fs-ink)] lg:mb-0 lg:max-w-none">
              <Image
                src={photo.src}
                alt={photo.alt}
                {...photoDimensions(photo)}
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-auto w-full rounded-2xl object-cover"
              />
              <SpinBadge
                text={ringText || site.name}
                className="absolute -bottom-10 -left-4 w-28 -rotate-6 sm:-left-10 sm:w-36"
              >
                <span className="px-1 text-center font-display text-xs uppercase leading-tight sm:text-sm">
                  {center}
                </span>
              </SpinBadge>
            </figure>
          ) : (
            <HeroArt ringText={ringText || site.name} center={center} />
          )}
        </div>
      </div>
      <CheckerStrip size={12} className="h-6 border-t-[3px] border-ink" />
    </section>
  );
}
