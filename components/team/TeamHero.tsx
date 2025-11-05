// components/team/TeamHero.tsx
"use client";
import { motion } from 'framer-motion';
import { ImageAtom } from '@/components/atoms/Image';
import { SolidButton } from '@/components/atoms/Button';
import { fadeVariants } from '@/lib/motion';
import { urlFor } from '@/lib/image';

interface TeamMember {
  name: string;
  photo?: {
    asset?: { url: string };
    alt?: string;
  };
  heroStatement: string;
  position: string;
  slug: string; // ← string
}

interface TeamHeroProps {
  member: TeamMember | null; // ← Allow null
}

export const TeamHero = ({ member }: TeamHeroProps) => {
  if (!member) {
    return (
      <motion.section
        className="relative min-h-[70vh] overflow-hidden"
        variants={fadeVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center min-h-[70vh]">
          <p className="text-xl text-gray-500">Loading team member...</p>
        </div>
      </motion.section>
    );
  }

  const photoUrl = member.photo?.asset?.url 
    ? urlFor(member.photo).width(600).height(800).fit('crop').url()
    : '/images/default-headshot.jpg';

  const slug = member.slug || '';

  return (
    <motion.section
      className="relative min-h-[70vh] overflow-hidden"
      variants={fadeVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-gray-900/20" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Photo */}
        <div className="lg:w-1/2 lg:mr-12 mb-8 lg:mb-0">
          <motion.div
            variants={fadeVariants}
            className="flex items-center justify-center"
          >
            <ImageAtom
              src={photoUrl}
              alt={member.photo?.alt || member.name}
              width={400}
              height={600}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>

        {/* Text + CTA */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            variants={fadeVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            {member.name}
          </motion.h1>
          <motion.p
            variants={fadeVariants}
            className="text-xl text-gray-600 mb-6"
          >
            {member.position}
          </motion.p>
          <motion.p
            variants={fadeVariants}
            className="text-lg text-gray-700 mb-8 leading-relaxed"
          >
            {member.heroStatement}
          </motion.p>
          <motion.div
            variants={fadeVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <SolidButton
              href={`/contact?attorney=${encodeURIComponent(slug)}`}
              color="brand"
              className="px-8 py-3 text-lg font-semibold"
            >
              Schedule Consultation
            </SolidButton>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};