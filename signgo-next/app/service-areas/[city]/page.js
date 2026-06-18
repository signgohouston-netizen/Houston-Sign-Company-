import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Process from '@/components/Process';
import CtaBanner from '@/components/CtaBanner';
import { site } from '@/lib/site';
import { areas, getArea, areaIndex } from '@/lib/areas';
import { categories } from '@/lib/products';
import { projectPhotos } from '@/lib/gallery';

export function generateStaticParams() {
  return areas.map((a) => ({ city: a.slug }));
}

// Joins a list into readable prose: "A, B and C".
function list(items) {
  if (!items || !items.length) return '';
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

export function generateMetadata({ params }) {
  const a = getArea(params.city);
  if (!a) return {};
  const lm = a.landmarks && a.landmarks.length ? ` near ${a.landmarks[0]}` : '';
  return {
    title: `Signs, Wraps & Graphics in ${a.name}, TX`,
    description: `Custom signs, channel letters, LED signs, and vehicle wraps in ${a.name}, ${a.county}${lm}. ${site.name} handles design, permitting & installation. Call ${site.phone} for a free quote.`,
    alternates: { canonical: `/service-areas/${a.slug}/` },
  };
}

export default function CityPage({ params }) {
  const area = getArea(params.city);
  if (!area) notFound();

  // Unique project photo per city (rotates through real project photos).
  const i = areaIndex(area.slug);
  const photo = projectPhotos[i % projectPhotos.length];

  const others = areas.filter((a) => a.slug !== area.slug).slice(0, 12);

  return (
    <>
      <PageHero
        title={`Signs & Wraps in ${area.name}, TX`}
        sub="Design | Production | Installation"
        img={photo.src}
        location={`${area.name}, TX`}
      />

      <section className="svc-intro">
        <div className="container svc-intro__inner">
          <span className="section-head__tag">Your Local {area.name} Sign Company</span>
          <h2>Custom Signs in {area.name}, Texas</h2>
          <p>
            {site.name} is a full-service sign company serving businesses throughout {area.name} and{' '}
            {area.county}. {area.blurb} From a single banner to a full storefront sign package or
            fleet wrap, we handle the design, permitting, production, and installation in-house.
          </p>
          {area.landmarks && area.landmarks.length > 0 && (
            <p>
              We work with shops, restaurants, offices, and organizations all around {area.name} —
              from {list(area.landmarks)}. Wherever your business sits, we&apos;ll build signage that
              gets it noticed and stands up to the Texas weather.
            </p>
          )}
          <div className="svc-intro__actions">
            <Link href="/contact-us" className="btn btn--primary">Get a Free Quote</Link>
            <a href={site.phoneHref} className="btn btn--blue">Call {site.phone}</a>
          </div>
        </div>
      </section>

      <section className="svc-types">
        <div className="container">
          <div className="section-head">
            <span className="section-head__tag">What We Offer in {area.name}</span>
            <h2>Our Sign Services</h2>
          </div>
          <div className="svc-types__grid">
            <Link className="svc-type" href="/led-signs">
              <h3>Full-Color LED Signs</h3>
              <p>Bright digital displays for {area.name} storefronts and roadsides.</p>
              <span className="svc-type__link">Learn more →</span>
            </Link>
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

      {/* Local landmarks/areas — unique per city */}
      {area.landmarks && area.landmarks.length > 0 && (
        <section className="svc-types" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <span className="section-head__tag">Areas We Cover</span>
              <h2>Serving Businesses Across {area.name}</h2>
            </div>
            <div className="areas__grid">
              {area.landmarks.map((l) => (
                <span className="area-chip" key={l} style={{ cursor: 'default' }}>{l}</span>
              ))}
            </div>
          </div>
        </section>
      )}

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
