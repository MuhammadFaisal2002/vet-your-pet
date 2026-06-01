"use client";
import { useMemo, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ChevronDown, X, SlidersHorizontal, List, Map as MapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, Siren, MapPin } from "lucide-react";
import type { VetRecord } from "@/data/vets";

type SortKey = "rating" | "reviews" | "name";

interface SharedProps {
  stateName: string;
  vets: VetRecord[];
}

// ============================================================
// Shared hook for URL-driven filter state
// ============================================================
function useFilterState(vets: VetRecord[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateFilter = useCallback(
    (mutator: (sp: URLSearchParams) => void) => {
      const sp = new URLSearchParams(searchParams.toString());
      mutator(sp);
      const qs = sp.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const filters = useMemo(
    () => ({
      verified: searchParams.get("verified") === "true",
      emergency: searchParams.get("emergency") === "true",
      sort: (searchParams.get("sort") as SortKey) || "rating",
    }),
    [searchParams]
  );

  const toggleVerified = useCallback(() => {
    updateFilter((sp) => {
      if (sp.get("verified") === "true") sp.delete("verified");
      else sp.set("verified", "true");
    });
  }, [updateFilter]);

  const toggleEmergency = useCallback(() => {
    updateFilter((sp) => {
      if (sp.get("emergency") === "true") sp.delete("emergency");
      else sp.set("emergency", "true");
    });
  }, [updateFilter]);

  const setSort = useCallback(
    (sort: SortKey) => {
      updateFilter((sp) => {
        if (sort === "rating") sp.delete("sort");
        else sp.set("sort", sort);
      });
    },
    [updateFilter]
  );

  const clearAll = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  // Get unique cities from the vets array for potential future filtering
  const availableCities = useMemo(() => {
    const set = new Set<string>();
    vets.forEach((v) => set.add(v.city));
    return Array.from(set).sort();
  }, [vets]);

  // Apply filters + sort
  const filtered = useMemo(() => {
    let list = vets.slice();
    if (filters.verified) list = list.filter((v) => v.verified);
    if (filters.emergency) list = list.filter((v) => v.emergency);

    list.sort((a, b) => {
      if (filters.sort === "name") return a.name.localeCompare(b.name);
      if (filters.sort === "reviews") return b.reviewCount - a.reviewCount;
      // rating (default): rating desc, tiebreak reviewCount desc
      if (b.rating !== a.rating) return b.rating - a.rating;
      return b.reviewCount - a.reviewCount;
    });

    return list;
  }, [vets, filters.verified, filters.emergency, filters.sort]);

  return {
    filters,
    filtered,
    availableCities,
    toggleVerified,
    toggleEmergency,
    setSort,
    clearAll,
  };
}

// ============================================================
// EXPORT 1: Filter Bar only (spec position #3 — after Hero)
// ============================================================
export function StateVetFilterBar({ stateName, vets }: SharedProps) {
  const { filters, filtered, toggleVerified, toggleEmergency, setSort, clearAll } =
    useFilterState(vets);

  return (
    <section
      id="refine-filters"
      className="bg-pet-bg pt-10 md:pt-12 pb-10 md:pb-12 px-6 md:px-12 lg:px-20 scroll-mt-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
              Refine
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Find a Vet in {stateName}
            </h2>
          </div>
          <p className="text-sm text-nav-text">
            <span className="font-semibold text-brand-dark">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "clinic" : "clinics"} match
          </p>
        </div>

        <div className="bg-white border border-pet-stroke rounded-2xl p-4 md:p-6 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:items-center">
            <label className="inline-flex items-center gap-2 text-sm text-nav-text">
              <span className="font-semibold text-brand-dark">Sort</span>
              <span className="relative">
                <select
                  value={filters.sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  aria-label="Sort veterinarians"
                  className="appearance-none pr-9 pl-4 py-3 rounded-full border border-pet-stroke bg-white text-sm font-semibold text-brand-dark hover:bg-pet-bg transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                >
                  <option value="rating">Rating (high to low)</option>
                  <option value="reviews">Most reviews</option>
                  <option value="name">Name (A–Z)</option>
                </select>
                <ChevronDown
                  className="w-4 h-4 text-nav-text absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
              </span>
            </label>

            {(filters.verified || filters.emergency || filters.sort !== "rating") && (
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-brand-red hover:text-brand-dark transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded-full"
              >
                <X className="w-4 h-4" aria-hidden="true" />
                Clear filters
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-3 pt-2 border-t border-pet-stroke">
            <button
              type="button"
              role="switch"
              aria-checked={filters.verified}
              onClick={toggleVerified}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 ${
                filters.verified
                  ? "bg-brand-red border-brand-red text-white"
                  : "bg-white border-pet-stroke text-brand-dark hover:bg-pet-bg"
              }`}
            >
              <span
                className={`inline-flex w-9 h-5 rounded-full border ${
                  filters.verified ? "bg-white/30 border-white" : "bg-pet-stroke border-pet-stroke"
                } relative`}
                aria-hidden="true"
              >
                <span
                  className={`absolute top-0.5 ${
                    filters.verified ? "right-0.5" : "left-0.5"
                  } w-4 h-4 rounded-full bg-white transition-all`}
                />
              </span>
              Verified only
            </button>

            <button
              type="button"
              role="switch"
              aria-checked={filters.emergency}
              onClick={toggleEmergency}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 ${
                filters.emergency
                  ? "bg-brand-red border-brand-red text-white"
                  : "bg-white border-pet-stroke text-brand-dark hover:bg-pet-bg"
              }`}
            >
              <span
                className={`inline-flex w-9 h-5 rounded-full border ${
                  filters.emergency ? "bg-white/30 border-white" : "bg-pet-stroke border-pet-stroke"
                } relative`}
                aria-hidden="true"
              >
                <span
                  className={`absolute top-0.5 ${
                    filters.emergency ? "right-0.5" : "left-0.5"
                  } w-4 h-4 rounded-full bg-white transition-all`}
                />
              </span>
              Emergency / 24h
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// EXPORT 2: Full Vet Listings Grid (spec position #7)
// ============================================================
export function StateVetGrid({ stateName, vets }: SharedProps) {
  const { filters, filtered, toggleVerified, toggleEmergency } = useFilterState(vets);
  const hasActiveFilters = filters.verified || filters.emergency;

  return (
    <section
      id="vet-listings"
      className="bg-pet-bg pt-12 md:pt-14 pb-12 md:pb-14 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Sticky compact toolbar — visible while scrolling listings */}
        <div className="sticky top-0 z-20 -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 py-3 md:py-4 bg-pet-bg/95 backdrop-blur border-b border-pet-stroke">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
              <span>{filtered.length}</span>
              <span className="text-nav-text font-normal">
                {filtered.length === 1 ? "clinic" : "clinics"}
              </span>
            </div>

            {/* List / Map toggle — visual switch (List active, Map disabled placeholder) */}
            <div
              className="inline-flex rounded-full border border-pet-stroke bg-white p-1"
              role="tablist"
              aria-label="View toggle"
            >
              <button
                type="button"
                role="tab"
                aria-selected="true"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-red text-white text-xs font-semibold transition-colors"
              >
                <List className="w-3.5 h-3.5" aria-hidden="true" />
                List
              </button>
              <a
                href="#map-view"
                role="tab"
                aria-selected="false"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-brand-dark hover:bg-pet-bg text-xs font-semibold transition-colors"
              >
                <MapIcon className="w-3.5 h-3.5" aria-hidden="true" />
                Map
              </a>
            </div>

            {/* Active filter pills (toolbar version) */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 md:ml-2">
                {filters.verified && (
                  <button
                    type="button"
                    onClick={toggleVerified}
                    className="inline-flex items-center gap-1.5 bg-white border border-brand-red text-brand-red rounded-full px-3 py-1 text-xs font-semibold hover:bg-brand-red hover:text-white transition-colors"
                  >
                    Verified only
                    <X className="w-3 h-3" aria-hidden="true" />
                  </button>
                )}
                {filters.emergency && (
                  <button
                    type="button"
                    onClick={toggleEmergency}
                    className="inline-flex items-center gap-1.5 bg-white border border-brand-red text-brand-red rounded-full px-3 py-1 text-xs font-semibold hover:bg-brand-red hover:text-white transition-colors"
                  >
                    Emergency / 24h
                    <X className="w-3 h-3" aria-hidden="true" />
                  </button>
                )}
              </div>
            )}

            <a
              href="#refine-filters"
              className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red hover:text-brand-dark transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
              Edit filters
            </a>
          </div>
        </div>

        <div className="mb-8 md:mb-10 mt-8 md:mt-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
            Veterinarians in {stateName}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            All Verified Vets in {stateName}
          </h2>
          <p className="mt-3 text-sm text-nav-text">
            <span className="font-semibold text-brand-dark">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "clinic" : "clinics"} match your filters
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white border border-pet-stroke rounded-2xl p-10 md:p-14 text-center">
            <p className="text-xl font-bold text-brand-dark mb-2">
              No verified vets in {stateName} yet.
            </p>
            <p className="text-base text-nav-text mb-6">
              Be the first to list — claim your clinic and join our network.
            </p>
            <Link
              href="/claim-listing?vertical=vet"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-red text-white text-sm font-semibold hover:opacity-90 transition-opacity min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              Claim Your Listing
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch auto-rows-fr">
            {filtered.map((v) => (
              <Link
                key={v.slug}
                href={`/veterinarian/${v.slug}`}
                className="block bg-white border border-pet-stroke rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
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
                      <li
                        key={service}
                        className="bg-pet-bg text-nav-text rounded-full px-3 py-1 text-xs capitalize"
                      >
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
        )}
      </div>
    </section>
  );
}

// ============================================================
// Backwards-compat default export (Filter+Grid combined)
// ============================================================
export default function StateVetFilterAndGrid({ stateName, vets }: SharedProps) {
  return (
    <>
      <StateVetFilterBar stateName={stateName} vets={vets} />
      <StateVetGrid stateName={stateName} vets={vets} />
    </>
  );
}