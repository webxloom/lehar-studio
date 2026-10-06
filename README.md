# Léhar Studio: Next.js

Next.js (App Router, TypeScript) migration of Aji's static Léhar Studio site
(sound healer Kavitha Prasad, Mulund East, Mumbai). It follows the Rent Worx
Next.js build as its template.

## Status

**Scaffold:** design system, theme and shared shell are done. The 8 routes exist
with their final SEO titles and descriptions, but page content is still a
placeholder until Aji's instructions file arrives.

| Route | Source (Aji's static build) |
|---|---|
| `/` | `index.html` |
| `/about-kavitha` | `about-kavitha.html` |
| `/services` | `services.html` |
| `/group-immersions` | `group-immersions.html` |
| `/one-to-one` | `one-to-one.html` |
| `/corporate-harmony-retreats` | `corporate-harmony-retreats.html` |
| `/booking` | `booking.html` |
| `/faqs` | `faqs.html` |

## Structure

- `app/globals.css`: Aji's stylesheet, ported as-is (fonts point at `next/font` variables)
- `app/layout.tsx`: fonts (Elsie, Fraunces, Poltawski Nowy), Font Awesome (self-hosted), shell
- `components/`: `ThemeScript` (no-flash, `lehar-theme` key), `Header`, `Footer`, `WhatsAppFab`, `Reveal`, `WaveDivider`
- `lib/site.ts`: studio contact details, navigation, WhatsApp link helper
- `public/images/`: media used by the pages

## Develop

```bash
pnpm install
pnpm dev
```

## Environment

- `NEXT_PUBLIC_SITE_URL`: production domain (canonical/OG). Placeholder until confirmed.

## Deploy

Vercel (Aji owns hosting).
