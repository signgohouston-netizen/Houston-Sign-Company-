import Link from 'next/link';
import Logo from './Logo';
import { site } from '@/lib/site';
import { areas } from '@/lib/areas';
import { FacebookIcon, InstagramIcon } from '@/lib/icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <Logo className="footer__logo" fallbackClass="brand__fallback brand__fallback--lg" />
          <p>Houston&apos;s sign professionals. Custom signs, wraps, and graphics — designed, produced, and installed right.</p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/led-signs">Full-Color LED Signs</Link></li>
            <li><Link href="/interior-signs">Indoor Signs</Link></li>
            <li><Link href="/exterior-signs">Outdoor Signs</Link></li>
            <li><Link href="/vehicle-wraps">Vehicle Wraps</Link></li>
            <li><Link href="/vinyl-signs">Vinyl Signs</Link></li>
            <li><Link href="/custom-signs">Custom Signs</Link></li>
            <li><Link href="/trade-show-displays">Trade Show Displays</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">All Services</Link></li>
            <li><Link href="/service-areas">Service Areas</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/assistant">AI Assistant</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/contact-us">Get a Quote</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Service Areas</h4>
          <ul>
            {areas.slice(0, 8).map((a) => (
              <li key={a.slug}><Link href={`/service-areas/${a.slug}`}>{a.name}, TX</Link></li>
            ))}
            <li><Link href="/service-areas">View all areas →</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li><a href={`https://maps.google.com/?q=${site.mapQuery}`} target="_blank" rel="noopener noreferrer">9900 Wilcrest Dr<br />Houston, TX 77099</a></li>
            <li><a href={site.phoneHref}>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__trust">BBB Accredited Business · Factory-Direct Manufacturer · Serving Houston since {site.founded}</p>
          <p>&copy; {year} Sign Go — The Sign Professionals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
