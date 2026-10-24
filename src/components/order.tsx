import { ExternalLink, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonCream, buttonMustard, container, focusRing } from "@/components/styles";
import { site } from "@/content";
import { phoneLabel } from "@/lib/contact";
import { orderingLinks } from "@/lib/ordering";

/** Links to ordering services the shop already uses. Renders nothing when content lists none. */
export function Order() {
  const links = orderingLinks(site);
  if (links.length === 0) return null;
  const phoneOnly = links.every((link) => link.kind === "phone");

  return (
    <section id="order" aria-labelledby="order-title" className="pinstripe border-b-[3px] border-ink bg-teal py-20 text-cream sm:py-24">
      <div className={container}>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
        <Reveal>
          <SectionHeading id="order-title" kicker="Hungry?" title="Order" tone="cream" />
          {phoneOnly && (
            <a
              href={links[0].href}
              className={`mt-6 inline-block rounded font-display text-[clamp(1.75rem,8vw,6rem)] leading-none whitespace-nowrap tracking-tight text-mustard sign-extrude hover:text-cream ${focusRing}`}
            >
              {phoneLabel(site.phone)}
            </a>
          )}
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap gap-4">
            {links.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.kind === "phone" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className={index === 0 ? buttonMustard : buttonCream}
                >
                  {link.kind === "phone" ? <Phone className="size-5" aria-hidden="true" /> : <ExternalLink className="size-5" aria-hidden="true" />}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
