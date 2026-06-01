import Link from "next/link";
import { MapPin } from "lucide-react";
import type { BreederRecord } from "@/data/breeders";

interface BrowseByCitySectionProps {
  stateName: string;
  stateSlug: string;
  topCities: string[];
  breeders: BreederRecord[];
}

function citySlug(c: string) {
  return c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function BrowseByCitySection({
  stateName,
  stateSlug,
  topCities,
  breeders,
}: BrowseByCitySectionProps) {
  const counts = topCities
    .map((city) => ({
      city,
      count: breeders.filter((b) => b.city === city).length,
    }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count);

  if (counts.length === 0) return null;

  return (
    <section className="bg-white py-12 md:py-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
            By City
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            Browse Breeders by City in {stateName}
          </h2>
          <p className="mt-4 text-base text-nav-text max-w-2xl">
            Pick a city to see verified breeders nearby.
          </p>
        </div>

        <ul className="flex flex-wrap gap-3">
          {counts.slice(0, 12).map(({ city, count }) => (
            <li key={city}>
              <Link
                href={`/breeders/${stateSlug}/${citySlug(city)}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-pet-stroke bg-white text-sm font-semibold text-brand-dark hover:bg-pet-bg hover:border-brand-red transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
              >
                <MapPin className="w-4 h-4 text-brand-red" aria-hidden="true" />
                <span>{city}</span>
                <span className="text-nav-text">({count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}