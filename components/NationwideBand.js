import Link from 'next/link';
import { site } from '@/lib/site';

export default function NationwideBand() {
  return (
    <section className="nationwide" id="nationwide">
      <div className="container nationwide__grid">
        <div className="nationwide__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/usa-map.png" alt="Sign Go ships custom signs nationwide across the USA" loading="lazy" />
        </div>
        <div className="nationwide__text">
          <span className="section-head__tag">Factory-Direct • Nationwide</span>
          <h2>A Houston Sign Manufacturer That Ships Coast to Coast</h2>
          <p>
            {site.name} isn&apos;t just a local sign shop — we&apos;re a factory-direct manufacturer.
            Because we build everything in-house, we cut out the middleman to deliver better quality
            and pricing, then ship finished signs to businesses anywhere in the country.
          </p>
          <ul className="checklist">
            <li>Factory-direct manufacturing — no middleman markup</li>
            <li>Local design, production &amp; installation in Houston</li>
            <li>Custom signs crated and shipped nationwide</li>
            <li>One team from concept to delivery</li>
          </ul>
          <div className="nationwide__actions">
            <Link href="/contact-us" className="btn btn--primary">Get a Free Quote</Link>
            <a href={site.phoneHref} className="btn btn--blue">Call {site.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
