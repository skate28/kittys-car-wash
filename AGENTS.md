# Agent Guidelines — Kitty's Car Wash

1. **Content Boundary**: `src/content/site.ts` and `public/images/` are owned by Leads. Components must read business data exclusively through `import { site } from "@/content"`.
2. **Privacy & Verbatim Content**:
   - Never include reviewer names, owner/staff personal names, or raw photo-source URLs in client code or `src/content/site.ts`.
   - Never invent prices, hours, reviews, or social/booking links.
   - No unrequested pitch features ("Coming soon" cards, text booking, AI phone answering, memberships, or waitlists).
   - No AI-generated photos of real cars or the shop; use custom SVG/CSS illustrations for decorative elements and real photos from `public/images/` when available.
3. **Indexing**: Keep `ALLOW_INDEXING` off (`noindex, nofollow`) until owner sign-off.
4. **Public Repo Hygiene**: Never commit `raw/`, `handoff/`, or research markdown notes to `skate28/kittys-car-wash`.
