// FAQ section with FAQPage structured data (eligible for rich results in Google).
// Server component — uses native <details> so it needs no client JS.
export default function Faq({ items, heading = 'Frequently Asked Questions', tag = 'FAQ' }) {
  if (!items || !items.length) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };

  return (
    <section className="faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container">
        <div className="section-head">
          <span className="section-head__tag">{tag}</span>
          <h2>{heading}</h2>
        </div>
        <div className="faq__list">
          {items.map((it, i) => (
            <details className="faq__item" key={i}>
              <summary>{it.q}</summary>
              <div className="faq__a">
                <p>{it.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
