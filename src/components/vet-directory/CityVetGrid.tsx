"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, Siren, ArrowRight } from "lucide-react";
import type { VetRecord } from "@/data/vets";

// ============================================================
// Format service array into readable chips
// ============================================================
function ServiceChips({ services }: { services: string[] }) {
  const LABELS: Record<string, string> = {
    wellness: "Wellness",
    surgery: "Surgery",
    dental: "Dental",
    emergency: "Emergency",
    senior: "Senior Care",
    behavior: "Behavior",
    exotic: "Exotics",
  };

  return (
    <div className="flex flex-wrap gap-1.5">
      {services.slice(0, 4).map((s) => (
        <span
          key={s}
          className="inline-flex items-center px-2 py-0.5 rounded-full bg-pet-bg text-[11px] font-medium text-nav-text"
        >
          {LABELS[s] || s}
        </span>
      ))}
      {services.length > 4 && (
        <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-medium text-nav-text">
          +{services.length - 4}
        </span>
      )}
    </div>
  );
}

// ============================================================
// Single VetCard component
// ============================================================
export function VetCard({ vet }: { vet: VetRecord }) {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-card border border-pet-stroke hover-lift flex flex-col">
      {/* Photo */}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-pet-bg">
        <Image
          src={vet.photo}
          alt={vet.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Name + Location */}
        <h3 className="font-poppins font-semibold text-lg text-brand-dark leading-tight mb-1">
          {vet.name}
        </h3>
        <p className="text-sm text-nav-text mb-3">
          {vet.city}, {vet.stateAbbr}
        </p>

        {/* Rating row */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(vet.rating)
                    ? "text-gvd-star fill-gvd-star"
                    : "text-gvd-star"
                }`}
              />
            ))}
          </div>
          <span className="font-poppins font-semibold text-sm text-brand-dark">
            {vet.rating.toFixed(1)}
          </span>
          <span className="font-poppins text-xs text-nav-text">
            ({vet.reviewCount} reviews)
          </span>
        </div>

        {/* Services */}
        <div className="mb-4">
          <ServiceChips services={vet.services} />
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {vet.verified && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-pet-green/10 text-pet-green text-xs font-semibold">
              <ShieldCheck className="w-3 h-3" />
              Verified
            </span>
          )}
          {vet.emergency && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold">
              <Siren className="w-3 h-3" />
              Emergency
            </span>
          )}
        </div>

        {/* CTA link */}
        <Link
          href={`/veterinarian/${vet.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:opacity-80 transition-opacity mt-auto focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded"
        >
          View Profile
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

// ============================================================
// Empty state component
// ============================================================
interface EmptyStateProps {
  cityName: string;
  stateName: string;
}

export function VetEmptyState({ cityName, stateName }: EmptyStateProps) {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-pet-stroke text-center">
      <div className="w-16 h-16 rounded-full bg-pet-bg flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-8 h-8 text-brand-red"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      <h3 className="font-poppins font-bold text-xl text-brand-dark mb-2">
        No verified vets in {cityName} yet
      </h3>
      <p className="text-base text-nav-text mb-6 max-w-md mx-auto">
        We&apos;re growing fast — check back soon or browse other cities in {stateName}.
      </p>
      <Link
        href={`/veterinarians/${stateName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
        className="inline-flex items-center px-6 py-3 rounded-full bg-brand-red text-white text-sm font-semibold hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
      >
        See all {stateName} vets
      </Link>
    </div>
  );
}

// ============================================================
// Main Grid component
// ============================================================
interface CityVetGridProps {
  cityName: string;
  stateName: string;
  vets: VetRecord[];
}

export default function CityVetGrid({ cityName, stateName, vets }: CityVetGridProps) {
  if (vets.length === 0) {
    return (
      <section className="bg-pet-bg pt-12 md:pt-14 pb-12 md:pb-14 px-6 md:px-12 lg:px-20" id="vet-listings">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
              Vet Listings
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
              Veterinarians in {cityName}
            </h2>
          </div>
          <VetEmptyState cityName={cityName} stateName={stateName} />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-pet-bg pt-12 md:pt-14 pb-12 md:pb-14 px-6 md:px-12 lg:px-20" id="vet-listings">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
            Full Vet Listings
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            Veterinarians in {cityName}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch auto-rows-fr">
          {vets.map((vet) => (
            <VetCard key={vet.slug} vet={vet} />
          ))}
        </div>
      </div>
    </section>
  );
}