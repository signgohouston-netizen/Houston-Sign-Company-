import { bg } from '@/lib/bg';

// Reusable alternating text/image section. `reverse` swaps image to the left.
export default function Split({ id, alt, reverse, tag, title, children, tags, img }) {
  const media = <div className="split__media" style={bg(img)} />;
  return (
    <section className={`split${alt ? ' split--alt' : ''}`} id={id}>
      <div className={`container split__grid${reverse ? ' split__grid--rev' : ''}`}>
        {reverse && media}
        <div className="split__text">
          <span className="section-head__tag">{tag}</span>
          <h2>{title}</h2>
          <p>{children}</p>
          <div className="taglist">
            {tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <a href="#contact" className="btn btn--primary">Get a Quote</a>
        </div>
        {!reverse && media}
      </div>
    </section>
  );
}
