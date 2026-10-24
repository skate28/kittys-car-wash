# Kitty's Car Wash — Architecture

Website for **Kitty's Car Wash**, a neighborhood hand car wash and auto detailing shop at 10934 Lem Turner Rd in Northside Jacksonville, FL.
Next.js App Router · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React · Zod.

Folder layout and content contract mirror `skate28/famous-sandwiches` and `skate28/stars-caribbean`. The design is tailored to a bold retro/street Jacksonville car wash & detail spot: vibrant suds aqua/blue (`#0077B6` / `#00B4D8`), sunshine yellow/gold sparkle (`#FFD100`), deep chrome navy (`#0B192C`), and crisp foam white cards with chunky retro borders and offset shadows.

## File Ownership

| Owner | Files |
| --- | --- |
| **Leads** | `src/content/site.ts` (data only, via `handoff/site.ts`), `public/images/` (via `handoff/images/`) |
| **Code** | `src/app/`, `src/components/`, `src/lib/`, `src/content/types.ts`, `src/content/index.ts`, config, docs |

## Page Flow

Header (suds wave strip, wordmark, section links, tap-to-call pill) → Hero (3D sign lettering, floating soap bubbles & shine sparkles, illustrated car rolling through suds/brushes or hero photo, Google rating chip, live open/closed status pill, Call + Directions CTAs) → Animated Marquee (`Hand Wash`, `Wax & Shine`, `Interior Detail`, `Tire Shine`, `Vacuum`, `Full Detail`, `Spot-Free Rinse`) → Categorized Wash Packages & Services (interactive tabs, sparkle badges, hover wiggles) → Why Pull Up / Shine Highlights & Story → Real Reviews (verbatim, source-labeled quotes with no reviewer names) → Real Photo Gallery (when photos exist in `public/images/`) → Big Tap-to-Call Band → "Pull Up & Shine" Location, Hours & Map Block → FAQ → Footer (ending with `"Built by nicklopacki.com"` linked to `https://nicklopacki.com`).
