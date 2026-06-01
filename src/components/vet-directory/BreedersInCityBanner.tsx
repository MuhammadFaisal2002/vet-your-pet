import Link from "next/link";
import { Dog, ArrowRight } from "lucide-react";

interface BreedersInCityBannerProps {
  cityName: string;
  stateSlug: string;
  citySlug: string;
}

export default function BreedersInCityBanner({
  cityName,
  stateSlug,
  citySlug,
}: BreedersInCityBannerProps) {
  return (
    <section className="bg-brand-red px-6 md:px-12 lg:px-20 py-10 md:py-12">
      <div className="max-w-7xl mx-auto">
        <Link
          href={`/breeders/${stateSlug}/${citySlug}`}
          className="group block bg-white rounded-2xl px-6 md:px-10 py-6 md:py-8 hover:scale-[1.01] transition-transform focus-visible:outline-2 focus-visible:outline-brand-dark focus-visible:outline-offset-4"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                <Dog className="w-6 h-6 text-brand-red" aria-hidden="true" />
              </span>
              <div>
                <p className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-1 tracking-wide uppercase">
                  Related
                </p>
                <p className="font-poppins text-lg md:text-xl font-bold text-brand-dark leading-snug">
                  Dog Breeders in {cityName}
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 font-poppins text-sm font-semibold text-brand-red flex-shrink-0">
              Browse breeders
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}