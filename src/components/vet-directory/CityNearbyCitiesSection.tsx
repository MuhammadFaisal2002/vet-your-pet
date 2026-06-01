import Link from "next/link";
import type { StateRecord } from "@/data/states";
import { getVetsByCity } from "@/data/vets";

function citySlug(c: string): string {
  return c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

interface CityNearbyCitiesSectionProps {
  state: StateRecord;
  currentCitySlug: string;
}

export default function CityNearbyCitiesSection({
  state,
  currentCitySlug,
}: CityNearbyCitiesSectionProps) {
  // Get other cities from topCities (exclude current city, show up to 8)
  const otherCities = state.topCities
    .filter((c) => citySlug(c) !== currentCitySlug)
    .slice(0, 8);

  if (otherCities.length === 0) return null;

  return (
    <section className="bg-pet-bg py-12 md:py-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-red mb-3">
            Explore Nearby
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            Other Cities in {state.name}
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {otherCities.map((city) => {
            const slug = citySlug(city);
            const vetCount = getVetsByCity(state.slug, slug).length;
            
            return (
              <Link
                key={slug}
                href={`/veterinarians/${state.slug}/${slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pet-stroke text-brand-dark text-sm font-semibold hover:border-brand-red hover:text-brand-red transition-colors focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
              >
                <span>{city}</span>
                {vetCount > 0 && (
                  <span className="text-xs text-nav-text">
                    ({vetCount})
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}