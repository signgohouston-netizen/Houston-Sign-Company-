# SignGo

Website for **Sign Go — The Sign Professionals**, a full-service sign company in Houston, TX.
Built with Next.js (App Router), statically exported.

- **Address:** 9900 Wilcrest Dr, Houston, TX 77099
- **Phone:** 281-814-1111
- **Email:** Info@signgotx.com

## Run locally

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
npm run build    # production build
```

The AI Assistant (`/assistant`) needs `ANTHROPIC_API_KEY` set. For local testing,
copy `.env.example` to `.env.local` and add your key.

## Deploy

Importing this repo on **Vercel** works out of the box — it auto-detects Next.js
at the repo root (no Root Directory setting needed). The site runs in server mode
so the AI Assistant's `/api/chat` route works; set the env vars from `.env.example`
in Vercel.

See [DEPLOY-AND-SEO.md](DEPLOY-AND-SEO.md) for full deployment + SEO/Google setup,
including the AI Assistant key.

## Structure

```
app/         pages & routes (home, services, products, led-signs,
             service-areas, about, reviews, contact, sitemap, robots)
components/  reusable UI (Header, Footer, Hero, Portfolio, etc.)
lib/         site config + content data (services, products, areas, gallery)
public/      images (your real project photos in media_assets/) + logo
```
