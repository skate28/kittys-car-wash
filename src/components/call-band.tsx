import { MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { buttonMustard, container, focusRing } from "@/components/styles";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { directionsHref } from "@/lib/maps";
import { orderingLinks } from "@/lib/ordering";

/** Big tap-to-call band. Hidden when there is no phone number or the Order section already covers it. */
export function CallBand() {
  const tel = telHref(site.phone);
  if (!tel || orderingLinks(site).length > 0) return null;
  const directions = directionsHref(site);

  return (
    <section
      aria-labelledby="call-title"
      className="pinstripe relative overflow-hidden border-b-[3px] border-ink bg-ink py-16 text-cream sm:py-20"
    >
      <div className={cn(container, "relative text-center")}>
        <Reveal>
          <p id="call-title" className="-rotate-2 text-balance font-script text-3xl text-mustard sm:text-4xl">
            Ready for that showroom shine?
          </p>
          <a
            href={tel}
            className={cn(
              "mt-4 inline-block rounded-2xl font-display text-[clamp(1.75rem,8vw,6.5rem)] leading-none whitespace-nowrap tracking-tight text-cream sign-extrude transition hover:text-mustard",
              focusRing,
            )}
          >
            {phoneLabel(site.phone)}
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={tel} className={buttonMustard}>
              <Phone className="size-5" aria-hidden="true" />
              Tap to Call
            </a>
            {directions && (
              <a
                href={directions}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex min-h-12 items-center gap-2 rounded-full border-[3px] border-cream px-6 py-3 font-display text-base uppercase tracking-wide text-cream transition hover:bg-cream hover:text-ink",
                  focusRing,
                )}
              >
                <MapPin className="size-5" aria-hidden="true" />
                {site.address.street}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
