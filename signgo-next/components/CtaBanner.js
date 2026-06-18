import { site } from '@/lib/site';

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div>
          <h2>Ready to Make Your Storefront Impossible to Miss?</h2>
          <p>Get fast pricing from Houston&apos;s sign professionals today.</p>
        </div>
        <div className="cta-banner__actions">
          <a href={site.phoneHref} className="btn btn--light btn--lg">Call the Sign Professionals</a>
          <a href="/contact-us" className="btn btn--light btn--lg">Request Fast Pricing</a>
        </div>
      </div>
    </section>
  );
}
