import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatCall from '@/components/FloatCall';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

import { site } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Sign Go | Custom Signs, Wraps & Graphics in Houston, TX',
    template: '%s | Sign Go Houston',
  },
  description:
    "Sign Go is Houston's sign professionals — custom indoor & outdoor signs, channel letters, LED signs, vehicle wraps, vinyl graphics, and banners. Design, production & installation. Call 281-814-1111 for a free quote.",
  keywords: [
    'Houston sign company', 'custom signs Houston', 'channel letters Houston',
    'LED signs Houston', 'vehicle wraps Houston', 'storefront signs', 'monument signs',
    'business signs Houston', 'vinyl graphics', 'sign installation Houston',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: 'Sign Go',
    title: 'Sign Go | Custom Signs, Wraps & Graphics in Houston, TX',
    description:
      "Houston's sign professionals — custom signs, channel letters, LED signs, vehicle wraps, and graphics. Design, production & installation.",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Sign Go — Custom Signs, Wraps & Graphics in Houston, TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Go | Houston Sign Company',
    description: "Houston's sign professionals — signs, wraps & graphics.",
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/assets/logo.png' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${site.url}/#business`,
  name: site.name,
  image: `${site.url}/media_assets/chase-bank-channel-letter-sign.jpg`,
  logo: `${site.url}/assets/logo.png`,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.zip,
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  }],
  areaServed: { '@type': 'City', name: 'Houston' },
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatCall />
      </body>
    </html>
  );
}
