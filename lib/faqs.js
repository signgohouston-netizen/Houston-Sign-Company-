// FAQ content (original to Sign Go). Used to add FAQPage schema + unique,
// useful content to service, LED, and city pages.

export const categoryFaqs = {
  Indoor: [
    { q: 'How much do indoor signs cost?', a: 'It depends on the size, materials, and lighting. A single acrylic lobby sign costs far less than a full interior package for a new build-out. Sign Go gives a clear, itemized quote up front — request a free quote or call 281-814-1111.' },
    { q: 'Do you make ADA-compliant signs?', a: 'Yes. We produce ADA-compliant room ID, restroom, and accessibility signage with proper tactile lettering and Braille so your business stays compliant.' },
    { q: 'How long does an indoor sign take?', a: 'Most interior signs are designed, produced, and installed within one to three weeks depending on complexity and approvals. We confirm a timeline with your quote.' },
    { q: 'Can you match my brand colors and logo?', a: 'Absolutely. Send us your logo and brand colors and our design team will mock up your sign so you can see it before we build it.' },
  ],
  Outdoor: [
    { q: 'Do I need a permit for an outdoor sign in Houston?', a: 'Most permanent exterior signs require a permit, and rules vary by city and property. Sign Go handles the drawings, application, and approvals for you so your project stays on schedule.' },
    { q: 'How much does an outdoor sign cost?', a: 'Pricing depends on size, materials, lighting, and installation. Channel letters, monument signs, and pylons all price differently. We provide a clear, no-obligation quote — call 281-814-1111.' },
    { q: 'Are your outdoor signs built for the Texas weather?', a: 'Yes. We use commercial-grade aluminum, acrylic, and LEDs designed to handle Houston heat, humidity, and storms for years.' },
    { q: 'Do you install the signs you make?', a: 'Yes — design, fabrication, and professional installation are all handled in-house by our own team.' },
  ],
  Vehicle: [
    { q: 'How long does a vehicle wrap last?', a: 'A quality vehicle wrap typically lasts five to seven years with normal care. We use premium, durable vinyl and a clean, bubble-free install.' },
    { q: 'How much does it cost to wrap a vehicle?', a: 'It depends on the vehicle size and whether you want a full or partial wrap. Fleets are quoted per vehicle. Request a free quote and we will price your exact vehicle.' },
    { q: 'Will a wrap damage my paint?', a: 'No — when applied and removed properly on factory paint, a wrap actually protects the surface underneath. Our installers follow manufacturer best practices.' },
    { q: 'Can you wrap my whole fleet?', a: 'Yes. We design one consistent look and roll it out across every vehicle so your branding stays uniform.' },
  ],
  Vinyl: [
    { q: 'How fast can you make a banner?', a: 'Vinyl is our fastest product. Tell us your deadline — we can often turn around banners and decals quickly for grand openings, events, and promotions.' },
    { q: 'Are vinyl banners good for outdoor use?', a: 'Yes. We print on durable outdoor-rated vinyl with finished edges and grommets so your banner holds up to sun and weather.' },
    { q: 'Can you install window and wall graphics?', a: 'Yes — we design, print, and professionally install window film, wall graphics, and large-format murals.' },
    { q: 'Do you do floor graphics?', a: 'We do. Our floor graphics use slip-resistant, durable material made to handle foot traffic on tile, carpet, and concrete.' },
  ],
  Custom: [
    { q: 'Can you build a completely custom sign?', a: 'Yes — custom work is our favorite. We fabricate one-of-a-kind signs in acrylic, metal, LED, lighted, digital, and sandblasted finishes designed around your brand.' },
    { q: 'Do you make LED and lighted signs?', a: 'We do. From halo-lit dimensional logos to full-color LED displays, we design illumination that fits your location and budget.' },
    { q: 'How does the custom sign process work?', a: 'It starts with a free consultation, then design and a clear estimate, in-house fabrication, and a professional install. We keep you involved at every step.' },
    { q: 'Can you replicate a design I already have?', a: 'Yes — bring us your concept, sketch, or existing branding and we will build it.' },
  ],
  'Trade Show': [
    { q: 'How quickly can I get a trade show display?', a: 'Tell us your event date and we will build a timeline around it. Retractable banners and table covers are fast; full booths take a bit longer.' },
    { q: 'Are your displays easy to transport and set up?', a: 'Yes — retractable banners and modular booths are designed to be lightweight, portable, and quick to assemble on the show floor.' },
    { q: 'Can you design the artwork too?', a: 'Absolutely. Our design team creates eye-catching booth graphics, backdrops, and table covers from your brand.' },
    { q: 'Do you make matching pieces for a full booth?', a: 'Yes — backdrops, retractable banners, table covers, and counters can all be coordinated into one cohesive, branded exhibit.' },
  ],
};

export const ledFaqs = [
  { q: 'How much does a full-color LED sign cost?', a: 'LED display pricing depends on the size, resolution, and whether it is mounted on a monument, pole, or wall. It is a bigger investment than a static sign but pays off through instant updates and round-the-clock visibility. Request a free quote for your exact site.' },
  { q: 'Can I update the messages myself?', a: 'Yes. Full-color LED signs let you change prices, specials, and graphics from your phone or computer in seconds — no reprinting.' },
  { q: 'Are LED signs bright enough for daytime?', a: 'Yes — our commercial LED displays are high-brightness and stay crisp in direct Texas sun, then automatically dim for night viewing.' },
  { q: 'Do you handle permits and installation for LED signs?', a: 'We do. Sign Go provides turnkey LED signage — design, permitting, fabrication, and professional installation.' },
  { q: 'What businesses benefit most from LED signs?', a: 'Gas stations and c-stores, restaurants, shopping centers, auto dealers, churches, and schools — anyone who promotes changing prices or offers gets strong returns from an LED display.' },
];

// Localized FAQs for a city page (unique per city via name/county).
export function cityFaqs(area) {
  const c = area.name;
  return [
    { q: `Does Sign Go serve ${c}, TX?`, a: `Yes. Sign Go provides custom signs, vehicle wraps, and graphics for businesses throughout ${c} and ${area.county}. Call 281-814-1111 or request a free quote.` },
    { q: `Do you handle sign permits in ${c}?`, a: `We do. Permit requirements vary by city and property, and our team handles the drawings, application, and approvals so your ${c} project stays on schedule.` },
    { q: `What types of signs do you make for ${c} businesses?`, a: `Everything from channel letters, monument signs, and full-color LED displays to indoor signs, vehicle wraps, banners, and custom signage — all designed, built, and installed in-house.` },
    { q: `How do I get a quote for a sign in ${c}?`, a: `Tell us about your project by phone at 281-814-1111 or through our free quote form, and we will give you clear, itemized pricing.` },
  ];
}
