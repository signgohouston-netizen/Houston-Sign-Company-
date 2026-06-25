import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <p className="hero__eyebrow">THE SIGN PROFESSIONALS • HOUSTON, TX</p>
        <h1 className="hero__title">Custom Signs That<br />Grow Your Business</h1>
        <p className="hero__sub">Design &nbsp;|&nbsp; Production &nbsp;|&nbsp; Installation</p>
        <p className="hero__lead">
          Bright signs, clean fabrication, and sharp installs. From storefront channel letters to full
          vehicle wraps, {site.name} brings your brand to life — built right, on time, and on budget.
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
