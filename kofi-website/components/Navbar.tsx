'use client';

import { useState } from 'react';
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
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 md:py-5 border-b border-border/40 transition-colors duration-300"
        style={{ background: 'var(--navbar-bg)', backdropFilter: 'blur(12px)' }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="text-foreground text-xl md:text-2xl font-medium tracking-tight cursor-pointer transition-opacity hover:opacity-80"
          aria-label={`${businessInfo.name} — Go to home`}
        >
          {businessInfo.name}
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
