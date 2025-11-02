// lib/motions/counterVariants.ts
import { Variants } from "framer-motion";

export const counterVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};