import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { SolidButton, OutlineButton, Link as LinkStyle, Paragraph, Icon } from "@/components/atoms";
import { StatSection } from "@/components/organisms/StatSection";
import { ServiceSection } from "@/components/organisms";
import { HeroSection } from "@/components/organisms/HeroSection";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import { ClientsSection } from "@/components/organisms/ClientsSection";
import { BlogPreviewSection } from "@/components/blog/BlogPreviewSection";
import { getLatestPosts } from '@/lib/queries/blog';

export default async function Home() {
  const posts = await getLatestPosts();
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
      <div className="div">
        <Paragraph variant="emphasis" size="lg">
        Button Variants Demo
      </Paragraph>

      <div className="flex flex-wrap gap-4">
        <SolidButton color="brand" size="lg">
          <Icon name="ArrowRightIcon" size="md" className="mr-2" />
          Get Started
        </SolidButton>

        <SolidButton color="accent" size="md">
          Learn More
        </SolidButton>

        <OutlineButton color="brand" size="sm">
          Download Brochure
        </OutlineButton>

        <OutlineButton color="accent" size="lg">
          Book Consultation
        </OutlineButton>
      </div>

      <LinkStyle href="/contact" variant="accent" size="lg" icon="PhoneIcon">
        Call Us Now
      </LinkStyle>
      </div> */}
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
      <StatSection />
      <ServiceSection />
      <TestimonialsSection
  testimonials={[
    {
      id: "1",
      quote: "Going through a divorce was a difficult and emotional experience. Michael Law Partners provided me with compassionate and professional guidance throughout the entire process.",
      name: "Eleni Abdu",
      role: "Family Law Client",
      image: "/testimonials/eleni.jpg",
      alt: "Eleni Abdu"
    },
    {
      id: "2",
      quote: "They helped me secure full custody of my children. Their expertise in family law is unmatched.",
      name: "Dawit Kebede",
      role: "Custody Case Client",
      image: "/testimonials/dawit.jpg",
      alt: "Dawit Kebede"
    },
    {
      id: "3",
      quote: "Professional, responsive, and results-driven. I highly recommend their corporate law services.",
      name: "Selamawit Tadesse",
      role: "Business Owner",
      image: "/testimonials/selam.jpg",
      alt: "Selamawit Tadesse"
    },
  ]}
/>
<ClientsSection
  clients={[
    { id: "1", name: "Airbnb", logo: "/clients/airbnb.svg", alt: "Airbnb", width: 100, rotate: -5 },
    { id: "2", name: "Dropbox", logo: "/clients/dropbox.svg", alt: "Dropbox", width: 110 },
    { id: "3", name: "FedEx", logo: "/clients/fedex.svg", alt: "FedEx", width: 130, rotate: 3 },
    { id: "4", name: "Juniper", logo: "/clients/juniper.svg", alt: "Juniper", width: 100 },
    { id: "5", name: "Falcon", logo: "/clients/falcon.svg", alt: "Falcon", width: 120, rotate: -8 },
    { id: "6", name: "Arista", logo: "/clients/arista.svg", alt: "Arista", width: 110 },
    { id: "7", name: "Logitech", logo: "/clients/logitech.svg", alt: "Logitech", width: 130, rotate: 5 },
    { id: "8", name: "Bitcoin", logo: "/clients/bitcoin.svg", alt: "Bitcoin", width: 90, rotate: -3 },
  ]}
/>
<BlogPreviewSection posts={posts} />
    </section>
  );
}
pnpm add date-fnspnpm add date-fnspnpm add date-fns