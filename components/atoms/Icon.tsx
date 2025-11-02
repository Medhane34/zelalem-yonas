// components/atoms/Icon.tsx
"use client";

import { motion } from "framer-motion";
import * as Icons from "@heroicons/react/24/outline"; // HeroUI icons import

export type IconName = keyof typeof Icons;
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";
export type IconVariant = "default" | "brand" | "accent" | "gray";

interface IconProps {
  name: IconName;
  size?: IconSize;
  variant?: IconVariant;
  className?: string;
  // NO full props spread - prevents SVG/HTML event conflicts
  // If you need events, wrap <Icon /> in your own motion.div
}

const sizeClasses: Record<IconSize, string> = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

const variantClasses: Record<IconVariant, string> = {
  default: "text-gray-700 dark:text-gray-300",
  brand: "text-brand-500",
  accent: "text-accent-500",
  gray: "text-gray-500 dark:text-gray-400",
};

export const Icon = ({ name, size = "md", variant = "default", className = "" }: IconProps) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${String(name)}" not found in HeroUI`);
    return null;
  }

  return (
    <motion.span
      className={`
        flex-shrink-0 
        ${sizeClasses[size]} 
        ${variantClasses[variant]} 
        ${className}
      `}
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      viewport={{ once: true }}
    >
      <IconComponent />
    </motion.span>
  );
};