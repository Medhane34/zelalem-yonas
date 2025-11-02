// components/organisms/ServiceSection.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { SolidButton } from "@/components/atoms/Button";
import {
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
import { staggerContainer, fadeVariants, slideUp } from "@/lib/motion";

const allServices = [
  { title: "Criminal Tax Law", description: "Our team of experienced tax attorneys and experts is here to provide you with valuable.", icon: ScaleIcon, slug: "criminal-tax-law" },
  { title: "Estate Planning & Taxation", description: "From understanding the latest tax code changes to exploring tax planning strategies.", icon: DocumentIcon, slug: "criminal-tax-law" },
  { title: "State & Local Taxation", description: "Explore our informative articles, guides, and tools to gain a better grasp of tax laws.", icon: BuildingLibraryIcon, dark: true , slug: "criminal-tax-law"},
  { title: "Tax Planning & Compliance", description: "We aim to simplify the intricacies of tax law, making it accessible and relevant to you.", icon: DocumentCheckIcon, slug: "criminal-tax-law" },
  { title: "International Taxation", description: "Whether you're dealing with income tax, estate tax, business tax, or any other aspect.", icon: GlobeAltIcon, slug: "criminal-tax-law" },
  { title: "Property Taxes", description: "Tax strategy, or a legal professional in the search of the latest updates and insights.", icon: HomeIcon, slug: "criminal-tax-law" },
  // Load More (3 more)
  { title: "Corporate Tax", description: "Navigate complex corporate tax structures with expert guidance and compliance support.", icon: BanknotesIcon, slug: "criminal-tax-law" },
  { title: "Audit Defense", description: "Protect your interests with strategic defense during IRS or state tax audits.", icon: ShieldCheckIcon, slug: "criminal-tax-law" },
  { title: "Tax Analytics", description: "Leverage data-driven insights to optimize tax efficiency and forecast liabilities.", icon: ChartBarIcon, slug: "criminal-tax-law" },
];

const INITIAL_COUNT = 6;

export const ServiceSection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, allServices.length));
  };

  const visibleServices = allServices.slice(0, visibleCount);
  const hasMore = visibleCount < allServices.length;

  return (
    <section className="bg-background-light dark:bg-background-dark py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider"
          >
            Practice Areas
          </motion.p>
          <motion.h2
            variants={fadeVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light dark:text-text-dark mt-2"
          >
            Tackling Your Toughest Tax Solution
          </motion.h2>
        </div>

        {/* Grid with Load More */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {visibleServices.map((service, index) => (
              <motion.div
                key={index}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={index < INITIAL_COUNT ? fadeVariants : slideUp}
                className="contents"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  dark={service.dark}
                  slug={service.slug} // ← PASS
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <AnimatePresence>
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center mt-12"
            >
              <SolidButton color="accent" size="lg" onClick={loadMore}>
                View More Services
              </SolidButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};