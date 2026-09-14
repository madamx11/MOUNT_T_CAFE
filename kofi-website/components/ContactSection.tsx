'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, Phone, MapPin } from 'lucide-react';
import { businessInfo, socialLinks } from '@/data/navigation';
import { staggerContainer, slideInLeft, slideInRight } from '@/lib/utils';

/* Inline SVG social icons (brand icons removed from lucide-react) */
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

const socialIconMap: Record<string, React.FC<{ size?: number }>> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
};

export default function ContactSection() {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.85!2d${businessInfo.coordinates.lng}!3d${businessInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d039f286b2b2b%3A0x1!2sMounts%20Tea%20Cafe%2C%20Shop%2020%2C%20Ground%20Floor%2C%20Block%20A%204%2C%20Cottage%20Enclave%2C%20Paschim%20Vihar%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin`;

  return (
    <section
      id="contact"
      className="py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          {/* Left — Business Info */}
          <motion.div
            className="lg:pr-12 xl:pr-16 lg:border-r lg:border-border"
            variants={slideInLeft}
          >
            {/* Brand with Logo */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-border flex-shrink-0 shadow-md">
                <Image
                  src={businessInfo.logo}
                  alt={`${businessInfo.name} logo`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-tight">
                  {businessInfo.name}
                </h2>
                <p className="text-xs tracking-widest text-accent uppercase font-medium mt-0.5">
                  {businessInfo.tagline}
                </p>
              </div>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-foreground leading-tight mb-10 md:mb-12">
              Freshly Brewed Chai &amp; Bites,
              <br />
              Paschim Vihar
            </p>

            {/* Opening Hours */}
            <div className="flex gap-3 mb-6">
              <Clock
                size={18}
                className="text-muted flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-foreground mb-2">
                  Opening hours
                </p>
                {businessInfo.hours.map((h) => (
                  <p key={h.days} className="text-sm text-muted leading-relaxed">
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 mb-6">
              <Phone
                size={18}
                className="text-muted flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">
                  Phone
                </p>
                <a
                  href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {businessInfo.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-3 mb-10">
              <MapPin
                size={18}
                className="text-muted flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">
                  Location
                </p>
                <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
                  {businessInfo.address}
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted transition-all duration-300 hover:text-foreground hover:border-muted/50"
                    aria-label={link.label}
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Map */}
          <motion.div
            className="lg:pl-12 xl:pl-16 flex items-center"
            variants={slideInRight}
          >
            <div className="w-full aspect-[4/3] lg:aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-border">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${businessInfo.name} location — Paschim Vihar, New Delhi`}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
