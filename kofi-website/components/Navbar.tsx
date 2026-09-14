'use client';

import { useState } from 'react';
import { scrollToSection } from '@/lib/utils';
import MenuOverlay from './MenuOverlay';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    scrollToSection('home');
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16 py-5"
        style={{ background: 'rgba(17, 17, 17, 0.85)', backdropFilter: 'blur(12px)' }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="text-foreground text-xl md:text-2xl font-medium tracking-tight cursor-pointer transition-opacity hover:opacity-80"
          aria-label="Kofi — Go to home"
        >
          Kofi
        </button>

        {/* Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-foreground text-sm md:text-base font-medium tracking-wide cursor-pointer transition-opacity hover:opacity-70"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="menu-overlay"
        >
          Menu
        </button>
      </nav>

      {/* Full-screen menu overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
