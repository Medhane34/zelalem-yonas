// components/molecules/FeatureList.tsx
"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeVariants } from "@/lib/motion";
import { Icon } from "@/components/atoms/Icon";

interface FeatureListProps {
  features: string[];
}

export const FeatureList = ({ features }: FeatureListProps) => {
  return (
    <motion.div
      variants={staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature}
          variants={fadeVariants}
          custom={index}
          whileHover={{ x: 4 }}
          className="flex items-center gap-3 group cursor-default"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            className="flex-shrink-0 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center group-hover:bg-accent-600 transition-colors"
          >
            <Icon 
              name="CheckIcon" 
              size="sm" 
              className="text-white"
            />
          </motion.div>
          
          <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            {feature}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};