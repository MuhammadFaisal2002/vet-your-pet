"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PopularBreed {
  name: string;
  traits: string[];
  photo: string;
}

const POPULAR_BREEDS: PopularBreed[] = [
  {
    name: "German Shepherd",
    traits: ["Confident", "Courageous", "Smart"],
    photo: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&q=80",
  },
  {
    name: "Labrador Retriever",
    traits: ["Friendly", "Active", "Outgoing"],
    photo: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=400&q=80",
  },
  {
    name: "French Bulldog",
    traits: ["Adaptable", "Playful", "Smart"],
    photo: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80",
  },
  {
    name: "Beagle",
    traits: ["Friendly", "Curious", "Merry"],
    photo: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=80",
  },
  {
    name: "Corgi",
    traits: ["Affectionate", "Smart", "Alert"],
    photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80",
  },
  {
    name: "Poodle",
    traits: ["Active", "Proud", "Very Smart"],
    photo: "https://images.unsplash.com/photo-1530041539828-114de669390e?w=400&q=80",
  },
  {
    name: "Golden Retriever",
    traits: ["Intelligent", "Friendly", "Devoted"],
    photo: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&q=80",
  },
  {
    name: "Maltipoo",
    traits: ["Affectionate", "Gentle", "Playful"],
    photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
  },
  {
    name: "Pomeranian",
    traits: ["Lively", "Bold", "Inquisitive"],
    photo: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&q=80",
  },
  {
    name: "Dachshund",
    traits: ["Clever", "Devoted", "Lively"],
    photo: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&q=80",
  },
  {
    name: "Morkie",
    traits: ["Gentle", "Playful", "Curious"],
    photo: "https://images.unsplash.com/photo-1575859431774-2e57ed632664?w=400&q=80",
  },
  {
    name: "SheepaDoodle",
    traits: ["Loyal", "Gentle", "Intelligent"],
    photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80",
  },
];

function breedSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function PopularBreedCard({ breed }: { breed: PopularBreed }) {
  return (
    <Link href={`/breeds/${breedSlug(breed.name)}`} className="block flex-shrink-0 w-[185px] sm:w-[205px] md:w-[215px]">
      <div className="hover-lift">
        {/* Photo */}
        <div className="img-zoom rounded-2xl overflow-hidden w-full mb-3" style={{ aspectRatio: "4/5" }}>
          <img
            src={breed.photo}
            alt={breed.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Info */}
        <h3 className="font-bold text-[#25272C] text-[15px] leading-tight">
          {breed.name}
        </h3>
        <p className="text-gray-400 text-[12px] mt-0.5 leading-snug">
          {breed.traits.join(", ")}
        </p>
      </div>
    </Link>
  );
}

export default function PopularBreedsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 220 * 2;
    scrollRef.current.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="animate-on-scroll animate-fade-in-up flex items-start justify-between mb-7">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#25272C] leading-tight">
              Popular Breeds
            </h2>
            <p className="text-gray-400 text-sm mt-1.5">
              Explore America's most beloved dog breeds
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3 mt-1 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable carousel */}
        <div
          ref={scrollRef}
          className="animate-on-scroll stagger-children flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-2"
        >
          {POPULAR_BREEDS.map((breed) => (
            <PopularBreedCard key={breed.name} breed={breed} />
          ))}
        </div>

      </div>
    </section>
  );
}
