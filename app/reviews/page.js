import PageHero from '@/components/PageHero';
import Credentials from '@/components/Credentials';
import CtaBanner from '@/components/CtaBanner';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Reviews & Testimonials',
  description:
    'See what Houston businesses say about Sign Go — a BBB-accredited sign company with 25+ years in business. Custom signs, vehicle wraps, and graphics done right.',
  alternates: { canonical: '/reviews/' },
};

// Featured customer reviews. Replace with your real Google review quotes.
const reviews = [
  { p: 'Sign Go made our new storefront sign look incredible. Great communication and the install was quick and clean.', c: 'Marcus T.', loc: 'Houston' },
  { p: 'They wrapped our entire fleet and the quality is outstanding. Our trucks get noticed everywhere now.', c: 'Priya S.', loc: 'Sugar Land' },
  { p: 'Professional from start to finish. Fair pricing, fast turnaround, and the design team nailed our brand.', c: 'Daniel R.', loc: 'Katy' },
  { p: 'Our lobby sign turned out better than we imagined. The whole office gets compliments on it.', c: 'Andrea M.', loc: 'Bellaire' },
  { p: 'Needed banners for a grand opening on a tight deadline — they delivered early and they looked great.', c: 'Kevin O.', loc: 'Spring' },
  { p: 'From the first call to the install, everyone was helpful and on top of it. Highly recommend.', c: 'Lucia G.', loc: 'Pasadena' },
  { p: 'Channel letters on our building look sharp and the lighting is perfect at night. Worth every penny.', c: 'Brandon W.', loc: 'Cypress' },
  { p: 'They handled the design and the permit headaches for our monument sign. Stress-free experience.', c: 'Nadia H.', loc: 'Stafford' },
  { p: 'Great team, great product. We’ve already sent them two more projects.', c: 'Eric P.', loc: 'Missouri City' },
];

export default function Page() {
  const heading = site.googleRating
    ? `Rated ${site.googleRating} Stars on Google`
    : 'What Houston Businesses Say';

  // AggregateRating schema only when real numbers are provided (no fabrication).
  const jsonLd =
    site.googleRating && site.googleReviewCount
      ? {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: site.name,
          url: site.url,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: site.googleRating,
            reviewCount: site.googleReviewCount,
          },
        }
      : null;

  return (
    <>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}

      <PageHero
        title="Reviews & Testimonials"
        sub="What Houston businesses say about working with Sign Go"
        img="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80"
      />

      <Credentials />

      <section className="reviews">
        <div className="container">
          <div className="section-head">
            <span className="section-head__tag">Our Reputation</span>
            <h2>{heading}</h2>
            <div className="stars" style={{ fontSize: '28px' }}>★★★★★</div>
            <p>
              A BBB-accredited sign company with {site.yearsInBusiness}+ years serving Houston-area
              businesses. {site.googleReviewsUrl ? '' : 'Find us on Google to read more reviews.'}
            </p>
            {site.googleReviewsUrl && (
              <div className="reviews__actions">
                <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Read Reviews on Google</a>
                <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--blue">Leave a Review</a>
              </div>
            )}
          </div>

          <div className="reviews__grid">
            {reviews.map((r, i) => (
              <blockquote className="testi__card" key={i}>
                <div className="stars">★★★★★</div>
                <p>&ldquo;{r.p}&rdquo;</p>
                <cite>— {r.c}, {r.loc}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
