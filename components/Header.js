'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { site } from '@/lib/site';
import { serviceList } from '@/lib/services';
import { areas } from '@/lib/areas';

const menu = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    children: [
      { label: 'Full-Color LED Signs', href: '/led-signs' },
      ...serviceList.map((s) => ({ label: s.navLabel, href: `/${s.slug}` })),
      { label: 'All Services', href: '/services' },
    ],
  },
  {
    label: 'Service Areas',
    children: [
      ...areas.slice(0, 10).map((a) => ({ label: `${a.name}, TX`, href: `/service-areas/${a.slug}` })),
      { label: 'All Service Areas', href: '/service-areas' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'AI Assistant', href: '/assistant' },
  { label: 'Contact', href: '/contact-us' },
];

export default function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const [sub, setSub] = useState(null); // which dropdown is expanded (mobile)
  const pathname = usePathname();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
        setSub(null);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => {
    setOpen(false);
    setSub(null);
  };

  return (
    <header className="header" id="header">
      <div className="container header__inner">
        <Link href="/" className="brand" onClick={close}>
          <Logo />
        </Link>

        <nav className={`nav${open ? ' open' : ''}`} id="nav">
          {menu.map((item) =>
            item.children ? (
              <div className={`nav__item nav__item--has${sub === item.label ? ' open' : ''}`} key={item.label}>
                <button
                  type="button"
                  className="nav__top"
                  onClick={() => setSub(sub === item.label ? null : item.label)}
                >
                  {item.label} <span className="caret">▾</span>
                </button>
                <div className="nav__dropdown">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} onClick={close}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`nav__top${(item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)) ? ' active' : ''}`}
                onClick={close}
              >
                {item.label}
              </Link>
            )
          )}
          <a href={site.phoneHref} className="nav__phone">📞 {site.phone}</a>
        </nav>

        <Link href="/contact-us" className="btn btn--primary header__cta">Free Quote</Link>
        <button
          className="hamburger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
