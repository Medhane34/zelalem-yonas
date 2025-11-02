// components/service-detail/ProcessSection.tsx
"use client";

import { motion } from "framer-motion";
import { fadeVariants, staggerContainer, staggerChild } from "@/lib/motion";
import {
  MagnifyingGlassIcon,
  CheckBadgeIcon,
  DocumentTextIcon,
  ScaleIcon,
  DocumentIcon,
  BuildingLibraryIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  HomeIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import type { Service } from "@/types/services";

interface ProcessSectionProps {
  service: Pick<Service, "process" | "iconName">;
}

// Map iconName → Icon
const iconMap: Record<string, React.ComponentType<any>> = {
  scale: ScaleIcon,
  document: DocumentIcon,
  building: BuildingLibraryIcon,
  "document-check": DocumentCheckIcon,
  globe: GlobeAltIcon,
  home: HomeIcon,
  banknotes: BanknotesIcon,
  shield: ShieldCheckIcon,
  chart: ChartBarIcon,
  search: MagnifyingGlassIcon,
  check: CheckBadgeIcon,
  file: DocumentTextIcon,
};

const defaultSteps = [
  { step: "Research Suburbs", description: "..." },
  { step: "Instant Valuation", description: "..." },
  { step: "Track Property", description: "..." },
];

export const ProcessSection = ({ service }: ProcessSectionProps) => {
  const steps = service.process.length > 0 ? service.process : defaultSteps;
  const defaultIcon = iconMap[service.iconName] || ScaleIcon;

  return (
    <section className="bg-background-light dark:bg-background-dark py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light dark:text-text-dark mb-12"
        >
          How it works?
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative"
        >
          <svg className="hidden md:block absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 pointer-events-none z-0">
            <motion.path
              d="M 25% 0 L 75% 0"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="text-brand-300 dark:text-brand-700"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
          </svg>

          {steps.map((step, index) => {
            const Icon = index === 0 ? defaultIcon : iconMap.search || MagnifyingGlassIcon;

            return (
              <motion.div
                key={index}
                variants={staggerChild}
                whileHover={{ y: -8 }}
                className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg text-center group z-10"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                </div>

                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent-500 text-white text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>

                <h3 className="font-bold text-lg mb-2 text-text-light dark:text-text-dark">
                  {step.step}
                </h3>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};