import { projectPhotos } from '@/lib/gallery';

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <span className="section-head__tag">Our Work</span>
          <h2>Recent Sign Projects in Houston</h2>
          <p>A look at custom signs, wraps, and graphics we&apos;ve produced for Houston businesses.</p>
        </div>
        <div className="gallery__grid">
          {projectPhotos.slice(0, 12).map((p) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img className="gallery__item" key={p.src} src={p.src} alt={p.alt} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
