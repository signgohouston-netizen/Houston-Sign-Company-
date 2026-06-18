import { bg } from '@/lib/bg';
import { site } from '@/lib/site';

// Compact hero used at the top of inner pages.
export default function PageHero({ title, sub, img, location = 'Houston, TX' }) {
  return (
    <section className="page-hero" style={img ? bg(img) : undefined}>
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        <p className="page-hero__eyebrow">{site.name} • {location}</p>
        <h1>{title}</h1>
        {sub && <p className="page-hero__sub">{sub}</p>}
        <div className="page-hero__actions">
          <a href="/contact-us" className="btn btn--primary">Get a Free Quote</a>
          <a href={site.phoneHref} className="btn btn--ghost">Call {site.phone}</a>
        </div>
      </div>
    </section>
  );
}
