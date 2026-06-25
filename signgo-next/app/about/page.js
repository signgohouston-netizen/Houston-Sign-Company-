import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Process from '@/components/Process';
import CtaBanner from '@/components/CtaBanner';
import { bg } from '@/lib/bg';
import { site } from '@/lib/site';

export const metadata = {
  title: 'About Sign Go | The Sign Professionals in Houston, TX',
  description:
    'Learn about Sign Go — a full-service Houston sign company offering custom signs, vehicle wraps, and graphics. Design, production, and installation done right.',
};

const values = [
  { h: 'Quality That Lasts', p: 'We use durable materials and proven techniques so your sign looks great for years, not months.' },
  { h: 'On Time & On Budget', p: 'We respect your deadline and your budget, and we communicate clearly every step of the way.' },
  { h: 'In-House Everything', p: 'Design, production, and installation all happen with our own team — no handoffs, no surprises.' },
  { h: 'Local & Dependable', p: 'We’re part of the Houston community and we stand behind every project we deliver.' },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Sign Go"
        sub="The Sign Professionals"
        img="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1400&q=80"
      />

      <section className="about">
        <div className="container about__grid">
          <div className="about__media">
            <div
              className="about__img"
              style={bg('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80')}
            />
            <div className="about__badge">
              <strong>The Sign</strong>
              <span>Professionals</span>
            </div>
          </div>
          <div className="about__text">
            <span className="section-head__tag">Who We Are</span>
            <h2>Your Complete Houston Sign Company</h2>
            <p>
              Sign Go is a full-service sign company based at 9900 Wilcrest Dr in Houston, Texas.
              We help businesses of every size — from local shops and restaurants to schools,
              churches, and large organizations — stand out with signage that gets noticed.
            </p>
            <p>
              We believe a great sign is part craftsmanship and part communication. That’s why we
              take the time to understand your brand and your goals before we ever start designing.
              From there, our team handles the entire process under one roof: design, fabrication,
              and a clean, professional installation.
            </p>
            <ul className="checklist">
              <li>Indoor &amp; outdoor signs, wraps, and graphics</li>
              <li>Experienced in-house design &amp; production team</li>
              <li>Durable materials built for the Texas climate</li>
              <li>Serving Houston &amp; the surrounding area</li>
            </ul>
            <Link href="/contact-us" className="btn btn--primary">Request a Free Consultation</Link>
          </div>
        </div>
      </section>

      <section className="svc-types" style={{ background: 'var(--charcoal)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-head__tag">Why Choose Us</span>
            <h2>What Sets Sign Go Apart</h2>
          </div>
          <div className="svc-types__grid">
            {values.map((v) => (
              <div className="svc-type" key={v.h}>
                <h3>{v.h}</h3>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CtaBanner />
    </>
  );
}
