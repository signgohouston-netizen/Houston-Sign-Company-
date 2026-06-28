import Link from 'next/link';

// Real brands Sign Go has produced signage for (shown on the project portfolio).
const clients = [
  'Chase Bank',
  "Wendy's",
  'Dairy Queen',
  "Love's Travel Stops",
  "Torchy's Tacos",
  'Emerald Bowl',
];

export default function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <p className="clients__label">Trusted for real projects across Houston — recent work includes signage for</p>
        <div className="clients__row">
          {clients.map((c) => (
            <span className="client" key={c}>{c}</span>
          ))}
        </div>
        <p className="clients__cta">
          <Link href="/#portfolio">See our work →</Link>
        </p>
      </div>
    </section>
  );
}
