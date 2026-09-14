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
  { label: 'Instagram', href: 'https://www.instagram.com/mountstea/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://facebook.com/', icon: 'facebook' },
  { label: 'Twitter', href: 'https://x.com/', icon: 'twitter' },
];

export const businessInfo = {
  name: 'Mounts Tea Cafe',
  tagline: 'Artisanal Chai & Brews • Est. Paschim Vihar',
  headline: 'A Better Way to Start\nthe Day.',
  subheadline:
    'Handcrafted chai, refreshing beverages, delicious bites and a warm space designed for good conversations.',
  hours: [
    { days: 'Mon - Sun', time: '09:00 AM - 08:00 PM' },
  ],
  phone: '088513 74066',
  address: 'Shop 20, Ground Floor, Block A 4, A4/306,\nCottage Enclave, Paschim Vihar,\nNew Delhi, Delhi 110063',
  mapQuery: 'Mounts+Tea+Cafe,+Shop+20,+Ground+Floor,+Block+A+4,+Cottage+Enclave,+Paschim+Vihar,+New+Delhi,+Delhi+110063',
  coordinates: { lat: 28.6696, lng: 77.0960 },
} as const;

export const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookies', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
];

