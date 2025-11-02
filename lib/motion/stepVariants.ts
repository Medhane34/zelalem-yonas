// lib/motions/stepVariants.ts
import { Variants } from "framer-motion";

/**
 * Step-by-step reveal (e.g., multi-step form).
 *
 * Use `stepEnter` on each step.
 */
export const stepEnter: Variants = {
  offscreen: { x: "-100%", opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80 },
  },
};

export const stepExit: Variants = {
  exit: { x: "100%", opacity: 0, transition: { duration: 0.4 } },
};