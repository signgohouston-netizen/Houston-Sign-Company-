import { site } from '@/lib/site';
import { serviceList } from '@/lib/services';
import { products } from '@/lib/products';
import { areas } from '@/lib/areas';
import { posts } from '@/lib/blog';

// Generates /sitemap.xml at build time covering every page on the site.
export default function sitemap() {
  const base = site.url;

  const staticPages = ['', '/about', '/led-signs', '/services', '/service-areas', '/blog', '/assistant', '/reviews', '/contact-us'];
  const categoryPages = serviceList.map((s) => `/${s.slug}`);
  const productPages = products.map((p) => `/services/${p.slug}`);
  const areaPages = areas.map((a) => `/service-areas/${a.slug}`);
  const blogPages = posts.map((p) => `/blog/${p.slug}`);

  const all = [...staticPages, ...categoryPages, ...productPages, ...areaPages, ...blogPages];

  return all.map((path) => ({
    url: `${base}${path}/`.replace(/\/+$/, '/'),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.includes('/services/') || path.includes('/service-areas/') ? 0.7 : 0.8,
  }));
}
