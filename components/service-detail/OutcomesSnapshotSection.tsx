// components/service-detail/OutcomesSnapshotSection.tsx
"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { staggerContainer, staggerChild, fadeVariants } from "@/lib/motion";
import type { Service } from "@/types/services";
import {
  TrophyIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  ClockIcon,
  HeartIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  CalendarIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

interface Stat {
  value: string;
  label: string;
  iconName: string;
}

interface OutcomesSnapshotSectionProps {
  service: Pick<Service, "stats" | "hero" | "statsImage">;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  trophy: TrophyIcon,
  dollar: CurrencyDollarIcon,
  briefcase: BriefcaseIcon,
  clock: ClockIcon,
  heart: HeartIcon,
  globe: GlobeAltIcon,
  check: CheckCircleIcon,
  calendar: CalendarIcon,
  lock: LockClosedIcon,
};

const AnimatedStat = ({ value, label, iconName }: Stat) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numValue = parseFloat(value.replace(/[%$]/g, '')) || 0;
      const duration = 1500;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = numValue * progress;
        setDisplayValue(current.toFixed(0) + (value.includes('%') ? '%' : value.includes('$') ? '$' : ''));
        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    }
  }, [isInView, value]);

  const Icon = iconMap[iconName] || TrophyIcon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-4"
    >
      <Icon className="w-12 h-12 mx-auto mb-3 text-accent-500" />
      <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
        {displayValue}
      </div>
      <p className="text-white/80 text-sm lg:text-base uppercase tracking-wide">
        {label}
      </p>
    </motion.div>
  );
};

export const OutcomesSnapshotSection = ({ service }: OutcomesSnapshotSectionProps) => {
  const stats = service.stats.slice(0, 4); // 4 max for 2x2

  if (stats.length === 0) return null;

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden  left-1/2 right-1/2 w-screen -mx-[50vw]">
      {/* Dynamic Background Image */}
      <Image
        src={service.statsImage || "/images/services/default-stats-bg.jpg"}
        alt="Service Outcomes"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Single Column Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-2xl ">
        {/* Top: Left-Aligned Tagline */}
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-left mb-12 text-white max-w-2xl"
        >
          <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
            {service.hero.tagline}
          </p>
        </motion.div>

        {/* Below: 2x2 Stat Grid in Same Column */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerChild}
              className="col-span-1"
            >
              <AnimatedStat {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};