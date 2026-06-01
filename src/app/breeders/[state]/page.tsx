import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { STATES, getStateBySlug } from "@/data/states";
import { getBreedersByState } from "@/data/breeders";

import StateBreederHero from "@/components/breeders-state/StateBreederHero";
import { StateBreederFilterBar, StateBreederGrid } from "@/components/breeders-state/StateBreederFilterAndGrid";
import StateBreederCard from "@/components/breeders-state/StateBreederCard";
import BrowseByCitySection from "@/components/breeders-state/BrowseByCitySection";
import FeaturedBreedersCarousel from "@/components/breeders/FeaturedBreedersCarousel";
import MapStubSection from "@/components/breeders-state/MapStubSection";
import AboutBreedingSection from "@/components/breeders-state/AboutBreedingSection";
import PuppyLawsSection from "@/components/breeders-state/PuppyLawsSection";
import VetsInStateBanner from "@/components/breeders-state/VetsInStateBanner";
import BreederBanner from "@/components/breeders/BreederBanner";

export const dynamicParams = false;

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata(
  { params }: { params: { state: string } }
): Promise<Metadata> {
  const state = getStateBySlug(params.state);
  if (!state) return {};
  const count = getBreedersByState(state.abbr).length;
  return {
    title: `Dog Breeders in ${state.name} | Vet Your Pet`,
    description: `Browse ${count} verified dog breeders in ${state.name}. Filter by breed, see available puppies, and connect with health-tested kennels reviewed by Vet Your Pet.`,
    alternates: { canonical: `/breeders/${state.slug}` },
    openGraph: {
      title: `Dog Breeders in ${state.name} | Vet Your Pet`,
      description: `Verified, health-tested breeders in ${state.name}.`,
      type: "website",
    },
  };
}

export default function StateBreedersPage(
  { params }: { params: { state: string } }
) {
  const state = getStateBySlug(params.state);
  if (!state) notFound();

  const stateBreeders = getBreedersByState(state.abbr);
  const verifiedCount = stateBreeders.filter((b) => b.verified).length;
  const featured = stateBreeders.filter((b) => b.featured && b.verified);

  return (
    <main id="main">
      {/* 1. Breadcrumb + 2. Hero (breadcrumb is rendered inside hero component) */}
      <StateBreederHero
        stateName={state.name}
        verifiedCount={verifiedCount}
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
                Find Your Match in {state.name}
              </h2>
            </div>
            <div className="bg-white border border-pet-stroke rounded-2xl p-6 text-sm text-nav-text">
              Loading filters…
            </div>
          </div>
        </section>
      }>
        <StateBreederFilterBar
          stateName={state.name}
          breeders={stateBreeders}
        />
      </Suspense>

      {/* 4. Browse by City */}
      <BrowseByCitySection
        stateName={state.name}
        stateSlug={state.slug}
        topCities={state.topCities}
        breeders={stateBreeders}
      />

      {/* 5. Featured / Verified Breeders */}
      {featured.length > 0 && (
        <FeaturedBreedersCarousel
          breeders={featured}
          headingOverride={`Featured Breeders in ${state.name}`}
          eyebrowOverride="Editor's Picks"
        />
      )}

      {/* 6. Map View */}
      <MapStubSection stateName={state.name} />

      {/* 7. Full Breeder Listings */}
      <Suspense fallback={
        <section id="breeder-listings" className="bg-pet-bg pt-12 md:pt-14 pb-12 md:pb-14 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
                Full Breeder Listings
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
                Breeders in {state.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch auto-rows-fr">
              {stateBreeders.map((b) => (
                <StateBreederCard key={b.slug} breeder={b} />
              ))}
            </div>
          </div>
        </section>
      }>
        <StateBreederGrid
          stateName={state.name}
          breeders={stateBreeders}
        />
      </Suspense>

      {/* 8. About Breeding in [State] */}
      <AboutBreedingSection state={state} />

      {/* 9. State puppy laws */}
      <PuppyLawsSection state={state} />

      {/* 10. Vets in [State] cross-link */}
      <VetsInStateBanner stateName={state.name} stateSlug={state.slug} />

      {/* 11. Claim CTA */}
      <BreederBanner />
    </main>
  );
}