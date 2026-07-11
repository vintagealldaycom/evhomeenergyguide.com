# EV Home Energy Guide — Astro

Static Astro rebuild of EVHEG, ready for Cloudflare Pages. Dark EVHEG design system preserved from the original `styles.css`.

## Quick start

```bash
npm install
npm run dev       # local preview at localhost:4321
npm run build     # production build → dist/
```

## What's built in

- **SEO engine** (`src/components/SEO.astro`) — auto meta titles, auto-fallback descriptions, canonical URLs, Open Graph/Twitter cards, and JSON-LD (`Person` on every page, `Article` on posts, `WebSite` on home). Full RankMath replacement.
- **Content Collections** (`src/content/config.ts`) — the build **fails** if any post is missing a title, description (50–160 chars), date, or valid category. Your quality-control gate.
- **Author authority** — single source of truth in `src/config/site.ts`; `AuthorByline.astro` injects the Louis F. byline compact (top) and full (bottom) on every article.
- **Reading time badge** + **auto table of contents** + **auto related posts** (scored by shared tags/category).
- **5-pillar navigation** driven by config — matches `5_Final_Category_Pillars.MD` exactly. Category hubs group posts by subcategory automatically.
- **Working calculators** — Charging Cost Calculator and Solar & Battery Sizer, mobile-friendly, pure client-side. Drop into any article as `<ChargingCostCalculator />`.
- **Contact form** wired to your Google Apps Script (`Combined_form_backend.gs`) — handles both `request` and `feedback` modes.
- **Disclaimer everywhere** — footer, article footers, contact page, and a dedicated `/disclaimer/` page.
- **Sitemap + RSS** auto-generated on every build.
- **Anti-scraper measures** — `robots.txt` blocking bulk scrapers (CCBot, GPTBot, Bytespider, Scrapy, etc.), security headers in `public/_headers`, and clipboard truncation for >1,200-char copies. On Cloudflare, also enable **Bot Fight Mode** and **Scrape Shield** in the dashboard — that's the real protection.
- Mobile responsive, keyboard focus states, `prefers-reduced-motion` respected.

## Before launch — fill in these 3 values

1. **Domain** — `astro.config.mjs` (`site:`) and `src/config/site.ts` (`site.url`) currently use `https://evhomeenergyguide.com`. Confirm.
2. **Form endpoint** — deploy `Combined_form_backend.gs` as a Web App (Execute as Me / Anyone) and paste the `/exec` URL into `formEndpoint` in `src/config/site.ts`.
3. **robots.txt sitemap URL** — update if the domain differs.

## Adding articles (migrating your 394 posts)

Drop a Markdown file into `src/content/blog/`:

```yaml
---
title: "Your Title (10–70 chars)"
description: "Meta description, 50–160 chars — enforced at build time."
pubDate: 2026-07-01
category: ev-home-charging   # one of the 5 pillar slugs
subcategory: "Home Charging" # optional, groups it on the hub page
tags: [charging, level-2]
---
```

The filename becomes the URL: `my-post.md` → `/blog/my-post/`.

## ⚠️ Migration safety (394 indexed URLs)

This is the most important step. Google already indexes your WordPress URLs, so **every old URL must 301-redirect** to its new location or you lose rankings.

1. Export all live URLs from WordPress (your existing XML sitemap works).
2. Map each old permalink to its new `/blog/slug/` path in `public/_redirects` (template included with examples).
3. Deploy, then spot-check ~20 old URLs return 301s.
4. Submit the new sitemap (`/sitemap-index.xml`) in Google Search Console and monitor Coverage for 2–4 weeks.
5. Keep the WordPress site reachable until redirects are verified — don't delete it on day one.

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → connect the repo.
3. Framework preset: **Astro** · Build command: `npm run build` · Output: `dist`.
4. Every push to `main` auto-deploys. `_headers` and `_redirects` are applied automatically.

## Open questions (per your "don't guess, ask" note)

- Final production domain? (Files referenced both clearcreditguide.com and EVHomeEnergyGuide.com — I used **evhomeenergyguide.com**.)
- Do you have the WordPress URL export so the `_redirects` map can be completed?
- Social profile URLs for the author `sameAs` schema array?
- Should the remaining calculators from `tools-simulators.html` be ported as additional components?
