"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Star, ShieldCheck, Siren } from "lucide-react";
import { getFeaturedVets, type VetRecord } from "@/data/vets";

interface FeaturedVetsCarouselProps {
  vets?: VetRecord[];
  headingOverride?: string;
  eyebrowOverride?: string;
  subCopyOverride?: string;
}

export default function FeaturedVetsCarousel({
  vets,
  headingOverride,
  eyebrowOverride,
  subCopyOverride,
}: FeaturedVetsCarouselProps = {}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const data = vets && vets.length > 0 ? vets : getFeaturedVets();

  if (data.length === 0) {
    return null;
  }

  const heading = headingOverride ?? "Featured Verified Veterinarians";
  const eyebrow = eyebrowOverride ?? "Editor's Picks";
  const subCopy =
    subCopyOverride ??
    "A hand-picked group of clinics that meet Vet Your Pet's highest standards for credentials, patient reviews, and quality of care.";

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
              aria-label="Scroll featured veterinarians left"
              className="w-11 h-11 rounded-full border border-pet-stroke bg-white text-brand-dark hover:bg-pet-bg transition-colors inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll featured veterinarians right"
              className="w-11 h-11 rounded-full border border-pet-stroke bg-white text-brand-dark hover:bg-pet-bg transition-colors inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 items-stretch"
        >
          {data.map((v) => (
            <Link
              key={v.slug}
              href={`/veterinarian/${v.slug}`}
              className="snap-start flex-shrink-0 w-[280px] md:w-[320px] bg-white border border-pet-stroke rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex h-full flex-col focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={v.photo}
                  alt={`${v.name} — verified veterinarian in ${v.city}, ${v.stateAbbr}`}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 320px, 280px"
                />
                {v.emergency && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white">
                    <Siren className="w-3 h-3" aria-hidden="true" />
                    24/7 ER
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-brand-dark leading-snug min-h-[3.5rem]">
                    {v.name}
                  </h3>
                  {v.verified && (
                    <span
                      className="inline-flex items-center gap-1 flex-shrink-0 text-xs font-semibold text-brand-red"
                      aria-label="Verified veterinarian"
                    >
                      <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                      Verified
                    </span>
                  )}
                </div>

                <p className="mt-1 text-sm text-nav-text inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" aria-hidden="true" />
                  {v.city}, {v.stateAbbr}
                </p>

                {/* Service chips */}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {v.services.slice(0, 3).map((service) => (
                    <li key={service} className="bg-pet-bg text-nav-text rounded-full px-3 py-1 text-xs capitalize">
                      {service}
                    </li>
                  ))}
                </ul>

                {/* Rating */}
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand-dark">
                  <Star className="w-4 h-4 fill-brand-red text-brand-red" aria-hidden="true" />
                  <span className="font-semibold">{v.rating.toFixed(1)}</span>
                  <span className="text-nav-text">({v.reviewCount} reviews)</span>
                </div>

                {/* CTA */}
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
