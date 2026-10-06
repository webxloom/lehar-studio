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
| `/corporate-harmony-retreats` | `corporate-harmony-retreats.html` | Heavy cuts; batch size "Customisable as per requirements"; **7-chakra image still needed** (see TODO in the page) |
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

- `NEXT_PUBLIC_SITE_URL`: production domain, used for canonical URLs, OG tags, sitemap, robots and JSON-LD. Still a placeholder (`https://www.example.com`) until the domain is confirmed.

## Open items

- Real domain: set `NEXT_PUBLIC_SITE_URL` on Vercel.
- 7-chakra image for the Corporate intro (change request), not in the media folder yet.
- Social-share image (`og-lehar.jpg`) and a hero video poster were never supplied.
- Media weight: the hero video is 16 MB and some Music Therapy JPGs are 10–23 MB. `next/image` serves resized versions, but compressing the originals would speed up builds and the repo.

## Deploy

Vercel (Aji owns hosting). pnpm is pinned via `packageManager`.
