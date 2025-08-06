import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FeaturesSection } from "@/components/sections/features-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
    </div>
  );
};

export default Index;