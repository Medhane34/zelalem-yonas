// components/molecules/TeamMemberCard.tsx
"use client";

import { motion } from "framer-motion";
import { fadeVariants, cardVariants } from "@/lib/motion";
import { Link } from "@/components/atoms/Link";
import { ImageAtom as Image } from "@/components/atoms";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  specialization: string;
  experience: string;
  image: string;
  link: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      className="group relative text-center"
    >
      {/* Image Container */}
      <div className="relative mb-16"> {/* Extra margin for floating overlay */}
        {/* Team Member Photo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative z-10"
        >
          <Image
            src={member.image}
            alt={`Portrait of ${member.name}`}
            width={280}
            height={280}
            className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </motion.div>

        {/* Floating Name/Title Overlay */}
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-64 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-card hover:shadow-card-hover border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:-translate-y-2"
        >
          {/* Name */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {member.name}
          </h3>
          
          {/* Title */}
          <p className="text-sm text-brand-600 dark:text-brand-400 font-medium mb-2">
            {member.title}
          </p>
          
          {/* Specialization */}
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
            {member.specialization} • {member.experience}
          </p>

          {/* Learn More Link */}
          <Link
            href={member.link}
            variant="accent"
            size="sm"
            className="text-xs font-semibold"
          >
            Learn More →
          </Link>
        </motion.div>
      </div>

      {/* Optional: Background Decorative Element */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-brand rounded-full blur-3xl opacity-10" />
      </div>
    </motion.div>
  );
};3