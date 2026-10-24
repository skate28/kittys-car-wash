import { Phone } from "lucide-react";

import { CheckerStrip } from "@/components/checker-strip";
import { focusRing } from "@/components/styles";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import type { NavLink } from "@/lib/nav";

export function Header({ links }: { links: NavLink[] }) {
  const tel = telHref(site.phone);
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-cream/95 backdrop-blur">
      <CheckerStrip size={5} className="h-2.5" />
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#content" className={cn("shrink-0 rounded", focusRing)} aria-label={`${site.name}, back to top`}>
          <Wordmark name={site.name} />
        </a>
        {links.length > 0 && (
          <nav aria-label="Sections" className="hidden lg:block">
            <ul className="flex items-center gap-6 whitespace-nowrap text-sm font-bold uppercase tracking-[0.14em]">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={cn("rounded underline-offset-8 hover:text-brand hover:underline decoration-2", focusRing)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {tel && (
          <a
            href={tel}
            className={cn(
              "hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full border-[3px] border-ink bg-brand px-4 py-1.5 font-display text-sm uppercase tracking-wide text-cream shadow-[0_4px_0_0_var(--fs-ink)] transition hover:-translate-y-0.5 sm:inline-flex",
              focusRing,
            )}
          >
            <Phone className="size-4" aria-hidden="true" />
            {phoneLabel(site.phone)}
          </a>
        )}
      </div>
    </header>
  );
}
