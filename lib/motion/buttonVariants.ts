// lib/motions/buttonVariants.ts
import { Variants } from "framer-motion";

/**
 * Primary filled button (brand blue → gold accent on hover)
 *
 * USAGE:
 *   <motion.button variants={buttonVariants} ... />
 *
 * Rename keys safely:
 *   hidden  → e.g. "offscreen"
 *   visible → e.g. "onscreen"
 *   hover   → e.g. "lift"
 *   tap     → e.g. "press"
 */
export const buttonVariants: Variants = {
  // -------------------------------------------------
  // 1. Entry animation (used with `initial="hidden"` & `animate="visible"`)
  // -------------------------------------------------
  hidden: { opacity: 0, y: 15 },

  // -------------------------------------------------
  // 2. Visible state (also used for `whileInView`)
  // -------------------------------------------------
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },

  // -------------------------------------------------
  // 3. Hover interaction
  // -------------------------------------------------
  hover: {
    scale: 1.05,
    // brand blue → gold accent (use Tailwind `bg-brand-500` base)
    backgroundColor: "#ffba00", // accent.500 (gold)
    transition: { duration: 0.3 },
  },

  // -------------------------------------------------
  // 4. Press interaction
  // -------------------------------------------------
  tap: { scale: 0.95 },
} as const;