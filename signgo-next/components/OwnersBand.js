import Link from 'next/link';
import { site } from '@/lib/site';

export default function OwnersBand() {
  return (
    <section className="owners">
      <div className="container owners__grid">
        <div className="owners__text">
          <span className="section-head__tag">Why Sign Go</span>
          <h2>Built for Owners Who Need the Sign Done Right</h2>
          <p>
            From shop-floor precision to street-level impact, we make the whole process simple — one
            team handling design, fabrication, permitting, and installation so nothing falls through
            the cracks.
          </p>
          <ul className="checklist">
            <li>In-house design, production &amp; install crews</li>
            <li>Turnkey permitting handled for you</li>
            <li>Durable materials built for the Texas climate</li>
            <li>Clear timelines and honest pricing</li>
          </ul>
          <Link href="/contact-us" className="btn btn--primary">Start Your Sign Project</Link>
        </div>
        <div className="owners__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media_assets/sign-factory-fabrication.jpg" alt={`${site.name} fabrication shop building custom signs in Houston`} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
