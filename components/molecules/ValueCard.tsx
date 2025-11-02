// components/molecules/ValueCard.tsx
"use client";

import { motion } from "framer-motion";
import { fadeVariants, cardVariants } from "@/lib/motion";
/* import { Heading } from "@/components/atoms/Heading";
 */import { Paragraph } from "@/components/atoms/Paragraph";
import { Icon } from "@/components/atoms/Icon";

interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
  offset: boolean;
}

interface ValueCardProps {
  value: Value;
  index: number;
}

export const ValueCard = ({ value, index }: ValueCardProps) => {
  // Apply downward offset to cards 1 & 3
  const getVerticalOffset = (): string => {
    return value.offset ? "mt-8 lg:mt-12" : "mt-0";
  };

  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      className={`
        ${getVerticalOffset()}
        transition-all duration-500 ease-out
      `}
    >
      {/* Card Container - Removed debug borders */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-card hover:shadow-card-hover border border-gray-100 dark:border-gray-700 transition-all duration-300 group h-full flex flex-col">
        
        {/* Icon Container - Centered, no number badge */}
        <div className="mb-6 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Icon 
              name={value.icon as any} 
              size="xl" 
              variant="brand"
              className="text-brand-500 dark:text-brand-400"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h1 
/*             level={3}
            variant="default"
            size="lg" */
            className="mb-4 text-center group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300"
          >
            {value.title}
          </h1>

          <Paragraph 
            variant="default"
            className="text-gray-600 dark:text-gray-400 leading-relaxed text-center flex-1"
          >
            {value.description}
          </Paragraph>
        </div>

        {/* Bottom Accent Line - Keep the nice hover effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-brand group-hover:w-3/4 transition-all duration-500 rounded-full" />
        
        {/* Floating Effect on Hover - Keep this nice effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-200 dark:group-hover:border-brand-700 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
      </div>

      {/* REMOVED: Connector dots below cards 1, 2, 3 */}
    </motion.div>
  );
};