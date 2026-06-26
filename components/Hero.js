import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <p className="hero__eyebrow">FACTORY-DIRECT MANUFACTURER • NATIONWIDE SIGN COMPANY</p>
        <h1 className="hero__title">Custom Signs That<br />Grow Your Business</h1>
        <p className="hero__sub">Design &nbsp;|&nbsp; Manufacturing &nbsp;|&nbsp; Installation</p>
        <p className="hero__lead">
          As a factory-direct sign manufacturer, {site.name} cuts out the middleman to deliver better
          quality and pricing. Based in Houston and shipping nationwide, we bring your brand to life —
          built right, on time, and on budget.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary btn--lg">Get Free Quote</a>
          <a href={site.phoneHref} className="btn btn--blue btn--lg">Call {site.phone}</a>
          <a href="#portfolio" className="btn btn--ghost btn--lg">View Portfolio</a>
        </div>
      </div>
    </section>
  );
}
