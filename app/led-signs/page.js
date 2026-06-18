import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Process from '@/components/Process';
import CtaBanner from '@/components/CtaBanner';
import { site } from '@/lib/site';
import { ledBusinessTypes, ledFeatures, ledGallery, ledHeroImg } from '@/lib/led';

export const metadata = {
  title: 'Full-Color LED Signs & Digital Displays in Houston, TX',
  description:
    'Sign Go builds full-color LED signs and digital displays for every type of Houston business — gas stations, restaurants, shopping centers, retail, offices, and truck stops. Design, permit & install. Call 281-814-1111.',
  alternates: { canonical: '/led-signs/' },
};

export default function LedSignsPage() {
  return (
    <>
      <PageHero
        title="Full-Color LED Signs"
        sub="Design • Permit • Install"
        img={ledHeroImg}
      />

      <section className="svc-intro">
        <div className="container svc-intro__inner">
          <span className="section-head__tag">{site.name} • Houston, TX</span>
          <h2>Full-Color LED Signs &amp; Digital Displays</h2>
          <p>
            Nothing grabs attention like a bright, full-color LED display. Whether you need to flash daily
            specials, rotate fuel prices, or run eye-catching video, {site.name} designs, permits, builds,
            and installs professional LED signs for businesses all across Houston.
          </p>
          <p>
            From outdoor monument displays and storefront signs to indoor video walls and custom LED neon,
            we deliver bright, reliable signage you can update in seconds — built to perform day and night.
          </p>
          <div className="svc-intro__actions">
            <Link href="/contact-us" className="btn btn--primary">Get a Free Quote</Link>
            <a href={site.phoneHref} className="btn btn--blue">Call {site.phone}</a>
          </div>
        </div>
      </section>

      {/* Business types */}
      <section className="svc-dark" id="led-business-types">
        <div className="container">
          <div className="section-head">
            <span className="section-head__tag">Every Industry</span>
            <h2>LED Signs for Every Type of Business</h2>
            <p>One LED partner for gas stations, restaurants, retail, offices, and more.</p>
          </div>
          <div className="svc-grid">
            {ledBusinessTypes.map((b) => (
              <Link className="svc-tile" href="/contact-us" key={b.name}>
                <span className="svc-tile__accent" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt={b.alt} loading="lazy" />
                <div className="svc-tile__overlay" />
                <div className="svc-tile__body">
                  <h3>{b.name}</h3>
                  <span>{b.desc}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why LED */}
      <section className="svc-types">
        <div className="container">
          <div className="section-head">
            <span className="section-head__tag">Why Go LED</span>
            <h2>The Brightest Way to Advertise</h2>
          </div>
          <div className="svc-types__grid">
            {ledFeatures.map((f) => (
              <div className="svc-type" key={f.h}>
                <h3>{f.h}</h3>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery" id="led-gallery">
        <div className="container">
          <div className="section-head">
            <span className="section-head__tag">Our Work</span>
            <h2>Recent LED Sign Projects</h2>
            <p>Real LED signs and digital displays built and installed by Sign Go.</p>
          </div>
          <div className="gallery__grid">
            {ledGallery.map((p) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img className="gallery__item" key={p.src} src={p.src} alt={p.alt} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CtaBanner />
    </>
  );
}
