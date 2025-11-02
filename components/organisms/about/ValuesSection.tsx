// components/organisms/about/ValuesSection.tsx
"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeVariants, cardVariants } from "@/lib/motion";
/* import { Heading } from "@/components/atoms/Heading";
 */import { Paragraph } from "@/components/atoms/Paragraph";
import { ValueCard } from "@/components/molecules/";


export const ValuesSection = () => {
  const values = [
    {
      id: 1,
      title: "Client-Centered Approach",
      description: "We prioritize your unique legal needs with personalized strategies.",
      icon: "UserIcon",
      offset: true
    },
    {
      id: 2, 
      title: "Integrity & Transparency",
      description: "We maintain the highest ethical standards with honest communication.",
      icon: "ShieldCheckIcon",
      offset: false
    },
    {
      id: 3,
      title: "Excellence & Expertise", 
      description: "Our team brings deep legal knowledge to every case.",
      icon: "AcademicCapIcon",
      offset: true
    },
    {
      id: 4,
      title: "Innovative Solutions",
      description: "We combine traditional expertise with modern strategies.",
      icon: "LightBulbIcon",
      offset: false
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-brand-600 text-lg uppercase tracking-wider mb-4">
            Our Core Values
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            The Foundation of Excellence & Integrity
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            These principles guide our approach to legal representation.
          </p>
        </div>

        {/* Cards without motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start  p-4">
          {values.map((value, index) => (
            <div key={value.id} className={`${value.offset ? 'mt-8 lg:mt-12' : 'mt-0'}  p-2`}>
              <ValueCard value={value} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};