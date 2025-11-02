// lib/motions/cardVariants.ts
import { Variants } from "framer-motion";

/**
 * Card lift + subtle shadow change.
 *
 * Keys:
 *   offscreen → entry from below
 *   onscreen  → final position
 *   hover     → lift + stronger shadow
 */
export const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 40,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
  hover: {
    y: -8,
    boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
    transition: { duration: 0.3 },
  },
} as const;