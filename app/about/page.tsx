import { OurStorySection } from "@/components/organisms/about/OurStorySection";
import { QuoteSection } from "@/components/organisms/about/QuoteSection";
import { ValuesSection } from "@/components/organisms/about/ValuesSection";
import { TeamSection } from "@/components/organisms/about/TeamSection";
import { title } from "@/components/primitives";
import { HorizontalContactForm } from "@/components/forms/HorizontalContactForm";
import { HeroSection } from "@/components/organisms/HeroSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection
      title="Expert Legal Solutions"
      subtitle="Over 20 Years Serving Clients with Excellence"
      heroImage="/hero-law.jpg"
      imageAlt="Law firm team"
      stats={[
        {
          id: "1", value: "500+", label: "Cases Won",
        },
        {
          id: "2", value: "98%", label: "Success Rate",
        },
        {
          id: "3", value: "15+", label: "Years Experience",
        },
      ]}
      ctaButtons={[
        { text: "Book Consultation", href: "/contact", variant: "brand" },
        { text: "Learn More", href: "/about", variant: "outline" },
      ]}
    />
    <div className="container mx-auto px-4 py-8">
  <OurStorySection /><ValuesSection />
    </div>
    <QuoteSection />
    <div className="container mx-auto px-4 py-8">
    <TeamSection />
    <HorizontalContactForm
        title="Contact Us Today"
        subtext="Our team is here to answer any questions—reach out for a free consultation."
        imageSrc="/images/contact-cta.jpg"
        pageType="contact"
        formId="contact-cta"
        buttonText={"book consultaition"}/>
    </div>
    
    
    </>
  );
}
