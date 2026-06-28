import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/CtaBanner';
import { site } from '@/lib/site';
import { products, getProduct, productsByCategory, categories } from '@/lib/products';
import { photoFor } from '@/lib/gallery';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} in Houston, TX`,
    description: `${p.short} ${site.name} designs, produces, and installs ${p.name.toLowerCase()} in Houston and the surrounding area. Call ${site.phone} for a free quote.`,
    alternates: { canonical: `/services/${p.slug}/` },
  };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const cat = categories[product.category];
  const photo = photoFor(product.slug);
  const heroImg = photo ? photo.src : cat.img;
  const related = (productsByCategory[product.category] || [])
    .filter((p) => p.slug !== product.slug)
    .slice(0, 6);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: cat.label, item: `${site.url}${cat.parent}/` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${site.url}/services/${product.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHero title={product.name} sub="Design | Production | Installation" img={heroImg} />

      <section className="svc-intro">
        <div className="container svc-intro__inner">
          <p className="crumbs">
            <Link href="/">Home</Link> <span>/</span>{' '}
            <Link href={cat.parent}>{cat.label}</Link> <span>/</span> {product.name}
          </p>
          <span className="section-head__tag">{site.name} • Houston, TX</span>
          <h2>{product.name} in Houston</h2>
          {photo && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img className="svc-photo" src={photo.src} alt={photo.alt} loading="lazy" />
          )}
          <p>{product.desc}</p>
          <p>
            At {site.name}, we handle your {product.name.toLowerCase()} from concept to
            completion — design, production, and professional installation. We serve businesses
            across Houston and the Greater Houston area, and we’re happy to help you choose the
            right materials, size, and finish for your goals and budget.
          </p>
          <div className="svc-intro__actions">
            <Link href="/contact-us" className="btn btn--primary">Get a Free Quote</Link>
            <a href={site.phoneHref} className="btn btn--ghost btn--dark">Call {site.phone}</a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="svc-types">
          <div className="container">
            <div className="section-head">
              <span className="section-head__tag">Related</span>
              <h2>More {cat.label}</h2>
            </div>
            <div className="svc-types__grid">
              {related.map((r) => (
                <Link className="svc-type" href={`/services/${r.slug}`} key={r.slug}>
                  <h3>{r.name}</h3>
                  <p>{r.short}</p>
                  <span className="svc-type__link">Learn more →</span>
                </Link>
              ))}
            </div>
            <p className="svc-types__closing">
              <Link href={cat.parent} className="btn btn--primary">View all {cat.label}</Link>
            </p>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
