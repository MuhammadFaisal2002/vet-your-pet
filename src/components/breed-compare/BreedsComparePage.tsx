"use client";

import { useState, useEffect, useMemo } from "react";
import type { Breed } from "@/data/breeds";
import { getAllBreeds, getBreedBySlug } from "@/data/breeds";
import { COMPARE_MIN_TO_RENDER, buildCompareUrl } from "@/lib/breed-compare";
import CompareHero from "./CompareHero";
import BreedPickerRow from "./BreedPickerRow";
import ComparisonTable from "./ComparisonTable";
import BestForVerdicts from "./BestForVerdicts";
import BreederCtaSection from "./BreederCtaSection";

interface BreedsComparePageProps {
  initialBreeds?: string[]; // slugs from URL
}

export default function BreedsComparePage({ initialBreeds = [] }: BreedsComparePageProps) {
  const [selectedSlugs, setSelectedSlugs] = useState<(Breed | null)[]>([null, null, null]);
  const allBreeds = useMemo(() => getAllBreeds(), []);

  // Initialize from URL params
  useEffect(() => {
    if (initialBreeds.length > 0) {
      const initialized = initialBreeds
        .slice(0, 3)
        .map((slug) => getBreedBySlug(slug) ?? null);
      // Pad to 3 slots
      while (initialized.length < 3) {
        initialized.push(null);
      }
      setSelectedSlugs(initialized as (Breed | null)[]);
    }
  }, [initialBreeds]);

  const selectedBreeds = selectedSlugs.filter((b): b is Breed => b !== null);
  const canCompare = selectedBreeds.length >= COMPARE_MIN_TO_RENDER;

  const handleSelect = (index: number, breed: Breed) => {
    const newSelections = [...selectedSlugs] as (Breed | null)[];
    newSelections[index] = breed;
    setSelectedSlugs(newSelections);

    // Update URL without refresh
    const newBreeds = newSelections.filter((b): b is Breed => b !== null);
    if (newBreeds.length > 0) {
      const url = buildCompareUrl(newBreeds);
      window.history.replaceState({}, "", url);
    } else {
      window.history.replaceState({}, "", "/breeds/compare");
    }
  };

  const handleClear = (index: number) => {
    const newSelections = [...selectedSlugs] as (Breed | null)[];
    newSelections[index] = null;
    setSelectedSlugs(newSelections);

    // Update URL
    const newBreeds = newSelections.filter((b): b is Breed => b !== null);
    if (newBreeds.length > 0) {
      const url = buildCompareUrl(newBreeds);
      window.history.replaceState({}, "", url);
    } else {
      window.history.replaceState({}, "", "/breeds/compare");
    }
  };

  return (
    <>
      <CompareHero />
      <BreedPickerRow
        selectedBreeds={selectedSlugs}
        allBreeds={allBreeds}
        onSelect={handleSelect}
        onClear={handleClear}
      />
      {canCompare && (
        <>
          <ComparisonTable breeds={selectedBreeds} />
          <BestForVerdicts breeds={selectedBreeds} />
          <BreederCtaSection breeds={selectedBreeds} />
        </>
      )}
    </>
  );
}