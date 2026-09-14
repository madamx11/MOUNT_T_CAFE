'use client';

import { useState } from 'react';
import Image from 'next/image';
import { scrollToSection } from '@/lib/utils';
import { businessInfo } from '@/data/navigation';
import MenuOverlay from './MenuOverlay';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    scrollToSection('home');
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16 py-3.5 md:py-4 border-b border-border/40 transition-colors duration-300"
        style={{ background: 'var(--navbar-bg)', backdropFilter: 'blur(12px)' }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 sm:gap-3 text-foreground text-lg sm:text-xl md:text-2xl font-medium tracking-tight cursor-pointer transition-opacity hover:opacity-85"
          aria-label={`${businessInfo.name} — Go to home`}
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden flex-shrink-0 shadow-sm border border-border/40">
            <Image
              src={businessInfo.logo}
              alt={`${businessInfo.name} logo`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <span>{businessInfo.name}</span>
        </button>

        {/* Right actions: Theme Switcher & Menu Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />

          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-foreground text-sm md:text-base font-medium tracking-wide cursor-pointer transition-opacity hover:opacity-70 px-2 py-1"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="menu-overlay"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
