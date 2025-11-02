// components/molecules/ServiceCard.tsx
"use client";

import { motion } from "framer-motion";
import { Link } from "@/components/atoms/Link";
import { fadeVariants } from "@/lib/motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  dark?: boolean;
  slug: string; // ← ADD
}

export const ServiceCard = ({ title, description, icon: Icon, dark = false, slug }: ServiceCardProps) => {
  return (
    <motion.div
      variants={fadeVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
      className={`
        p-6 rounded-2xl shadow-lg transition-all duration-300
        ${dark
          ? "bg-brand-600 text-white"
          : "bg-white dark:bg-slate-800 text-text-light dark:text-text-dark"
        }
      `}
    >
      <Icon
        className={`
          w-10 h-10 mb-4
          ${dark ? "text-white" : "text-brand-600 dark:text-brand-400"}
        `}
      />
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className={`text-sm mb-4 opacity-80 ${dark ? "text-white/80" : "text-text-light/70 dark:text-text-dark/70"}`}>
        {description}
      </p>
      <Link
       href={`/services/${slug}`}
        variant="accent"
        size="sm"
        icon="ArrowLeftIcon"
        className={dark ? "text-white hover:text-accent-300" : "text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300"}
      >
        Read More
      </Link>
    </motion.div>
  );
};