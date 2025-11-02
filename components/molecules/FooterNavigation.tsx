// components/molecules/FooterNavigation.tsx
"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeVariants } from "@/lib/motion";
import { Link } from "@/components/atoms/Link";
import { OutlineButton } from "@/components/atoms/Button";

export const FooterNavigation = () => {
  const footerSections = [
    {
      title: "Firm",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Our Values", href: "/values" },
        { label: "Careers", href: "/careers" }
      ]
    },
    {
      title: "Practice Areas",
      links: [
        { label: "Civil Litigation", href: "/practice-areas/civil" },
        { label: "Business Law", href: "/practice-areas/business" },
        { label: "Family Law", href: "/practice-areas/family" },
        { label: "Real Estate", href: "/practice-areas/real-estate" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Case Studies", href: "/cases" },
        { label: "Legal Resources", href: "/resources" },
        { label: "FAQs", href: "/faq" }
      ]
    },
    {
      title: "Contact",
      links: [
        { label: "Get in Touch", href: "/contact" },
        { label: "Office Locations", href: "/locations" },
        { label: "Phone: +1 (555) 123-4567", href: "tel:+15551234567" },
        { label: "Email: info@zylaw.com", href: "mailto:info@zylaw.com" }
      ],
      cta: true
    }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
    >
      {footerSections.map((section, index) => (
        <motion.div
          key={section.title}
          variants={fadeVariants}
          custom={index}
          className="space-y-4"
        >
          <h4 className="text-lg font-semibold text-white mb-4">
            {section.title}
          </h4>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* CTA Button for Contact Section */}
          {section.cta && (
            <motion.div
              variants={fadeVariants}
              className="pt-4"
            >
              <OutlineButton
                color="accent"
                size="sm"
                className="w-full border-white/30 text-white hover:bg-white/10"
              >
                Schedule Consultation
              </OutlineButton>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};