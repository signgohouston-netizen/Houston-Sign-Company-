const features = [
  {
    title: 'Factory-Direct Pricing',
    text: 'We manufacture in-house and cut out the middleman, so you get better quality for less.',
    icon: <svg viewBox="0 0 24 24"><path d="M2 20V9l5-3v2l4-2v2l4-2v2l4-2v14H2zm4-2h3v-4H6v4zm5 0h3v-4h-3v4z" /></svg>,
  },
  {
    title: 'In-House Design Team',
    text: 'Send us your logo and our designers create free mockups so you see it before we build it.',
    icon: <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>,
  },
  {
    title: 'Turnkey Permitting',
    text: 'We handle the drawings, applications, and approvals so your project never stalls.',
    icon: <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg>,
  },
  {
    title: 'Built for Texas Weather',
    text: 'Commercial-grade materials and LEDs that stay bright and stand up to heat, sun, and storms.',
    icon: <svg viewBox="0 0 24 24"><path d="M12 2l2.39 4.84L20 7.6l-3.8 3.7L17.1 16 12 13.4 6.9 16l.9-4.7L4 7.6l5.61-.76L12 2z" /></svg>,
  },
  {
    title: 'Professional Installation',
    text: 'Our own crews install your sign safely and cleanly, so it looks perfect from day one.',
    icon: <svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1a5.5 5.5 0 00-6.9-7L9.5 5.5 8 8 4.5 6.5 1.8 3.9a5.5 5.5 0 007 6.9l9.1 9.1a1 1 0 001.4 0l1.4-1.4a1 1 0 000-1.5z" /></svg>,
  },
  {
    title: 'Ships Nationwide',
    text: 'Based in Houston, we crate and ship finished custom signs to businesses across the country.',
    icon: <svg viewBox="0 0 24 24"><path d="M3 13l1.5-4.5A2 2 0 016.4 7H13v6H3v0zm10-6h3.6a2 2 0 011.8 1.1L21 12v1h-8V7zM6.5 19a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM2 14h11v2H2zm12 0h8v2h-8z" /></svg>,
  },
];

export default function Features() {
  return (
    <section className="features" id="why-sign-go">
      <div className="container">
        <div className="section-head">
          <span className="section-head__tag">Why Choose Us</span>
          <h2>Why Houston Businesses Choose Sign Go</h2>
          <p>One factory-direct team for design, manufacturing, permitting, and installation.</p>
        </div>
        <div className="features__grid">
          {features.map((f) => (
            <div className="feature" key={f.title}>
              <span className="feature__icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
