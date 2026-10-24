# Content schema — Kitty's Car Wash

Leads owns `src/content/site.ts` (dropped via `handoff/site.ts`) and `public/images/` (dropped via `handoff/images/`).
Replace `site.ts` wholesale; components never hard-code business copy, prices, hours, or photos.

- Types: `src/content/types.ts`. `site.ts` is data only:
  ```ts
  import type { SiteContent } from "./types";
  export const site: SiteContent = { ... };
  ```
- Shapes mirror `skate28/famous-sandwiches` (`famous-sandwiches-repo`), adapted for a hand car wash & auto detail shop.
- Empty strings, empty arrays, `null`, and absent optional fields hide the matching UI. Nothing renders "coming soon".

## Rules

- Do not invent prices, hours, reviews, booking/ordering links, or social URLs.
- No owner or staff personal names, reviewer names, or photo-source URLs (this file ships to the browser).
- Photo `credit` is a key only. Real files only, in `public/images/`, referenced as `/images/<file>`.
- No AI-generated or stock photos of cars, the wash bay, or the shop.
- Reviews: verbatim quotes, `sourceLabel` ("Google", "Yelp", "Facebook"), optional `rating` (1–5) and `sourceUrl`. There is no author/reviewer field.
- Ordering/booking links: only services the shop really uses (e.g. phone call). Empty array = no Order/Book section.

## Fields

| Field | Renders as | Empty → |
| --- | --- | --- |
| `name` | Header/footer wordmark, hero sign (first word block letters, rest in script) | — |
| `tagline` | Hero line, footer | hidden |
| `description` | Meta fallback, JSON-LD (`AutoWash` / `LocalBusiness`) | — |
| `opened` | "Since" kicker on About, hero badge, footer "Est." | hidden |
| `heroKicker` | Line above the hero title (e.g. `"Lem Turner Rd · Northside Jacksonville"`) | hidden |
| `address.*`, `address.full` | Hero, Pull Up & Shine location card, footer, map embed, JSON-LD | — |
| `locationHint` | Wayfinding line under the address | hidden |
| `geo` | Map pin + JSON-LD. Null → map by street address | address embed |
| `mapUrl` | Directions buttons | directions URL built from `address.full` |
| `phone` | Every call button, big tap-to-call band, sticky mobile Call bar | — |
| `hours` | Hours card + table, live open/closed pill, footer, JSON-LD | Hours card, pill and footer hours hidden |
| `closedNotice` | Hours card, only while closed | hidden |
| `priceRange`, `paymentNote` | Small line on the hours/location card | hidden |
| `orderingLinks[]` | Call/Book section (`phone` = tel:, `online`/`booking` = https) | section hidden (tap-to-call band shows instead) |
| `socials[]`, `extraLinks[]` | Footer | hidden |
| `rating` | Hero rating chip; first badge in Reviews | hidden |
| `extraRatings[]` | Reviews badges after `rating` | hidden |
| `testimonials[]` | Verbatim Reviews quotes (no reviewer names) | section hidden |
| `faq[]` | Accordion + FAQPage JSON-LD | hidden |
| `menuNote` | Note under the Wash Packages & Services heading (e.g. vehicle size pricing note) | hidden |
| `menu[]` | Categorized wash packages & detail services tabs, marquee items, JSON-LD OfferCatalog. `price` or `sizes[]` (e.g. Sedan / SUV / Truck); `priceFrom` adds "+" | illustrated service highlights shown; priced tabs hidden if empty |
| `menu[].items[].placeholder` | Never shown | — |
| `photos[]`, `heroImage` | Hero photo, About photo, Real Photo Gallery (`logo` excluded) | illustrated car rolling through suds/brushes in hero, wash checklist card in About; Gallery hidden when no photos |
| `palette` | CSS variables | built-in retro suds aqua/sunshine yellow/chrome navy palette |
| `about` | Why Pull Up / About story (needs ≥1 paragraph) | hidden |
| `servesCuisine` / `servicesOffered` | Service keywords for marquee (`Hand Wash`, `Wax & Shine`, `Interior Detail`, `Tire Shine`, `Vacuum`, etc.) & hero badge ring | default wash service keywords |
| `seo.title/description` | Title, meta, Open Graph | name / description |
| `footerCredit` | LAST footer line, linked to https://nicklopacki.com | `"Built by nicklopacki.com"` |
