import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBreedBySlug } from "@/data/breeds";
import { parseMatchupSlug, MATCHUP_SEPARATOR } from "@/lib/breed-compare";
import BreedsComparePage from "@/components/breed-compare/BreedsComparePage";
import PopularBreedsSection from "@/components/PopularBreedsSection";
import DynamicBreedDetail from "@/components/breed-detail/DynamicBreedDetail";
import Placeholder from "@/components/Placeholder";

interface MatchupPageProps {
  params: Promise<{ matchup: string }>;
}

const catalogBreeds = [
  "Afghan Hound", "Airedale Terrier", "Akita", "Alaskan Malamute", "American Bulldog",
  "Australian Shepherd", "Australian Terrier", "Azawakh", "Beagle", "Bichon Frise",
  "Border Collie", "Boxer", "Chihuahua", "Cocker Spaniel", "Corgi", "Dachshund",
  "Dalmatian", "Doberman", "English Bulldog", "English Setter", "English Springer Spaniel",
  "Finnish Spitz", "Fox Terrier", "French Bulldog", "Golden Retriever", "Labrador",
  "Maltipoo", "Morkie", "Pomeranian", "Poodle", "SheepaDoodle", "Shih Tzu"
];

function getCatalogBreedBySlug(slug: string): string | undefined {
  function breedSlug(name: string) {
    return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  }
  return catalogBreeds.find(b => breedSlug(b) === slug.toLowerCase());
}

// SEO: validate matchup slug pattern
function isValidMatchup(slug: string): boolean {
  const parts = slug.split(MATCHUP_SEPARATOR);
  if (parts.length < 2) return false;
  
  // All parts should map to valid breeds
  return parts.every((part) => getBreedBySlug(part) !== undefined);
}

export async function generateMetadata({ params }: MatchupPageProps): Promise<Metadata> {
  const { matchup } = await params;
  
  // Check if it's a valid matchup
  if (isValidMatchup(matchup)) {
    const slugs = parseMatchupSlug(matchup);
    const breedNames = slugs
      .map((slug) => getBreedBySlug(slug)?.name)
      .filter(Boolean)
      .join(" vs ");
    
    return {
      title: `${breedNames} Compare - Vet Your Pet`,
      description: `Compare ${breedNames} side by side. See temperament, size, grooming needs, and more to find your perfect match.`,
    };
  }

  // Check if it's a valid single breed
  const singleBreed = getBreedBySlug(matchup);
  if (singleBreed) {
    return {
      title: `${singleBreed.name} Breeders & Info | Vet Your Pet`,
      description: `Find trusted, health-tested ${singleBreed.name} breeders near you. Read full breed specs, grooming needs, and lifespan info.`,
    };
  }

  // Check if it's a catalog breed placeholder
  const catalogName = getCatalogBreedBySlug(matchup);
  if (catalogName) {
    return {
      title: `${catalogName} Guide (Coming Soon) | Vet Your Pet`,
      description: `Detailed guide for ${catalogName} dog breed. Coming soon to Vet Your Pet.`,
    };
  }
  
  return {
    title: "Dog Breed Compare - Vet Your Pet",
  };
}

export default async function MatchupPage({ params }: MatchupPageProps) {
  const { matchup } = await params;
  
  // 1. Check if it is a matchup compare request
  if (isValidMatchup(matchup)) {
    const initialSlugs = parseMatchupSlug(matchup);
    return (
      <>
        <BreedsComparePage initialBreeds={initialSlugs} />
        
        {/* Popular breeds section - reused */}
        <section className="w-full py-10 md:py-14 bg-white">
          <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-poppins font-semibold text-[26px] sm:text-[30px] leading-[120%] tracking-[-0.4px] text-[#25272C] mb-8">
              Compare Other Popular Breeds
            </h2>
          </div>
          <PopularBreedsSection />
        </section>
      </>
    );
  }

  // 2. Check if it is a single breed from data breeds
  const singleBreed = getBreedBySlug(matchup);
  if (singleBreed) {
    return <DynamicBreedDetail breed={singleBreed} />;
  }

  // 3. Check if it is a catalog breed placeholder
  const catalogName = getCatalogBreedBySlug(matchup);
  if (catalogName) {
    return <Placeholder title={catalogName} />;
  }

  // 4. Otherwise trigger 404
  notFound();
}