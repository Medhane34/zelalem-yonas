// components/organisms/Footer.tsx - DEBUG VERSION
"use client";

import { NewsletterSignup } from "@/components/molecules/NewsletterSignup";
import { FooterNavigation } from "@/components/molecules/FooterNavigation";
import { FooterBottom } from "@/components/molecules/FooterBottom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <NewsletterSignup />
      
      {/* Main Footer Content - No animations */}
      <div className="container mx-auto px-4 py-16 ">
        <FooterNavigation />
      </div>

      {/* Footer Bottom */}
      <FooterBottom />
    </footer>
  );
};