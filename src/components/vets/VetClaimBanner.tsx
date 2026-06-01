"use client";

import Link from "next/link";
import { Stethoscope } from "lucide-react";

export default function VetClaimBanner(): JSX.Element {
  return (
    <section id="claim-listing" className="py-10 md:py-14 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#D93F53] rounded-3xl overflow-hidden min-h-[200px] flex items-center">

          {/* Left text content */}
          <div className="animate-on-scroll animate-fade-in-up relative z-10 flex flex-col gap-4 px-8 md:px-14 py-10 md:py-12 flex-1 max-w-[560px]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Are You a Veterinarian?
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-[420px]">
              List your clinic on Vet Your Pet and connect with pet owners actively looking for trusted care in their area.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href="/claim-listing?vertical=vet"
                className="btn-animate inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#1A1A1A] text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                List Your Clinic
              </Link>
              <Link
                href="/claim-listing?vertical=vet"
                className="btn-animate inline-flex items-center justify-center px-6 py-2.5 rounded-full border-2 border-white text-white text-sm font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Claim Your Listing
              </Link>
            </div>
          </div>

          {/* Right: decorative icon panel */}
          <div className="relative flex-shrink-0 w-[40%] hidden md:flex items-center justify-center self-stretch">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-white/10 blur-2xl scale-150"
              />
              <div className="relative w-32 h-32 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center">
                <Stethoscope className="w-16 h-16 text-white" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
