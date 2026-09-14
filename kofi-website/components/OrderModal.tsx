'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Minus, Plus, Check } from 'lucide-react';
import type { MenuItem } from '@/data/menu';
import { formatPrice, scaleIn } from '@/lib/utils';

interface OrderModalProps {
  product: MenuItem | null;
  isOpen: boolean;
  quantity: number;
  isConfirmed: boolean;
  onClose: () => void;
  onQuantityChange: (qty: number) => void;
  onAddToOrder: () => void;
  onContinueBrowsing: () => void;
}

export default function OrderModal({
  product,
  isOpen,
  quantity,
  isConfirmed,
  onClose,
  onQuantityChange,
  onAddToOrder,
  onContinueBrowsing,
}: OrderModalProps) {
  // Lock body scroll
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

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!product) return null;

  const subtotal = product.price * quantity;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label={`Order ${product.name}`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

          {/* Modal */}
          <motion.div
            className="relative bg-surface border border-border rounded-2xl w-full max-w-md overflow-hidden"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 text-foreground cursor-pointer transition-colors hover:bg-background"
              aria-label="Close order dialog"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-8">
              {/* Product Info */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 flex-shrink-0 rounded-lg bg-background flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={120}
                    className="object-contain w-16 h-16"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xl font-medium text-foreground">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-8">
                {product.description}
              </p>

              {!isConfirmed ? (
                <>
                  {/* Quantity Selector */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-muted">Quantity</span>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() =>
                          onQuantityChange(Math.max(1, quantity - 1))
                        }
                        className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground cursor-pointer transition-colors hover:bg-surface-hover disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Decrease quantity"
                        disabled={quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-lg font-medium text-foreground w-6 text-center tabular-nums">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onQuantityChange(quantity + 1)}
                        className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground cursor-pointer transition-colors hover:bg-surface-hover"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="flex items-center justify-between py-4 border-t border-border mb-6">
                    <span className="text-sm text-muted">Subtotal</span>
                    <span className="text-lg font-medium text-foreground tabular-nums">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  {/* Add to Order */}
                  <button
                    onClick={onAddToOrder}
                    className="w-full py-3.5 rounded-full bg-foreground text-background text-sm font-medium tracking-wide cursor-pointer transition-all duration-300 hover:opacity-90"
                  >
                    Add to Order
                  </button>
                </>
              ) : (
                /* Confirmation State */
                <motion.div
                  className="text-center py-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-12 h-12 rounded-full bg-green-900/30 border border-green-700/40 flex items-center justify-center mx-auto mb-4">
                    <Check size={22} className="text-green-400" />
                  </div>
                  <p className="text-lg font-medium text-foreground mb-1">
                    Added to order
                  </p>
                  <p className="text-sm text-muted mb-6">
                    {quantity}× {product.name} — {formatPrice(subtotal)}
                  </p>
                  <button
                    onClick={onContinueBrowsing}
                    className="px-8 py-3 rounded-full bg-surface border border-border text-foreground text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-surface-hover"
                  >
                    Continue browsing
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
