# Kitty's Car Wash

Starter website for **Kitty's Car Wash** (10934 Lem Turner Rd, Jacksonville, FL 32218).

Built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React.

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run typecheck
npm run lint
npm run build
```

## Content

Business data lives in `src/content/site.ts` (typed by `src/content/types.ts` and documented in `CONTENT_SCHEMA.md`). Real photos live in `public/images/`.

Search indexing is disabled by default (`X-Robots-Tag: noindex, nofollow` and `robots.txt` disallow `/`) until `ALLOW_INDEXING=true` is set after owner sign-off.
