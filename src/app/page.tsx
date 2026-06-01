import Hero from "@/components/Hero";
import EverythingSection from "@/components/EverythingSection";
import VetSpotlightSection from "@/components/VetSpotlightSection";
import BlogSection from "@/components/BlogSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PopularBreedsSection from "@/components/PopularBreedsSection";
import BreederCTASection from "@/components/BreederCTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <EverythingSection />
      <VetSpotlightSection />
      <BlogSection />
      <WhyChooseSection />
      {/* Popular Breeds + Breeder CTA overlapping into footer */}
      <div className="relative">
        <PopularBreedsSection />
        {/* Dark background that peeks behind the bottom half of the banner */}
        <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-[#18191C]" />
        {/* Banner overlapping: top half in Popular Breeds, bottom half in the dark zone */}
        <div className="relative z-10 -mb-[140px]">
          <BreederCTASection />
        </div>
      </div>
      {/* Spacer so the footer doesn't overlap the banner */}
      <div className="h-[140px] bg-[#18191C]" />
    </>
  );
}
