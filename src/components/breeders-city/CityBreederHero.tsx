import Link from "next/link";
import { ChevronRight, ShieldCheck, HeartPulse, ClipboardCheck } from "lucide-react";
import { Breadcrumb } from "@/components/ui";

interface CityBreederHeroProps {
  stateName: string;
  stateAbbr: string;
  stateSlug: string;
  cityName: string;
  verifiedCount: number;
  totalCount: number;
}

export default function CityBreederHero({
  stateName,
  stateAbbr,
  stateSlug,
  cityName,
  verifiedCount,
  totalCount,
}: CityBreederHeroProps) {
  return (
    <section className="bg-white pt-8 md:pt-10 pb-8 md:pb-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb — 4 crumbs */}
        <Breadcrumb
          className="mb-8 md:mb-10"
          items={[
            { label: "Home", href: "/" },
            { label: "Breeders", href: "/breeders" },
            { label: stateName, href: `/breeders/${stateSlug}` },
            { label: cityName, isActive: true },
          ]}
        />

        {/* H1 + sub-copy */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
            Breeders Directory
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-brand-dark">
            Dog Breeders in {cityName}, {stateAbbr}
          </h1>
          <p className="mt-6 text-base md:text-lg text-nav-text leading-relaxed">
            Browse {totalCount} dog breeders in {cityName}, {stateName} &mdash; {verifiedCount} verified by Vet Your Pet. Every kennel meets our ethical, health-tested standards so you can focus on finding your perfect puppy.
          </p>
        </div>

        {/* Trust pills */}
        <div className="mt-8 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
            <ShieldCheck className="w-4 h-4 text-brand-red" aria-hidden="true" />
            <span className="text-sm font-semibold text-brand-dark">{verifiedCount} Verified Kennels</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
            <HeartPulse className="w-4 h-4 text-brand-red" aria-hidden="true" />
            <span className="text-sm font-semibold text-brand-dark">Health-Tested Parents</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
            <ClipboardCheck className="w-4 h-4 text-brand-red" aria-hidden="true" />
            <span className="text-sm font-semibold text-brand-dark">On-Site Facility Checks</span>
          </div>
        </div>

      </div>
    </section>
  );
}