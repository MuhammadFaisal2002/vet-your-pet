import HeroSection from "@/components/breed-detail/HeroSection";
import BreedersIntroSection from "@/components/breed-detail/BreedersIntroSection";
import AboutBreedSection from "@/components/breed-detail/AboutBreedSection";
import BreedingRightWaySection from "@/components/breed-detail/BreedingRightWaySection";
import LifeWithDoodleSection from "@/components/breed-detail/LifeWithDoodleSection";
import SizesVarietiesSection from "@/components/breed-detail/SizesVarietiesSection";
import BreedersListSection from "@/components/breed-detail/BreedersListSection";
import BreederCTASection from "@/components/breed-detail/BreederCTASection";
import ChoosingBreederSection from "@/components/breed-detail/ChoosingBreederSection";
import HealthGeneticsPuppyCareSection from "@/components/breed-detail/HealthGeneticsPuppyCareSection";
import FindBreedersNearYouSection from "@/components/breed-detail/FindBreedersNearYouSection";
import BringingHomePuppySection from "@/components/breed-detail/BringingHomePuppySection";

export default function GoldendoodleBreedersPage() {
  return (
    <main className="min-h-screen font-poppins">
      <HeroSection />
      <BreedersIntroSection />
      <AboutBreedSection />
      <BreedingRightWaySection />
      <LifeWithDoodleSection />
      <SizesVarietiesSection />
      <BreedersListSection />
      <BreederCTASection />
      <ChoosingBreederSection />
      <HealthGeneticsPuppyCareSection />
      <FindBreedersNearYouSection />
      <BringingHomePuppySection />
    </main>
  );
}
