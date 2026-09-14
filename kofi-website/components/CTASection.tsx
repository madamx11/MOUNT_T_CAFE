'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { scrollToSection, fadeUp, staggerContainer } from '@/lib/utils';

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-24 md:py-32 lg:py-44 px-6 md:px-10 lg:px-16"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        {/* Layout with images on sides and text center */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
          {/* Left Image */}
          <motion.div
            className="hidden lg:block flex-shrink-0 w-48 xl:w-56"
            variants={fadeUp}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/heroImg5.jpg"
                alt="Iced coffee drink"
                fill
                className="object-cover"
                sizes="250px"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            className="flex-1 text-center"
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.15] mb-6 md:mb-8"
            >
              A Better Coffee Break
              <br />
              Starts Here
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-muted max-w-lg mx-auto leading-relaxed mb-8 md:mb-10"
            >
              Take a moment for yourself with handcrafted drinks, fresh flavors
              and a welcoming space.
            </motion.p>

            <motion.button
              variants={fadeUp}
              onClick={() => scrollToSection('menu')}
              className="px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold tracking-widest cursor-pointer transition-all duration-300 hover:opacity-90"
              aria-label="Order now — scroll to menu"
            >
              ORDER NOW
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="hidden lg:block flex-shrink-0 w-48 xl:w-56"
            variants={fadeUp}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/heroImg4.jpg"
                alt="Specialty coffee preparation"
                fill
                className="object-cover"
                sizes="250px"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile: show images in a row below on smaller screens */}
        <motion.div
          className="flex lg:hidden justify-center gap-4 mt-12"
          variants={fadeUp}
        >
          <div className="relative w-36 sm:w-40 aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src="/images/heroImg5.jpg"
              alt="Iced coffee drink"
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
          <div className="relative w-36 sm:w-40 aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src="/images/heroImg4.jpg"
              alt="Specialty coffee preparation"
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
