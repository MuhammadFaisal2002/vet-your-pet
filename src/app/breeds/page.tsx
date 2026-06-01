import type { Metadata } from "next";
import BrowseBreedsSection from "@/components/breeders/BrowseBreedsSection";
import PopularBreedsSection from "@/components/breeders/PopularBreedsSection";
import BreederBanner from "@/components/breeders/BreederBanner";

export const metadata: Metadata = {
  title: "Browse Dog Breeds | Vet Your Pet",
  description: "Explore dog breeds with health, temperament, and lifestyle info to help you find the right match.",
  alternates: { canonical: "/breeds" },
};

export default function BreedsPage() {
  return (
    <>
      <BrowseBreedsSection />
      {/* Popular Breeds with extra bottom padding to make room for the overlapping banner */}
      <div className="relative">
        <PopularBreedsSection />
        {/* Dark background that peeks behind the bottom half of the banner, visually merging into the footer */}
        <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-[#18191C]" />
        {/* Banner overlapping: top half in Popular Breeds, bottom half in the dark zone */}
        <div className="relative z-10 -mb-[140px]">
          <BreederBanner />
        </div>
      </div>
      {/* Spacer so the footer doesn't overlap the banner */}
      <div className="h-[140px] bg-[#18191C]" />
    </>
  );
}