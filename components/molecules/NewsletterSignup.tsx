// components/molecules/NewsletterSignup.tsx
"use client";

import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";
import { Paragraph } from "@/components/atoms/Paragraph";
import { Input } from "@heroui/react"; // HeroUI Input
import { SolidButton } from "@/components/atoms/Button"; // Your existing button

export const NewsletterSignup = () => {
  return (
    <motion.div
      variants={fadeVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-brand-600 dark:bg-brand-700 py-16"
    >
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h3 
          variants={fadeVariants}
          className="text-3xl font-bold text-white mb-4"
        >
          Stay Informed with Legal Insights
        </motion.h3>
        
        <Paragraph 
          variant="muted"
          className="text-brand-100 dark:text-brand-200 mb-8 text-lg"
        >
          Join our newsletter to receive updates on legal changes, case studies, and firm news.
        </Paragraph>

        <motion.div 
          variants={fadeVariants}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-center"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            size="lg"
            className="flex-1"
            classNames={{
              input: [
                "bg-white/10",
                "text-white",
                "placeholder:text-white/60",
                "dark:bg-white/5",
              ],
              inputWrapper: [
                "bg-white/10",
                "border-white/20",
                "hover:bg-white/20",
                "data-[hover=true]:bg-white/20",
                "group-data-[focus=true]:bg-white/20",
                "dark:bg-white/5",
                "dark:border-white/10",
              ],
            }}
          />
          <SolidButton
            color="accent"
            size="lg"
            className="whitespace-nowrap"
          >
            Subscribe
          </SolidButton>
        </motion.div>
      </div>
    </motion.div>
  );
};