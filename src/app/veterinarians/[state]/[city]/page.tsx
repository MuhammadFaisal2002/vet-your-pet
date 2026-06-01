import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { STATES, getStateBySlug, getCityDisplayName } from "@/data/states";
import { getVetsByCity } from "@/data/vets";

import CityVetHero from "@/components/vet-directory/CityVetHero";
import CityVetFilterBar from "@/components/vet-directory/CityVetFilterBar";
import CityVetGrid from "@/components/vet-directory/CityVetGrid";
import CityVetsMap from "@/components/vet-directory/CityVetsMap";
import CityNearbyCitiesSection from "@/components/vet-directory/CityNearbyCitiesSection";
import BreedersInCityBanner from "@/components/vet-directory/BreedersInCityBanner";

// Need to import reusable sections - check if they need parameterization
import VetAboutSection from "@/components/vet-directory/VetAboutSection";
import VetCommonServices from "@/components/vet-directory/VetCommonServices";
import VetCompassionateTeams from "@/components/vet-directory/VetCompassionateTeams";
import VetSmoothFirstVisit from "@/components/vet-directory/VetSmoothFirstVisit";
import VetWhyLocalVets from "@/components/vet-directory/VetWhyLocalVets";
import VetCtaSection from "@/components/vet-directory/VetCtaSection";

export const dynamicParams = false;

// Helper to generate city slug
function citySlug(c: string): string {
  return c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export async function generateStaticParams() {
  // Generate all (state, city) pairs from topCities
  return STATES.flatMap((s) =>
    s.topCities.map((city) => ({
      state: s.slug,
      city: citySlug(city),
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
  
  const count = getVetsByCity(state.slug, params.city).length;
  if (count === 0) return {};

  return {
    title: `Veterinarians in ${city}, ${state.abbr} | Vet Your Pet`,
    description: `Browse ${count} verified veterinarians in ${city}, ${state.name}. Find trusted vets, emergency clinics, and animal hospitals reviewed by Vet Your Pet.`,
    alternates: { canonical: `/veterinarians/${state.slug}/${params.city}` },
    openGraph: {
      title: `Veterinarians in ${city}, ${state.abbr} | Vet Your Pet`,
      description: `Verified veterinarians in ${city}, ${state.name}.`,
      type: "website",
    },
  };
}

export default function CityVetsPage(
  { params }: { params: { state: string; city: string } }
) {
  const state = getStateBySlug(params.state);
  if (!state) notFound();

  const cityName = getCityDisplayName(state, params.city);
  if (!cityName) notFound();

  const cityVets = getVetsByCity(state.slug, params.city);
  
  // If no vets found, show the page but with empty state
  const verifiedCount = cityVets.filter((v) => v.verified).length;

  return (
    <main id="main">
      {/* 1. Breadcrumb + 2. Hero — rendered CityVetHero */}
      <CityVetHero
        stateName={state.name}
        stateAbbr={state.abbr}
        stateSlug={state.slug}
        cityName={cityName}
        verifiedCount={verifiedCount}
        totalCount={cityVets.length}
      />

      {/* 3. Filter Bar (sticky) */}
      <Suspense fallback={
        <section className="bg-pet-bg pt-10 md:pt-12 pb-10 md:pb-12 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
                Refine
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
                Find a Vet in {cityName}
              </h2>
            </div>
            <div className="bg-white border border-pet-stroke rounded-2xl p-6 text-sm text-nav-text">
              Loading filters…
            </div>
          </div>
        </section>
      }>
        <CityVetFilterBar
          cityName={cityName}
          vets={cityVets}
        />
      </Suspense>

      {/* 4. Intro band — compassionate care (generic, reuse as-is) */}
      <VetAboutSection />

      {/* 5. Clinic Listings (data-driven grid) */}
      <Suspense fallback={
        <section className="bg-pet-bg pt-12 md:pt-14 pb-12 md:pb-14 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
                Vet Listings
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
                Veterinarians in {cityName}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch auto-rows-fr">
              {cityVets.map((v) => (
                <div key={v.slug} className="bg-white border border-pet-stroke rounded-2xl p-6">
                  <p className="text-lg font-bold text-brand-dark">{v.name}</p>
                  <p className="text-sm text-nav-text">{v.city}, {v.stateAbbr}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      }>
        <CityVetGrid
          cityName={cityName}
          stateName={state.name}
          vets={cityVets}
        />
      </Suspense>

      {/* 6. Map View */}
      <CityVetsMap cityName={cityName} />

      {/* 7. Common Services Offered band */}
      <VetCommonServices />

      {/* 8. Compassionate Teams testimonials */}
      <VetCompassionateTeams cityName={cityName} />

      {/* 9. A Smooth First Visit — 5-step guide */}
      <VetSmoothFirstVisit />

      {/* 10. Why Local Vets */}
      <VetWhyLocalVets cityName={cityName} />

      {/* 11. Nearby cities */}
      <CityNearbyCitiesSection
        state={state}
        currentCitySlug={params.city}
      />

      {/* 12. Cross-link to Breeders in [City] */}
      <BreedersInCityBanner
        cityName={cityName}
        stateSlug={state.slug}
        citySlug={params.city}
      />

      {/* 13. Closing CTA — explore listings */}
      <VetCtaSection cityName={cityName} />
    </main>
  );
}