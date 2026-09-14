'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { menuItems, type MenuItem } from '@/data/menu';
import { fadeUp } from '@/lib/utils';
import MenuCard from './MenuCard';
import OrderModal from './OrderModal';

export default function MenuSection() {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleOrder = useCallback((item: MenuItem) => {
    setSelectedProduct(item);
    setQuantity(1);
    setIsConfirmed(false);
    setIsModalOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
    // Reset after exit animation
    setTimeout(() => {
      setSelectedProduct(null);
      setQuantity(1);
      setIsConfirmed(false);
    }, 300);
  }, []);

  const handleAddToOrder = useCallback(() => {
    setIsConfirmed(true);
  }, []);

  const handleContinueBrowsing = useCallback(() => {
    handleClose();
  }, [handleClose]);

  return (
    <section
      id="menu"
      className="py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16"
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-14 md:mb-18 lg:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">
          Our Menu
        </h2>
      </motion.div>

      {/* Menu Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {menuItems.map((item, index) => (
          <MenuCard
            key={item.id}
            item={item}
            index={index}
            onOrder={handleOrder}
          />
        ))}
      </div>

      {/* Order Modal */}
      <OrderModal
        product={selectedProduct}
        isOpen={isModalOpen}
        quantity={quantity}
        isConfirmed={isConfirmed}
        onClose={handleClose}
        onQuantityChange={setQuantity}
        onAddToOrder={handleAddToOrder}
        onContinueBrowsing={handleContinueBrowsing}
      />
    </section>
  );
}
