"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, MapPin, ChevronRight, Phone } from "lucide-react";
import { STATES } from "@/data/states";
import { VETS } from "@/data/vets";

/**
 * EmergencyVetBand — Section #5 of /veterinarians.
 *
 * Distinct red-tinted band that lets urgency-driven visitors jump to ER vets
 * in their state without scrolling past general browse content.
 *
 * Behavior:
 *  - Headline: "Need an emergency vet right now?"
 *  - Native select for state (50 options) + red CTA → /veterinarians/[stateSlug]?service=emergency
 *  - Live preview chips for ER-equipped vets currently in our directory
 *  - "Call your nearest 24/7 ER" copy reinforces urgency
 *
 * Pure presentational client component; SSR-safe (no window access on first paint).
 */
export default function EmergencyVetBand(): JSX.Element {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState<string>("");

  // ER vets currently in the directory (capped to 4 chips so the band stays compact)
  const emergencyVets = useMemo(
    () => VETS.filter((v) => v.emergency).slice(0, 4),
    []
  );

  function handleFindER(e: React.FormEvent): void {
    e.preventDefault();
    if (!selectedState) return;
    router.push(`/veterinarians/${selectedState}?service=emergency`);
  }

  return (
    <section
      aria-labelledby="emergency-vet-heading"
      className="bg-red-50 border-y border-red-100 px-6 md:px-12 lg:px-20 py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* LEFT — headline + copy */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-3 py-1 text-xs font-bold uppercase tracking-wide mb-3">
              <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
              24/7 Emergency
            </div>
            <h2
              id="emergency-vet-heading"
              className="font-poppins font-bold text-3xl md:text-4xl text-brand-dark leading-tight"
            >
              Need an emergency vet <span className="text-brand-red">right now?</span>
            </h2>
            <p className="mt-3 text-base md:text-lg text-nav-text leading-relaxed">
              Find 24/7 emergency veterinary clinics in your state. Verified, licensed, and ready to help when every minute counts.
            </p>
          </div>

          {/* RIGHT — state quick-find form */}
          <form
            onSubmit={handleFindER}
            className="w-full lg:w-auto lg:min-w-[420px] bg-white rounded-2xl border border-red-200 shadow-sm p-5 md:p-6"
            aria-label="Find emergency vets by state"
          >
            <label
              htmlFor="emergency-state-select"
              className="block text-sm font-semibold text-brand-dark mb-2"
            >
              <MapPin className="inline w-4 h-4 mr-1 -mt-0.5 text-brand-red" aria-hidden="true" />
              Select your state
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                id="emergency-state-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="flex-1 rounded-lg border border-pet-stroke bg-white px-4 py-3 text-base text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent min-h-[44px]"
              >
                <option value="">Choose a state…</option>
                {STATES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                disabled={!selectedState}
                className="inline-flex items-center justify-center gap-1 rounded-lg bg-brand-red text-white font-semibold px-5 py-3 hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 min-h-[44px]"
              >
                Find ER Vets
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-3 text-xs text-nav-text inline-flex items-center gap-1">
              <Phone className="w-3 h-3" aria-hidden="true" />
              In a life-threatening emergency, call your nearest 24/7 ER clinic immediately.
            </p>
          </form>
        </div>

        {/* Quick-link chips for ER vets in the directory */}
        {emergencyVets.length > 0 && (
          <div className="mt-8 pt-6 border-t border-red-100">
            <p className="text-sm font-semibold text-brand-dark mb-3">
              24/7 ER clinics in our directory:
            </p>
            <ul className="flex flex-wrap gap-2">
              {emergencyVets.map((v) => (
                <li key={v.slug}>
                  <Link
                    href={`/veterinarians/${v.stateSlug}?service=emergency`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white border border-red-200 px-3 py-1.5 text-sm font-medium text-brand-dark hover:border-brand-red hover:text-brand-red transition-colors focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-red" aria-hidden="true" />
                    {v.name}
                    <span className="text-xs text-nav-text">· {v.city}, {v.stateAbbr}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
