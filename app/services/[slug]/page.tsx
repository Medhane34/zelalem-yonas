// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import { services } from "@/types/services";
import { Metadata } from "next";
import {
    FAQSection,
    FeaturesSection,
  OutcomesSnapshotSection,
  ProcessSection,
 
} from "@/components/service-detail";
import { HeroWithFloatingBar } from "@/components/organisms";
import { CTASection } from "@/components/forms/CTASection";

type Props = {
  params: Promise<{ slug: string }>; // ← ASYNC
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ← AWAIT
  const service = services.find((s) => s.slug === slug);

  return {
    title: service ? `${service.title} | Zelalem & Yonas Law` : "Service Not Found",
    description: service?.description,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params; // ← AWAIT HERE TOO
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      {/* <HeroSection service={service} /> */}
      <HeroWithFloatingBar hero={service.hero} />
      {/* <AboutSection service={service} /> */}
      {/* <FeaturesSection service={service} /> */}
      {service.process.length > 0 && (
        <ProcessSection service={{ process: service.process, iconName: service.iconName }} />
      )}
      {service.stats.length > 0 && <OutcomesSnapshotSection service={service} />}
      {service.features.length > 0 && <FeaturesSection service={service} />}
      {service.faqs.length > 0 && <FAQSection service={service} />}
      <CTASection service={service} /> {/* ← Form displays here */}22
      {/* <TeamSection service={service} /> */}
      {/* <FAQSection service={service} /> */}
      {/* <CTASection service={service} /> */}
    </>
  );
}