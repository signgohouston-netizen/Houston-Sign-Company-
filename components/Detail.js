import { detailItems } from '@/lib/site';

export default function Detail() {
  return (
    <section className="detail" id="services-detail">
      <div className="container">
        <div className="section-head">
          <span className="section-head__tag">Full Service</span>
          <h2>Vinyl Signs, Banners &amp; Graphics</h2>
          <p>Need it fast and affordable? Our vinyl and large-format products cover events, promotions, and everyday branding.</p>
        </div>
        <div className="detail__grid">
          {detailItems.map((d) => (
            <div className="detail__item" key={d.h}>
              <h4>{d.h}</h4>
              <p>{d.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
