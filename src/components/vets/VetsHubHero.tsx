"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ShieldCheck, Stethoscope, Heart, Search, MapPin } from "lucide-react";
import { STATES } from "@/data/states";

/**
 * VetsHubHero — Section #2 of /veterinarians.
 *
 * Big H1, trust badge row, hero image, and a city/state search bar that
 * routes to the matching state page on submit. Native <select> is used for
 * the state picker (50 options) so it's fully accessible + keyboard-friendly
 * without an autocomplete dependency. v2 can upgrade to a typeahead.
 *
 * Note: this component is now a client component because of the form state.
 */
export default function VetsHubHero(): JSX.Element {
  const router = useRouter();
  const [stateSlug, setStateSlug] = useState<string>("");
  const [city, setCity] = useState<string>("");

  function handleSearch(e: React.FormEvent): void {
    e.preventDefault();
    if (!stateSlug) return;
    // City is optional v1; just deep-link to the state page.
    // v2: when city is provided, resolve a citySlug and route to /veterinarians/[state]/[city].
    router.push(`/veterinarians/${stateSlug}`);
  }

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 pt-12 md:pt-16 pb-16 md:pb-20 overflow-visible">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-16">

        {/* LEFT: text + search + badges */}
        <div className="flex-1 flex flex-col gap-8 py-4 md:py-8">
          <div className="flex flex-col gap-4">
            <h1
              className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.05]"
              style={{ animation: "fadeInDown 0.7s ease-out both" }}
            >
              Find a Trusted<br />Veterinarian
            </h1>
            <p
              className="font-poppins text-base md:text-lg text-nav-text leading-relaxed max-w-md"
              style={{ animation: "fadeInUp 0.7s ease-out 0.2s both" }}
            >
              Browse verified, trusted veterinarians across all 50 states. Every clinic on Vet Your Pet is reviewed for credentials, patient reviews, and quality of care &mdash; so you can find the right care for your pet.
            </p>
          </div>

          {/* Search bar — city / state */}
          <form
            onSubmit={handleSearch}
            className="bg-white border border-pet-stroke rounded-2xl shadow-sm p-3 flex flex-col sm:flex-row gap-2 max-w-xl"
            aria-label="Search veterinarians by city or state"
            style={{ animation: "fadeInUp 0.7s ease-out 0.3s both" }}
          >
            <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-pet-bg/40">
              <Search className="w-4 h-4 text-nav-text flex-shrink-0" aria-hidden="true" />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City (optional)"
                aria-label="City"
                className="flex-1 bg-transparent outline-none text-sm text-brand-dark placeholder:text-nav-text min-w-0"
              />
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-pet-bg/40 sm:w-44">
              <MapPin className="w-4 h-4 text-nav-text flex-shrink-0" aria-hidden="true" />
              <select
                value={stateSlug}
                onChange={(e) => setStateSlug(e.target.value)}
                aria-label="State"
                className="flex-1 bg-transparent outline-none text-sm text-brand-dark min-w-0"
              >
                <option value="">State</option>
                {STATES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={!stateSlug}
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-brand-red text-white font-semibold px-5 py-3 hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 min-h-[44px]"
            >
              Search
            </button>
          </form>

          {/* Trust badge row */}
          <div
            className="flex flex-wrap gap-3 max-w-lg"
            style={{ animation: "fadeInUp 0.7s ease-out 0.4s both" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
              <ShieldCheck className="w-4 h-4 text-brand-red" />
              <span className="text-sm font-semibold text-brand-dark">Verified in 50 States</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
              <Stethoscope className="w-4 h-4 text-brand-red" />
              <span className="text-sm font-semibold text-brand-dark">Licensed Clinics Only</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
              <Heart className="w-4 h-4 text-brand-red" />
              <span className="text-sm font-semibold text-brand-dark">Trusted by Pet Owners</span>
            </div>
          </div>
        </div>

        {/* RIGHT: hero image */}
        <div
          className="flex-1 relative w-full overflow-visible"
          style={{ animation: "fadeInRight 0.7s ease-out 0.2s both" }}
        >
          <Image
            src="/images/hero-image.png"
            alt="Veterinarian examining a dog in a calm clinic setting"
            width={575}
            height={609}
            className="w-full h-auto rounded-t-2xl"
            style={{ borderRadius: "24px 24px 0 0" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
