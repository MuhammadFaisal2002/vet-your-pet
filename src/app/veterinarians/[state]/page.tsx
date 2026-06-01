import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { STATES, getStateBySlug } from "@/data/states";
import { getVetsByState, VetRecord } from "@/data/vets";

import StateDirectoryHero from "@/components/vet-directory/StateDirectoryHero";
import { StateVetFilterBar, StateVetGrid } from "@/components/vet-directory/StateVetFilterAndGrid";
import StateDirectoryBrowseByCity from "@/components/vet-directory/StateDirectoryBrowseByCity";
import FeaturedVetsCarousel from "@/components/vets/FeaturedVetsCarousel";
import MapStubSection from "@/components/breeders-state/MapStubSection";
import BreedersInStateBanner from "@/components/vets/BreedersInStateBanner";
import VetClaimBanner from "@/components/vets/VetClaimBanner";

export const dynamicParams = false;

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata(
  { params }: { params: { state: string } }
): Promise<Metadata> {
  const state = getStateBySlug(params.state);
  if (!state) return {};
  const count = getVetsByState(state.slug).length;
  return {
    title: `Veterinarians in ${state.name} | Vet Your Pet`,
    description: `Browse ${count} verified veterinarians in ${state.name}. Find trusted vets, emergency clinics, and animal hospitals reviewed by Vet Your Pet.`,
    alternates: { canonical: `/veterinarians/${state.slug}` },
    openGraph: {
      title: `Veterinarians in ${state.name} | Vet Your Pet`,
      description: `Verified veterinarians in ${state.name}.`,
      type: "website",
    },
  };
}

export default function StateVetsPage(
  { params }: { params: { state: string } }
) {
  const state = getStateBySlug(params.state);
  if (!state) notFound();

  const stateVets = getVetsByState(state.slug);
  const verifiedCount = stateVets.filter((v) => v.verified).length;
  const featured = stateVets.filter((v) => v.featured && v.verified);

  // Build vet data for FeaturedVetsCarousel filtered by state
  const featuredByState: VetRecord[] = featured.length > 0 
    ? featured 
    : stateVets.filter((v) => v.verified).slice(0, 6);

  return (
    <main id="main">
      {/* 1. Breadcrumb + 2. Hero (breadcrumb is rendered inside hero component) */}
      <StateDirectoryHero
        stateName={state.name}
        verifiedCount={verifiedCount}
        category="vet"
        showCitySearch={true}
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
                Find a Vet in {state.name}
              </h2>
            </div>
            <div className="bg-white border border-pet-stroke rounded-2xl p-6 text-sm text-nav-text">
              Loading filters…
            </div>
          </div>
        </section>
      }>
        <StateVetFilterBar
          stateName={state.name}
          vets={stateVets}
        />
      </Suspense>

      {/* 4. Browse by City */}
      <StateDirectoryBrowseByCity
        stateName={state.name}
        stateSlug={state.slug}
        topCities={state.topCities}
        category="vet"
        vets={stateVets}
      />

      {/* 5. Featured / Verified Vets in State */}
      {featuredByState.length > 0 && (
        <FeaturedVetsCarousel
          vets={featuredByState}
          headingOverride={`Featured Veterinarians in ${state.name}`}
          eyebrowOverride="Editor's Picks"
        />
      )}

      {/* 6. Map View (stub) */}
      <MapStubSection stateName={state.name} />

      {/* 7. Full Vet Listings Grid */}
      <Suspense fallback={
        <section id="vet-listings" className="bg-pet-bg pt-12 md:pt-14 pb-12 md:pb-14 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
                Full Vet Listings
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
                Veterinarians in {state.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch auto-rows-fr">
              {stateVets.map((v) => (
                <div key={v.slug} className="bg-white border border-pet-stroke rounded-2xl p-6">
                  <p className="text-lg font-bold text-brand-dark">{v.name}</p>
                  <p className="text-sm text-nav-text">{v.city}, {v.stateAbbr}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      }>
        <StateVetGrid
          stateName={state.name}
          vets={stateVets}
        />
      </Suspense>

      {/* 8. Cross-link to Breeders in State */}
      <BreedersInStateBanner stateName={state.name} stateSlug={state.slug} />

      {/* 9. "Don't see your clinic?" claim CTA */}
      <VetClaimBanner />
    </main>
  );
}