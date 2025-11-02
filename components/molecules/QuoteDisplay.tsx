// components/molecules/QuoteDisplay.tsx
"use client";

import { motion } from "framer-motion";
import { fadeVariants, scaleVariants } from "@/lib/motion";
import { Icon } from "@/components/atoms/Icon";
import { Paragraph } from "@/components/atoms/Paragraph";

export const QuoteDisplay = () => {
  const quoteData = {
    quote: "Where law ends, tyranny begins.",
    author: "William Pitt the Younger", 
    context: "We believe in the rule of law as the foundation of a just society, and we're committed to upholding this principle for every client.",
    source: "Speech in the House of Commons, 1783"
  };

  return (
    <div className="space-y-8">
      {/* Animated Scale of Justice Icon */}
      <motion.div
        variants={scaleVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="relative">
          {/* Outer Circle */}
          <motion.div
            className="w-24 h-24 border-2 border-accent-400/30 rounded-full flex items-center justify-center"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Scale Icon */}
            <Icon 
              name="ScaleIcon" 
              size="xl" 
              className="text-accent-400"
            />
          </motion.div>
          
          {/* Floating Particles */}
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 bg-accent-400 rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Quote Text */}
      <motion.blockquote
        variants={fadeVariants}
        className="space-y-6"
      >
        <motion.p
          variants={fadeVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-white leading-tight"
        >
          "{quoteData.quote}"
        </motion.p>

        {/* Author */}
        <motion.cite
          variants={fadeVariants}
          className="text-xl font-semibold text-accent-300 not-italic block"
        >
          — {quoteData.author}
        </motion.cite>

        {/* Source (Subtle) */}
        <motion.p
          variants={fadeVariants}
          className="text-sm text-brand-200/70 italic"
        >
          {quoteData.source}
        </motion.p>
      </motion.blockquote>

      {/* Divider */}
      <motion.div
        variants={fadeVariants}
        className="flex justify-center"
      >
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
      </motion.div>

      {/* Context/Interpretation */}
      <motion.div
        variants={fadeVariants}
        className="max-w-2xl mx-auto"
      >
        <Paragraph
          size="lg"
          variant="muted"
          className="text-brand-100 leading-relaxed"
        >
          {quoteData.context}
        </Paragraph>
      </motion.div>
    </div>
  );
};