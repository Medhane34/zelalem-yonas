// lib/motions/modalVariants.ts
import { Variants } from "framer-motion";

/**
 * Modal backdrop + content scale-in.
 *
 * backdrop:   fade only
 * content:    scale + fade
 */
export const modalBackdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
};

export const modalContentVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};