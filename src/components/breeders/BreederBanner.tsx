"use client";

import Link from "next/link";
import Image from "next/image";

export default function BreederBanner() {
  return (
    <section className="py-10 md:py-14 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#D93F53] rounded-3xl overflow-hidden min-h-[200px] flex items-center">

          {/* Left text content */}
          <div className="animate-on-scroll animate-fade-in-up relative z-10 flex flex-col gap-4 px-8 md:px-14 py-10 md:py-12 flex-1 max-w-[520px]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Are You a Breeder?
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-[380px]">
              List your kennel on ThePetPros and connect with families looking for their perfect
              Golden Retriever puppy
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href="/claim-listing"
                className="btn-animate inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#1A1A1A] text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                List Your Kennel
              </Link>
              <Link
                href="/claim-listing"
                className="btn-animate inline-flex items-center justify-center px-6 py-2.5 rounded-full border-2 border-white text-white text-sm font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Claim Your Listing
              </Link>
            </div>
          </div>

          {/* Right: Composite image (woman + dog + decorations baked in) */}
          <div className="relative flex-shrink-0 w-[45%] hidden md:flex justify-end self-stretch">
            <Image
              src="/images/breeder-cta-composite.png"
              alt="Woman hugging a Golden Retriever"
              width={520}
              height={300}
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
