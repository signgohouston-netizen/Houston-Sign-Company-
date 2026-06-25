import Link from 'next/link';
import PageHero from './PageHero';
import Process from './Process';
import CtaBanner from './CtaBanner';
import { site } from '@/lib/site';
import { productsByCategory } from '@/lib/products';

// Renders a complete service page from a data object in lib/services.js.
// The grid of types is generated from the products in this category, and each
// card links to its own product page (/services/<slug>).
export default function ServicePage({ data }) {
  const items = productsByCategory[data.categoryKey] || [];

  return (
    <>
      <PageHero title={data.heroTitle} sub={data.heroSub} img={data.heroImg} />

      <section className="svc-intro">
        <div className="container svc-intro__inner">
          <span className="section-head__tag">{site.name} • The Sign Professionals</span>
          <h2>{data.heroTitle} in Houston</h2>
          {data.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="svc-types">
        <div className="container">
          <div className="section-head">
            <span className="section-head__tag">What We Offer</span>
            <h2>{data.typesHeading}</h2>
          </div>
          <div className="svc-types__grid">
            {items.map((t) => (
              <Link className="svc-type" href={`/services/${t.slug}`} key={t.slug}>
                <h3>{t.name}</h3>
                <p>{t.short}</p>
                <span className="svc-type__link">Learn more →</span>
              </Link>
            ))}
          </div>
          {data.closing && <p className="svc-types__closing">{data.closing}</p>}
        </div>
      </section>

      <Process />
      <CtaBanner />
    </>
  );
}
