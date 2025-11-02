// components/service-detail/FAQSection.tsx
"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@heroui/react";
import { fadeVariants } from "@/lib/motion";
import type { Service } from "@/types/services";

interface FAQSectionProps {
  service: Pick<Service, "faqs">;
}

export const FAQSection = ({ service }: FAQSectionProps) => {
  const faqs = service.faqs.slice(0, 6); // Max 6

  if (faqs.length === 0) return null;

  return (
    <section className="bg-background-light dark:bg-background-dark py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Heading */}
          <motion.div
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
              Frequently Asked Questions
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              Quick answers to common concerns about {service.title.toLowerCase()}.
            </p>
          </motion.div>

          {/* Right Column: HeroUI Accordion */}
          <motion.div
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Accordion
              variant="light" // Subtle, flat style
              selectionMode="single" // One open at a time
              className="space-y-2"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} title={faq.question}>
                  <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed mt-2">
                    {faq.answer}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};