"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, ShieldCheck, HeartPulse, ClipboardCheck, Search } from "lucide-react";

interface StateDirectoryHeroProps {
  stateName: string;
  verifiedCount: number;
  category: "breeder" | "vet";
  showCitySearch?: boolean;
}

function citySlug(c: string) {
  return c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function StateDirectoryHero({
  stateName,
  verifiedCount,
  category,
  showCitySearch = true,
}: StateDirectoryHeroProps) {
  const [cityInput, setCityInput] = useState("");

  const handleCitySearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (cityInput.trim()) {
      window.location.href = `/${category}s/${window.location.pathname.split("/")[2]}/${citySlug(cityInput.trim())}`;
    }
  };

  const baseLabel = category === "breeder" ? "Breeders" : "Veterinarians";
  const basePath = category === "breeder" ? "/breeders" : "/veterinarians";
  const countNoun = category === "breeder" ? "Verified Kennels" : "Verified Clinics";
  const subCopyBase = category === "breeder"
    ? "Browse {count} verified dog breeders in {state}. Every kennel is health-tested and meets Vet Your Pet's ethical standards — so you can focus on finding your perfect puppy."
    : "Browse {count} verified veterinarians in {state}. Every clinic is vetted for credentials, patient reviews, and quality of care — so your pet gets the best.";

  return (
    <section className="bg-white pt-8 md:pt-10 pb-8 md:pb-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 md:mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-nav-text">
            <li>
              <Link
                href="/"
                className="hover:text-brand-dark transition-colors focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-4 h-4 text-brand-dark" />
            </li>
            <li>
              <Link
                href={basePath}
                className="hover:text-brand-dark transition-colors focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded"
              >
                {baseLabel}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-4 h-4 text-brand-dark" />
            </li>
            <li className="text-brand-dark font-semibold" aria-current="page">
              {stateName}
            </li>
          </ol>
        </nav>

        {/* H1 + sub-copy */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
            {baseLabel} Directory
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-brand-dark">
            {category === "breeder" ? "Dog " : ""}{baseLabel} in {stateName}
          </h1>
          <p className="mt-6 text-base md:text-lg text-nav-text leading-relaxed">
            {subCopyBase.replace("{count}", String(verifiedCount)).replace("{state}", stateName)}
          </p>
        </div>

        {/* City search bar (only on vet pages per Row 13 spec, gated behind showCitySearch) */}
        {showCitySearch && category === "vet" && (
          <form
            onSubmit={handleCitySearch}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl"
          >
            <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-full px-5 py-3">
              <Search className="w-4 h-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
              <input
                type="text"
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
                placeholder="Enter a city name..."
                className="flex-1 bg-transparent font-poppins text-sm text-brand-dark placeholder-gray-400 outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-red text-white text-sm font-semibold hover:opacity-90 transition-opacity min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              Search
            </button>
          </form>
        )}

        {/* Trust pills */}
        <div className="mt-8 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
            <ShieldCheck className="w-4 h-4 text-brand-red" aria-hidden="true" />
            <span className="text-sm font-semibold text-brand-dark">
              {verifiedCount} {countNoun}
            </span>
          </div>
          {category === "breeder" ? (
            <>
              <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
                <HeartPulse className="w-4 h-4 text-brand-red" aria-hidden="true" />
                <span className="text-sm font-semibold text-brand-dark">Health-Tested Parents</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
                <ClipboardCheck className="w-4 h-4 text-brand-red" aria-hidden="true" />
                <span className="text-sm font-semibold text-brand-dark">On-Site Facility Checks</span>
              </div>
            </>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
                <HeartPulse className="w-4 h-4 text-brand-red" aria-hidden="true" />
                <span className="text-sm font-semibold text-brand-dark">Licensed Veterinarians</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
                <ClipboardCheck className="w-4 h-4 text-brand-red" aria-hidden="true" />
                <span className="text-sm font-semibold text-brand-dark">Patient Reviews</span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}