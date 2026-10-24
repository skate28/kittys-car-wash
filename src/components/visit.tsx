import { Clock, MapPin, Phone, Sparkles } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ClosedNotice, ShopStatusPill, TodayMarker } from "@/components/shop-status";
import { buttonCream, buttonMustard, buttonRed, card, container } from "@/components/styles";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { hoursConfirmed, scheduleRows } from "@/lib/hours";
import { directionsHref, mapEmbedSrc } from "@/lib/maps";
import { orderingLinks } from "@/lib/ordering";

const label = "flex items-center gap-2 font-display text-xl uppercase tracking-wide text-brand";

/** Bold "Pull Up & Shine" Hours, Location, Tap-to-Call, and Google Maps embed block. */
export function Visit() {
  const tel = telHref(site.phone);
  const extraPhones = orderingLinks(site).filter((link) => link.kind === "phone" && link.href !== tel);
  const directions = directionsHref(site);
  const map = mapEmbedSrc(site);
  const showHours = hoursConfirmed(site.hours);
  const rows = showHours ? scheduleRows(site.hours) : [];
  const summary = site.hours.summary.trim();
  const clock = { hours: site.hours, closedNotice: site.closedNotice, phone: site.phone };
  const extras = [
    site.priceRange.trim() ? `Price range ${site.priceRange.trim()}` : "",
    site.paymentNote.trim(),
  ].filter(Boolean);
  const hint = site.locationHint.trim();
  const neighborhood = site.address.neighborhood.trim();

  return (
    <section
      id="visit"
      aria-labelledby="visit-title"
      className="counter-grain border-b-[3px] border-ink py-20 sm:py-28"
    >
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="visit-title"
            kicker="Lem Turner Rd · Northside Jax"
            title="Pull Up & Shine"
            note="Roll right up to our wash bay on Lem Turner Road or call ahead to check today's detailing schedule."
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-8">
            {showHours && (
              <Reveal className={card}>
                <h3 className={label}>
                  <Clock className="size-6" aria-hidden="true" />
                  Wash Bay Hours
                </h3>
                <ShopStatusPill input={clock} className="mt-4" />
                {rows.length > 0 ? (
                  <table className="mt-5 w-full text-left">
                    <caption className="sr-only">Weekly hours</caption>
                    <tbody>
                      {rows.map((row) => (
                        <tr key={row.label} className="border-b-2 border-dashed border-ink/20 last:border-0">
                          <th scope="row" className="py-2.5 pr-4 font-bold">
                            {row.label}
                            <TodayMarker timeZone={site.hours.timezone} days={row.days} />
                          </th>
                          <td
                            className={cn(
                              "py-2.5 text-right font-display text-base",
                              row.value === "Closed" ? "text-brand" : "text-ink",
                            )}
                          >
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  summary && <p className="mt-4 text-lg font-bold">{summary}</p>
                )}
                <ClosedNotice
                  input={clock}
                  className="mt-4 rounded-xl border-2 border-ink bg-mustard/50 px-3.5 py-2.5 text-sm font-semibold text-ink"
                />
                {extras.length > 0 && <p className="mt-4 text-sm text-ink/70">{extras.join(" · ")}</p>}
              </Reveal>
            )}

            <Reveal delay={0.05} className={card}>
              <h3 className={label}>
                <MapPin className="size-6" aria-hidden="true" />
                Location
              </h3>
              <address className="mt-4 not-italic">
                <span className="block font-display text-2xl uppercase leading-tight sm:text-3xl">
                  {site.address.street}
                </span>
                <span className="block text-lg font-semibold">
                  {[site.address.city, [site.address.region, site.address.postalCode].filter(Boolean).join(" ")]
                    .filter(Boolean)
                    .join(", ")}
                </span>
                {neighborhood && (
                  <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-cream px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-ink">
                    <Sparkles className="size-3.5 fill-mustard text-ink" aria-hidden="true" />
                    {neighborhood} · Jacksonville
                  </span>
                )}
              </address>
              {hint && <p className="mt-3 text-ink/80">{hint}</p>}
              {!showHours && extras.length > 0 && (
                <p className="mt-3 text-sm text-ink/70">{extras.join(" · ")}</p>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                {tel && (
                  <a href={tel} className={buttonRed}>
                    <Phone className="size-5" aria-hidden="true" />
                    Call {phoneLabel(site.phone)}
                  </a>
                )}
                {extraPhones.map((line) => (
                  <a key={line.href} href={line.href} className={buttonCream}>
                    <Phone className="size-5 text-brand" aria-hidden="true" />
                    {line.label}
                  </a>
                ))}
                {directions && (
                  <a
                    href={directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonMustard}
                  >
                    <MapPin className="size-5" aria-hidden="true" />
                    Get Directions
                  </a>
                )}
                <a href="#services" className={buttonCream}>
                  Services
                </a>
              </div>
            </Reveal>
          </div>

          {map && (
            <Reveal
              delay={0.1}
              className="min-h-[22rem] overflow-hidden rounded-3xl border-[3px] border-ink bg-paper shadow-[8px_8px_0_0_var(--fs-ink)]"
            >
              <iframe
                title={`Map to ${site.name}`}
                src={map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full min-h-[22rem] border-0 lg:min-h-[28rem]"
                allowFullScreen
              />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
