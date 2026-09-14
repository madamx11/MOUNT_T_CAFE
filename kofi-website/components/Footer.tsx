'use client';

import { businessInfo } from '@/data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 md:px-10 lg:px-16 py-8 md:py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-xs sm:text-sm text-muted">
          &copy; {currentYear} {businessInfo.name}. All rights reserved.
        </p>

        {/* Cafe Location & Back to Top */}
        <div className="flex items-center gap-6">
          <span className="text-xs sm:text-sm text-muted">
            Paschim Vihar, New Delhi
          </span>
          <a
            href="#home"
            className="text-xs sm:text-sm text-muted transition-colors hover:text-foreground"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}

