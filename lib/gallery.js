// Real Sign Go project photos (from signgotx.com), with descriptive alt text
// for SEO. `tags` map photos to product categories so pages can pull relevant
// images automatically.

const M = '/media_assets';
const S = '/media_assets/stock';
const L = '/media_assets/led';

export const photos = [
  { src: `${M}/chase-bank-channel-letter-sign.jpg`, alt: 'Chase Bank channel letter storefront sign by Sign Go in Houston', tags: ['Outdoor', 'channel-letters', 'storefront-signs'], pcats: ["Channel Letters"] },
  { src: `${M}/dairy-queen-storefront-sign.jpg`, alt: 'Dairy Queen storefront sign fabricated and installed by Sign Go', tags: ['Outdoor', 'storefront-signs', 'channel-letters'], pcats: ["Restaurants","Channel Letters"] },
  { src: `${M}/wendys-restaurant-sign.jpg`, alt: "Wendy's restaurant exterior sign in Houston by Sign Go", tags: ['Outdoor', 'storefront-signs', 'cabinet-signs'], pcats: ["Restaurants","Channel Letters"] },
  { src: `${M}/emerald-bowl-illuminated-sign.jpeg`, alt: 'Emerald Bowl illuminated business sign by Sign Go', tags: ['Outdoor', 'led-signs', 'lighted-signs', 'channel-letters'], pcats: ["Retail"] },
  { src: `${M}/gas-station-canopy-sign.jpeg`, alt: 'Gas station canopy sign and branding by Sign Go in Houston', tags: ['Outdoor', 'awning-signs', 'cabinet-signs'], pcats: ["Gas Stations"] },
  { src: `${M}/gas-station-pole-sign.jpg`, alt: 'Gas station pole sign with price display by Sign Go', tags: ['Outdoor', 'pole-signs', 'pylon-signs'], pcats: ["Gas Stations"] },
  { src: `${M}/pole-sign.jpeg`, alt: 'Tall commercial pole sign fabricated by Sign Go', tags: ['Outdoor', 'pole-signs', 'pylon-signs'], pcats: ["Gas Stations"] },
  { src: `${M}/gas-station-indoor-signage.jpeg`, alt: 'Gas station indoor signage and graphics by Sign Go', tags: ['Indoor', 'wall-signs', 'pop-signs'], pcats: ["Gas Stations","Indoor"] },
  { src: `${M}/indoor-wall-wrap-sign.jpeg`, alt: 'Interior wall wrap and sign installation by Sign Go', tags: ['Indoor', 'wall-signs', 'wall-graphics', 'wall-murals', 'vinyl-wraps', 'Vinyl'], pcats: ["Indoor"] },
  { src: `${M}/mall-directory-wayfinding-sign.jpeg`, alt: 'Mall directory and wayfinding sign by Sign Go in Houston', tags: ['Indoor', 'wayfinding-signs', 'room-id-signs', 'office-signs', 'ada-signs'], pcats: ["Indoor","Retail"] },
  { src: `${M}/scan-3d-dimensional-sign.jpeg`, alt: '3D dimensional lobby sign by Sign Go', tags: ['Indoor', 'lobby-signs', 'dimensional-logos', 'dimensional-letters', 'acrylic-signs'], pcats: ["Indoor"] },
  { src: `${M}/masjid-sign.jpg`, alt: 'Masjid exterior monument sign designed and built by Sign Go', tags: ['Outdoor', 'monument-signs', 'post-panel-signs', 'storefront-signs'], pcats: ["Retail"] },
  { src: `${M}/driving-school-sign.jpg`, alt: 'Driving school storefront sign by Sign Go', tags: ['Outdoor', 'storefront-signs', 'cabinet-signs', 'blade-signs', 'hanging-signs'], pcats: ["Retail"] },
  { src: `${M}/smoke-shop-vape-sign.jpg`, alt: 'Smoke shop and vape store sign by Sign Go in Houston', tags: ['Outdoor', 'storefront-signs', 'led-signs', 'lighted-signs'], pcats: ["Retail"] },
  { src: `${M}/food-truck-wrap.jpeg`, alt: 'Food truck wrap and graphics by Sign Go', tags: ['Vehicle', 'truck-wraps', 'fleet-wraps', 'vehicle-graphics', 'car-wraps'], pcats: ["Vehicle Wraps","Restaurants"] },
  { src: `${M}/meerut-bbq-truck-sign.jpeg`, alt: 'Meerut BBQ House truck wrap and lettering by Sign Go', tags: ['Vehicle', 'truck-wraps', 'vehicle-graphics', 'vehicle-lettering', 'vehicle-decals'], pcats: ["Vehicle Wraps","Restaurants"] },
  { src: `${M}/window-wrap-graphics.jpg`, alt: 'Storefront window wrap and graphics by Sign Go', tags: ['Vinyl', 'window-film', 'window-graphics', 'decals', 'vinyl-lettering', 'vinyl-printing'], pcats: ["Retail"] },
  { src: `${M}/sign-factory-fabrication.jpg`, alt: 'Sign Go fabrication shop building custom signs in Houston', tags: ['Custom', 'metal-signs', 'channel-letters', 'dimensional-logos', 'sandblasted-signs'] },
  { src: `${M}/sign-go-truck-stop-led-sign.jpg`, alt: 'Custom truck stop LED pole sign by Sign Go', tags: ['Outdoor', 'led-signs', 'lighted-signs', 'pylon-signs', 'pole-signs'], pcats: ['Gas Stations'] },
  { src: `${M}/loves-led-price-sign.jpg`, alt: "Love's truck stop LED fuel price sign by Sign Go", tags: ['Outdoor', 'led-signs', 'lighted-signs', 'pylon-signs'], pcats: ['Gas Stations'] },
  { src: `${M}/torchys-led-neon-signs.jpg`, alt: "Torchy's Tacos custom LED neon signs by Sign Go", tags: ['Custom', 'led-signs', 'lighted-signs'], pcats: ['Restaurants'] },
  { src: `${M}/tacos-tequila-led-neon.jpg`, alt: 'Custom LED neon Tacos & Tequila sign by Sign Go', tags: ['Custom', 'led-signs', 'lighted-signs'], pcats: ['Restaurants'] },
  { src: `${L}/led-full-color-storefront.jpg`, alt: 'Full-color LED storefront sign with day and night visibility by Sign Go', tags: ['led-signs', 'lighted-signs', 'Outdoor'], pcats: ['Retail'] },
  { src: `${L}/led-gas-station-specials.jpg`, alt: 'Full-color LED sign promoting specials at a Houston gas station', tags: ['led-signs', 'digital-signs'], pcats: ['Gas Stations'] },
  { src: `${L}/led-shopping-center-monument.jpg`, alt: 'Outdoor LED monument display at a Houston shopping center', tags: ['led-signs', 'monument-signs', 'digital-signs'], pcats: ['Retail'] },
  { src: `${L}/led-indoor-video-wall.jpg`, alt: 'Indoor LED video wall for retail, office and lobby by Sign Go', tags: ['led-signs', 'digital-signs'], pcats: ['Indoor'] },

  // ---- Licensed stock photos (used where we don't yet have a project photo) ----
  { src: `${S}/semi-truck-trailer-wrap.jpg`, alt: 'Semi truck and trailer ready for a commercial wrap', tags: ['trailer-wraps', 'truck-wraps', 'fleet-wraps'], stock: true },
  { src: `${S}/vehicle-wrap-suv.jpg`, alt: 'SUV ready for a custom vehicle wrap or color change', tags: ['car-wraps', 'van-wraps', 'vehicle-magnets', 'vehicle-window-film'], stock: true },
  { src: `${S}/trade-show-event-hall.jpg`, alt: 'Trade show event hall with branded booths and displays', tags: ['Trade Show', 'tradeshow-booths', 'tradeshow-exhibits', 'canopy-tents'], stock: true },
  { src: `${S}/trade-show-presentation-backdrop.jpg`, alt: 'Large-format presentation backdrop and banner at an event', tags: ['large-banners', 'printed-backdrops', 'retractable-banners', 'table-top-displays', 'custom-tablecovers', 'banners'], stock: true },
  { src: `${S}/retail-aisle-signage.jpg`, alt: 'Retail store aisle markers and point-of-purchase signage', tags: ['pop-signs', 'floor-signs', 'floor-graphics'], stock: true },
  { src: `${S}/retail-product-display.jpg`, alt: 'Retail product display and merchandising signage', tags: ['product-displays', 'pop-signs'], stock: true },
];

// First photo whose tags include the given key (category or product slug),
// or null if none matches — callers fall back to the category image so a
// product never shows an unrelated photo.
export function photoFor(key) {
  return photos.find((p) => p.tags.includes(key)) || null;
}

// Real project photos only (excludes licensed stock) — for the home gallery.
export const projectPhotos = photos.filter((p) => !p.stock);

// All photos matching a key.
export function photosFor(key) {
  return photos.filter((p) => p.tags.includes(key));
}
