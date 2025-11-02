// components/organisms/HeroWithFloatingBar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { fadeVariants } from "@/lib/motion";

interface ServiceHero {
  title: string;
  tagline: string;
  description: string;
  badges: string[];
  heroImage: string;
  contactUrl?: string;
}

interface Props {
  hero: ServiceHero;
}

export const HeroWithFloatingBar = ({ hero }: Props) => {
  const contactUrl = hero.contactUrl || '/contact';

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={fadeVariants}
      className="relative h-screen left-1/2 right-1/2 w-screen -mx-[50vw] 22overflow-hidden"
    >
      {/* Hero Background Image */}
      <Image
        src={hero.heroImage}
        alt={`${hero.title} - Legal Services`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <motion.h1
          variants={fadeVariants}
          className="text-5xl md:text-7xl font-bold max-w-5xl leading-tight"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          variants={fadeVariants}
          className="mt-6 text-lg md:text-xl leading-relaxed max-w-3xl opacity-95"
        >
          {hero.description}
        </motion.p>

        <motion.p
          variants={fadeVariants}
          className="mt-6 text-xl font-medium opacity-90"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          variants={fadeVariants}
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          {hero.badges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Floating Consult Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-6 my-6s2"
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-3 md:gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 flex-1 min-w-0">
              <UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
              <span className="truncate">Your Name</span>
            </div>
            <div className="hidden md:block w-px bg-gray-300 dark:bg-gray-600 self-stretch" />
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 flex-1 min-w-0">
              <PhoneIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
              <span className="truncate">Your Phone</span>
            </div>
            <div className="hidden md:block w-px bg-gray-300 dark:bg-gray-600 self-stretch" />
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 flex-1 min-w-0">
              <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
              <span>Preferred Date</span>
            </div>
            <div className="hidden md:block w-px bg-gray-300 dark:bg-gray-600 self-stretch" />
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 flex-1 min-w-0">
              <ClockIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
              <span>Time</span>
            </div>
            <Link
              href={contactUrl}
              className="px-6 py-3 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition whitespace-nowrap"
            >
              Book Consult
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      style={{ transform: 'translateY(50%)' }}  // ← 50% out (top half inside)
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </motion.div>
    </motion.section>
  );
};