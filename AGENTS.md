# Yves OLOUME SARL website

Next.js 16 (App Router) + React 19 + Tailwind CSS v4 marketing site, bilingual French/English.

## Commands

- `pnpm dev` — dev server (honours `$PORT`)
- `pnpm build` / `pnpm start` — production build (type-checks) and server
- `pnpm format` — oxfmt

## Project structure

- `src/proxy.ts` — locale routing: unprefixed URLs redirect to `/fr/...`; unknown paths are rewritten to the localized 404 page (`/[locale]/page-introuvable`) with a 404 status. When adding a page, add its path to `src/lib/routes.ts` or the proxy will 404 it.
- `src/app/[locale]/layout.tsx` — root layout (`<html lang>`, fonts via `next/font`, header/footer, Organization JSON-LD)
- `src/app/[locale]/**/page.tsx` — one folder per page; each exports `generateMetadata` built with `buildMetadata()`
- `src/app/sitemap.ts`, `robots.ts`, `manifest.ts` — metadata routes
- `src/app/globals.css` — all global styles (`@import "tailwindcss"` first)
- `src/components/ui` — primitives (Icon, LinkButton, SectionTitle, BackgroundImage, JsonLd…)
- `src/components/layout` — header, mobile menu, language switcher, footer, CTA band
- `src/components/motion` — Motion (`motion/react`) wrappers: `Reveal`, `Stagger`/`StaggerItem`, `ParallaxLayer`, `PointerArea`/`PointerLayer`, `ScrollFade`, `PageTransition` (used by `app/[locale]/template.tsx`). Use these instead of ad-hoc animations; server components can pass children into them.
- `src/components/sections/<page>` — page sections; `sections/shared` for reused ones
- `src/i18n` — `config.ts` (locales, default `fr`), `dictionaries/fr.ts` (source of truth + `Dictionary` type), `dictionaries/en.ts`
- `src/lib` — `site.ts` (company info, images, `NEXT_PUBLIC_SITE_URL`), `routes.ts`, `seo.ts`, `structured-data.ts`

## Conventions

- All user-facing text lives in the dictionaries; `en.ts` is typed against `fr.ts`, so add keys to both.
- Build internal links with `localizePath(locale, path)`.
- Server Components by default; `"use client"` only for interactivity (header, FAQ accordion, filters, forms). Pass dictionary slices as props to client components.
- Images live in `src/assets/images` and are statically imported via `images` in `src/lib/site.ts`; render them with `next/image` (`placeholder="blur"`).
- Use double quotes for strings containing apostrophes (`"l'équipe"`).
- Export components as default exports.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
