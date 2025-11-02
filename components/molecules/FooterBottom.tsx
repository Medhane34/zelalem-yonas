// components/molecules/FooterBottom.tsx
"use client";

import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";
import { Link } from "@/components/atoms/Link";
import { OutlineButton } from "@/components/atoms/Button";

export const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      variants={fadeVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="border-t border-gray-800 dark:border-gray-700 py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Zelalem & Yonas Law Office. All rights reserved.
          </div>

          {/* Legal Links + Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-6">
              <Link
                href="/terms"
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/sitemap"
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                Sitemap
              </Link>
            </div>
            
            {/* Back to Top Button */}
            <OutlineButton
              color="neutral"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="border-gray-600 text-gray-300 hover:text-white"
            >
              Back to Top
            </OutlineButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};