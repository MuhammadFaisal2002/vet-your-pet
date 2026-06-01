import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { STATES, getStateBySlug, getCityDisplayName } from "@/data/states";
import { getBreedersByCity, getCitySlugsForState } from "@/data/breeders";

import CityBreederHero from "@/components/breeders-city/CityBreederHero";
import NearbyCitiesSection from "@/components/breeders-city/NearbyCitiesSection";
import VetsInCityBanner from "@/components/breeders-city/VetsInCityBanner";
import DogShowsBanner from "@/components/breeders-city/DogShowsBanner";
import ClaimYourKennelBanner from "@/components/breeders-city/ClaimYourKennelBanner";

import { StateBreederFilterBar, StateBreederGrid } from "@/components/breeders-state/StateBreederFilterAndGrid";
import StateBreederCard from "@/components/breeders-state/StateBreederCard";
import FeaturedBreedersCarousel from "@/components/breeders/FeaturedBreedersCarousel";
import MapStubSection from "@/components/breeders-state/MapStubSection";

export const dynamicParams = false;

export async function generateStaticParams() {
  return STATES.flatMap((s) =>
    getCitySlugsForState(s.abbr).map((citySlug) => ({
      state: s.slug,
      city: citySlug,
    }))
  );
}

export async function generateMetadata(
  { params }: { params: { state: string; city: string } }
): Promise<Metadata> {
  const state = getStateBySlug(params.state);
  if (!state) return {};
  const city = getCityDisplayName(state, params.city);
  if (!city) return {};
  const count = getBreedersByCity(state.abbr, params.city).length;
  if (count === 0) return {};

  return {
    title: `Dog Breeders in ${city}, ${state.abbr} | Vet Your Pet`,
    description: `Browse ${count} verified dog breeders in ${city}, ${state.name}. Filter by breed, see available puppies, and connect with health-tested kennels reviewed by Vet Your Pet.`,
    alternates: { canonical: `/breeders/${state.slug}/${params.city}` },
    openGraph: {
      title: `Dog Breeders in ${city}, ${state.abbr} | Vet Your Pet`,
      description: `Verified, health-tested breeders in ${city}, ${state.name}.`,
      type: "website",
    },
  };
}

export default function CityBreedersPage(
  { params }: { params: { state: string; city: string } }
) {
  const state = getStateBySlug(params.state);
  if (!state) notFound();

  const cityName = getCityDisplayName(state, params.city);
  if (!cityName) notFound();

  const cityBreeders = getBreedersByCity(state.abbr, params.city);
  if (cityBreeders.length === 0) notFound();

  const verifiedCount = cityBreeders.filter((b) => b.verified).length;
  const featured = cityBreeders.filter((b) => b.featured && b.verified);

  return (
    <main id="main">
      {/* 1. Breadcrumb + 2. Hero (breadcrumb rendered inside hero) */}
      <CityBreederHero
        stateName={state.name}
        stateAbbr={state.abbr}
        stateSlug={state.slug}
        cityName={cityName}
        verifiedCount={verifiedCount}
        totalCount={cityBreeders.length}
      />

      {/* 3. Filter Bar */}
      <Suspense fallback={
        <section className="bg-pet-bg pt-10 md:pt-12 pb-10 md:pb-12 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
                Refine
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
                Find Your Match in {cityName}
              </h2>
            </div>
            <div className="bg-white border border-pet-stroke rounded-2xl p-6 text-sm text-nav-text">
              Loading filters…
            </div>
          </div>
        </section>
      }>
        <StateBreederFilterBar
          stateName={cityName}
          breeders={cityBreeders}
        />
      </Suspense>

      {/* 4. Featured / Verified Breeders in [City] */}
      {featured.length > 0 && (
        <FeaturedBreedersCarousel
          breeders={featured}
          headingOverride={`Featured Breeders in ${cityName}`}
          eyebrowOverride="Editor's Picks"
        />
      )}

      {/* 5. Map view */}
      <MapStubSection stateName={`${cityName}, ${state.abbr}`} />

      {/* 6. Full Listings */}
      <Suspense fallback={
        <section id="breeder-listings" className="bg-pet-bg pt-12 md:pt-14 pb-12 md:pb-14 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
                Full Breeder Listings
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
                Breeders in {cityName}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch auto-rows-fr">
              {cityBreeders.map((b) => (
                <StateBreederCard key={b.slug} breeder={b} />
              ))}
            </div>
          </div>
        </section>
      }>
        <StateBreederGrid
          stateName={cityName}
          breeders={cityBreeders}
        />
      </Suspense>

      {/* 7. Nearby cities */}
      <NearbyCitiesSection
        state={state}
        currentCitySlug={params.city}
      />

      {/* 8. Local Vets cross-link */}
      <VetsInCityBanner
        cityName={cityName}
        stateName={state.name}
        stateSlug={state.slug}
        citySlug={params.city}
      />

      {/* 9. Local Dog Shows cross-link */}
      <DogShowsBanner
        cityName={cityName}
        stateAbbr={state.abbr}
        stateSlug={state.slug}
        citySlug={params.city}
      />

      {/* 10. Claim CTA */}
      <ClaimYourKennelBanner cityName={cityName} />
    </main>
  );
}