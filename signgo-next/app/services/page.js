import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/CtaBanner';
import { categories, productsByCategory } from '@/lib/products';

export const metadata = {
  title: 'All Sign Services & Products | Sign Go Houston',
  description:
    'Browse every sign type Sign Go offers in Houston — indoor signs, outdoor signs, vehicle wraps, vinyl graphics, custom signs, and trade show displays.',
};

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        title="Our Sign Services"
        sub="Everything we design, build, and install"
        img="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80"
      />

      {Object.entries(categories).map(([key, cat]) => (
        <section className="svc-types" key={key} style={{ paddingTop: '60px', paddingBottom: 0 }}>
          <div className="container">
            <div className="section-head" style={{ marginBottom: '30px' }}>
              <span className="section-head__tag">{cat.label}</span>
              <h2>
                <Link href={cat.parent}>{cat.label}</Link>
              </h2>
            </div>
            <div className="svc-types__grid">
              {(productsByCategory[key] || []).map((p) => (
                <Link className="svc-type" href={`/services/${p.slug}`} key={p.slug}>
                  <h3>{p.name}</h3>
                  <p>{p.short}</p>
                  <span className="svc-type__link">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <div style={{ height: '70px' }} />
      <CtaBanner />
    </>
  );
}
