# 3Patti Gold — Next.js SEO-first site

A Next.js 15 (App Router) + TypeScript + Tailwind implementation that **mirrors the SEO architecture** of `3pattigoldapp.com.pk`:

- WordPress / Rank Math / Kadence style **JSON-LD graph** (`Organization` + `WebSite` + `WebPage` + `Article` + `Person` + `ImageObject`)
- Extra structured data: `FAQPage`, `HowTo`, `BreadcrumbList`, `MobileApplication`, `CollectionPage`
- Per-page metadata, canonical URLs, Open Graph + Twitter cards, Googlebot max-snippet / max-image-preview directives
- `robots.ts` with AI-crawler blocks (mirrors the original Cloudflare-managed policy)
- `sitemap.ts` (App Router) + `next-sitemap` as backup
- **Speculation Rules** script for instant same-site navigation
- Reusable components: `TableOfContents`, `Accordion`, `Breadcrumbs`, `JsonLd`, `PageLayout`
- Long-form content clusters: download, register, login, deposit, withdraw, PC, iOS, blog, trust pages

> **Legal / compliance note:** real-money gaming and APK sideload content is heavily regulated in Pakistan and against Google Play policy. You are responsible for the legality and accuracy of the content you publish.

## Quick start

```bash
cd ~/Desktop/3patti-gold-nextjs
npm install    # already done
npm run dev    # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

## Point it at your real domain

There is **one** place to change:

```
.env
NEXT_PUBLIC_SITE_URL=https://3pattigolds.com.pk
```

Every canonical, sitemap URL, Open Graph URL, and JSON-LD `@id` reads from this value.

Optional env vars:

| Var | Purpose |
|-----|----------|
| `NEXT_PUBLIC_SITE_NAME` | Site name used in metadata and schema (default `3Patti Gold`) |
| `NEXT_PUBLIC_APP_VERSION` | Version shown on home/download pages |
| `NEXT_PUBLIC_APP_SIZE_MB` | APK size shown on home/download pages |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console meta token |

## SEO features implemented

| Area | Where |
|------|--------|
| Global metadata + robots directives | `src/app/layout.tsx` |
| Per-page `buildMetadata()` helper | `src/lib/seo.ts` |
| JSON-LD builders | `src/lib/jsonld.ts` (`org`, `website`, `webPageGraph`, `articleGraph`, `breadcrumbList`, `faqPage`, `howTo`, `softwareApp`) |
| Speculation Rules (instant prefetch) | `src/components/SpeculationRules.tsx` |
| Breadcrumbs (JSON-LD + visual) | `src/components/Breadcrumbs.tsx` |
| Table of Contents | `src/components/TableOfContents.tsx` |
| FAQ Accordion | `src/components/Accordion.tsx` |
| Dynamic sitemap | `src/app/sitemap.ts` |
| Robots + AI-crawler blocks | `src/app/robots.ts` |

## Pages

- `/` — long-form pillar page with Article + FAQPage + HowTo + MobileApplication JSON-LD
- `/download-3patti-gold`
- `/register-on-the-3-patti-gold`
- `/log-in-to-the-3-patti-gold`
- `/deposit-money-in-3-patti-gold`
- `/withdraw-money-on-3-patti-gold`
- `/3patti-gold-for-pc`
- `/3patti-gold-for-ios`
- `/about-us`, `/contact-us`, `/disclaimer`, `/privacy-policy`, `/terms-and-conditions`
- `/category/blog` (CollectionPage schema)
- `/blog/[slug]` (Article schema, static params from `src/content/posts.ts`)

## Deploy

Any Node host works. Recommended: **Vercel**.

1. Push to GitHub.
2. Import the repo on Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` (and other env vars) in the Vercel project.
4. Deploy.

After go-live:

1. Submit `/sitemap.xml` in Google Search Console.
2. Verify in GSC (set `NEXT_PUBLIC_GSC_VERIFICATION` or add DNS TXT).
3. Run Lighthouse + Rich Results Test on the home URL to confirm JSON-LD parses cleanly.

## Content notes

Copy in `src/content/home.ts` and `src/content/posts.ts` mirrors the original site's topic structure. Edit those files to change wording site-wide.

Replace `/public/logo/3patti-gold-logo.svg` and `/public/og/3patti-gold-og.svg` with real brand artwork (PNG recommended for Open Graph at 1200×630).
