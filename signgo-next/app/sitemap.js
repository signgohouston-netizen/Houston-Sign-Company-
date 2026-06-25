import { site } from '@/lib/site';
import { serviceList } from '@/lib/services';
import { products } from '@/lib/products';
import { areas } from '@/lib/areas';

// Generates /sitemap.xml at build time covering every page on the site.
export default function sitemap() {
  const base = site.url;

  const staticPages = ['', '/about', '/led-signs', '/services', '/service-areas', '/reviews', '/contact-us'];
  const categoryPages = serviceList.map((s) => `/${s.slug}`);
  const productPages = products.map((p) => `/services/${p.slug}`);
  const areaPages = areas.map((a) => `/service-areas/${a.slug}`);

  const all = [...staticPages, ...categoryPages, ...productPages, ...areaPages];

  return all.map((path) => ({
    url: `${base}${path}/`.replace(/\/+$/, '/'),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.includes('/services/') || path.includes('/service-areas/') ? 0.7 : 0.8,
  }));
}
