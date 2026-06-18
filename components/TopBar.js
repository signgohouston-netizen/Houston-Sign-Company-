import { site } from '@/lib/site';
import { PinIcon, MailIcon, FacebookIcon, InstagramIcon } from '@/lib/icons';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__contact">
          <a href={`https://maps.google.com/?q=${site.mapQuery}`} target="_blank" rel="noopener noreferrer">
            <PinIcon /> {site.address}
          </a>
          <a href={`mailto:${site.email}`}>
            <MailIcon /> {site.email}
          </a>
        </div>
        <div className="topbar__social">
          <span className="topbar__hours">{site.hours}</span>
          <a href="#" aria-label="Facebook"><FacebookIcon /></a>
          <a href="#" aria-label="Instagram"><InstagramIcon /></a>
        </div>
      </div>
    </div>
  );
}
