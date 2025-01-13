import DesktopHeader from "@/components/layout/DesktopHeader";
import "./globals.css";
import { Hero } from "@/components/layout/Hero";
import OnboardingPage from "@/components/layout/Onboarding";
import { PricingSection } from "@/components/layout/PricingSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="mx-auto   bg-black">
      <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2f2863] via-[#0b0c1a] to-[#000000]">
      <DesktopHeader />
      <Hero />
      </div>
      <OnboardingPage/>
      <PricingSection/>
      <Footer/>
    </main>
  );
}