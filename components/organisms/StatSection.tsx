// components/organisms/StatSection.tsx
"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Paragraph } from "@/components/atoms/Paragraph";
import { Link } from "@/components/atoms/Link";
import { Icon } from "@/components/atoms/Icon";
import {
  staggerContainer,
  staggerChild,
  fadeVariants, counterVariants
} from "@/lib/motion";

// Direct HeroUI icon imports (ensures they exist)
import { BriefcaseIcon, UsersIcon, CalendarIcon, TrophyIcon } from "@heroicons/react/24/outline";
import MainHeadline from "../atoms/MainHeadline/MainHeadline";
import AccentHeading from "../atoms/AccentHeading/AccentHeading";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ComponentType<any>;
}

const stats: Stat[] = [
  { label: "PROJECTS DELIVERED", value: 200, suffix: "+", icon: BriefcaseIcon },
  { label: "HAPPY CLIENTS", value: 100, suffix: "+", icon: UsersIcon },
  { label: "YEARS OF EXPERIENCE", value: 15, icon: CalendarIcon },
  { label: "CLIENTS SATISFACTION", value: 95, suffix: "%", icon: TrophyIcon },
];

const AnimatedCounter = ({
  end,
  suffix = "",
  label,
}: {
  end: number;
  suffix?: string;
  label: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 80, damping: 30 });
  const [display, setDisplay] = useState("0");
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      count.set(end);
    }
  }, [isInView, count, end]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplay(Math.round(latest).toString());
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <motion.span
      ref={ref}
      variants={counterVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl font-bold text-brand-600 dark:text-accent-400 tabular-nums"
      aria-label={`${end}${suffix} ${label}`}
    >
      {display}
      {suffix}
    </motion.span>
  );
};

export const StatSection = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Row 1: 2 Columns */}
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
        >
          {/* Col 1: Headline */}
         
             <MainHeadline 
              align="left"
              gradientStyle="partial"
              size="lg"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight 
              mb-2"
              animate="slide-up"
            >
            WE TURN IDEAS INTO VISUAL MASTERPIECES
            </MainHeadline>

        

          

          {/* Col 2: Paragraph + CTA */}
          <div className="space-y-6">
            <Paragraph
              variant="default"
              size="base"
              className="text-gray-600 dark:text-gray-300"
            >
              Whether it&apos;s an engaging explainer video, a vibrant social media campaign, or captivating motion graphics, we bring creativity and expertise to every project.
            </Paragraph>

            <motion.div variants={fadeVariants}>
              <Link
                href="/about"
                variant="accent"
                size="lg"
                icon="ArrowLeftIcon"
                className="inline-block text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300"
              >
                Know More About Us
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Row 2: 4 Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 lg:mt-16 text-center"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={staggerChild}
                className="space-y-3 group"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <IconComponent
                  className="mx-auto mb-3 w-12 h-12 text-brand-500 dark:text-brand-400 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                <AnimatedCounter end={stat.value} suffix={stat.suffix} label={stat.label} />
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};