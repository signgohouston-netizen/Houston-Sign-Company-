import Link from 'next/link';

const badges = [
  {
    title: 'Houston & Surrounding Areas',
    sub: 'Local coverage across Greater Houston',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" /></svg>
    ),
  },
  {
    title: 'Turnkey Permitting',
    sub: 'We handle design, permits & install',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg>
    ),
  },
  {
    title: 'In-House Fleet',
    sub: 'Our own crews for clean installs',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M3 13l2-5h9l3 4h3a1 1 0 011 1v3h-2a2.5 2.5 0 01-5 0H10a2.5 2.5 0 01-5 0H3v-3zm2.5 4a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z" /></svg>
    ),
  },
  {
    title: 'Factory-Direct • Ships Nationwide',
    sub: 'We manufacture in-house & ship anywhere',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M2 20V9l5-3v2l4-2v2l4-2v2l4-2v14H2zm4-2h3v-4H6v4zm5 0h3v-4h-3v4z" /></svg>
    ),
  },
];

export default function Trust() {
  return (
    <section className="trust">
      <div className="container trust__inner">
        {badges.map((b) => (
          <div className="trust__badge" key={b.title}>
            {b.icon}
            <div>
              <strong>{b.title}</strong>
              <span>{b.sub}</span>
            </div>
          </div>
        ))}
        <Link href="/service-areas" className="btn btn--blue">Check Service Area</Link>
      </div>
    </section>
  );
}
