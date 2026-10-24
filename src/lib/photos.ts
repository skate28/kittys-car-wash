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
  if (photo.category === "logo") return { width: 720, height: 720 };
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

const CATEGORY_PHOTO: Readonly<Record<string, string>> = {};

export function photoForCategory(id: string, photos: Photo[]): Photo | null {
  const src = CATEGORY_PHOTO[id];
  if (!src) return null;
  return publicPhotos(photos).find((photo) => photo.src.trim() === src) ?? null;
}

/** Photo beside "About": first storefront/exterior/lot/wash/detail/interior photo. */
export function storyPhoto(photos: Photo[]): Photo | null {
  return (
    photosOfCategory("storefront", photos)[0] ??
    photosOfCategory("exterior", photos)[0] ??
    photosOfCategory("lot", photos)[0] ??
    photosOfCategory("wash", photos)[0] ??
    photosOfCategory("detail", photos)[0] ??
    photosOfCategory("interior", photos)[0] ??
    null
  );
}
