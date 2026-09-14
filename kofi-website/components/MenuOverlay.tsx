'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { navigationLinks, businessInfo } from '@/data/navigation';
import { scrollToSection } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' as const },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: 0.15 },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.25 },
  },
};

const navContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.25,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1 as const,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const handleNavClick = useCallback(
    (href: string) => {
      onClose();
      // Small delay to let overlay close animation start
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    },
    [onClose]
  );

  // Lock body scroll & handle Escape
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="menu-overlay"
          className="fixed inset-0 z-[60] flex"
          style={{ background: 'var(--background)' }}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Top Left — Brand with Logo */}
          <div className="absolute top-5 left-6 md:left-10 lg:left-16 flex items-center gap-2.5 z-10">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-border/40 flex-shrink-0 shadow-sm">
              <Image
                src={businessInfo.logo}
                alt={`${businessInfo.name} logo`}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-foreground text-base sm:text-lg font-medium tracking-tight">
              {businessInfo.name}
            </span>
          </div>

          {/* Top Actions: Theme Switcher & Close button */}
          <div className="absolute top-5 right-6 md:right-10 lg:right-16 flex items-center gap-4 z-10">
            <ThemeToggle />
            <button
              onClick={onClose}
              className="text-foreground text-sm md:text-base font-medium tracking-wide cursor-pointer transition-opacity hover:opacity-70 px-2 py-1"
              aria-label="Close navigation menu"
            >
              Close
            </button>
          </div>

          {/* Left — Image */}
          <motion.div
            className="hidden lg:flex w-[45%] p-8 pr-4 items-center justify-center"
            variants={imageVariants}
          >
            <div className="relative w-full h-[85vh] rounded-2xl overflow-hidden">
              <Image
                src="/images/heroImg3.jpg"
                alt="Mounts Tea Cafe interior"
                fill
                className="object-cover"
                sizes="45vw"
                priority
              />
            </div>
          </motion.div>

          {/* Right — Navigation */}
          <div className="flex-1 flex items-center justify-center lg:justify-start lg:pl-16 xl:pl-24">
            <motion.ul
              className="flex flex-col gap-6 md:gap-8"
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navigationLinks.map((link) => (
                <motion.li key={link.href} variants={navItemVariants}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-muted hover:text-foreground transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
