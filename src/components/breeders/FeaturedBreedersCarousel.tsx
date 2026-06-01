"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Star, ShieldCheck } from "lucide-react";

interface BreederRecord {
  slug: string;
  name: string;
  city: string;
  state: string;
  photo: string;
  breeds: string[];
  rating: number;
  reviewCount: number;
  featured?: boolean;
  verified?: boolean;
  hasAvailablePuppies?: boolean;
}

interface FeaturedBreedersCarouselProps {
  breeders?: BreederRecord[];
  headingOverride?: string;
  eyebrowOverride?: string;
  subCopyOverride?: string;
}

// Fallback data for backwards compatibility
const FEATURED_BREEDERS: BreederRecord[] = [
  {
    slug: "golden-coast-retrievers",
    name: "Golden Coast Retrievers",
    city: "San Diego",
    state: "CA",
    photo: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
    breeds: ["Golden Retriever", "Labrador Retriever", "Goldendoodle"],
    rating: 4.9,
    reviewCount: 142,
    featured: true,
    verified: true,
  },
  {
    slug: "lone-star-kennels",
    name: "Lone Star Kennels",
    city: "Austin",
    state: "TX",
    photo: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600",
    breeds: ["German Shepherd", "Belgian Malinois", "Doberman Pinscher"],
    rating: 4.8,
    reviewCount: 98,
    featured: true,
    verified: true,
  },
  {
    slug: "sunshine-state-poodles",
    name: "Sunshine State Poodles",
    city: "Sarasota",
    state: "FL",
    photo: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600",
    breeds: ["Standard Poodle", "Miniature Poodle", "Bernedoodle"],
    rating: 5.0,
    reviewCount: 76,
    featured: true,
    verified: true,
  },
  {
    slug: "rocky-mountain-shepherds",
    name: "Rocky Mountain Shepherds",
    city: "Boulder",
    state: "CO",
    photo: "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=600",
    breeds: ["Australian Shepherd", "Border Collie", "Bernese Mountain Dog"],
    rating: 4.7,
    reviewCount: 54,
    featured: true,
    verified: true,
  },
  {
    slug: "hudson-valley-frenchies",
    name: "Hudson Valley Frenchies",
    city: "Poughkeepsie",
    state: "NY",
    photo: "https://images.pexels.com/photos/4587955/pexels-photo-4587955.jpeg?auto=compress&cs=tinysrgb&w=600",
    breeds: ["French Bulldog", "Boston Terrier", "Pug"],
    rating: 4.8,
    reviewCount: 113,
    featured: true,
    verified: true,
  },
  {
    slug: "evergreen-doodles",
    name: "Evergreen Doodles",
    city: "Bellingham",
    state: "WA",
    photo: "https://images.pexels.com/photos/1750821/pexels-photo-1750821.jpeg?auto=compress&cs=tinysrgb&w=600",
    breeds: ["Goldendoodle", "Labradoodle", "Bernedoodle"],
    rating: 4.6,
    reviewCount: 89,
    featured: true,
    verified: true,
  },
];

export default function FeaturedBreedersCarousel({
  breeders,
  headingOverride,
  eyebrowOverride,
  subCopyOverride,
}: FeaturedBreedersCarouselProps = {}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Use provided data or fallback to internal FEATURED_BREEDERS
  const data = breeders && breeders.length > 0 ? breeders : FEATURED_BREEDERS;
  
  // Handle empty data gracefully
  if (data.length === 0) {
    return null;
  }
  
  // Override text or use defaults
  const heading = headingOverride ?? "Featured Verified Breeders";
  const eyebrow = eyebrowOverride ?? "Editor's Picks";
  const subCopy = subCopyOverride 
    ?? "A hand-picked group of kennels that meet Vet Your Pet's highest standards for health, ethics, and transparency.";

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header + arrows */}
        <div className="flex items-start justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
              {eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">
              {heading}
            </h2>
            <p className="mt-4 text-base text-nav-text max-w-2xl">
              {subCopy}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 mt-1">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll featured breeders left"
              className="w-11 h-11 rounded-full border border-pet-stroke bg-white text-brand-dark hover:bg-pet-bg transition-colors inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll featured breeders right"
              className="w-11 h-11 rounded-full border border-pet-stroke bg-white text-brand-dark hover:bg-pet-bg transition-colors inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
        >
          {data.map((b) => (
            <Link
              key={b.slug}
              href={`/breeder/${b.slug}`}
              className="snap-start flex-shrink-0 w-[280px] md:w-[320px] bg-white border border-pet-stroke rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex h-full flex-col focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={b.photo}
                  alt={`${b.name} — verified breeder in ${b.city}, ${b.state}`}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 320px, 280px"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-brand-dark leading-snug">
                    {b.name}
                  </h3>
                  {b.verified && (
                    <span
                      className="inline-flex items-center gap-1 flex-shrink-0 text-xs font-semibold text-brand-red"
                      aria-label="Verified breeder"
                    >
                      <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                      Verified
                    </span>
                  )}
                </div>
                
                <p className="mt-1 text-sm text-nav-text inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" aria-hidden="true" />
                  {b.city}, {b.state}
                </p>

                {/* Breed chips */}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {b.breeds.map((breed) => (
                    <li key={breed} className="bg-pet-bg text-nav-text rounded-full px-3 py-1 text-xs">
                      {breed}
                    </li>
                  ))}
                </ul>

                {/* Rating */}
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand-dark">
                  <Star className="w-4 h-4 fill-brand-red text-brand-red" aria-hidden="true" />
                  <span className="font-semibold">{b.rating.toFixed(1)}</span>
                  <span className="text-nav-text">({b.reviewCount} reviews)</span>
                </div>

                {/* CTA — Secondary */}
                <span className="mt-auto pt-6">
                  <span className="inline-flex items-center justify-center rounded-full border border-pet-stroke bg-white px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-pet-bg transition-colors min-h-[44px] w-full">
                    View Profile
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}