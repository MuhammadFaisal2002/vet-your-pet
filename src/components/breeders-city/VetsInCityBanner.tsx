import Link from "next/link";
import { Stethoscope, ArrowRight } from "lucide-react";

interface VetsInCityBannerProps {
  cityName: string;
  stateName: string;
  stateSlug: string;
  citySlug: string;
}

export default function VetsInCityBanner({
  cityName,
  stateName,
  stateSlug,
  citySlug,
}: VetsInCityBannerProps) {
  return (
    <section className="bg-white py-10 md:py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Link
          href={`/veterinarians/${stateSlug}/${citySlug}`}
          className="group block bg-pet-blue-light border border-pet-stroke rounded-2xl px-6 md:px-10 py-6 md:py-8 hover:border-pet-blue transition-colors focus-visible:outline-2 focus-visible:outline-pet-blue focus-visible:outline-offset-2"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-white border border-pet-stroke flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-6 h-6 text-pet-blue" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-1">
                  Cross-Link
                </p>
                <p className="text-lg md:text-xl font-bold text-brand-dark leading-snug">
                  Need a vet too? Browse verified veterinarians in {cityName}, {stateName}.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-pet-blue flex-shrink-0">
              Browse vets in {cityName}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}