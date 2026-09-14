'use client';

import { footerLinks } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 lg:px-16 py-8 md:py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-xs sm:text-sm text-muted">
          &copy; 2026 PrebuiltUI. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs sm:text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
