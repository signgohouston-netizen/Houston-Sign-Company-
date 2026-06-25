// Every individual sign/product type, grouped by category. All copy is original
// to Sign Go. Category pages and the footer link to /services/<slug>.

export const categories = {
  Outdoor: { label: 'Outdoor Signs', parent: '/exterior-signs', img: '/media_assets/chase-bank-channel-letter-sign.jpg' },
  Indoor: { label: 'Indoor Signs', parent: '/interior-signs', img: '/media_assets/mall-directory-wayfinding-sign.jpeg' },
  Vehicle: { label: 'Vehicle Wraps', parent: '/vehicle-wraps', img: '/media_assets/food-truck-wrap.jpeg' },
  Vinyl: { label: 'Vinyl Signs', parent: '/vinyl-signs', img: '/media_assets/window-wrap-graphics.jpg' },
  Custom: { label: 'Custom Signs', parent: '/custom-signs', img: '/media_assets/sign-factory-fabrication.jpg' },
  'Trade Show': { label: 'Trade Shows', parent: '/trade-show-displays', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=80' },
};

export const products = [
  // ---------- OUTDOOR ----------
  { slug: 'address-signs', name: 'Address Signs', category: 'Outdoor', short: 'Clear building numbers and identification for any property.', desc: 'Make your business easy to find with custom address signs. We build durable, legible numbering for storefronts, offices, and buildings that helps customers and deliveries reach your door.' },
  { slug: 'a-frame-signs', name: 'A-Frame Signs', category: 'Outdoor', short: 'Portable sidewalk signs that grab walk-by traffic.', desc: 'A-frame (sandwich board) signs are a flexible, affordable way to promote daily specials, events, and directions. Set them out when you open and bring them in at close.' },
  { slug: 'awning-signs', name: 'Awning Signs', category: 'Outdoor', short: 'Branded awnings that add shade and curb appeal.', desc: 'Awning signs do double duty — they shelter your entrance while putting your logo front and center. We print on durable canvas built to handle the Houston sun.' },
  { slug: 'blade-signs', name: 'Blade Signs', category: 'Outdoor', short: 'Projecting signs perfect for walkable retail.', desc: 'Blade signs mount perpendicular to your building so pedestrians see you coming from down the block. A favorite for shops, cafes, and storefront districts.' },
  { slug: 'cabinet-signs', name: 'Cabinet Signs', category: 'Outdoor', short: 'Illuminated box signs that are bright and budget-friendly.', desc: 'Cabinet (box) signs house your graphics in a weatherproof, internally lit enclosure. A proven, cost-effective way to stay visible day and night.' },
  { slug: 'channel-letters', name: 'Channel Letters', category: 'Outdoor', short: 'Individual illuminated letters — the classic storefront look.', desc: 'Channel letters are dimensional, illuminated letters mounted to your building for a premium, high-impact storefront. We design, fabricate, and install them to code.' },
  { slug: 'dimensional-letters', name: 'Dimensional Letters', category: 'Outdoor', short: 'Three-dimensional letters and logos for a premium finish.', desc: 'Dimensional letters add depth and shadow that flat signage can’t match. Available in metal, acrylic, and foam for interior or exterior walls.' },
  { slug: 'flag-signs', name: 'Flag Signs', category: 'Outdoor', short: 'Eye-catching flags and feather banners that draw attention.', desc: 'Flag and feather signs add motion and color to catch the eye from the road. Ideal for grand openings, sales, and high-traffic locations.' },
  { slug: 'hanging-signs', name: 'Hanging Signs', category: 'Outdoor', short: 'Suspended signs for entries, walkways, and storefronts.', desc: 'Hanging signs are a clean way to mark entrances and tenant spaces. We build them for interior corridors and covered exterior walkways alike.' },
  { slug: 'monument-signs', name: 'Monument Signs', category: 'Outdoor', short: 'Freestanding ground signs with major curb appeal.', desc: 'Monument signs sit low to the ground and make a strong, permanent statement. A great fit for offices, churches, schools, and multi-tenant properties.' },
  { slug: 'pole-signs', name: 'Pole Signs', category: 'Outdoor', short: 'Tall signs visible from the road and highway.', desc: 'Pole signs lift your branding high so drivers spot you from a distance. Perfect for businesses set back from the street or near busy roadways.' },
  { slug: 'post-panel-signs', name: 'Post & Panel Signs', category: 'Outdoor', short: 'Versatile panel signs mounted on posts.', desc: 'Post and panel signs are durable, attractive, and economical — great for real estate, directories, parking, and directional needs.' },
  { slug: 'pylon-signs', name: 'Pylon Signs', category: 'Outdoor', short: 'Tall multi-tenant signs for centers and complexes.', desc: 'Pylon signs are high-visibility structures that can list multiple tenants. We handle the design, engineering coordination, and installation.' },
  { slug: 'sidewalk-signs', name: 'Sidewalk Signs', category: 'Outdoor', short: 'Portable pedestrian-level signs and stands.', desc: 'Sidewalk signs put your message right where foot traffic flows. Lightweight, durable, and easy to move where you need them.' },
  { slug: 'storefront-signs', name: 'Storefront Signs', category: 'Outdoor', short: 'Primary signage that identifies your business.', desc: 'Your storefront sign is the face of your business. We craft bold, on-brand signage that makes a strong first impression and pulls customers in.' },
  { slug: 'yard-signs', name: 'Yard Signs', category: 'Outdoor', short: 'Affordable coroplast and metal signs for any use.', desc: 'Yard signs are perfect for real estate, construction, events, and promotions. Fast to produce and easy to place anywhere.' },

  // ---------- INDOOR ----------
  { slug: 'lobby-signs', name: 'Lobby Signs', category: 'Indoor', short: 'Branded reception displays that greet every visitor.', desc: 'Your lobby sign sets the tone the moment someone walks in. We build dimensional logos in acrylic, metal, and more for a polished, professional welcome.' },
  { slug: 'office-signs', name: 'Office Signs', category: 'Indoor', short: 'Name plates and department identifiers.', desc: 'Keep your workspace organized and professional with custom office, suite, and name signage that matches your brand.' },
  { slug: 'wayfinding-signs', name: 'Wayfinding Signs', category: 'Indoor', short: 'Directional signage that guides people through your space.', desc: 'Wayfinding signs help visitors and staff navigate your building with confidence. We design clear, consistent systems for offices, schools, and facilities.' },
  { slug: 'room-id-signs', name: 'Room ID Signs', category: 'Indoor', short: 'Door and room identification markers.', desc: 'Room ID signs label offices, conference rooms, and facilities cleanly and clearly — with ADA-compliant options available.' },
  { slug: 'ada-signs', name: 'ADA Signs', category: 'Indoor', short: 'Code-compliant accessibility signage.', desc: 'ADA signs keep your business compliant with proper tactile lettering and Braille. We make sure your restroom, room, and accessibility signs meet the requirements.' },
  { slug: 'wall-signs', name: 'Wall Signs', category: 'Indoor', short: 'Mounted signage for interior walls and surfaces.', desc: 'Wall signs reinforce your brand throughout your space — from mission statements to logos to feature walls.' },
  { slug: 'floor-signs', name: 'Floor Signs', category: 'Indoor', short: 'Durable floor decals for direction, safety, and promos.', desc: 'Floor graphics put messaging underfoot where people are already looking. Slip-resistant and built to handle traffic.' },
  { slug: 'pop-signs', name: 'POP Signs', category: 'Indoor', short: 'Point-of-purchase displays that drive sales.', desc: 'POP signage promotes products and offers right at the moment of decision. We design displays that capture attention and lift in-store sales.' },
  { slug: 'product-displays', name: 'Product Displays', category: 'Indoor', short: 'Showcase and merchandising display systems.', desc: 'Custom product displays present your merchandise in the best light, helping customers browse and buy.' },
  { slug: 'window-graphics', name: 'Window Graphics', category: 'Indoor', short: 'Printed and cut vinyl for interior glass.', desc: 'Window graphics turn glass into branding and privacy. Frosted, printed, or cut vinyl for storefronts, offices, and conference rooms.' },

  // ---------- VEHICLE ----------
  { slug: 'car-wraps', name: 'Car Wraps', category: 'Vehicle', short: 'Full coverage for personal or business cars.', desc: 'Turn any car into a head-turning mobile ad or a fresh new color. Our premium vinyl wraps are durable, removable, and printed in vivid detail.' },
  { slug: 'truck-wraps', name: 'Truck Wraps', category: 'Vehicle', short: 'Full or partial coverage for trucks.', desc: 'Truck wraps give you a huge canvas to advertise on every job and every drive. We design and install crisp, bubble-free graphics that last.' },
  { slug: 'van-wraps', name: 'Van Wraps', category: 'Vehicle', short: 'Service-van graphics that build trust on the job.', desc: 'A wrapped service van shows up looking professional and stays advertising long after you park. Great for contractors, plumbers, electricians, and more.' },
  { slug: 'trailer-wraps', name: 'Trailer Wraps', category: 'Vehicle', short: 'Large-format branding for commercial trailers.', desc: 'Trailers offer some of the largest mobile advertising space available. We wrap them edge to edge for maximum brand impact.' },
  { slug: 'fleet-wraps', name: 'Fleet Wraps', category: 'Vehicle', short: 'Coordinated designs across every company vehicle.', desc: 'Fleet wraps keep your branding consistent across your whole lineup. We manage the design system and roll it out vehicle by vehicle.' },
  { slug: 'vehicle-lettering', name: 'Vehicle Lettering', category: 'Vehicle', short: 'Clean cut-vinyl name, number, and DOT lettering.', desc: 'Sometimes simple is best. Cut-vinyl lettering adds your name, phone, and required DOT info sharply and affordably.' },
  { slug: 'vehicle-decals', name: 'Vehicle Decals', category: 'Vehicle', short: 'Spot graphics and logos for a subtle, sharp look.', desc: 'Vehicle decals apply your logo and key graphics without a full wrap — a budget-friendly way to brand your ride.' },
  { slug: 'vehicle-graphics', name: 'Vehicle Graphics', category: 'Vehicle', short: 'Custom designs and partial graphics.', desc: 'Partial graphics combine color, logo, and messaging for high impact at a lower cost than a full wrap.' },
  { slug: 'vehicle-magnets', name: 'Vehicle Magnets', category: 'Vehicle', short: 'Removable magnetic signage for vehicles.', desc: 'Vehicle magnets let you brand and un-brand on demand — perfect when you switch between business and personal use.' },
  { slug: 'vehicle-window-film', name: 'Vehicle Window Film', category: 'Vehicle', short: 'Tinted or printed window treatments.', desc: 'Perforated window film lets you brand the glass while keeping visibility from inside. A smart finishing touch on any wrap.' },

  // ---------- VINYL ----------
  { slug: 'banners', name: 'Banners', category: 'Vinyl', short: 'Durable indoor/outdoor banners for any event.', desc: 'Banners are the fast, affordable way to promote a sale, event, or grand opening. We print full color on tough vinyl with finished edges and grommets.' },
  { slug: 'decals', name: 'Decals & Stickers', category: 'Vinyl', short: 'Custom-cut and printed decals for any surface.', desc: 'From logo stickers to window and equipment decals, we cut and print to your exact spec in any quantity.' },
  { slug: 'vinyl-lettering', name: 'Vinyl Lettering', category: 'Vinyl', short: 'Crisp cut letters for windows and walls.', desc: 'Cut vinyl lettering gives a clean, professional look for hours of operation, logos, and storefront text.' },
  { slug: 'vinyl-printing', name: 'Vinyl Printing', category: 'Vinyl', short: 'Full-color, high-resolution printed graphics.', desc: 'Our large-format printers produce sharp, vivid vinyl graphics for signs, displays, walls, and more.' },
  { slug: 'vinyl-wraps', name: 'Vinyl Wraps', category: 'Vinyl', short: 'Applied coverings for counters, walls, and fixtures.', desc: 'Vinyl wraps transform surfaces — reception desks, columns, equipment — with branded color and graphics, no remodeling required.' },
  { slug: 'wall-graphics', name: 'Wall Graphics', category: 'Vinyl', short: 'Branded vinyl applied to interior or exterior walls.', desc: 'Wall graphics make your space work as a marketing tool. We print and install removable graphics that look painted on.' },
  { slug: 'wall-murals', name: 'Wall Murals', category: 'Vinyl', short: 'Large-format murals that transform a room.', desc: 'Floor-to-ceiling murals create an immersive brand experience or stunning backdrop for photos and lobbies.' },
  { slug: 'window-film', name: 'Window Film', category: 'Vinyl', short: 'Frosted, etched, and privacy film for glass.', desc: 'Window film adds privacy and style to glass walls and storefronts while letting light through.' },
  { slug: 'floor-graphics', name: 'Floor Graphics', category: 'Vinyl', short: 'Slip-resistant graphics for tile, carpet, and concrete.', desc: 'Durable floor graphics guide, inform, and promote right where people are walking.' },

  // ---------- CUSTOM ----------
  { slug: 'acrylic-signs', name: 'Acrylic Signs', category: 'Custom', short: 'Sleek rigid plastic for a clean, modern look.', desc: 'Acrylic signs deliver a polished, contemporary feel for lobbies and storefronts. Available clear, frosted, or colored with standoff mounts.' },
  { slug: 'metal-signs', name: 'Metal Signs', category: 'Custom', short: 'Durable metal substrates and finishes.', desc: 'Metal signs add a premium, lasting look — brushed aluminum, stainless, and more for interior and exterior use.' },
  { slug: 'led-signs', name: 'LED Signs', category: 'Custom', short: 'Energy-efficient illumination that pops day or night.', desc: 'LED signs keep your brand bright and visible after dark while keeping energy costs low.' },
  { slug: 'lighted-signs', name: 'Lighted Signs', category: 'Custom', short: 'Illuminated signage for maximum visibility.', desc: 'Lighted signs make sure customers can find you at any hour. We design the right illumination for your location and budget.' },
  { slug: 'digital-signs', name: 'Digital Signs', category: 'Custom', short: 'Electronic displays for changing messages.', desc: 'Digital signs let you update promotions and messages on the fly — great for menus, specials, and announcements.' },
  { slug: 'electronic-signs', name: 'Electronic Signs', category: 'Custom', short: 'Powered signage with dynamic capabilities.', desc: 'Electronic message centers grab attention with motion and changing content, programmable to your schedule.' },
  { slug: 'sandblasted-signs', name: 'Sandblasted Signs', category: 'Custom', short: 'Textured, carved-look signs with a premium feel.', desc: 'Sandblasted signs offer a classic, dimensional look in wood or HDU — ideal for upscale and traditional brands.' },
  { slug: 'dimensional-logos', name: 'Dimensional Logos', category: 'Custom', short: '3D logos and letters fabricated to spec.', desc: 'We fabricate your logo in three dimensions for reception walls, exteriors, and feature installations.' },

  // ---------- TRADE SHOW ----------
  { slug: 'retractable-banners', name: 'Retractable Banners', category: 'Trade Show', short: 'Roll-up banner stands that set up in seconds.', desc: 'Retractable banners are the workhorse of any booth — lightweight, portable, and ready to display in seconds.' },
  { slug: 'printed-backdrops', name: 'Printed Backdrops', category: 'Trade Show', short: 'Full-width graphic walls for your booth.', desc: 'Backdrop walls give your booth a bold, branded background and a perfect spot for photos and step-and-repeats.' },
  { slug: 'custom-tablecovers', name: 'Custom Table Covers', category: 'Trade Show', short: 'Branded, fitted fabric covers for display tables.', desc: 'Custom table covers pull your booth together with a clean, branded look that travels and washes easily.' },
  { slug: 'table-top-displays', name: 'Table Top Displays', category: 'Trade Show', short: 'Compact counter and shelf signage.', desc: 'Table top displays are perfect for smaller spaces and counters, putting your message at eye level.' },
  { slug: 'large-banners', name: 'Large Banners', category: 'Trade Show', short: 'Big, bold signage for maximum visibility.', desc: 'Large-format banners make sure your booth stands out across a crowded show floor.' },
  { slug: 'canopy-tents', name: 'Canopy Tents', category: 'Trade Show', short: 'Branded tents for outdoor and expo events.', desc: 'Custom canopy tents give you a branded home base at outdoor markets, expos, and community events.' },
  { slug: 'tradeshow-booths', name: 'Trade Show Booths', category: 'Trade Show', short: 'Complete modular booth structures.', desc: 'Modular booths assemble fast and reconfigure for different show sizes — a complete, professional presence.' },
  { slug: 'tradeshow-exhibits', name: 'Trade Show Exhibits', category: 'Trade Show', short: 'Full exhibit systems combining multiple pieces.', desc: 'Full exhibit systems combine backdrops, counters, lighting, and signage into one cohesive, show-ready package.' },
];

export const productsByCategory = products.reduce((acc, p) => {
  (acc[p.category] = acc[p.category] || []).push(p);
  return acc;
}, {});

export const getProduct = (slug) => products.find((p) => p.slug === slug);
