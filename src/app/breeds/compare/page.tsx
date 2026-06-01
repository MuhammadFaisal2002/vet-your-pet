import type { Metadata } from "next";
import BreedsComparePage from "@/components/breed-compare/BreedsComparePage";
import ComparePopularBreedsSection from "@/components/breed-compare/ComparePopularBreedsSection";

export const metadata: Metadata = {
  title: "Compare Dog Breeds Side by Side - Vet Your Pet",
  description:
    "Compare dog breeds side by side. See temperament, size, grooming needs, and more to find your perfect match.",
};

interface ComparePageProps {
  searchParams: Promise<{ breeds?: string }>;
}

export default async function ComparePage({ searchParams }: ComparePageProps) {
  const params = await searchParams;
  const breedsParam = params.breeds || "";
  
  // Parse breeds from URL query param: ?breeds=goldendoodle,labrador-retriever
  const initialSlugs = breedsParam
    ? breedsParam.split(",").filter(Boolean)
    : [];

  return (
    <>
      <BreedsComparePage initialBreeds={initialSlugs} />

      {/* Popular breeds — compare-page variant, 1170px container, balanced padding */}
      <ComparePopularBreedsSection />
    </>
  );
}