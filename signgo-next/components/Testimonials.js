import { testimonials } from '@/lib/site';

export default function Testimonials() {
  return (
    <section className="testi">
      <div className="container">
        <div className="section-head">
          <span className="section-head__tag">Reviews</span>
          <h2>What Our Clients Say</h2>
        </div>
        <div className="testi__grid">
          {testimonials.map((t, i) => (
            <blockquote className="testi__card" key={i}>
              <div className="stars">★★★★★</div>
              <p>&ldquo;{t.p}&rdquo;</p>
              <cite>{t.c}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
