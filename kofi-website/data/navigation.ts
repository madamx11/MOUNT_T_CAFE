export interface NavLink {
  label: string;
  href: string;
}

export const navigationLinks: NavLink[] = [
  { label: 'HOME', href: '#home' },
  { label: 'OUR HIGHLIGHTS', href: '#highlights' },
  { label: 'OUR MENU', href: '#menu' },
  { label: 'CTA', href: '#cta' },
  { label: 'CONTACT', href: '#contact' },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'twitter';
}

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://facebook.com/', icon: 'facebook' },
  { label: 'Twitter', href: 'https://x.com/', icon: 'twitter' },
];

export const businessInfo = {
  name: 'Kofi',
  tagline: 'Specialty Coffee • Est. 2018',
  headline: 'A Better Way to Start\nthe Day.',
  subheadline:
    'Small-batch coffee, thoughtful flavors and a space designed for good mornings and everything in between.',
  hours: [
    { days: 'Mon - Fri', time: '07:00 AM - 05:00 PM' },
    { days: 'Sat - Sun', time: '08:00 AM - 04:00 PM' },
  ],
  phone: '+61 3 9650 1234',
  address: '288 Flinders Lane\nMelbourne VIC 3000, Australia',
  mapQuery: '288+Flinders+Lane,+Melbourne+VIC+3000,+Australia',
  coordinates: { lat: -37.8172, lng: 144.9634 },
} as const;

export const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookies', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
];
