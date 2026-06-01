"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const breeds = [
  {
    name: "German Shepherd",
    traits: "Confident, Courageous, Smart",
    image: "https://images.pexels.com/photos/20566407/pexels-photo-20566407.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    href: "/breeders",
  },
  {
    name: "Golden Retriever",
    traits: "Friendly, Reliable, Trustworthy",
    image: "https://images.pexels.com/photos/29252236/pexels-photo-29252236.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    href: "/breeders",
  },
  {
    name: "French Bulldog",
    traits: "Adaptable, Playful, Smart",
    image: "https://images.pexels.com/photos/33766745/pexels-photo-33766745.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    href: "/breeders",
  },
  {
    name: "Beagle",
    traits: "Curious, Friendly, Merry",
    image: "https://images.pexels.com/photos/8336043/pexels-photo-8336043.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    href: "/breeders",
  },
  {
    name: "Corgi",
    traits: "Affectionate, Smart, Alert",
    image: "https://images.pexels.com/photos/10922896/pexels-photo-10922896.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    href: "/breeders",
  },
  {
    name: "Poodle",
    traits: "Intelligent, Active, Elegant",
    image: "https://images.pexels.com/photos/3299899/pexels-photo-3299899.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    href: "/breeders",
  },
  {
    name: "Labrador Retriever",
    traits: "Friendly, Active, Outgoing",
    image: "https://images.pexels.com/photos/33061789/pexels-photo-33061789.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    href: "/breeders",
  },
];

const CARD_WIDTH = 220;
const SCROLL_AMOUNT = CARD_WIDTH * 2 + 16;

export default function PopularBreedsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateBounds = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  useEffect(() => {
    updateBounds();
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateBounds, 350);
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateBounds, 350);
  };

  return (
    <section className="bg-[#F0EDE8] py-12 md:py-16">
      {/* Header row — padded */}
      <div className="px-6 md:px-12 lg:px-20 mb-8">
        <div className="max-w-7xl mx-auto flex items-start justify-between gap-4">
          <div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark mb-2">
              Popular Breeds
            </h2>
            <p className="font-poppins text-sm md:text-base text-nav-text">
              Explore America&apos;s most beloved dog breeds
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3 flex-shrink-0 mt-2">
            <button
              onClick={scrollLeft}
              disabled={atStart}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-nav-text hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              disabled={atEnd}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-nav-text hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable cards — bleeds to edges */}
      <div
        ref={scrollRef}
        onScroll={updateBounds}
        className="flex gap-4 overflow-x-auto scrollbar-hide pl-6 md:pl-12 lg:pl-20 pr-6"
      >
        {breeds.map((breed) => (
          <Link
            key={breed.name}
            href={breed.href}
            className="flex-shrink-0 bg-white rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
            style={{ width: `${CARD_WIDTH}px` }}
          >
            {/* Image */}
            <div className="h-[260px] overflow-hidden relative">
              <Image
                src={breed.image}
                alt={breed.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Text */}
            <div className="px-4 py-3">
              <p className="font-poppins font-semibold text-sm text-brand-dark leading-tight">
                {breed.name}
              </p>
              <p className="font-poppins text-xs text-nav-text mt-1">
                {breed.traits}
              </p>
            </div>
          </Link>
        ))}
        {/* Trailing padding spacer */}
        <div className="flex-shrink-0 w-6 md:w-12 lg:w-20" />
      </div>
    </section>
  );
}
