// lib/motions/buttonOutlineVariants.ts
import { Variants } from "framer-motion";

/**
 * Outline button (transparent → gold border/color on hover)
 *
 * Same rename rules as buttonVariants.
 */
export const buttonOutlineVariants: Variants = {
  hidden: { opacity: 0, y: 15 },

  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },

  hover: {
    scale: 1.05,
    borderColor: "#ffba00", // accent.500
    color: "#ffba00",       // accent.500
    transition: { duration: 0.3 },
  },

  tap: { scale: 0.95 },
} as const;