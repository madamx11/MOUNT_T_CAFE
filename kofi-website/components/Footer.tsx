'use client';

import Image from 'next/image';
import { businessInfo } from '@/data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 md:px-10 lg:px-16 py-8 md:py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright with Logo */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-border/50 shadow-xs">
            <Image
              src={businessInfo.logo}
              alt=""
              width={24}
              height={24}
              className="object-cover"
            />
          </div>
          <p className="text-xs sm:text-sm text-muted">
            &copy; {currentYear} {businessInfo.name}. All rights reserved.
          </p>
        </div>

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

