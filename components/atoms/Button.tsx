// components/atoms/Button.tsx
"use client";

import { extendVariants, Button as HeroButton } from "@heroui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import { buttonVariants } from "@/lib/motion";

// ──────────────────────────────────────────────────────────────
// 1. Extend HeroUI Button with custom variants
// ──────────────────────────────────────────────────────────────
const BaseButton = extendVariants(HeroButton, {
  variants: {
    // ── Color variants (brand + accent) ──
    color: {
      brand: "bg-brand-500 text-white hover:bg-brand-600 focus-visible:ring-brand-500",
      accent: "bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-500",
      neutral: "bg-gray-500 text-white hover:bg-gray-600 focus-visible:ring-gray-500",
    },

    // ── Size variants (responsive) ──
    size: {
      sm: "px-3 py-1.5 text-small rounded-md",
      md: "px-5 py-2.5 text-body rounded-lg",
      lg: "px-7 py-3.5 text-subheading rounded-xl",
    },

    // ── Style variants: solid vs outline ──
    variant: {
      solid: "", // uses `color` bg
      outline: "bg-transparent border-2",
    },
  },

  // ── Compound variants (outline + color) ──
  compoundVariants: [
    // Outline + brand
    {
      variant: "outline",
      color: "brand",
      class: "border-brand-500 text-brand-500 hover:bg-brand-50 hover:text-brand-600",
    },
    // Outline + accent
    {
      variant: "outline",
      color: "accent",
      class: "border-accent-500 text-accent-500 hover:bg-accent-50 hover:text-accent-600",
    },
    // Outline + neutral
    {
      variant: "outline",
      color: "neutral",
      class: "border-gray-500 text-gray-500 hover:bg-gray-50 hover:text-gray-600",
    },
  ],

  // ── Default variants ──
  defaultVariants: {
    color: "brand",
    size: "md",
    variant: "solid",
  },
});

// ──────────────────────────────────────────────────────────────
// 2. Motion-wrapped Solid Button - FIXED VERSION
// ──────────────────────────────────────────────────────────────
interface SolidButtonProps
  extends Omit<React.ComponentProps<typeof BaseButton>, "children" | "color" | "variant"> {
  children: React.ReactNode;
  color?: "brand" | "accent" | "neutral";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const SolidButton = ({
  children,
  color = "brand",
  size = "md",
  className = "",
  ...buttonProps
}: SolidButtonProps) => {
  return (
    <motion.div
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true }}
    >
      <BaseButton
        color={color}
        size={size}
        variant="solid"
        className={className}
        {...buttonProps}
      >
        {children}
      </BaseButton>
    </motion.div>
  );
};

// ──────────────────────────────────────────────────────────────
// 3. Motion-wrapped Outline Button - FIXED VERSION
// ──────────────────────────────────────────────────────────────
interface OutlineButtonProps
  extends Omit<React.ComponentProps<typeof BaseButton>, "children" | "color" | "variant"> {
  children: React.ReactNode;
  color?: "brand" | "accent" | "neutral";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const OutlineButton = ({
  children,
  color = "brand",
  size = "md",
  className = "",
  ...buttonProps
}: OutlineButtonProps) => {
  return (
    <motion.div
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true }}
    >
      <BaseButton
        color={color}
        size={size}
        variant="outline"
        className={className}
        {...buttonProps}
      >
        {children}
      </BaseButton>
    </motion.div>
  );
};