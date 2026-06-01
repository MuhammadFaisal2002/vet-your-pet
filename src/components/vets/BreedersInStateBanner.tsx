import Link from "next/link";
import { Dog, ArrowRight } from "lucide-react";

interface BreedersInStateBannerProps {
  stateName: string;
  stateSlug: string;
}

export default function BreedersInStateBanner({
  stateName,
  stateSlug,
}: BreedersInStateBannerProps) {
  return (
    <section className="bg-white py-10 md:py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Link
          href={`/breeders/${stateSlug}`}
          className="group block bg-pet-bg border border-pet-stroke rounded-2xl px-6 md:px-10 py-6 md:py-8 hover:border-brand-red transition-colors focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-white border border-pet-stroke flex items-center justify-center flex-shrink-0">
                <Dog className="w-6 h-6 text-brand-red" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-1">
                  Cross-Link
                </p>
                <p className="text-lg md:text-xl font-bold text-brand-dark leading-snug">
                  Looking for a breeder in {stateName}?
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red flex-shrink-0">
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