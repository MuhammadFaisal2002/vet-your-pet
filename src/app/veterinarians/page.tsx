import type { Metadata } from "next";
import VetsHubHero from "@/components/vets/VetsHubHero";
import BrowseVetsByState from "@/components/vets/BrowseVetsByState";
import FeaturedVetsCarousel from "@/components/vets/FeaturedVetsCarousel";
import EmergencyVetBand from "@/components/vets/EmergencyVetBand";
import BrowseByService from "@/components/vets/BrowseByService";
import WhyVerifyVetsSection from "@/components/vets/WhyVerifyVetsSection";
import VetClaimBanner from "@/components/vets/VetClaimBanner";
import BlogSection from "@/components/BlogSection";

export const metadata: Metadata = {
  title: "Find a Trusted Veterinarian | Vet Your Pet",
  description:
    "Browse verified, trusted veterinarians across all 50 states. Vet Your Pet vets every clinic for credentials, patient reviews, and quality of care — so you can find the right care for your pet.",
  alternates: { canonical: "/veterinarians" },
  openGraph: {
    title: "Find a Trusted Veterinarian | Vet Your Pet",
    description:
      "Browse verified, trusted veterinarians across all 50 states. Every clinic on Vet Your Pet is reviewed for credentials, reviews, and quality of care.",
    url: "/veterinarians",
    type: "website",
  },
};

export default function VeterinariansPage() {
  return (
    <main id="main">
      <VetsHubHero />
      <BrowseVetsByState />
      <FeaturedVetsCarousel />
      <EmergencyVetBand />
      <BrowseByService />
      <WhyVerifyVetsSection />
      <VetClaimBanner />
      <BlogSection />
    </main>
  );
}
