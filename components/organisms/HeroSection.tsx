// components/hero/HeroSection.tsx
"use client";
import { motion } from 'framer-motion';
import { ImageAtom } from '@/components/atoms/Image';
import { SolidButton } from '@/components/atoms/Button'; // ← Only import what you use
import { fadeVariants, staggerContainer, staggerChild } from '@/lib/motion';

interface Stat {
  id: string;
  value: string;
  label: string;
}

interface CTA {
  text: string;
  href: string;
  variant: 'brand' | 'outline';
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  heroImage: string;
  imageAlt: string;
  stats?: Stat[];
  ctaButtons: CTA[];
}

export const HeroSection = ({
  title,
  subtitle,
  heroImage,
  imageAlt,
  stats = [],
  ctaButtons,
}: HeroSectionProps) => {
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden w-screen">
      {/* Full-Width Container — Safe & Clean */}
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2">
        <ImageAtom
                  src={heroImage}
                  alt={imageAlt}

                  className="object-cover"
                  priority width={0} height={0}        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content — Stays in Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 max-w-7xl mx-auto">
        <motion.h1
          variants={fadeVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={fadeVariants}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {/* Stats */}
        {stats.length > 0 && (
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 w-full"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={staggerChild}
                className="text-center"
              >
                <span className="text-4xl md:text-5xl font-bold mb-1 block text-brand-400">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-white/80 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTAs */}
        <motion.div
          variants={fadeVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          {ctaButtons.map((button) => (
            <SolidButton
              key={button.href}
              href={button.href}
              color={button.variant === 'brand' ? 'brand' : 'accent'}
              variant={button.variant}
              className="px-8 py-4 text-lg font-semibold min-w-[200px]"
            >
              {button.text}
            </SolidButton>
          ))}
        </motion.div>
      </div>
    </section>
  );
};