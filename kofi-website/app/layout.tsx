import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kofi — Specialty Coffee',
  description:
    'Small-batch specialty coffee, thoughtful flavors and a welcoming space in Melbourne.',
  keywords: [
    'coffee',
    'specialty coffee',
    'Melbourne',
    'café',
    'espresso',
    'cold brew',
  ],
  openGraph: {
    title: 'Kofi — Specialty Coffee',
    description:
      'Small-batch specialty coffee, thoughtful flavors and a welcoming space in Melbourne.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Kofi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kofi — Specialty Coffee',
    description:
      'Small-batch specialty coffee, thoughtful flavors and a welcoming space in Melbourne.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
