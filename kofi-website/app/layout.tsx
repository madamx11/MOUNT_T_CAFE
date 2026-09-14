import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mountsteacafe.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Mounts Tea Cafe — Paschim Vihar, New Delhi | Chai & Cafe',
  description:
    'Visit Mounts Tea Cafe in Paschim Vihar, New Delhi (Shop 20, Cottage Enclave, Block A4). Indulge in artisanal chai, refreshing shakes, snacks, sandwiches, momos and beverages. Open daily 9 AM – 8 PM.',
  keywords: [
    'Mounts Tea Cafe',
    'the mount tea cafe',
    'tea cafe in Paschim Vihar',
    'cafe in Paschim Vihar',
    'chai lovers New Delhi',
    'best chai Paschim Vihar',
    'Cottage Enclave cafe',
    'Block A4 Paschim Vihar cafe',
    'Mounts Tea',
    'tea and snacks Delhi',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Mounts Tea Cafe — Paschim Vihar, New Delhi',
    description:
      'Artisanal chai, fresh brews, delicious bites and a cozy welcoming space in Paschim Vihar, New Delhi.',
    url: siteUrl,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Mounts Tea Cafe',
    images: [
      {
        url: `${siteUrl}/images/logo.png`,
        width: 676,
        height: 676,
        alt: 'Mounts Tea Cafe Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mounts Tea Cafe — Paschim Vihar, New Delhi',
    description:
      'Artisanal chai, fresh brews, delicious bites and a cozy welcoming space in Paschim Vihar, New Delhi.',
    images: [`${siteUrl}/images/logo.png`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  '@id': `${siteUrl}/#cafe`,
  name: 'Mounts Tea Cafe',
  alternateName: ['The Mount Tea Cafe', 'Mount Tea Cafe', 'mountstea'],
  description:
    'Cozy artisanal tea cafe in Paschim Vihar, New Delhi serving handcrafted chai, sandwiches, momos, shakes, and refreshing beverages.',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/logo.png`,
  telephone: '+91-88513-74066',
  priceRange: '₹100 - ₹200',
  servesCuisine: ['Tea', 'Chai', 'Fast Food', 'Snacks', 'Beverages'],
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Shop 20, Ground Floor, Block A 4, A4/306, Cottage Enclave, Paschim Vihar',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110063',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.6696,
    longitude: 77.096,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '20:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/mountstea/',
    'https://www.zomato.com/ncr/mounts-tea-cafe-paschim-vihar-new-delhi',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        {/* JSON-LD Schema for Google Rich Snippets & Local Map Pack */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

