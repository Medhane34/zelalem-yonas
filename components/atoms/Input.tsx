// components/atoms/Input.tsx - Optional wrapper for HeroUI Input
"use client";

import { motion } from "framer-motion";
import { Input as HeroInput } from "@heroui/react";
import { fadeVariants } from "@/lib/motion";
import type { InputProps as HeroInputProps } from "@heroui/react";

interface InputProps extends HeroInputProps {
  className?: string;
}

export const Input = (props: InputProps) => {
  const { className = "", ...inputProps } = props;

  return (
    <motion.div
      variants={fadeVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={className}
    >
      <HeroInput
        size="lg"
        classNames={{
          input: [
            "bg-white",
            "text-gray-900",
            "dark:bg-gray-800",
            "dark:text-white",
          ],
          inputWrapper: [
            "bg-white",
            "border-gray-300",
            "hover:bg-gray-50",
            "data-[hover=true]:bg-gray-50",
            "group-data-[focus=true]:bg-white",
            "dark:bg-gray-800",
            "dark:border-gray-600",
            "dark:hover:bg-gray-700",
            "dark:data-[hover=true]:bg-gray-700",
          ],
        }}
        {...inputProps}
      />
    </motion.div>
  );
};