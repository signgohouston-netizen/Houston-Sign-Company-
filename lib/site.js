// Central place for business info and content. Edit here to update the site.

export const site = {
  name: 'Sign Go',
  tagline: 'The Sign Professionals',
  url: 'https://www.houstonsignscompany.com',
  phone: '281-814-1111',
  phoneHref: 'tel:2818141111',
  email: 'Info@signgotx.com',
  // Address parts (used for schema.org structured data + display)
  street: '9900 Wilcrest Dr',
  city: 'Houston',
  state: 'TX',
  zip: '77099',
  address: '9900 Wilcrest Dr, Houston, TX 77099',
  mapQuery: '9900+Wilcrest+Dr+Houston+TX+77099',
  geo: { lat: 29.6905, lng: -95.5841 },
  hours: 'Mon–Fri: 9:00am – 6:00pm',
  // Credentials / trust
  founded: 2001, // 25+ years in business
  yearsInBusiness: 25,
  bbbAccredited: true,
  bbbUrl: '', // paste your BBB profile URL to link the badge
  // Google reviews
  googleReviewsUrl: '', // paste your Google Business Profile reviews link to make the badge clickable
  googleRating: '4.9',
  googleReviewCount: '368',
  // Set your Formspree form ID here to receive submissions on any host.
  formspreeId: '',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/interior-signs', label: 'Indoor Signs' },
  { href: '/exterior-signs', label: 'Outdoor Signs' },
  { href: '/vehicle-wraps', label: 'Vehicle Wraps' },
  { href: '/vinyl-signs', label: 'Vinyl Signs' },
  { href: '/custom-signs', label: 'Custom Signs' },
  { href: '/trade-show-displays', label: 'Trade Shows' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact-us', label: 'Contact' },
];

export const serviceCards = [
  {
    href: '/interior-signs',
    title: 'Indoor Signs',
    text: 'Lobby & reception signs, wall graphics, wayfinding, and dimensional lettering.',
    img: '/media_assets/mall-directory-wayfinding-sign.jpeg',
    alt: 'Indoor mall directory and wayfinding sign by Sign Go Houston',
  },
  {
    href: '/exterior-signs',
    title: 'Outdoor Signs',
    text: 'Channel letters, monuments, pylons, storefront and illuminated signs.',
    img: '/media_assets/chase-bank-channel-letter-sign.jpg',
    alt: 'Outdoor channel letter storefront sign by Sign Go Houston',
  },
  {
    href: '/vehicle-wraps',
    title: 'Vehicle Wraps',
    text: 'Full & partial wraps, fleet branding, decals, and vehicle lettering.',
    img: '/media_assets/food-truck-wrap.jpeg',
    alt: 'Food truck vehicle wrap by Sign Go Houston',
  },
  {
    href: '/custom-signs',
    title: 'Custom Signs',
    text: 'Banners, vinyl graphics, trade show displays, and one-of-a-kind projects.',
    img: '/media_assets/sign-factory-fabrication.jpg',
    alt: 'Custom sign fabrication at the Sign Go shop in Houston',
  },
];

export const indoorTags = [
  'Lobby & Reception Signs', 'Dimensional Letters', 'Wall Graphics & Murals',
  'Wayfinding & Directional', 'ADA / Office Signs', 'Window Graphics',
  'Floor Decals', 'Acrylic & Metal Signs',
];

export const outdoorTags = [
  'Channel Letters', 'Storefront Signs', 'Monument Signs', 'Pylon & Pole Signs',
  'Cabinet / Box Signs', 'Post & Panel', 'A-Frame & Sidewalk', 'Awning Signs',
  'Blade & Hanging Signs', 'Yard & Address Signs',
];

export const wrapTags = [
  'Full Vehicle Wraps', 'Partial Wraps', 'Fleet Branding', 'Vehicle Lettering',
  'Vinyl Decals', 'Trailer & Box Truck Wraps', 'Color Change Wraps', 'Window Perf',
];

export const detailItems = [
  { h: 'Banners', p: 'Indoor & outdoor vinyl banners for events, grand openings, and promotions.' },
  { h: 'Decals & Stickers', p: 'Custom-cut decals for windows, walls, floors, and equipment.' },
  { h: 'Vinyl Lettering', p: 'Clean, professional lettering for storefronts and office windows.' },
  { h: 'Wall Murals', p: 'Large-format wall graphics that transform any interior space.' },
  { h: 'Window Film', p: 'Frosted, tinted, and printed window film for privacy and branding.' },
  { h: 'Trade Show Displays', p: 'Retractable banners, backdrops, and table covers that travel well.' },
  { h: 'Yard & Site Signs', p: 'Coroplast and metal signs for real estate, construction, and events.' },
  { h: 'Custom Projects', p: "Have something unique in mind? We love a good challenge." },
];

export const steps = [
  { n: 1, h: 'Send the Basics', p: 'Upload your logo and tell us what you need. A quick consult gets your project moving.' },
  { n: 2, h: 'Design & Estimate', p: 'We create a mockup and a clear estimate so you see exactly what you’re getting.' },
  { n: 3, h: 'Fabricate In-House', p: 'We build your sign in our own shop using quality materials made for the Texas climate.' },
  { n: 4, h: 'Install with Polish', p: 'Our crew installs it safely and cleanly so your storefront looks sharp from day one.' },
];

export const gallery = [
  'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=700&q=80',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80',
  'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=700&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80',
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=700&q=80',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80',
];

export const testimonials = [
  { p: 'Sign Go made our new storefront sign look incredible. Great communication and the install was quick and clean.', c: '— Marcus T., Houston' },
  { p: 'They wrapped our entire fleet and the quality is outstanding. Our trucks get noticed everywhere now.', c: '— Priya S., Sugar Land' },
  { p: 'Professional from start to finish. Fair pricing, fast turnaround, and the design team nailed our brand.', c: '— Daniel R., Katy' },
];
