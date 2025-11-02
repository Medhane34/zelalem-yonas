// components/atoms/Paragraph.tsx
"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { fadeVariants } from "@/lib/motion";

export type ParagraphVariant = "default" | "muted" | "emphasis";
export type ParagraphSize = "sm" | "base" | "lg";

interface ParagraphProps extends Omit<HTMLMotionProps<"p">, "children" | "ref"> {
  children: React.ReactNode;
  variant?: ParagraphVariant;
  size?: ParagraphSize;
  className?: string;
}

export const Paragraph = (props: ParagraphProps) => {
  const {
    children,
    variant = "default",
    size = "base",
    className = "",
    ...motionProps // All other props (onClick, custom animate, etc.) go here
  } = props;

  const base = "font-body leading-relaxed max-w-prose";

  const colorClasses = {
    default: "text-gray-800 dark:text-gray-200",
    muted: "text-gray-500 dark:text-gray-400",
    emphasis: "text-gray-900 dark:text-white font-medium",
  };

  const sizeClasses = {
    sm: "text-small",
    base: "text-body",
    lg: "text-subheading",
  };

  return (
    <motion.p
      variants={fadeVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`${base} ${colorClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.p>
  );
};