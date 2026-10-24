import { MenuTabs, type MenuTabCategory } from "@/components/menu-tabs";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { container } from "@/components/styles";
import { site } from "@/content";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { getMenuNote, menuView } from "@/lib/menu";
import { formatPrice } from "@/lib/money";
import { photoDimensions, photoForCategory } from "@/lib/photos";

/** Categorized wash packages & detailing services. Hidden when there are no real categories. */
export function MenuSection() {
  const categories: MenuTabCategory[] = menuView(site).map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description?.trim() ?? "",
    photo: (() => {
      const photo = photoForCategory(category.id, site.photos);
      return photo ? { src: photo.src, alt: photo.alt, ...photoDimensions(photo) } : null;
    })(),
    items: category.items.map((item) => ({
      id: item.id,
      name: item.name.trim(),
      description: item.description?.trim() ?? "",
      badge: item.badge?.trim() ?? "",
      duration: item.duration?.trim() ?? "",
      includes: (item.includes ?? []).map((inc) => inc.trim()).filter(Boolean),
      isNew: Boolean(item.isNew),
      signature: Boolean(item.signature),
      prices: (item.sizes ?? [])
        .filter((size) => size.label.trim() && Number.isFinite(size.price))
        .map((size) => ({ label: size.label.trim(), price: formatPrice(size.price, size.priceFrom) })),
      price: typeof item.price === "number" ? formatPrice(item.price, item.priceFrom) : "",
    })),
  }));
  if (categories.length === 0) return null;
  const note = getMenuNote(site);
  const tel = telHref(site.phone);
  const phoneDisplay = phoneLabel(site.phone);

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="counter-grain relative border-b-[3px] border-ink py-20 sm:py-28"
    >
      <div id="menu" aria-hidden="true" className="absolute -top-20" />
      <div className={cn(container)}>
        <Reveal>
          <SectionHeading
            id="services-title"
            kicker="Suds, Wax & Detail"
            title="Wash Packages & Services"
            {...(note ? { note } : {})}
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <MenuTabs categories={categories} tel={tel} phoneDisplay={phoneDisplay} />
        </Reveal>
      </div>
    </section>
  );
}
