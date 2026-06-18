# SignGo

Website for **Sign Go — The Sign Professionals**, a full-service sign company in Houston, TX.

- **Address:** 9900 Wilcrest Dr, Houston, TX 77099
- **Phone:** 281-814-1111
- **Email:** Info@signgotx.com

## Project structure

The production website is the Next.js app in [`signgo-next/`](signgo-next/).

```bash
cd signgo-next
npm install      # first time only
npm run dev      # local dev → http://localhost:3000
npm run build    # static export → signgo-next/out/
```

See [`signgo-next/DEPLOY-AND-SEO.md`](signgo-next/DEPLOY-AND-SEO.md) for deployment
and SEO setup. The `signgo-next/out/` folder is the deployable static site.

> Note: when deploying on Vercel, set the project **Root Directory** to `signgo-next`.
