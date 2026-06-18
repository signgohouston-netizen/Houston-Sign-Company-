'use client';

import { useState, useRef, useEffect } from 'react';

// Fallback chain: real raster logo → SVG recreation → styled text.
const SOURCES = ['/assets/logo.png', '/assets/logo.svg'];

export default function Logo({ className = 'brand__logo', fallbackClass = 'brand__fallback' }) {
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);

  // Advance only if the source that failed is still the one on screen. Both
  // onError and the mount check can fire for the same image; comparing the
  // index makes the advance idempotent so we never skip a fallback source.
  const advanceFrom = (badIdx) => setIdx((i) => (i === badIdx ? i + 1 : i));

  // Catch images that error *before* React hydrates and attaches onError.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) advanceFrom(idx);
  }, [idx]);

  if (idx >= SOURCES.length) {
    return (
      <span className={fallbackClass}>
        SIGN<span>GO</span>
      </span>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      ref={ref}
      key={SOURCES[idx]}
      src={SOURCES[idx]}
      alt="Sign Go — The Sign Professionals"
      className={className}
      onError={() => advanceFrom(idx)}
    />
  );
}
