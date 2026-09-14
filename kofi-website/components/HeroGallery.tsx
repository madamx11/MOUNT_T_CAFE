'use client';

import Image from 'next/image';

const heroImages = [
  { src: '/images/heroImg1.jpg', alt: 'Barista pouring latte art' },
  { src: '/images/heroImg2.jpg', alt: 'Fresh coffee beans' },
  { src: '/images/heroImg3.jpg', alt: 'Kofi café interior' },
  { src: '/images/heroImg4.jpg', alt: 'Coffee being brewed' },
  { src: '/images/heroImg5.jpg', alt: 'Specialty coffee drink' },
];

export default function HeroGallery() {
  return (
    <div className="w-full max-w-7xl mx-auto px-0 md:px-4">
      {/* Desktop: all 5 side by side */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 scrollbar-hide">
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            className="relative flex-shrink-0 w-[60vw] sm:w-[45vw] md:w-0 md:flex-1 aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden snap-center"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 60vw, 20vw"
              priority={i < 3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
