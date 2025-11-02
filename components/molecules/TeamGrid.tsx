// components/molecules/TeamGrid.tsx
"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeVariants } from "@/lib/motion";
import { TeamMemberCard } from "./TeamMemberCard";

export const TeamGrid = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Zelalem Abebe",
      title: "Senior Partner",
      specialization: "Civil Litigation",
      experience: "15+ years",
      image: "/images/team/zelalem.jpg",
      link: "/team/zelalem"
    },
    {
      id: 2,
      name: "Yonas Mekonnen", 
      title: "Managing Partner",
      specialization: "Business Law",
      experience: "12+ years",
      image: "/images/team/yonas.jpg",
      link: "/team/yonas"
    },
    {
      id: 3,
      name: "Sara Johnson",
      title: "Associate Attorney",
      specialization: "Family Law", 
      experience: "8+ years",
      image: "/images/team/sara.jpg",
      link: "/team/sara"
    },
    {
      id: 4,
      name: "Michael Chen",
      title: "Legal Counsel",
      specialization: "Real Estate",
      experience: "10+ years",
      image: "/images/team/michael.jpg", 
      link: "/team/michael"
    }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {teamMembers.map((member, index) => (
        <TeamMemberCard
          key={member.id}
          member={member}
          index={index}
        />
      ))}
    </motion.div>
  );
};