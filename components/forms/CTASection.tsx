// components/service-detail/CTASection.tsx
"use client"
import { motion } from "framer-motion";
import { ContactForm } from "@/components/forms/ContactForm";
import { fadeVariants } from "@/lib/motion";
import type { Service } from "@/types/services";

interface CTASectionProps {
  service: Pick<Service, "title" | "slug">;
}

export const CTASection = ({ service }: CTASectionProps) => {
  return (
    <section className="bg-brand-50 dark:bg-brand-900/20 py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          variants={fadeVariants}
          className="text-3xl font-bold text-text-light dark:text-text-dark mb-4"
        >
          Ready for {service.title.toLowerCase()}?
        </motion.h2>
        <motion.p
          variants={fadeVariants}
          className="text-text-light/70 dark:text-text-dark/70 mb-8 max-w-md mx-auto"
        >
          Get a free consultation today.
        </motion.p>
        <ContactForm
          serviceSlug={service.slug}
          formId={`cta-${service.slug}`}
        />
      </div>
    </section>
  );
};