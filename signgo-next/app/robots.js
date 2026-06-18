import { site } from '@/lib/site';

// Generates /robots.txt pointing crawlers at the sitemap.
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
