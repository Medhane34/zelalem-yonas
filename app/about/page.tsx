import { OurStorySection } from "@/components/organisms/about/OurStorySection";
import { QuoteSection } from "@/components/organisms/about/QuoteSection";
import { ValuesSection } from "@/components/organisms/about/ValuesSection";
import { TeamSection } from "@/components/organisms/about/TeamSection";
import { title } from "@/components/primitives";
import { HorizontalContactForm } from "@/components/forms/HorizontalContactForm";

export default function AboutPage() {
  return (
    <><div>2
      <h1 className={title()}>About</h1>
    </div><OurStorySection /><ValuesSection /><QuoteSection /><TeamSection />
    <HorizontalContactForm
        title="Contact Us Today"
        subtext="Our team is here to answer any questions—reach out for a free consultation."
        imageSrc="/images/contact-cta.jpg"
        pageType="contact"
        formId="contact-cta"
        buttonText={"book consultaition"}/>
    </>
  );
}
222