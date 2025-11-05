// components/testimonials/TestimonialsSection.tsx
"use client";
import { motion } from 'framer-motion';
import { ImageAtom } from '@/components/atoms/Image';
import { fadeVariants } from '@/lib/motion';
import { useRef, useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  alt: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync active dot with scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.clientWidth * 0.8;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, testimonials.length - 1));
    };

    const ref = scrollRef.current;
    ref?.addEventListener('scroll', handleScroll);
    return () => ref?.removeEventListener('scroll', handleScroll);
  }, [testimonials.length]);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  return (
    <motion.section
      className="relative overflow-hidden"
      variants={fadeVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/* Full-Width Container */}
      <div className="w-screen left-1/2 -translate-x-1/2 relative">
        <div className="grid grid-cols-1 md:grid-cols-10 min-h-[600px]">
          {/* Left Column: 30% */}
          <div className="md:col-span-3 bg-gray-900 flex flex-col justify-center items-center text-center px-8 py-16">
            <motion.h3
              variants={fadeVariants}
              className="text-brand-400 text-sm uppercase tracking-widest mb-2"
            >
              Testimonials
            </motion.h3>
            <motion.h2
              variants={fadeVariants}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              What Our
              <br />
              Clients Say
            </motion.h2>
          </div>

          {/* Right Column: 70% */}
          <div className="md:col-span-7 bg-white flex flex-col justify-center px-8 py-16">
            {/* Carousel */}
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={t.id}
                  className="flex-shrink-0 w-[85%] md:w-[70%] snap-center first:pl-8 last:pr-8"
                >
                  <motion.div
                    variants={fadeVariants}
                    className="bg-gray-50 p-8 rounded-2xl shadow-lg"
                  >
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <ImageAtom
                        src={t.image}
                        alt={t.alt}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-sm text-gray-600">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex gap-2 justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? 'bg-brand-600 w-8'
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};