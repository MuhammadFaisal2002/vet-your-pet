"use client";
import { useMemo, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Check, ChevronDown, X, SlidersHorizontal, List, Map as MapIcon } from "lucide-react";
import StateBreederCard from "./StateBreederCard";
import type { BreederRecord } from "@/data/breeders";

type SortKey = "rating" | "name" | "city";

interface SharedProps {
  stateName: string;
  breeders: BreederRecord[];
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// Shared hook for URL-driven filter state
function useFilterState(breeders: BreederRecord[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateFilter = useCallback((mutator: (sp: URLSearchParams) => void) => {
    const sp = new URLSearchParams(searchParams.toString());
    mutator(sp);
    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [pathname, router, searchParams]);

  const filters = useMemo(() => ({
    breeds: searchParams.getAll("breed"),
    verified: searchParams.get("verified") === "true",
    availablePuppies: searchParams.get("availablePuppies") === "true",
    sort: (searchParams.get("sort") as SortKey) || "rating",
  }), [searchParams]);

  const toggleBreed = useCallback((breedSlug: string) => {
    updateFilter((sp) => {
      const current = sp.getAll("breed");
      sp.delete("breed");
      if (current.includes(breedSlug)) {
        current.filter((b) => b !== breedSlug).forEach((b) => sp.append("breed", b));
      } else {
        [...current, breedSlug].forEach((b) => sp.append("breed", b));
      }
    });
  }, [updateFilter]);

  const toggleVerified = useCallback(() => {
    updateFilter((sp) => {
      if (sp.get("verified") === "true") sp.delete("verified");
      else sp.set("verified", "true");
    });
  }, [updateFilter]);

  const toggleAvailable = useCallback(() => {
    updateFilter((sp) => {
      if (sp.get("availablePuppies") === "true") sp.delete("availablePuppies");
      else sp.set("availablePuppies", "true");
    });
  }, [updateFilter]);

  const setSort = useCallback((sort: SortKey) => {
    updateFilter((sp) => {
      if (sort === "rating") sp.delete("sort");
      else sp.set("sort", sort);
    });
  }, [updateFilter]);

  const clearAll = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  // Build the set of breed slugs that exist in this state
  const availableBreeds = useMemo(() => {
    const map = new Map<string, string>();
    breeders.forEach((b) => b.breeds.forEach((breed) => {
      const sl = slugify(breed);
      if (!map.has(sl)) map.set(sl, breed);
    }));
    return Array.from(map.entries()).map(([slug, name]) => ({ slug, name })).sort((a, b) => a.name.localeCompare(b.name));
  }, [breeders]);

  // Apply filters + sort
  const filtered = useMemo(() => {
    let list = breeders.slice();
    if (filters.breeds.length > 0) {
      list = list.filter((b) => b.breeds.some((br) => filters.breeds.includes(slugify(br))));
    }
    if (filters.verified) list = list.filter((b) => b.verified);
    if (filters.availablePuppies) list = list.filter((b) => b.hasAvailablePuppies);

    list.sort((a, b) => {
      if (filters.sort === "name") return a.name.localeCompare(b.name);
      if (filters.sort === "city") return a.city.localeCompare(b.city);
      // rating (default): rating desc, tiebreak reviewCount desc
      if (b.rating !== a.rating) return b.rating - a.rating;
      return b.reviewCount - a.reviewCount;
    });

    return list;
  }, [breeders, filters.breeds, filters.verified, filters.availablePuppies, filters.sort]);

  return { filters, filtered, availableBreeds, toggleBreed, toggleVerified, toggleAvailable, setSort, clearAll };
}

// ============================================================
// EXPORT 1: Filter Bar only (spec position #3 — after Hero)
// ============================================================
export function StateBreederFilterBar({ stateName, breeders }: SharedProps) {
  const { filters, filtered, availableBreeds, toggleBreed, toggleVerified, toggleAvailable, setSort, clearAll } = useFilterState(breeders);

  return (
    <section id="refine-filters" className="bg-pet-bg pt-10 md:pt-12 pb-10 md:pb-12 px-6 md:px-12 lg:px-20 scroll-mt-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
              Refine
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Find Your Match in {stateName}
            </h2>
          </div>
          <p className="text-sm text-nav-text">
            <span className="font-semibold text-brand-dark">{filtered.length}</span> {filtered.length === 1 ? "breeder" : "breeders"} match
          </p>
        </div>

        <div className="bg-white border border-pet-stroke rounded-2xl p-4 md:p-6 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:items-center">
            <details className="relative md:w-72">
              <summary className="list-none cursor-pointer inline-flex items-center justify-between gap-2 w-full px-4 py-3 rounded-full border border-pet-stroke bg-white text-sm font-semibold text-brand-dark hover:bg-pet-bg transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2">
                <span className="inline-flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-brand-red" aria-hidden="true" />
                  Breed
                  {filters.breeds.length > 0 && (
                    <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-brand-red text-white text-xs font-bold">
                      {filters.breeds.length}
                    </span>
                  )}
                </span>
                <ChevronDown className="w-4 h-4 text-nav-text" aria-hidden="true" />
              </summary>
              <div className="absolute z-20 mt-2 w-full md:w-80 max-h-72 overflow-auto bg-white border border-pet-stroke rounded-2xl shadow-md p-2">
                {availableBreeds.length === 0 && (
                  <p className="px-3 py-2 text-sm text-nav-text">No breeds available.</p>
                )}
                {availableBreeds.map((b) => {
                  const checked = filters.breeds.includes(b.slug);
                  return (
                    <label
                      key={b.slug}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-pet-bg text-sm text-brand-dark min-h-[44px]"
                    >
                      <span
                        className={`inline-flex items-center justify-center w-5 h-5 rounded border ${
                          checked ? "bg-brand-red border-brand-red" : "bg-white border-pet-stroke"
                        }`}
                        aria-hidden="true"
                      >
                        {checked && <Check className="w-3.5 h-3.5 text-white" />}
                      </span>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={checked}
                        onChange={() => toggleBreed(b.slug)}
                        aria-label={`Filter by ${b.name}`}
                      />
                      <span className="flex-1">{b.name}</span>
                    </label>
                  );
                })}
              </div>
            </details>

            <label className="md:ml-auto inline-flex items-center gap-2 text-sm text-nav-text">
              <span className="font-semibold text-brand-dark">Sort</span>
              <span className="relative">
                <select
                  value={filters.sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  aria-label="Sort breeders"
                  className="appearance-none pr-9 pl-4 py-3 rounded-full border border-pet-stroke bg-white text-sm font-semibold text-brand-dark hover:bg-pet-bg transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                >
                  <option value="rating">Rating (high to low)</option>
                  <option value="name">Name (A–Z)</option>
                  <option value="city">City (A–Z)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-nav-text absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
              </span>
            </label>

            {(filters.breeds.length > 0 || filters.verified || filters.availablePuppies || filters.sort !== "rating") && (
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
              aria-checked={filters.availablePuppies}
              onClick={toggleAvailable}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 ${
                filters.availablePuppies
                  ? "bg-brand-red border-brand-red text-white"
                  : "bg-white border-pet-stroke text-brand-dark hover:bg-pet-bg"
              }`}
            >
              <span
                className={`inline-flex w-9 h-5 rounded-full border ${
                  filters.availablePuppies ? "bg-white/30 border-white" : "bg-pet-stroke border-pet-stroke"
                } relative`}
                aria-hidden="true"
              >
                <span
                  className={`absolute top-0.5 ${
                    filters.availablePuppies ? "right-0.5" : "left-0.5"
                  } w-4 h-4 rounded-full bg-white transition-all`}
                />
              </span>
              Puppies available
            </button>

            {filters.breeds.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                {filters.breeds.map((slug) => {
                  const breed = availableBreeds.find((b) => b.slug === slug);
                  if (!breed) return null;
                  return (
                    <button
                      key={slug}
                      type="button"
                      onClick={() => toggleBreed(slug)}
                      className="inline-flex items-center gap-1.5 bg-pet-bg text-brand-dark rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-pet-stroke transition-colors focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                      aria-label={`Remove ${breed.name} filter`}
                    >
                      {breed.name}
                      <X className="w-3 h-3" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// EXPORT 2: Full Listings Grid only (spec position #7 — after Map)
// Includes sticky compact toolbar with active filter pills + List/Map toggle
// ============================================================
export function StateBreederGrid({ stateName, breeders }: SharedProps) {
  const { filters, filtered, availableBreeds, toggleBreed, toggleVerified, toggleAvailable, clearAll } = useFilterState(breeders);
  const hasActiveFilters = filters.breeds.length > 0 || filters.verified || filters.availablePuppies;

  return (
    <section id="breeder-listings" className="bg-pet-bg pt-12 md:pt-14 pb-12 md:pb-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Sticky compact toolbar — visible while scrolling listings */}
        <div className="sticky top-0 z-20 -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 py-3 md:py-4 bg-pet-bg/95 backdrop-blur border-b border-pet-stroke">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
              <span>{filtered.length}</span>
              <span className="text-nav-text font-normal">{filtered.length === 1 ? "breeder" : "breeders"}</span>
            </div>

            {/* List / Map toggle — visual switch (List active, Map disabled placeholder) */}
            <div className="inline-flex rounded-full border border-pet-stroke bg-white p-1" role="tablist" aria-label="View toggle">
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
                {filters.availablePuppies && (
                  <button
                    type="button"
                    onClick={toggleAvailable}
                    className="inline-flex items-center gap-1.5 bg-white border border-brand-red text-brand-red rounded-full px-3 py-1 text-xs font-semibold hover:bg-brand-red hover:text-white transition-colors"
                  >
                    Puppies available
                    <X className="w-3 h-3" aria-hidden="true" />
                  </button>
                )}
                {filters.breeds.map((slug) => {
                  const breed = availableBreeds.find((b) => b.slug === slug);
                  if (!breed) return null;
                  return (
                    <button
                      key={slug}
                      type="button"
                      onClick={() => toggleBreed(slug)}
                      className="inline-flex items-center gap-1.5 bg-white border border-brand-red text-brand-red rounded-full px-3 py-1 text-xs font-semibold hover:bg-brand-red hover:text-white transition-colors"
                    >
                      {breed.name}
                      <X className="w-3 h-3" aria-hidden="true" />
                    </button>
                  );
                })}
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
            Full Breeder Listings
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            Breeders in {stateName}
          </h2>
          <p className="mt-3 text-sm text-nav-text">
            <span className="font-semibold text-brand-dark">{filtered.length}</span> {filtered.length === 1 ? "breeder" : "breeders"} match your filters
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white border border-pet-stroke rounded-2xl p-10 md:p-14 text-center">
            <p className="text-xl font-bold text-brand-dark mb-2">No breeders match these filters.</p>
            <p className="text-base text-nav-text mb-6">Try adjusting your breed selection or clearing filters to see every breeder in {stateName}.</p>
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-red text-white text-sm font-semibold hover:bg-brand-dark transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch auto-rows-fr">
            {filtered.map((b) => (
              <StateBreederCard key={b.slug} breeder={b} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ============================================================
// Backwards-compat default export (Filter+Grid combined — kept for safety)
// ============================================================
interface StateBreederFilterAndGridProps {
  stateName: string;
  breeders: BreederRecord[];
}
export default function StateBreederFilterAndGrid({ stateName, breeders }: StateBreederFilterAndGridProps) {
  return (
    <>
      <StateBreederFilterBar stateName={stateName} breeders={breeders} />
      <StateBreederGrid stateName={stateName} breeders={breeders} />
    </>
  );
}
