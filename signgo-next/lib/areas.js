// Service-area (location) pages. Each generates /service-areas/<slug>.
// Sign Go serves Houston and the surrounding Greater Houston / Harris County area.

export const areas = [
  { slug: 'houston', name: 'Houston', blurb: 'Our home base — full-service signage across the city of Houston.' },
  { slug: 'katy', name: 'Katy', blurb: 'Custom signs, wraps, and graphics for Katy businesses.' },
  { slug: 'cypress', name: 'Cypress', blurb: 'Signage and vehicle wraps serving the Cypress area.' },
  { slug: 'sugar-land', name: 'Sugar Land', blurb: 'Professional signs and wraps for Sugar Land companies.' },
  { slug: 'spring', name: 'Spring', blurb: 'Indoor, outdoor, and vehicle signage in Spring, TX.' },
  { slug: 'the-woodlands', name: 'The Woodlands', blurb: 'High-quality signage for The Woodlands businesses.' },
  { slug: 'pearland', name: 'Pearland', blurb: 'Storefront signs, wraps, and graphics in Pearland.' },
  { slug: 'pasadena', name: 'Pasadena', blurb: 'Complete sign services for Pasadena, TX.' },
  { slug: 'bellaire', name: 'Bellaire', blurb: 'Custom business signage throughout Bellaire.' },
  { slug: 'stafford', name: 'Stafford', blurb: 'Signs and vehicle wraps serving Stafford.' },
  { slug: 'missouri-city', name: 'Missouri City', blurb: 'Branding and signage for Missouri City businesses.' },
  { slug: 'richmond', name: 'Richmond', blurb: 'Full-service sign company serving Richmond, TX.' },
  { slug: 'rosenberg', name: 'Rosenberg', blurb: 'Custom signs and graphics in Rosenberg.' },
  { slug: 'humble', name: 'Humble', blurb: 'Indoor and outdoor signage for Humble, TX.' },
  { slug: 'tomball', name: 'Tomball', blurb: 'Signs, banners, and wraps serving Tomball.' },
  { slug: 'conroe', name: 'Conroe', blurb: 'Professional signage for Conroe businesses.' },
  { slug: 'league-city', name: 'League City', blurb: 'Custom signs and vehicle wraps in League City.' },
  { slug: 'friendswood', name: 'Friendswood', blurb: 'Business signage and graphics for Friendswood.' },
  { slug: 'baytown', name: 'Baytown', blurb: 'Full-service sign company serving Baytown, TX.' },
  { slug: 'channelview', name: 'Channelview', blurb: 'Signs, wraps, and graphics in Channelview.' },
  { slug: 'alief', name: 'Alief', blurb: 'Local signage and wraps for the Alief area.' },
  { slug: 'jersey-village', name: 'Jersey Village', blurb: 'Custom business signs in Jersey Village.' },
  { slug: 'galena-park', name: 'Galena Park', blurb: 'Signage and vehicle graphics for Galena Park.' },
  { slug: 'deer-park', name: 'Deer Park', blurb: 'Complete sign services serving Deer Park, TX.' },
];

export const getArea = (slug) => areas.find((a) => a.slug === slug);
