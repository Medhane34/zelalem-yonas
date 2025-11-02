// lib/motions/staggerVariants.ts
import { Variants } from "framer-motion";

/**
 * Parent container for staggered children.
 *
 * Use on the **parent**:
 *   <motion.div variants={staggerContainer} initial="hidden" animate="visible">
 *     {children}
 *   </motion.div>
 *
 * Children should use `staggerChild`.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};