import Link from 'next/link';

// Service tiles matching signgotx.com's lineup, each with a distinct real photo.
const M = '/media_assets';
const tiles = [
  { label: 'Channel Letters', href: '/services/channel-letters', src: `${M}/chase-bank-channel-letter-sign.jpg`, alt: 'Chase Bank channel letter sign by Sign Go Houston' },
  { label: 'LED Signs', href: '/led-signs', src: `${M}/led/led-full-color-storefront.jpg`, alt: 'Full-color LED storefront sign by Sign Go Houston' },
  { label: 'Vehicle Wraps', href: '/vehicle-wraps', src: `${M}/food-truck-wrap.jpeg`, alt: 'Food truck vehicle wrap by Sign Go Houston' },
  { label: 'Storefront Signs', href: '/services/storefront-signs', src: `${M}/wendys-restaurant-sign.jpg`, alt: "Wendy's storefront sign by Sign Go Houston" },
  { label: 'Monument Signs', href: '/services/monument-signs', src: `${M}/masjid-sign.jpg`, alt: 'Masjid monument sign by Sign Go Houston' },
  { label: 'Window Graphics', href: '/services/window-graphics', src: `${M}/window-wrap-graphics.jpg`, alt: 'Storefront window graphics by Sign Go Houston' },
  { label: 'CNC Cutting', href: '/custom-signs', src: `${M}/sign-factory-fabrication.jpg`, alt: 'CNC sign fabrication at the Sign Go shop' },
  { label: 'Banners & Printing', href: '/services/banners', src: `${M}/stock/trade-show-presentation-backdrop.jpg`, alt: 'Large-format banner printing by Sign Go' },
];

export default function Services() {
  return (
    <section className="svc-dark" id="services">
      <div className="container">
        <div className="section-head">
          <span className="section-head__tag">What We Do</span>
          <h2>Bright Signs, Clean Fabrication, Sharp Installs</h2>
          <p>Full-service signage for Houston businesses — designed, built, and installed by our own team.</p>
        </div>

        <div className="svc-grid">
          {tiles.map((t) => (
            <Link className="svc-tile" href={t.href} key={t.label}>
              <span className="svc-tile__accent" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.src} alt={t.alt} loading="lazy" />
              <div className="svc-tile__overlay" />
              <div className="svc-tile__body">
                <h3>{t.label}</h3>
                <span>View service →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
