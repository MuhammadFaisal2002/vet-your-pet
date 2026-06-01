import Link from "next/link";
import { MapPin, Bell } from "lucide-react";

interface CityVetsMapProps {
  cityName: string;
}

export default function CityVetsMap({ cityName }: CityVetsMapProps) {
  return (
    <section id="map-view" className="bg-white py-12 md:py-14 px-6 md:px-12 lg:px-20 scroll-mt-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
            Map View
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            See Clinics on a Map
          </h2>
        </div>

        <div className="bg-pet-bg border-2 border-dashed border-pet-stroke rounded-2xl min-h-[480px] flex flex-col items-center justify-center text-center px-6 py-12">
          <div className="w-16 h-16 rounded-full bg-white border border-pet-stroke flex items-center justify-center mb-6">
            <MapPin className="w-8 h-8 text-brand-red" aria-hidden="true" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
            Map View Coming Soon
          </h3>
          <p className="text-base text-nav-text max-w-md mb-8">
            We&apos;re working on an interactive map of all verified veterinarians in {cityName}. Want to know when it goes live?
          </p>
          <Link
            href="#claim-listing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-red text-white text-sm font-semibold hover:bg-brand-dark transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
          >
            <Bell className="w-4 h-4" aria-hidden="true" />
            Get Notified
          </Link>
        </div>
      </div>
    </section>
  );
}