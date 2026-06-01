import type { Metadata } from "next";
import BreedersHubHero from "@/components/breeders/BreedersHubHero";
import BrowseByStateSection from "@/components/breeders/BrowseByStateSection";
import FeaturedBreedersCarousel from "@/components/breeders/FeaturedBreedersCarousel";
import PopularBreedsSection from "@/components/breeders/PopularBreedsSection";
import VerifiedExplainerSection from "@/components/breeders/VerifiedExplainerSection";
import BreederBanner from "@/components/breeders/BreederBanner";
import BlogSection from "@/components/BlogSection";

export const metadata: Metadata = {
  title: "Find a Trusted Dog Breeder | Vet Your Pet",
  description:
    "Browse verified, health-tested dog breeders across all 50 states. Vet Your Pet reviews every kennel for ethical standards, on-site facility checks, and genetic health testing.",
  alternates: { canonical: "/breeders" },
};

export default function BreedersPage() {
  return (
    <main id="main">
      <BreedersHubHero />
      <BrowseByStateSection />
      <FeaturedBreedersCarousel />
      <PopularBreedsSection />
      <VerifiedExplainerSection />
      <BreederBanner />
      <BlogSection />
    </main>
  );
}