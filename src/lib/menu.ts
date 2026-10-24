import { site } from "@/content";
import type { MenuCategory, MenuItem, SiteContent } from "@/content/types";

export function visibleItem(item: MenuItem): boolean {
  return Boolean(item.name.trim()) && !item.placeholder;
}

/** Categories with a name and either real items or a description. Placeholder items are omitted. */
export function visibleCategories(menu: MenuCategory[]): MenuCategory[] {
  return menu.flatMap((category) => {
    if (!category.name.trim()) return [];
    const items = category.items.filter(visibleItem);
    if (items.length === 0 && !category.description?.trim()) return [];
    return [{ ...category, name: category.name.trim(), items }];
  });
}

/**
 * Service/package data access.
 * Supports both `content.menu` and `content.services` for full schema compatibility.
 */
export function getMenu(content: SiteContent = site): MenuCategory[] {
  if (content.menu && content.menu.length > 0) return content.menu;
  return content.services ?? [];
}

export function getMenuNote(content: SiteContent = site): string {
  return content.menuNote?.trim() || content.servicesNote?.trim() || "";
}

/** What the page shows. Placeholder items are dropped and are never rendered. */
export function menuView(content: SiteContent = site): MenuCategory[] {
  return visibleCategories(getMenu(content));
}

/** Service keywords for the marquee and hero badge. Always includes core car-wash services. */
export function marqueeServices(content: SiteContent = site): string[] {
  const core = [
    "Hand Wash",
    "Wax & Shine",
    "Interior Detail",
    "Tire Shine",
    "Vacuum",
    "Full Detail",
    "Spot-Free Rinse",
    "Lem Turner Local Favorite",
  ];
  const fromContent = [
    ...(content.servesCuisine ?? []),
    ...(content.servicesOffered ?? []),
    ...menuView(content).map((category) => category.name),
  ]
    .map((item) => item.trim())
    .filter(Boolean);

  const combined = [...core, ...fromContent];
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const word of combined) {
    const key = word.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(word);
    }
  }
  return unique;
}
