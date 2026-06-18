# HasBrando — Premium Creative Growth Agency Website

A premium, conversion-focused agency website built with Next.js 16, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (subtle animations)
- **Resend** (contact form emails)
- **Google Sheets** (optional lead storage)
- **Telegram** (optional lead alerts)

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | Resend API key for contact form emails |
| `RESEND_FROM_EMAIL` | No | Verified sender on hashbrando.com (default: `HasBrando <support@hashbrando.com>`) |
| `CONTACT_TO_EMAIL` | No | Lead notification inbox (default: support@hashbrando.com) |
| `CONTACT_RATE_LIMIT_DISABLED` | No | Set `true` for local dev |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | Optional | Google Sheet ID for lead storage |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Optional | GCP service account email |
| `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` | Optional | Service account private key |
| `TELEGRAM_BOT_TOKEN` | Optional | Telegram bot token for alerts |
| `TELEGRAM_CHAT_ID` | Optional | Telegram chat ID for alerts |

### Contact Flow

1. Visitor submits contact form → `POST /api/contact`
2. **Required:** Lead email sent to `CONTACT_TO_EMAIL` via Resend
3. **Parallel (non-blocking):** Auto-reply to visitor, Google Sheets row, Telegram alert
4. Form succeeds only if the lead email sends successfully

### Google Sheets Setup

Create a sheet with these columns (row 1):

`Submitted At | Full Name | Email | Phone | Business Name | Website | Services Interested In | Monthly Revenue | Biggest Challenge | Message | Source | Submission ID`

Share the sheet with your service account email (Editor access).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services, case studies, testimonials, FAQ |
| `/about` | About, vision, mission, founder story |
| `/services` | All 11 services with benefits, process, deliverables |
| `/solutions` | Solutions by business type |
| `/case-studies` | Case studies with before/after metrics |
| `/portfolio` | Filterable portfolio gallery |
| `/contact` | Contact form with full automation |
| `/book-strategy` | Calendly booking placeholder |
| `/faq` | FAQ accordion with schema markup |
| `/blog` | SEO-ready blog listing |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Deploy to Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy — Vercel auto-detects Next.js

### Custom Domain

1. Add `hasbrando.com` in Vercel project settings → Domains
2. Update DNS records as instructed by Vercel
3. Verify `SITE.url` in `src/lib/site-config.ts` matches your domain

### Calendly Integration

Replace the placeholder in `src/app/book-strategy/page.tsx` with your Calendly embed iframe.

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## License

© 2026 HasBrando · Lifetop Academy
