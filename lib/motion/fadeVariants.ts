// lib/motions/fadeVariants.ts
import { Variants } from "framer-motion";

/**
 * Simple fade-in (used for sections, paragraphs, images…).
 *
 * Rename `initial` → any name you like.
 */
export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;