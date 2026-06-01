"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const breeds = [
  { name: "German Shepherd", traits: "Confident, Courageous, Smart", image: "https://images.pexels.com/photos/20566407/pexels-photo-20566407.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", href: "/breeds/german-shepherd" },
  { name: "Golden Retriever", traits: "Friendly, Reliable, Trustworthy", image: "https://images.pexels.com/photos/29252236/pexels-photo-29252236.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", href: "/breeds/golden-retriever" },
  { name: "French Bulldog", traits: "Adaptable, Playful, Smart", image: "https://images.pexels.com/photos/33766745/pexels-photo-33766745.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", href: "/breeds/french-bulldog" },
  { name: "Beagle", traits: "Curious, Friendly, Merry", image: "https://images.pexels.com/photos/8336043/pexels-photo-8336043.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", href: "/breeds/beagle" },
  { name: "Corgi", traits: "Affectionate, Smart, Alert", image: "https://images.pexels.com/photos/10922896/pexels-photo-10922896.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", href: "/breeds/corgi" },
  { name: "Poodle", traits: "Intelligent, Active, Elegant", image: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", href: "/breeds/poodle" },
  { name: "Labrador Retriever", traits: "Friendly, Active, Outgoing", image: "https://images.pexels.com/photos/3198020/pexels-photo-3198020.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", href: "/breeds/labrador-retriever" },
];

const CARD_WIDTH = 152;
const SCROLL_AMOUNT = 320;

export default function ComparePopularBreedsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateBounds = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
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
    <section className="bg-[#F0EDE8] py-10 md:py-14">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-dark mb-2">
              Popular Breeds
            </h2>
            <p className="font-poppins text-sm md:text-base text-nav-text">
              Explore America&apos;s most beloved dog breeds
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 mt-2">
            <button
              onClick={scrollLeft}
              disabled={atStart}
              aria-label="Previous breeds"
              className="w-10 h-10 rounded-full bg-white border border-pet-stroke flex items-center justify-center text-nav-text hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              disabled={atEnd}
              aria-label="Next breeds"
              className="w-10 h-10 rounded-full bg-white border border-pet-stroke flex items-center justify-center text-nav-text hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable cards — balanced inside the 1170px container */}
        <div
          ref={scrollRef}
          onScroll={updateBounds}
          className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          {breeds.map((breed) => (
            <Link
              key={breed.name}
              href={breed.href}
              className="flex-shrink-0 bg-white rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <div className="h-[200px] overflow-hidden relative">
                <Image
                  src={breed.image}
                  alt={breed.name}
                  fill
                  sizes="152px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
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
        </div>
      </div>
    </section>
  );
}
