'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { MenuItem } from '@/data/menu';
import { formatPrice } from '@/lib/utils';

interface MenuCardProps {
  item: MenuItem;
  index: number;
  onOrder: (item: MenuItem) => void;
}

export default function MenuCard({ item, index, onOrder }: MenuCardProps) {
  return (
    <motion.article
      className="group flex gap-4 sm:gap-5 p-5 sm:p-6 rounded-xl border border-border bg-surface transition-all duration-300 hover:bg-surface-hover hover:border-muted/25"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.08,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
    >
      {/* Product Image */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-background flex items-center justify-center">
        <Image
          src={item.image}
          alt={item.name}
          width={120}
          height={120}
          className="object-contain w-16 h-16 sm:w-20 sm:h-20"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base sm:text-lg font-medium text-foreground leading-tight">
            {item.name}
          </h3>
          <span className="text-sm sm:text-base font-medium text-foreground flex-shrink-0">
            {formatPrice(item.price)}
          </span>
        </div>

        <p className="text-sm text-muted leading-relaxed mt-1.5 mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex justify-end">
          <button
            onClick={() => onOrder(item)}
            className="px-5 py-2 rounded-full bg-background border border-border text-foreground text-xs sm:text-sm font-medium tracking-wide cursor-pointer transition-all duration-300 hover:bg-surface-hover hover:border-muted/30"
            aria-label={`Order ${item.name}`}
          >
            Order
          </button>
        </div>
      </div>
    </motion.article>
  );
}
