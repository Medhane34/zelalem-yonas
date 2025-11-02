// components/organisms/about/QuoteSection.tsx
"use client";

import { motion } from "framer-motion";
import { fadeVariants, scaleVariants } from "@/lib/motion";
import { QuoteDisplay } from "@/components/molecules/QuoteDisplay";

export const QuoteSection = () => {
  return (
    <section className="relative py-32 overflow-hidden  left-1/2 right-1/2 w-screen -mx-[50vw]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/backgrounds/law-library.jpg")', // Legal-themed image
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/80 via-brand-800/70 to-accent-900/60" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-brand-900/20 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        variants={fadeVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative container mx-auto px-4 max-w-4xl text-center"
      >
        <QuoteDisplay />
      </motion.div>
    </section>
  );
};