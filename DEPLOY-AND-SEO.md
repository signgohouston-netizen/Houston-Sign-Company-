# Deploy Sign Go + Get on Google — Step by Step

This is a Next.js app deployed on **Vercel** (server mode — the AI Assistant needs
a serverless function, so it is no longer a static `out/` export).

```bash
npm install      # first time only
npm run dev      # local preview at http://localhost:3000
npm run build    # production build
```

---

## AI ASSISTANT SETUP (required for the /assistant page to work)

The assistant calls Claude securely from the server, so it needs an API key set
in Vercel — never in the code.

1. Get an API key at **https://console.anthropic.com** (Billing → add a payment
   method; usage is pay-as-you-go).
2. Vercel → your project → **Settings → Environment Variables → Add**:
   - `ANTHROPIC_API_KEY` = your key  (required)
   - `SIGNGO_FORMSPREE_ID` = your Formspree form ID  (optional — lets the
     assistant email leads to you; same form as the contact form)
3. **Redeploy** (Deployments → ⋯ → Redeploy) so the new variables take effect.
4. Visit `https://www.houstonsignscompany.com/assistant` and test it.

**Cost:** the assistant uses Claude Opus 4.8 by default (most capable). For a
lead-capture bot you may prefer a cheaper model — open `lib/assistant.js` and
change `MODEL` to `'claude-haiku-4-5'` (~5x cheaper) or `'claude-sonnet-4-6'`
(~3x cheaper), then push. Set a monthly spend limit in the Anthropic console to
stay in control.

---

## PART 1 — Deploy to your domain (Vercel, recommended)

Your current site is already on Vercel, so this fits right in.

1. Go to **https://vercel.com** and sign in (use the same account your current
   signgotx.com is on, if you can).
2. Click **Add New → Project**.
3. **Import** this project:
   - Easiest: push the `signgo-next` folder to a GitHub repo, then "Import Git
     Repository" and pick it. Vercel auto-detects Next.js — just click Deploy.
   - Or use the Vercel CLI: `npm i -g vercel`, then run `vercel` inside
     `signgo-next` and follow the prompts.
4. After it deploys you'll get a temporary URL like `signgo-next.vercel.app`.
   Open it and confirm everything looks right.
5. **Point your domain at it:** Project → **Settings → Domains → Add** →
   type `signgotx.com` and `www.signgotx.com`.
   - If the domain is already in this Vercel account, it links instantly.
   - If it's elsewhere (GoDaddy, Namecheap, etc.), Vercel shows the exact DNS
     records (an `A` record and/or `CNAME`). Add those at your registrar.
     DNS can take 5 minutes to a few hours to take effect.
6. Vercel adds HTTPS automatically. Done — the new site is live on your domain.

> ⚠️ Replacing your current site: when you add `signgotx.com` to the new Vercel
> project, remove it from the old project first (Vercel won't let two projects
> claim the same domain). Keep the old project around for a week as a backup.

### Other hosts (if not Vercel)
- **Netlify:** drag the `out/` folder to https://app.netlify.com/drop, then add
  your domain under Domain settings.
- **cPanel / shared hosting:** upload the contents of `out/` to `public_html`.

---

## PART 2 — Quote form (so leads reach you)

The form already works two ways. Pick one:
- **Vercel/static:** sign up free at https://formspree.io, create a form that
  sends to `Info@signgotx.com`, copy the form ID, and paste it into
  `lib/site.js` → `formspreeId: 'yourid'`. Rebuild/redeploy.
- Do nothing and it falls back to opening the visitor's email app to you.

---

## PART 3 — Get found on Google

### A. Google Search Console (tells Google your site exists)
1. Go to **https://search.google.com/search-console** and sign in with
   `signgohouston@gmail.com` (or your business Google account).
2. Click **Add property → URL prefix** → enter `https://www.signgotx.com`.
3. **Verify** ownership. Easiest options:
   - If hosted on Vercel with the domain connected, use the **DNS TXT record**
     method (add the TXT record Google gives you at your registrar), or
   - Use the **HTML tag** method — send me the tag and I'll add it to the site.
4. Once verified: **Sitemaps** (left menu) → enter `sitemap.xml` → **Submit**.
   (Your sitemap lists all ~100 pages so Google can find them.)
5. Use **URL Inspection** on `https://www.signgotx.com/` → **Request indexing**
   to nudge Google to crawl the homepage now.

### B. Google Business Profile (the #1 local ranking factor)
This is what gets you in the Google Map pack for "sign company near me".
1. Go to **https://business.google.com** → **Manage now**.
2. Search for "Sign Go" — claim it if it exists, or create it.
3. Enter EXACTLY (must match the website character-for-character):
   - **Name:** Sign Go
   - **Address:** 9900 Wilcrest Dr, Houston, TX 77099
   - **Phone:** 281-814-1111
   - **Website:** https://www.signgotx.com
   - **Category:** Sign shop (add: Commercial printer, Vehicle wrapping service)
4. Verify (postcard, phone, or video — Google chooses).
5. Add your project photos (the same ones on the site), business hours
   (Mon–Fri 9–6), and a short description. Post updates occasionally.

### C. Ongoing (this is what actually moves rankings)
- **Reviews:** ask happy customers to leave Google reviews. Reply to each one.
- **Consistent listings (NAP):** make sure Name/Address/Phone are identical on
  Yelp, Bing Places, BBB, Facebook, Apple Maps, and any directories.
- **Fresh content:** the 60+ product pages and 24 city pages already target
  local searches like "channel letters Houston" and "signs in Katy TX".
  Add more city pages or a blog over time for more reach.
- **Backlinks:** get listed by suppliers, the chamber of commerce, and partners.

### What's already built in for SEO
- Unique title + description on every page
- LocalBusiness structured data (name, address, phone, hours, geo)
- sitemap.xml + robots.txt (auto-generated)
- Open Graph / Twitter preview image (og-image.png)
- Image alt text and clean, keyword-friendly URLs
- Fast static pages (good Core Web Vitals)

Results note: new sites typically take a few weeks to a few months to rank.
Search Console + Business Profile + reviews are what speed it up.
