"use client";

import { motion } from "framer-motion";

export const OurStorySection = () => {
  const features = [
    "Measurable proven results",
    "Customized business strategies", 
    "Multi-industry expertise",
    "Innovative real solutions",
    "Reliable expert guidance",
    "Support for long-term"
  ];

  // Simple variants as fallback
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* TEXT COLUMN */}
          <motion.div 
            {...fadeInUp}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-accent-600 text-sm uppercase tracking-wider font-semibold">
                About us
              </h2>
              
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Unlock our expertise to drive{" "}
                <span className="text-accent-600 dark:text-accent-400">
                  success across industries
                </span>
              </h1>
              
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Leverage our deep industry knowledge and innovative strategies to 
                achieve the best of our business growth. Our tailored solutions 
                ensure success across diverse sectors by addressing your unique 
                challenges and opportunities.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE COLUMN */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-700 h-96 flex items-center justify-center">
              <p className="text-gray-500">Image Placeholder</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};