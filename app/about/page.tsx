import { OurStorySection } from "@/components/organisms/about/OurStorySection";
import { QuoteSection } from "@/components/organisms/about/QuoteSection";
import { ValuesSection } from "@/components/organisms/about/ValuesSection";
import { TeamSection } from "@/components/organisms/about/TeamSection";
import { title } from "@/components/primitives";

export default function AboutPage() {
  return (33
    <><div>
      <h1 className={title()}>About</h1>
    </div><OurStorySection /><ValuesSection /><QuoteSection /><TeamSection />
    </>
  );
}
