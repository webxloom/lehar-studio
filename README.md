# Léhar Studio: Next.js

Next.js (App Router, TypeScript) migration of Aji's static Léhar Studio site
(sound healer Kavitha Prasad, Mulund East, Mumbai), with Aji's
**Change Request** applied. It follows the Rent Worx Next.js build as its template.

## Pages

All routes are static (SSG).

| Route | Source | Change request applied |
|---|---|---|
| `/` | `index.html` | New intro copy, "cell-by-cell" removed; long first-visit cards dropped and their headings moved onto the 15/40/5 time bar; 6th support card "Difficulty Settling & Focus"; new service descriptions; "Who is Léhar Studio for?" as heading-only cards with no images |
| `/about-kavitha` | `about-kavitha.html` | "Léhar Studio" not in capitals in the banner eyebrow; Mission/Vision cut short; Principles as heading + one-liner; story trimmed |
| `/services` | `services.html` | Table removed from "Which one is for me?"; Music Therapy added as a pathway; copy trimmed |
| `/group-immersions` | `group-immersions.html` | Age "12 and above"; copy trimmed |
| `/one-to-one` | `one-to-one.html` | Structure "Customisable as per requirements" (no eight-session course); copy trimmed |
| `/corporate-harmony-retreats` | `corporate-harmony-retreats.html` | Heavy cuts; batch size "Customisable as per requirements"; intro image replaced by Aji in round 2 |
| `/music-therapy` | **new**, from `old_wireframe_index_v1.0.html` | New page under Services; copy drawn from the Léhar Studio content docs |
| `/faqs` | `faqs.html` | Answers updated to match the above; cancellation/refund policy moved here from Booking |
| `/booking` | `booking.html` | Form only. WhatsApp + email enquiry (nothing stored); `?service=group\|one\|corp\|music` preselects |

## Interactive parts (React)

- `components/home/Hero.tsx`: video hero (client-only video, Aji's staged entrance)
- `components/home/Testimonials.tsx`: coverflow carousel, swipe/keys/dots/autoplay, "Read full story" dialog
- `components/FaqExplorer.tsx`: tabs, live search, expand/collapse all, one open at a time
- `components/EnquiryForm.tsx`: Aji's WhatsApp/email enquiry flow
- `components/AmbientSound.tsx`: music-note toggle in the header for `bowl-music.mp3` (as on elevatewithswati.com)
- `components/PageEffects.tsx`: scroll reveal and one-open accordions
- `components/Header.tsx`: Services dropdown, mobile menu, light/dark theme (`lehar-theme`)

## Structure

- `app/globals.css`: Aji's stylesheet ported as-is, plus a short "Next.js build additions" block at the end
- `components/ui.tsx`: shared page blocks (`Sec`, `Verse`, `Split`, `PhotoBanner`, `ParallaxCta`, `Img`)
- `lib/`: `site.ts` (contact, nav), `images.ts` (image sizes for `next/image`), `faqs.ts`, `testimonials.ts`
- `public/images`, `public/audio`: media

## Develop

```bash
pnpm install
pnpm dev
```

Checks before pushing: `pnpm build` and `pnpm lint`.

## Environment

- `NEXT_PUBLIC_SITE_URL`: production domain, used for canonical URLs, OG tags, sitemap, robots and JSON-LD. Defaults to `https://www.leharstudio.com` (live), so no Vercel setting is needed.

## Review round 2 (Aji's Changes.docx)

- **All pages:** solid navbar (no bleed-through), logo further left and bigger, share image `public/og-lehar.png` (1200×630, made from `lehar-logo-light`; previews don't support AVIF), Music Therapy images switched to Aji's AVIFs
- **Home:** "Experience The Resonance" intro; first-visit stages, support items and offerings as 3-column cards (offerings with photos); "Who is Léhar Studio for?" removed; Philosophy moved to About; "Ways to Ride the Wave"
- **About:** timeline photos in one 3:2 frame; Mission / Vision / Philosophy as 3 cards; Principles as full-width stacked cards
- **Services:** four pathway cards in one row
- **Group:** "Up to 10, customisable*" with a note to discuss with Kavitha; Journey text and time bar left, image right; Venue / Come ready / Bring the bowls as 3 cards
- **Corporate:** Duration and Pricing as 2 cards side by side
- **Music Therapy:** a small player in each section (`components/MusicPlayer.tsx`); only one sound plays at a time, including the header's bowl music
- **FAQs:** narrower tab pills (icon, heading, count)
- **Booking:** form photo shown in a rounded frame without the edge fade

## Round 3

- **Aji:** Home redesign (feature-image splits, side cards, centred verses, Music Therapy offering card), page design and image updates, 6 audio tracks in `public/audio/` wired into the Music Therapy players
- **Hero video:** compressed from 16 MB to 3.8 MB (1080p, two-pass H.264 at 1650 kbps, `+faststart`, no audio track; SSIM 0.97 against the original). Added `hero-poster.avif`, shown instantly while the video loads
- **Music Therapy:** "The Living Wisdom of Rāga" now plays `deep-sleep-vibration.mp3`. It had the same track as section 1. `deep-healing-freq.mp3` and `full-body-healing.mp3` are spare
- `lib/images.ts` regenerated for the replaced images

## Live fixes (Aji's Website Audit, after launch at www.leharstudio.com)

- **Domain:** `SITE_URL` defaults to `https://www.leharstudio.com`. Canonical, og:url, og:image, sitemap and robots all pointed at example.com.
- **Per-page share tags:** `lib/seo.tsx` `pageMeta()` gives every page its own canonical, Open Graph and Twitter title/description, plus `og:locale en_IN`. Services title shortened to stay under about 60 characters.
- **Structured data:** business JSON-LD with address (Mulund East, Mumbai, MH, IN), `alternateName` "Lehar Studio", image and logo; `BreadcrumbList` on every banner; `FAQPage` with all 40 questions.
- **Crawlability:** every FAQ is now in the HTML (inactive groups hidden), and the booking form is server-rendered (`?service=` read on the client).
- **Favicon:** `app/favicon.ico`, `app/icon.png` and `app/apple-icon.png` from the Léhar logo replace the default Next.js icon.
- **Hero:** poster shows from first paint; the video fades in once it can play and is skipped for reduced motion, data-saver and 2G.
- **Images:** generated widths capped at 2048px (`next.config.ts`).
- **Content:** "Kavita" and "Lehar" normalised in testimonials; Group age "12+ (12–17 with guardian consent)"; Home intro names Mulund East, Mumbai; nav and footer say "Group Sound Baths".

## Error pages

- `app/not-found.tsx`: 404 for any unknown URL (returns 404 + noindex), inside the normal header and footer
- `app/error.tsx`: shown if a page fails to render, with a "Try again" (`retry()`) button
- `app/global-error.tsx`: last-resort page if the root layout fails; brings its own `<html>`/`<body>` and stylesheet
- Shared look in `components/ErrorScreen.tsx`: wave banner, verse, quick links, WhatsApp/phone help
- Header fit: below 1180px the Book button hides (Booking stays in the nav), and below 1000px the wordmark beside the logo badge hides, so the nav never wraps

## Open items

- None. Live at https://www.leharstudio.com

## Deploy

Vercel (Aji owns hosting). pnpm is pinned via `packageManager`.
