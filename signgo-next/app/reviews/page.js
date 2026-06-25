import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/CtaBanner';

export const metadata = {
  title: 'Reviews & Testimonials | Sign Go Houston',
  description:
    'See what Houston businesses say about Sign Go — 5-star rated for custom signs, vehicle wraps, and graphics. Design, production & installation done right.',
};

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
  return (
    <>
      <PageHero
        title="Reviews & Testimonials"
        sub="What Houston businesses say about working with Sign Go"
        img="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80"
      />

      <section className="reviews">
        <div className="container">
          <div className="section-head">
            <span className="section-head__tag">Our Reputation</span>
            <h2>Rated 5.0 Stars by Local Businesses</h2>
            <div className="stars" style={{ fontSize: '28px' }}>★★★★★</div>
            <p>We’re proud of the relationships we’ve built across the Houston area.</p>
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
