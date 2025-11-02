// components/atoms/Link.tsx
"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { buttonVariants } from "@/lib/motion";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";

export type LinkVariant = "primary" | "secondary" | "ghost" | "accent";
export type LinkSize = "sm" | "base" | "lg";

interface LinkProps extends Omit<HTMLMotionProps<"a">, "children" | "ref"> {
  children: React.ReactNode;
  variant?: LinkVariant;
  size?: LinkSize;
  icon?: IconName;
  className?: string;
}

export const Link = (props: LinkProps) => {
  const {
    children,
    variant = "primary",
    size = "base",
    icon,
    className = "",
    ...motionProps // All other props (href, target, rel, onClick, custom animate, etc.) go here
  } = props;

  const base = "inline-flex items-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 underline-offset-4 hover:underline";

  const colorClasses = {
    primary: "text-brand-600 hover:text-brand-700 focus-visible:ring-brand-500",
    secondary: "text-gray-600 hover:text-gray-800 focus-visible:ring-gray-500",
    ghost: "text-gray-500 hover:text-gray-700 focus-visible:ring-gray-500",
    accent: "text-accent-600 hover:text-accent-700 focus-visible:ring-accent-500",
  };

  const sizeClasses = {
    sm: "text-small",
    base: "text-body",
    lg: "text-subheading",
  };

  return (
    <motion.a
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      className={`${base} ${colorClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...motionProps}
    >
      {icon && (
        <Icon
          name={icon}
          size={size === "lg" ? "md" : size === "base" ? "sm" : "xs"}
          variant={variant === "accent" ? "accent" : "default"}
        />
      )}
      <span>{children}</span>
    </motion.a>
  );
};