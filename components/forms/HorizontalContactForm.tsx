// components/forms/HorizontalContactForm.tsx
"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { fadeVariants } from "@/lib/motion";
import Image from "next/image";

interface HorizontalContactFormProps {
  title: string;
  subtext: string;
  buttonText: string;
  imageSrc: string; // e.g., "/images/home-cta.jpg"
  pageType: string; // e.g., "home"
  formId: string; // e.g., "home-cta"
  serviceSlug?: string; // Optional for service pages
}

export const HorizontalContactForm = ({
  title,
  subtext,
  buttonText,
  imageSrc,
  pageType,
  formId,
  serviceSlug,
}: HorizontalContactFormProps) => {
  return (
    <section className="py-16 bg-brand-50 dark:bg-brand-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Left: Image */}
          <div className="relative h-64 md:h-80">
            <Image
              src={imageSrc}
              alt={`${title} - Get in touch`}
              fill
              className="object-cover rounded-xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right: Text + Form */}
          <div className="space-y-6">
            <motion.div variants={fadeVariants}>
              <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">
                {title}
                </h2>
              <motion.h2/>
              <p className="text-text-light/70 dark:text-text-dark/70">
                {subtext}
              </p>
            </motion.div>
            <ContactForm
              serviceSlug={serviceSlug}
              formId={formId}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};