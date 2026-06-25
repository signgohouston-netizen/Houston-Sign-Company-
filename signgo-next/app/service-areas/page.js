import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/CtaBanner';
import { areas } from '@/lib/areas';

export const metadata = {
  title: 'Service Areas | Sign Go — Greater Houston Sign Company',
  description:
    'Sign Go serves Houston and the surrounding area — Katy, Cypress, Sugar Land, Spring, The Woodlands, Pearland, and more. Custom signs, wraps, and graphics.',
};

export default function ServiceAreasIndex() {
  return (
    <>
      <PageHero
        title="Service Areas"
        sub="Proudly serving Houston & the surrounding communities"
        img="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1400&q=80"
      />

      <section className="svc-intro">
        <div className="container svc-intro__inner">
          <span className="section-head__tag">Sign Go • Houston, TX</span>
          <h2>Where We Work</h2>
          <p>
            Based at 9900 Wilcrest Dr in Houston, Sign Go provides custom signs, vehicle wraps,
            and graphics throughout the Greater Houston and Harris County area. Don’t see your city
            listed? Give us a call at {''}
            <a href="tel:2818141111">281-814-1111</a> — chances are we serve you too.
          </p>
        </div>
      </section>

      <section className="svc-types" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="areas__grid">
            {areas.map((a) => (
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
