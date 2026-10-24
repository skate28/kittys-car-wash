/**
 * Content contract for Kitty's Car Wash.
 *
 * `src/content/site.ts` is data only:
 *
 *   import type { SiteContent } from "./types";
 *   export const site: SiteContent = { ... };
 *
 * Rules (enforced by review, partly by these types):
 *  - Empty strings, empty arrays, `null`, and absent optional fields hide the matching UI.
 *  - Never invent prices, hours, reviews, ordering/booking links, or social URLs.
 *  - No owner/staff personal names, no reviewer names, no photo-source URLs anywhere in here.
 *    This file's values ship to the browser.
 *  - Photos: real files only, in `public/images/`, referenced as `/images/<file>`.
 *    No AI-generated or stock photos of cars, the wash bay, or the shop.
 *  - No pitch features (text booking, AI phone answering, memberships, waitlists, "coming soon").
 *    The types carry no fields for them.
 */

export type PhoneNumber = {
  /** Shown to people, e.g. "(904) 300-1656". */
  display: string;
  /** `tel:` href, e.g. "tel:+19043001656". */
  tel: string;
  /** E.164, e.g. "+19043001656". */
  e164: string;
};

export type Weekday = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

export type DayHours = {
  /** 24-hour "HH:MM", or null when that edge is still unknown. */
  openTime: string | null;
  closeTime: string | null;
  /** True closes the shop for the whole day. */
  closed?: boolean;
};

export type Hours = {
  /** IANA zone used to decide open vs closed. "America/New_York". */
  timezone: string;
  /** Short public line, e.g. "Tue–Sun · Closed Mon". Empty = built from `byDay`. */
  summary: string;
  /** Fallback window for a weekday missing from `byDay`. Null = unknown, don't assume. */
  openTime: string | null;
  closeTime: string | null;
  /** Per-day hours. This is the schedule open/closed reads. */
  byDay?: Partial<Record<Weekday, DayHours>>;
};

export type MenuSize = {
  /** e.g. "Sedan / Coupe", "SUV / Truck", "Van / XL", "Small", "Large". */
  label: string;
  /** Dollars. */
  price: number;
  /** Optional starting-at flag for this size tier. */
  priceFrom?: boolean;
};

export type ServiceSize = MenuSize;

export type MenuItem = {
  /** Stable slug, e.g. "hand-wash-wax". Also used to match `/images/<id>*.jpg` photos. */
  id: string;
  name: string;
  description?: string;
  /** Dollars. Leave unset until a real price is confirmed. Never invent one. */
  price?: number;
  /** `price` is a starting price (vehicle size upcharges). Renders as "$25+". */
  priceFrom?: boolean;
  /**
   * Optional vehicle-size prices, e.g. [{ label: "Cars", price: 25 }, { label: "SUVs & Trucks", price: 35 }].
   * When set, these render instead of `price`.
   */
  sizes?: MenuSize[];
  /** Optional bullet list of what is included in a wash or detail package. */
  includes?: string[];
  /** Optional duration note when verified, e.g. "~30 min". */
  duration?: string;
  /** Optional custom badge text, e.g. "Most Popular". */
  badge?: string;
  /** Shop labels the service "New". Small badge; keep it out of `name`. */
  isNew?: boolean;
  /** Shop signature / customer favorite package. Gets a sparkle badge and can be featured. */
  signature?: boolean;
  /** Seeded stand-in copy. Never rendered. */
  placeholder?: boolean;
};

export type ServiceItem = MenuItem;

export type MenuCategory = {
  id: string;
  /** e.g. "Hand Car Wash", "Full & Interior Detailing", "Add-On Services". */
  name: string;
  /** Shown under the tab heading. */
  description?: string;
  items: MenuItem[];
};

export type ServiceCategory = MenuCategory;

export type PhotoCategory =
  | "storefront"
  | "interior"
  | "exterior"
  | "wash"
  | "detail"
  | "vehicle"
  | "lot"
  | "sign"
  | "price-board"
  | "menu-board"
  | "food"
  | "logo"
  | "drinks";

/** Where a photo came from, as a key only. Full source URLs live in Leads' notes, never here. */
export type PhotoCredit =
  | "google-maps-ugc"
  | "google-maps-owner"
  | "yelp-ugc"
  | "facebook-page"
  | "instagram"
  | "owner"
  | "nick-shoot";

