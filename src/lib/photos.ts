import type { Photo } from "@/content/types";

export function photoFileName(src: string): string {
  const path = src.trim().split("?")[0]?.split("#")[0] ?? "";
  return (path.split("/").pop() ?? "").toLowerCase();
}

export function isPublicPhoto(photo: Photo): boolean {
  const src = photo.src.trim();
  if (!src.startsWith("/images/") || !photo.alt.trim()) return false;
  if (/^https?:/i.test(src)) return false;
  return true;
}

export function photoDimensions(photo: Pick<Photo, "width" | "height" | "category">): {
  width: number;
  height: number;
} {
  if (photo.width && photo.width > 0 && photo.height && photo.height > 0) {
    return { width: photo.width, height: photo.height };
  }
  if (photo.category === "logo") return { width: 517, height: 501 };
  if (
    photo.category === "storefront" ||
    photo.category === "exterior" ||
    photo.category === "lot" ||
    photo.category === "sign" ||
    photo.category === "menu-board" ||
    photo.category === "price-board"
  ) {
    return { width: 800, height: 600 };
  }
  return { width: 800, height: 600 };
}

export function publicPhotos(photos: Photo[]): Photo[] {
  return photos.filter(isPublicPhoto);
}

/** Gallery skips the logo tile. */
export function galleryPhotos(photos: Photo[]): Photo[] {
  return publicPhotos(photos).filter((photo) => photo.category !== "logo");
}

export function photosOfCategory(category: Photo["category"], photos: Photo[]): Photo[] {
  return publicPhotos(photos).filter((photo) => photo.category === category);
}

/** Side-column hero photo. `heroImage` wins over a photo `hero` flag. */
export function heroPhoto(photos: Photo[], heroImage?: string): Photo | null {
  const explicit = heroImage?.trim();
  if (explicit) {
    const match = photos.find((photo) => photo.src.trim() === explicit);
    if (!match || !isPublicPhoto(match)) return null;
    return match;
  }
  return photos.find((photo) => photo.hero && isPublicPhoto(photo)) ?? null;
}

/** The site logo photo (category "logo"), if any. */
export function logoPhoto(photos: Photo[]): Photo | null {
  return publicPhotos(photos).find((photo) => photo.category === "logo") ?? null;
}

function slug(src: string): string {
  return photoFileName(src).replace(/\.[a-z0-9]+$/, "");
}

const PHOTO_ITEM: Readonly<Record<string, string>> = {};

const CATEGORY_PHOTO: Readonly<Record<string, string>> = {
  "wash-packages": "/images/outside-hand-wash-ford-f150-bay.webp",
  "detail-packages": "/images/full-detail-purple-bmw-x6.webp",
  "add-ons-specialty": "/images/menu-board-detail-packages.webp",
};

export function photoForCategory(id: string, photos: Photo[]): Photo | null {
  const src = CATEGORY_PHOTO[id];
  if (!src) return null;
  return publicPhotos(photos).find((photo) => photo.src.trim() === src) ?? null;
}

/** Photo beside "About": first non-hero storefront/exterior/lot/wash/detail/interior photo. */
export function storyPhoto(photos: Photo[], heroSrc?: string): Photo | null {
  const pool = publicPhotos(photos).filter((photo) => photo.src !== heroSrc && !photo.hero);
  return (
    pool.find((photo) => photo.category === "storefront") ??
    pool.find((photo) => photo.category === "exterior") ??
    pool.find((photo) => photo.category === "lot") ??
    pool.find((photo) => photo.category === "interior") ??
    photosOfCategory("storefront", photos)[0] ??
    photosOfCategory("interior", photos)[0] ??
    null
  );
}

/** Inside waiting lobby / interior photo for the About section. */
export function interiorPhoto(photos: Photo[]): Photo | null {
  return photosOfCategory("interior", photos)[0] ?? null;
}

function mappedPhoto(id: string, photos: Photo[], exclude: string[]): Photo | null {
  const src = Object.entries(PHOTO_ITEM).find(([, itemId]) => itemId === id)?.[0];
  if (!src) return null;
  const photo = publicPhotos(photos).find((item) => item.src.trim() === src);
  if (!photo || exclude.includes(photo.src)) return null;
  return photo;
}

/**
 * Photo for a service/package item by `<item.id>` or `<item.id>-*` filename prefix.
 */
export function photoForItemId(id: string, photos: Photo[], exclude: string[] = []): Photo | null {
  const mapped = mappedPhoto(id, photos, exclude);
  if (mapped) return mapped;

  const workPhotos = publicPhotos(photos).filter(
    (photo) =>
      photo.category === "food" ||
      photo.category === "wash" ||
      photo.category === "detail" ||
      photo.category === "vehicle",
  );
  const candidates = [
    ...workPhotos.filter((photo) => slug(photo.src) === id),
    ...workPhotos.filter((photo) => slug(photo.src).startsWith(`${id}-`)),
  ];
  return candidates.find((photo) => !exclude.includes(photo.src)) ?? null;
}
