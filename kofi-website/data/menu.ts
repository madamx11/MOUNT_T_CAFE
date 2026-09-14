export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'classic-espresso',
    name: 'Classic Espresso',
    description:
      'Rich, full-bodied espresso with a smooth and intense finish.',
    price: 3.0,
    image: '/images/menuImg1.png',
  },
  {
    id: 'signature-cappuccino',
    name: 'Signature Cappuccino',
    description:
      'Bold espresso topped with silky steamed milk and delicate foam.',
    price: 4.0,
    image: '/images/menuImg2.png',
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    description:
      'Chilled espresso and creamy milk served over ice for a smooth finish.',
    price: 4.5,
    image: '/images/menuImg3.png',
  },
  {
    id: 'mocha-latte',
    name: 'Mocha Latte',
    description:
      'Rich espresso blended with chocolate and finished with creamy foam.',
    price: 4.75,
    image: '/images/menuImg4.png',
  },
  {
    id: 'iced-mocha',
    name: 'Iced Mocha',
    description:
      'Cold espresso, chocolate and milk layered over ice for a refreshing treat.',
    price: 5.0,
    image: '/images/menuImg5.png',
  },
  {
    id: 'vanilla-cold-brew',
    name: 'Vanilla Cold Brew',
    description:
      'Smooth slow-steeped cold brew with a subtle touch of vanilla.',
    price: 4.5,
    image: '/images/menuImg6.png',
  },
];
