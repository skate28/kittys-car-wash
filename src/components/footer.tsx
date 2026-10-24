import { CheckerStrip } from "@/components/checker-strip";
import { container, focusRing } from "@/components/styles";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { hoursConfirmed, hoursFallback } from "@/lib/hours";
import { directionsHref } from "@/lib/maps";
import { safeHref } from "@/lib/ordering";

/** Footer. The "Built by nicklopacki.com" credit is always the LAST line. */
export function Footer() {
  const tel = telHref(site.phone);
  const directions = directionsHref(site);
  const hours = hoursConfirmed(site.hours) ? hoursFallback(site.hours) : "";
  const links = [...site.socials, ...(site.extraLinks ?? [])].flatMap((link) => {
    const href = safeHref(link.href);
    return href && link.label.trim() ? [{ label: link.label.trim(), href }] : [];
  });
  const credit = site.footerCredit.trim() || "Built by nicklopacki.com";
  const heading = "font-display text-sm uppercase tracking-[0.2em] text-mustard";

  return (
    <footer className="bg-ink pb-32 text-cream md:pb-10">
      <CheckerStrip size={10} className="h-5" />
      <div className={cn(container, "grid gap-10 pt-14 md:grid-cols-[1.4fr_1fr_1fr]")}>
        <div>
          <Wordmark name={site.name} tone="cream" className="[&>span:first-child]:text-3xl [&>span:last-child]:text-3xl sm:[&>span:first-child]:text-4xl sm:[&>span:last-child]:text-4xl" />
          {site.tagline.trim() && <p className="mt-4 max-w-sm text-cream/70">{site.tagline}</p>}
        </div>
        <div className="space-y-2 text-sm text-cream/80">
          <p className={heading}>Visit</p>
          <p>{site.address.full}</p>
          {directions && (
            <a href={directions} target="_blank" rel="noopener noreferrer" className={cn("inline-block underline underline-offset-4 hover:text-mustard", focusRing)}>
              Get directions
            </a>
          )}
          {tel && (
            <p>
              <a href={tel} className={cn("font-display text-2xl tracking-wide text-cream hover:text-mustard", focusRing)}>
                {phoneLabel(site.phone)}
              </a>
            </p>
          )}
        </div>
        {(hours || links.length > 0) && (
          <div className="space-y-2 text-sm text-cream/80">
            {hours && (
              <>
                <p className={heading}>Hours</p>
                <p>{hours}</p>
              </>
            )}
            {links.length > 0 && (
              <ul className="space-y-2 pt-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={cn("underline-offset-4 hover:text-mustard hover:underline", focusRing)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <div className={cn(container, "mt-12 border-t border-cream/15 pt-6")}>
        <p className="text-xs text-cream/50">
          © {site.name}
          {site.opened.trim() ? ` · Est. ${site.opened.trim()}` : ""}
        </p>
        <p className="mt-3 text-xs text-cream/70">
          <a href="https://nicklopacki.com" className={cn("underline-offset-4 hover:text-cream hover:underline", focusRing)}>
            {credit}
          </a>
        </p>
      </div>
    </footer>
  );
}