export type Photo = {
  /** Public path under `/images`, e.g. "/images/storefront.jpg". */
  src: string;
  alt: string;
  category: PhotoCategory;
  credit: PhotoCredit;
  width?: number;
  height?: number;
  /** Homepage hero photo. `heroImage` wins over this flag. */
  hero?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * A verbatim review quote. There is deliberately NO author/name field.
 * Rendered as: quote, star rating (when set), and `sourceLabel` (linked when `sourceUrl` is http(s)).
 */
export type Testimonial = {
  /** Verbatim text, trimmed only. Use "…" for cuts. */
  quote: string;
  /** Stars the reviewer gave, 1–5. Omit when unknown. */
  rating?: number;
  /** Platform label, e.g. "Google" or "Yelp". Required; quotes without it are skipped. */
  sourceLabel: string;
  /** Optional http(s) link to the review or listing. Never a photo URL. */
  sourceUrl?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type OrderingLink = {
  /** e.g. "Call for a wash or detail". Only channels the shop really uses. */
  label: string;
  href: string;
  kind: "phone" | "online" | "delivery" | "booking";
};

export type Rating = {
  /** e.g. 5.0 */
  value: number;
  /** Review count, e.g. 137. */
  count: number;
  /** e.g. "Google". */
  source: string;
  /** Optional http(s) link to the listing. */
  sourceUrl?: string;
};

/**
 * Colors become CSS variables. Absent = the built-in retro car-wash palette in globals.css.
 * Roles: ink = deep chrome navy, brand = vibrant suds aqua/blue, brandDeep = deep cobalt blue,
 * accent = suds cyan/teal, mustard = sunshine yellow/gold sparkle, cream = foam sky tint, paper = crisp foam white.
 */
export type Palette = {
  ink: string;
  brand: string;
  brandDeep: string;
  accent: string;
  mustard: string;
  cream: string;
  paper: string;
};

export type SiteContent = {
  name: string;
  /** e.g. "Hand Car Wash & Auto Detailing on Lem Turner Road". Empty hides it. */
  tagline: string;
  /** Meta description fallback and JSON-LD. */
  description: string;
  /** Free-text opening year, e.g. "2021". Empty hides the "Est." line. */
  opened: string;
  address: {
    street: string;
    suite: string;
    neighborhood: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    /** Single line used for the map embed, directions, and footer. */
    full: string;
  };
  /** Short wayfinding line under the address. Empty hides it. */
  locationHint: string;
  /** Null coordinates keep the map on the street address. Do not guess. */
  geo: {
    latitude: number | null;
    longitude: number | null;
  };
  /** Google Maps place link for "Directions". Empty = a directions link built from `address.full`. */
  mapUrl: string;
  phone: PhoneNumber;
  /** Shown on the hours card only while the shop is closed. Empty hides it. */
  closedNotice: string;
  hours: Hours;
  /** e.g. "$". Empty hides it. */
  priceRange: string;
  /** e.g. "Cash & cards". Empty hides it. */
  paymentNote: string;
  /** Existing booking/call channels only. Empty array = no Order/Book section. */
  orderingLinks: OrderingLink[];
  socials: SocialLink[];
  /** Aggregate score (hero + Reviews). Null hides it. */
  rating: Rating | null;
  /** Additional platform scores shown in Reviews after `rating`. */
  extraRatings?: Rating[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  /** Line under the services heading, e.g. "Pricing varies by vehicle size and condition." Empty hides it. */
  menuNote: string;
  /** Service categories & wash packages (named `menu` for schema compatibility with skate28 repos). */
  menu: MenuCategory[];
  /** Optional alias for `menu` if authored as `services`. */
  services?: MenuCategory[];
  /** Optional alias for `menuNote` if authored as `servicesNote`. */
  servicesNote?: string;
  photos: Photo[];
  /** Public path for the hero photo. Wins over a photo `hero` flag. */
  heroImage?: string;
  /** Absent = built-in palette. */
  palette?: Palette;
  about: {
    heading: string;
    paragraphs: string[];
  };
  /** Short line above the hero title, e.g. "Lem Turner Rd · Northside Jacksonville". Empty/absent hides it. */
  heroKicker?: string;
  /** Extra verified links for the footer (e.g. Facebook page). */
  extraLinks?: SocialLink[];
  /** Service keywords used in marquee, hero badge ring, and JSON-LD. */
  servesCuisine?: string[];
  /** Optional alias for `servesCuisine` if authored as `servicesOffered`. */
  servicesOffered?: string[];
  seo: {
    title: string;
    description: string;
  };
  /** Footer credit text. Always linked to https://nicklopacki.com and always the last footer line. */
  footerCredit: string;
};
