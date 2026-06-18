import { steps } from '@/lib/site';

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <div className="section-head section-head--light">
          <span className="section-head__tag">Our Process</span>
          <h2>A Clean Path From Logo Upload to Final Install</h2>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step__num">{s.n}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
