'use client';

import { useState } from 'react';
import { projectPhotos } from '@/lib/gallery';

const FILTERS = ['All', 'Restaurants', 'Gas Stations', 'Retail', 'Vehicle Wraps', 'Indoor', 'Channel Letters'];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const shown = projectPhotos.filter(
    (p) => active === 'All' || (p.pcats || []).includes(active)
  );

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-head">
          <span className="section-head__tag">Portfolio</span>
          <h2>Real Houston Projects</h2>
          <p>Presented like the work matters — a look at signs and wraps we&apos;ve built across Houston.</p>
        </div>

        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {shown.map((p) => (
            <figure className="portfolio__item" key={p.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} loading="lazy" />
              <figcaption className="portfolio__cap">{p.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
