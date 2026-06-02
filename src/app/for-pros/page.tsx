import { Metadata } from "next";
import ForProsHero from "@/components/for-pros/ForProsHero";
import BenefitsSection from "@/components/for-pros/BenefitsSection";
import HowItWorksSection from "@/components/for-pros/HowItWorksSection";
import VerifiedExplainerSection from "@/components/for-pros/VerifiedExplainerSection";
import PublishingHighlightSection from "@/components/for-pros/PublishingHighlightSection";
import PricingTeaserSection from "@/components/for-pros/PricingTeaserSection";
import ProTestimonialsSection from "@/components/for-pros/ProTestimonialsSection";
import ForProsFAQSection from "@/components/for-pros/ForProsFAQSection";

export const metadata: Metadata = {
  title: "For Professionals | Vet Your Pet",
  description: "Join our trusted network of verified veterinarians and ethical dog breeders. Claim your listing or create a new one today.",
};

export default function ForProsPage() {
  return (
    <>
      <ForProsHero />
      <BenefitsSection />
      <HowItWorksSection />
      <VerifiedExplainerSection />
      <PublishingHighlightSection />
      <PricingTeaserSection />
      <ProTestimonialsSection />
      <ForProsFAQSection />
    </>
  );
}
