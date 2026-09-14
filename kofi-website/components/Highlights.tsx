'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

interface HighlightItem {
  src: string;
  alt: string;
}

const highlights: HighlightItem[] = [
  {
    src: '/images/highlights1.png',
    alt: 'Kofi café interior with communal wooden dining table and espresso bar',
  },
  {
    src: '/images/highlights2.png',
    alt: 'Artisan handcrafted coffee brewing setup with pour-over dripper and roasted beans',
  },
  {
    src: '/images/highlights4.png',
    alt: 'Roasted specialty coffee beans in glass storage jars on wooden counter',
  },
];

export default function Highlights() {
  const shouldReduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  // Measure scroll progress through the dedicated tall track
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Responsive, tight spring physics for immediate, tactile scroll-tied motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 35,
    restDelta: 0.001,
  });

  // Stage 1 -> 2: Image 2 enters from bottom (+100% translateY) and slides up over Image 1
  const y2 = useTransform(smoothProgress, [0.12, 0.46], ['100%', '0%']);
  const opacity2 = useTransform(smoothProgress, [0.08, 0.14], [0, 1]);
  const scale1 = useTransform(smoothProgress, [0.14, 0.46], [1, 0.98]);

  // Stage 2 -> 3: Image 3 enters from bottom (+100% translateY) and slides up over Image 2
  const y3 = useTransform(smoothProgress, [0.54, 0.88], ['100%', '0%']);
  const opacity3 = useTransform(smoothProgress, [0.50, 0.56], [0, 1]);
  const scale2 = useTransform(smoothProgress, [0.54, 0.88], [1, 0.98]);

  return (
    <section id="highlights" className="relative pt-20 md:pt-28 lg:pt-36">
      {/* Section Heading */}
      <div className="text-center px-4 mb-10 md:mb-14 lg:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-accent mb-3 sm:mb-4"
        >
          OUR HIGHLIGHTS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.15]"
        >
          The Little Things Make the
          <br className="hidden sm:block" /> Difference
        </motion.h2>
      </div>

      {/* Accessibility Fallback for Reduced Motion */}
      {shouldReduceMotion ? (
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 md:px-10 pb-28 space-y-8">
          {highlights.map((item, idx) => (
            <div
              key={item.src}
              className="relative w-full aspect-[16/8.5] rounded-[18px] md:rounded-[22px] overflow-hidden shadow-2xl border border-border bg-surface"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 90vw, 1150px"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      ) : (
        /* Dedicated Tall Scroll Track for Sticky Layered Image Stack */
        <div ref={trackRef} className="relative h-[280vh] sm:h-[300vh] lg:h-[330vh]">
          {/* Sticky Viewport Stage: remains pinned during scroll transitions */}
          <div className="sticky top-20 md:top-24 w-full flex justify-center px-4 sm:px-6 md:px-10 lg:px-16 pointer-events-none">
            {/* The Image Stack Container (NO overflow-hidden here so entering cards can slide in cleanly) */}
            <div className="relative w-full max-w-[1150px] aspect-[16/8.5] mx-auto">
              {/* ─── Layer 1: Image 1 (Base, z-index: 10) ─── */}
              <motion.div
                className="absolute inset-0 rounded-[18px] sm:rounded-[20px] md:rounded-[22px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-border bg-surface"
                style={{
                  zIndex: 10,
                  scale: scale1,
                }}
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Image
                  src={highlights[0].src}
                  alt={highlights[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 90vw, 1150px"
                  priority
                />
              </motion.div>

              {/* ─── Layer 2: Image 2 (Slides up over Image 1, z-index: 20) ─── */}
              <motion.div
                className="absolute inset-0 rounded-[18px] sm:rounded-[20px] md:rounded-[22px] overflow-hidden shadow-[0_-8px_30px_rgba(0,0,0,0.5),0_20px_50px_rgba(0,0,0,0.3)] border border-border bg-surface"
                style={{
                  zIndex: 20,
                  y: y2,
                  opacity: opacity2,
                  scale: scale2,
                }}
              >
                <Image
                  src={highlights[1].src}
                  alt={highlights[1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 90vw, 1150px"
                />
              </motion.div>

              {/* ─── Layer 3: Image 3 (Slides up over Image 2, z-index: 30) ─── */}
              <motion.div
                className="absolute inset-0 rounded-[18px] sm:rounded-[20px] md:rounded-[22px] overflow-hidden shadow-[0_-8px_30px_rgba(0,0,0,0.5),0_20px_50px_rgba(0,0,0,0.3)] border border-border bg-surface"
                style={{
                  zIndex: 30,
                  y: y3,
                  opacity: opacity3,
                }}
              >
                <Image
                  src={highlights[2].src}
                  alt={highlights[2].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 90vw, 1150px"
                />
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
