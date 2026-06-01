import Link from "next/link";
import { ChevronRight, ShieldCheck, HeartPulse, ClipboardCheck } from "lucide-react";
import { Breadcrumb } from "@/components/ui";

interface CityVetHeroProps {
  stateName: string;
  stateAbbr: string;
  stateSlug: string;
  cityName: string;
  verifiedCount: number;
  totalCount: number;
}

export default function CityVetHero({
  stateName,
  stateAbbr,
  stateSlug,
  cityName,
  verifiedCount,
  totalCount,
}: CityVetHeroProps) {
  return (
    <section className="bg-white pt-8 md:pt-10 pb-8 md:pb-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb — 4 crumbs */}
        <Breadcrumb
          className="mb-8 md:mb-10"
          items={[
            { label: "Home", href: "/" },
            { label: "Veterinarians", href: "/veterinarians" },
            { label: stateName, href: `/veterinarians/${stateSlug}` },
            { label: cityName, isActive: true },
          ]}
        />

        {/* H1 + sub-copy */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
            Veterinarians Directory
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-brand-dark">
            Veterinarians in {cityName}, {stateAbbr}
          </h1>
          <p className="mt-6 text-base md:text-lg text-nav-text leading-relaxed">
            Browse {totalCount} verified veterinarians in {cityName}, {stateName}. Every clinic is vetted for credentials, patient reviews, and quality of care.
          </p>
        </div>

        {/* Trust pills */}
        <div className="mt-8 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
            <ShieldCheck className="w-4 h-4 text-brand-red" aria-hidden="true" />
            <span className="text-sm font-semibold text-brand-dark">{verifiedCount} Verified Clinics</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
            <HeartPulse className="w-4 h-4 text-brand-red" aria-hidden="true" />
            <span className="text-sm font-semibold text-brand-dark">Licensed Veterinarians</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
            <ClipboardCheck className="w-4 h-4 text-brand-red" aria-hidden="true" />
            <span className="text-sm font-semibold text-brand-dark">Patient Reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
}