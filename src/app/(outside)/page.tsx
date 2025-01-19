import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { WhoCanUse } from "@/components/sections/WhoCanUse";

function Home() {
  return (
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WhoCanUse/>
        <NewsletterSection />
        <PricingSection />
        <FAQSection />
      </main>
  );
}

export default Home;