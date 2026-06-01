import React from "react";
import { BreederRecord } from "@/data/breeders";

export function AboutSection({ breeder }: { breeder?: BreederRecord }) {
  const name = breeder ? breeder.name : "Golden Valley Doodles";
  const breedsList = breeder ? breeder.breeds.join(" and ") : "Goldendoodles";
  const cityState = breeder ? `${breeder.city}, ${breeder.state}` : "Austin, Texas";

  return (
    <div className="animate-on-scroll animate-fade-in-up flex flex-col gap-5 rounded-[14px] border border-pet-stroke bg-white p-10 shadow-[10px_10px_60px_0_rgba(0,0,0,0.04)]">
      <h2 className="text-[24px] font-medium leading-8">
        <span className="text-pet-black">About </span>
        <span className="text-pet-blue">{name}</span>
      </h2>
      <p className="text-[14px] font-normal leading-[26px] text-pet-body">
        Welcome to {name}! We are a family-owned breeding program
        nestled in the beautiful region of {cityState}. Our passion for
        {breedsList} began over a decade ago when we welcomed our first pet
        into our home. Since then, we&apos;ve dedicated ourselves to producing
        healthy, well-socialized puppies that bring joy to families across the region
        and beyond. Every puppy is raised in our home,
        ensuring they receive the love, attention, and early socialization
        critical to becoming wonderful family companions.
      </p>
    </div>
  );
}
