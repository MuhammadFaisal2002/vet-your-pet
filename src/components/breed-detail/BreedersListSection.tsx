"use client";

import { useState } from "react";

const breeders = [
  {
    name: "Golden Valley Doodles",
    akc: true,
    rating: 4.9,
    reviews: 142,
    exp: "10 years exp.",
    location: "Austin, TX 78701",
    phone: "(512) 555-0123",
    website: "goldenvalleydoodles.com",
    websiteHref: "https://goldenvalleydoodles.com",
    description:
      "Family-owned breeder of F1 and F1B Goldendoodles in the Texas Hill Country. Every puppy is raised in-home with early socialization and full health clearances on both parents.",
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80",
  },
  {
    name: "Sunny Creek Goldendoodles",
    akc: true,
    rating: 4.8,
    reviews: 98,
    exp: "8 years exp.",
    location: "Nashville, TN 37013",
    phone: "(615) 555-0188",
    website: "sunnycreekdoodles.com",
    websiteHref: "https://sunnycreekdoodles.com",
    description:
      "Mini and medium Goldendoodle specialists raising low-shedding, family-ready puppies. AKC parents, Puppy Culture program, and a 2-year health guarantee.",
    img: "https://images.unsplash.com/photo-1530041539828-114de669390e?w=800&q=80",
  },
  {
    name: "Mountain Laurel Doodles",
    akc: true,
    rating: 4.9,
    reviews: 165,
    exp: "14 years exp.",
    location: "Asheville, NC 28801",
    phone: "(828) 555-0144",
    website: "mountainlaureldoodles.com",
    websiteHref: "https://mountainlaureldoodles.com",
    description:
      "Mountain-raised Standard Goldendoodles bred for temperament and longevity. Health-tested parents, lifetime breeder support, and a calm, kid-friendly upbringing.",
    img: "https://images.unsplash.com/photo-1625316708582-7c38734be31d?w=800&q=80",
  },
];

export default function BreedersListSection() {
  const [view, setView] = useState<"list" | "map">("list");

  return (
    <section className="w-full bg-[#F7F7F8] py-10 lg:py-14">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">

        {/* Page heading + controls row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-[#25272C] font-semibold text-[26px] sm:text-[30px] leading-[120%] tracking-[-0.4px]">
              Trusted Goldendoodle Breeders
            </h2>
            <p className="text-[#53565A] text-[13px]">
              Results{" "}
              <span className="font-semibold text-[#25272C]">3 breeders</span>
            </p>
          </div>

          {/* View toggles + filter */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* List View */}
            <button
              onClick={() => setView("list")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-[13px] font-medium transition-colors ${
                view === "list"
                  ? "border-[#D0D0D0] bg-white text-[#25272C]"
                  : "border-[#D0D0D0] bg-white text-[#8A8A8A]"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="2" width="12" height="2" rx="1" fill="currentColor"/>
                <rect x="1" y="6" width="12" height="2" rx="1" fill="currentColor"/>
                <rect x="1" y="10" width="12" height="2" rx="1" fill="currentColor"/>
              </svg>
              List View
            </button>
            {/* Map View */}
            <button
              onClick={() => setView("map")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-[13px] font-medium transition-colors ${
                view === "map"
                  ? "border-[#D0D0D0] bg-white text-[#25272C]"
                  : "border-[#D0D0D0] bg-white text-[#8A8A8A]"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 1L9 3L13 1V11L9 13L5 11L1 13V3L5 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
                <path d="M5 1V11M9 3V13" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              Map View
            </button>
            {/* Filter */}
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#1E2D4D] text-white text-[13px] font-medium hover:bg-[#16243f] transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1.5 3.5H12.5M3.5 7H10.5M5.5 10.5H8.5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Filter
            </button>
          </div>
        </div>

        {/* Breeder cards */}
        <div className="flex flex-col gap-4">
          {breeders.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#EBEBEB] overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Info side */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                {/* Name + badge */}
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-[#25272C] font-semibold text-[17px] leading-[130%]">
                    {b.name}
                  </h3>
                  {b.akc && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E8F5EC] text-[#2B7A3B] font-medium text-[11px] leading-[160%]">
                      AKC Registered
                    </span>
                  )}
                </div>

                {/* Rating + exp + location row */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-3 flex-wrap">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="#FFB900">
                        <path d="M7 1L8.854 4.764L13 5.382L10 8.309L10.708 12.5L7 10.5L3.292 12.5L4 8.309L1 5.382L5.146 4.764L7 1Z"/>
                      </svg>
                      <span className="text-[#25272C] font-semibold text-[12px]">
                        {b.rating}
                      </span>
                      <span className="text-[#8A8A8A] text-[12px]">
                        ({b.reviews} reviews)
                      </span>
                    </div>
                    {/* Experience */}
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#EFF3FF] text-[#4A5FAD]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5" stroke="#4A5FAD" strokeWidth="1.2"/>
                        <path d="M6 3.5V6L7.5 7.5" stroke="#4A5FAD" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      <span className="text-[11px] font-medium">{b.exp}</span>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1C4.067 1 2.5 2.567 2.5 4.5C2.5 7 6 11 6 11C6 11 9.5 7 9.5 4.5C9.5 2.567 7.933 1 6 1ZM6 6C5.172 6 4.5 5.328 4.5 4.5C4.5 3.672 5.172 3 6 3C6.828 3 7.5 3.672 7.5 4.5C7.5 5.328 6.828 6 6 6Z" fill="#8A8A8A"/>
                    </svg>
                    <span className="text-[#8A8A8A] text-[12px]">{b.location}</span>
                  </div>
                </div>

                {/* Phone + Website */}
                <div className="flex gap-8 flex-wrap">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#ACACAC] text-[11px]">Telephone:</span>
                    <span className="text-[#25272C] font-medium text-[13px]">{b.phone}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#ACACAC] text-[11px]">Website:</span>
                    <a
                      href={b.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4A90E2] font-medium text-[13px] hover:underline"
                    >
                      {b.website}
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#53565A] text-[13px] leading-[165%]">
                  {b.description}
                </p>

                {/* Action buttons */}
                <div className="flex items-center gap-3 pt-1 flex-wrap">
                  <button className="px-5 py-2.5 rounded-full bg-[#25272C] text-white font-medium text-[13px] hover:bg-[#111] transition-colors">
                    View Profile
                  </button>
                  <button className="px-5 py-2.5 rounded-full border border-[#25272C] text-[#25272C] font-medium text-[13px] hover:bg-[#25272C] hover:text-white transition-colors">
                    Contact Breeder
                  </button>
                </div>
              </div>

              {/* Image side */}
              <div className="sm:w-[180px] sm:flex-shrink-0 h-[180px] sm:h-auto">
                <img
                  src={b.img}
                  alt={b.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* See more button */}
        <div className="flex justify-center pt-2">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#C8C8C8] bg-white text-[#25272C] font-medium text-[13px] hover:bg-[#F5F5F5] transition-colors">
            See more
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2.5C5.015 2.5 2.5 5.015 2.5 8C2.5 10.985 5.015 13.5 8 13.5C10.985 13.5 13.5 10.985 13.5 8" stroke="#25272C" strokeWidth="1.3" strokeLinecap="round"/>
              <path d="M10.5 2.5L13.5 5.5M13.5 2.5L10.5 5.5" stroke="#25272C" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
