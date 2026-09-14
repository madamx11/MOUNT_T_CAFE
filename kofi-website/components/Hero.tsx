'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/utils';
import { scrollToSection } from '@/lib/utils';
import HeroGallery from './HeroGallery';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 md:pt-32 md:pb-20"
    >
      <motion.div
        className="flex flex-col items-center text-center max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center px-5 py-2 rounded-full border border-border text-xs md:text-sm text-muted tracking-widest uppercase mb-8 md:mb-10"
        >
          Specialty Coffee &bull; Est. 2018
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-light leading-[1.1] tracking-tight text-foreground mb-6 md:mb-8"
        >
          A Better Way to Start
          <br />
          the Day.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg text-muted max-w-xl leading-relaxed mb-8 md:mb-10"
        >
          Small-batch coffee, thoughtful flavors and a space designed for good
          mornings and everything in between.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={fadeUp}
          onClick={() => scrollToSection('menu')}
          className="px-7 py-3 rounded-full bg-foreground text-background text-sm font-medium tracking-wide cursor-pointer transition-all duration-300 hover:opacity-90 shadow-sm"
          aria-label="Explore menu — scroll to menu section"
        >
          Explore menu
        </motion.button>
      </motion.div>

      {/* Hero Image Strip */}
      <motion.div
        className="w-full mt-16 md:mt-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <HeroGallery />
      </motion.div>
    </section>
  );
}
