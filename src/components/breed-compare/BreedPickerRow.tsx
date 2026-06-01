"use client";

import type { Breed } from "@/data/breeds";
import BreedPickerSlot from "./BreedPickerSlot";

export interface BreedPickerRowProps {
  selectedBreeds: (Breed | null)[];
  allBreeds: Breed[];
  onSelect: (index: number, breed: Breed) => void;
  onClear: (index: number) => void;
}

export default function BreedPickerRow({
  selectedBreeds,
  allBreeds,
  onSelect,
  onClear,
}: BreedPickerRowProps) {
  const excludeSlugs = selectedBreeds
    .filter((b): b is Breed => b !== null)
    .map((b) => b.slug);

  return (
    <section className="w-full py-10 md:py-14">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[0, 1, 2].map((idx) => (
            <BreedPickerSlot
              key={idx}
              breed={selectedBreeds[idx] ?? null}
              allBreeds={allBreeds}
              excludeSlugs={excludeSlugs}
              onSelect={(breed) => onSelect(idx, breed)}
              onClear={() => onClear(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}