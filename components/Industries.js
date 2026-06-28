const industries = [
  'Restaurants & Bars',
  'Gas Stations & C-Stores',
  'Retail & Shopping Centers',
  'Auto Dealerships & Service',
  'Medical & Dental',
  'Offices & Corporate',
  'Churches & Schools',
  'Real Estate & Construction',
  'Salons & Spas',
  'Hotels & Hospitality',
  'Warehouses & Industrial',
  'Fitness & Gyms',
];

export default function Industries() {
  return (
    <section className="industries">
      <div className="container">
        <div className="section-head">
          <span className="section-head__tag">Who We Help</span>
          <h2>Industries We Serve</h2>
          <p>From a single storefront sign to a nationwide rollout, we work with businesses of every kind.</p>
        </div>
        <div className="industries__grid">
          {industries.map((i) => (
            <span className="industry" key={i}>{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
