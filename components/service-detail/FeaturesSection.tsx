// components/service-detail/FeaturesSection.tsx
"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/atoms/Icon";
import { staggerContainer, staggerChild } from "@/lib/motion";
import type { Service } from "@/types/services";

interface FeaturesSectionProps {
  service: Pick<Service, "features">;
}

export const FeaturesSection = ({ service }: FeaturesSectionProps) => {
  const features = service.features.slice(0, 9); // 3x3 max

  if (features.length === 0) return null;

  return (
    <section className="relative left-1/2 right-1/2 w-screen -mx-[50vw]  bg-background-light dark:bg-background-dark py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold text-text-light dark:text-text-dark mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Key Features
        </motion.h2>

        {/* 3x3 Flat Grid – No Gap, No Hover, No Badge */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0" // No gap for seamless columns
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerChild}
              className="p-6 bg-gray-50 dark:bg-slate-800/50" // Flat tint only, no border/shadow/rounded
            >
              {/* Icon */}
              <Icon
                name={feature.iconName}
                size="lg"
                variant="brand"
                className="mx-auto mb-3" // No hover scale
              />

              {/* Title & Desc */}
              <h3 className="font-bold text-lg mb-2 text-text-light dark:text-text-dark text-center">
                {feature.title}
              </h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70 text-center leading-relaxed">
                {feature.description}
              </p>

              {/* Optional Stats (If Present) */}
              {feature.stats && feature.stats.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {feature.stats.map((stat, i) => (
                    <span key={i} className="px-2 py-1 bg-white/30 dark:bg-slate-600/50 rounded text-xs">
                      {stat}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};