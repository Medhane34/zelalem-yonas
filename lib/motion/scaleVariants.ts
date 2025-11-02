// lib/motion/scaleVariants.ts
export const scaleVariants = {
  initial: {
    scale: 0,
    opacity: 0,
    rotate: -180
  },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  },
  hover: {
    scale: 1.05,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};