"use client";

import Link from "next/link";
import type { Breed } from "@/data/breeds";

interface BreederCtaSectionProps {
  breeds: Breed[];
}

export default function BreederCtaSection({ breeds }: BreederCtaSectionProps) {
  const primaryBreed = breeds[0];
  
  if (!primaryBreed) return null;

  return (
    <section className="w-full py-10 md:py-14">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card */}
        <div className="relative rounded-3xl bg-brand-red overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6H4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-8 md:px-10 md:py-10">
            {/* Text */}
            <div className="text-center md:text-left">
              <p className="font-poppins text-white text-lg md:text-xl font-medium leading-tight">
                Looking for a {primaryBreed.name} breeder?
              </p>
              <p className="font-poppins text-white/80 text-sm mt-1">
                Find verified {primaryBreed.name} puppies from trusted breeders near you.
              </p>
            </div>

            {/* Button */}
            <Link
              href={`/breeds/${primaryBreed.slug}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-red font-poppins font-semibold rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Find {primaryBreed.name} Breeders
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}