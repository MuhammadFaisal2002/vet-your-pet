"use client";

import { useMemo, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ChevronDown, X, List } from "lucide-react";
import type { VetRecord } from "@/data/vets";

type SortKey = "rating" | "reviews" | "name";

interface CityVetFilterBarProps {
  cityName: string;
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
    toggleVerified,
    toggleEmergency,
    setSort,
  };
}

// ============================================================
// FilterChip component
// ============================================================
function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 ${
        active
          ? "bg-brand-red text-white"
          : "bg-white border border-pet-stroke text-brand-dark hover:border-brand-red hover:text-brand-red"
      }`}
    >
      {children}
      {active && <X className="w-3.5 h-3.5" />}
    </button>
  );
}

// ============================================================
// SortDropdown component
// ============================================================
function SortDropdown({
  value,
  onChange,
}: {
  value: SortKey;
  onChange: (v: SortKey) => void;
}) {
  return (
    <div className="relative inline-flex items-center">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortKey)}
        className="appearance-none bg-white border border-pet-stroke rounded-full px-4 py-2 pr-10 text-sm font-medium text-brand-dark cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
      >
        <option value="rating">Highest Rated</option>
        <option value="reviews">Most Reviewed</option>
        <option value="name">Name A-Z</option>
      </select>
      <ChevronDown className="absolute right-3 w-4 h-4 pointer-events-none text-nav-text" />
    </div>
  );
}

// ============================================================
// Main FilterBar component
// ============================================================
export default function CityVetFilterBar({
  cityName,
  vets,
}: CityVetFilterBarProps) {
  const { filters, filtered, toggleVerified, toggleEmergency, setSort } =
    useFilterState(vets);

  return (
    <section className="bg-pet-bg pt-10 md:pt-12 pb-10 md:pb-12 px-6 md:px-12 lg:px-20 sticky top-[69px] z-30 lg:static lg:top-0 lg:z-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
              Refine
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Find a Vet in {cityName}
            </h2>
          </div>

          {/* Result count */}
          <div className="flex items-center gap-2 text-sm text-nav-text">
            <span className="font-semibold text-brand-dark">
              {filtered.length}
            </span>
            <span>
              {filtered.length === 1 ? "clinic" : "clinics"} found
            </span>
          </div>
        </div>

        {/* Filters row */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Filter chips */}
          <FilterChip active={filters.verified} onClick={toggleVerified}>
            <List className="w-3.5 h-3.5" />
            Verified
          </FilterChip>

          <FilterChip active={filters.emergency} onClick={toggleEmergency}>
            Emergency
          </FilterChip>

          {/* Open Now - visual only, TODO */}
          <div className="relative group">
            <button
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed opacity-60"
              disabled
            >
              Open Now
            </button>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-brand-dark text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-10">
              Coming soon
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-brand-dark" />
            </div>
          </div>

          {/* Sort dropdown */}
          <div className="ml-auto">
            <SortDropdown value={filters.sort} onChange={setSort} />
          </div>
        </div>
      </div>
    </section>
  );
}