import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Process from '@/components/Process';
import CtaBanner from '@/components/CtaBanner';
import { site } from '@/lib/site';
import { areas, getArea } from '@/lib/areas';
import { categories } from '@/lib/products';

export function generateStaticParams() {
  return areas.map((a) => ({ city: a.slug }));
}

export function generateMetadata({ params }) {
  const a = getArea(params.city);
  if (!a) return {};
  return {
    title: `Signs, Wraps & Graphics in ${a.name}, TX`,
    description: `${site.name} provides custom signs, vehicle wraps, and graphics in ${a.name}, TX. Indoor & outdoor signs, banners, and more. Call ${site.phone} for a free quote.`,
    alternates: { canonical: `/service-areas/${a.slug}/` },
  };
}

export default function CityPage({ params }) {
  const area = getArea(params.city);
  if (!area) notFound();

  const others = areas.filter((a) => a.slug !== area.slug).slice(0, 12);

  return (
    <>
      <PageHero
        title={`Signs & Wraps in ${area.name}, TX`}
        sub="Design | Production | Installation"
        img="https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=1400&q=80"
        location={`${area.name}, TX`}
      />

      <section className="svc-intro">
        <div className="container svc-intro__inner">
          <span className="section-head__tag">Your Local {area.name} Sign Company</span>
          <h2>Custom Signs in {area.name}, Texas</h2>
          <p>
            {site.name} is proud to serve businesses in {area.name} and the surrounding area. {area.blurb}{' '}
            From a single banner to a full storefront sign package or fleet wrap, we handle the
            design, production, and installation in-house.
          </p>
          <p>
            Whether you’re opening a new location, rebranding, or replacing a worn-out sign, our
            team helps {area.name} businesses get noticed with high-quality signage built to last in
            the Texas climate. Call <a href={site.phoneHref}>{site.phone}</a> or request a free
            quote to get started.
          </p>
          <div className="svc-intro__actions">
            <Link href="/contact-us" className="btn btn--primary">Get a Free Quote</Link>
            <a href={site.phoneHref} className="btn btn--ghost btn--dark">Call {site.phone}</a>
          </div>
        </div>
      </section>

      <section className="svc-types">
        <div className="container">
          <div className="section-head">
            <span className="section-head__tag">What We Offer in {area.name}</span>
            <h2>Our Services</h2>
          </div>
          <div className="svc-types__grid">
            {Object.entries(categories).map(([key, cat]) => (
              <Link className="svc-type" href={cat.parent} key={key}>
                <h3>{cat.label}</h3>
                <p>Professional {cat.label.toLowerCase()} for {area.name} businesses.</p>
                <span className="svc-type__link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Process />

      <section className="svc-types" style={{ paddingTop: '60px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-head__tag">Nearby</span>
            <h2>Other Areas We Serve</h2>
          </div>
          <div className="areas__grid">
            {others.map((a) => (
              <Link className="area-chip" href={`/service-areas/${a.slug}`} key={a.slug}>
                {a.name}, TX
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
