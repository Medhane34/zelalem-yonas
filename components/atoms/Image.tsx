// components/atoms/Image.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariants } from "@/lib/motion";

interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  placeholder?: "blur" | "empty";
}

export const ImageAtom = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  placeholder = "blur",
}: CustomImageProps) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl group"
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
/*         placeholder={placeholder === "blur" ? "blur" : undefined}
 */        className={`
          object-cover w-full h-full transition-all duration-500
          group-hover:scale-105
          ${className}
        `}
      />
      {/* Responsive skeleton overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};