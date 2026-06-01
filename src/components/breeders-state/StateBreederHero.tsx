import Link from "next/link";
import { ChevronRight, ShieldCheck, HeartPulse, ClipboardCheck } from "lucide-react";

interface StateBreederHeroProps {
  stateName: string;
  verifiedCount: number;
}

export default function StateBreederHero({
  stateName,
  verifiedCount,
}: StateBreederHeroProps) {
  return (
    <section className="bg-white pt-8 md:pt-10 pb-8 md:pb-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 md:mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-nav-text">
            <li>
              <Link
                href="/"
                className="hover:text-brand-dark transition-colors focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-4 h-4 text-brand-dark" />
            </li>
            <li>
              <Link
                href="/breeders"
                className="hover:text-brand-dark transition-colors focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 rounded"
              >
                Breeders
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-4 h-4 text-brand-dark" />
            </li>
            <li className="text-brand-dark font-semibold" aria-current="page">
              {stateName}
            </li>
          </ol>
        </nav>

        {/* H1 + sub-copy */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
            Breeders Directory
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-brand-dark">
            Dog Breeders in {stateName}
          </h1>
          <p className="mt-6 text-base md:text-lg text-nav-text leading-relaxed">
            Browse {verifiedCount} verified dog breeders in {stateName}. Every kennel is health-tested and meets Vet Your Pet&apos;s ethical standards &mdash; so you can focus on finding your perfect puppy.
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