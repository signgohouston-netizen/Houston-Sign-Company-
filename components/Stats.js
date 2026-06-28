const stats = [
  { num: '25+', label: 'Years in Business' },
  { num: '60+', label: 'Sign Types We Make' },
  { num: '45+', label: 'Houston-Area Cities Served' },
  { num: '100%', label: 'In-House Production' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <strong>{s.num}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
