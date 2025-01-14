// import { AboutSection } from "@/components/sections/AboutSection";
// import { ClientsSection } from "@/components/sections/ClientsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

function Home() {
  return (
      <main>
        <HeroSection />
        {/* <ClientsSection /> */}
        {/* <AboutSection /> */}
        <HowItWorksSection />
        {/* <FeaturesSection /> */}
        <ServicesSection />
        <NewsletterSection />
        <TestimonialsSection />
        <TeamSection />
        <PricingSection />
        <FAQSection />
      </main>
  );
}

export default Home;