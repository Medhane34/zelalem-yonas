// components/organisms/ClientsSection.tsx
"use client";
import { motion } from 'framer-motion';
import { ImageAtom } from '@/components/atoms/Image';
import { fadeVariants } from '@/lib/motion';
import AccentHeading from '../atoms/AccentHeading';
import MainHeadline from '../atoms/MainHeadline';

interface Client {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

interface ClientsSectionProps {
  clients: Client[];
}

export const ClientsSection = ({ clients }: ClientsSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
      {/* Full-Width Container */}
      <div className="w-screen  px-4">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <div className="text-center mb-16">
            <AccentHeading size="sm" gradient="linear-gradient(90deg, #4361EE 0%, #3A0CA3 100%)">
          Our Clients
        </AccentHeading>
            
             <MainHeadline 
              
              gradientStyle="partial"
              size="lg"
              className="mb-2"
            >
                            Trusted by leading companies and individuals across industries

            </MainHeadline>
            
          </div>

          {/* 4×2 Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow flex items-center justify-center h-full">
                  <ImageAtom
                    src={client.logo}
                    alt={client.alt}
                    width={140}
                    height={70}
                    className="object-contain w-full h-auto max-w-[140px] filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};