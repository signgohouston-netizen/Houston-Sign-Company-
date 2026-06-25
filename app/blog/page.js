import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/CtaBanner';
import { postsByDate, formatDate } from '@/lib/blog';

export const metadata = {
  title: 'Sign Blog — Tips & Guides for Houston Businesses',
  description:
    'The Sign Go blog — practical guides on business signs, LED displays, vehicle wraps, sign permits, and more for Houston business owners.',
  alternates: { canonical: '/blog/' },
};

export default function BlogIndex() {
  return (
    <>
      <PageHero
        title="Sign Go Blog"
        sub="Tips & guides for Houston businesses"
        img="/media_assets/led/led-design-permit-install.jpg"
      />

      <section className="svc-types" style={{ paddingTop: '70px' }}>
        <div className="container">
          <div className="blog__grid">
            {postsByDate.map((p) => (
              <Link className="blog-card" href={`/blog/${p.slug}`} key={p.slug}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="blog-card__img" src={p.cover} alt={p.coverAlt} loading="lazy" />
                <div className="blog-card__body">
                  <span className="blog-card__meta">{formatDate(p.date)} • {p.readMins} min read</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="svc-type__link">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
