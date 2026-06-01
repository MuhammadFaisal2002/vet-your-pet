import Image from "next/image";
import SearchWidget from "../SearchWidget";
import { ShieldCheck, HeartPulse, ClipboardCheck } from "lucide-react";

export default function BreedersHubHero(): JSX.Element {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 pt-12 md:pt-16 pb-16 md:pb-20 overflow-visible">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-16">

        {/* LEFT: text + widget + badges */}
        <div className="flex-1 flex flex-col gap-8 py-4 md:py-8">
          <div className="flex flex-col gap-4">
            <h1
              className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.05]"
              style={{ animation: "fadeInDown 0.7s ease-out both" }}
            >
              Find a Trusted<br />Dog Breeder
            </h1>
            <p
              className="font-poppins text-base md:text-lg text-nav-text leading-relaxed max-w-md"
              style={{ animation: "fadeInUp 0.7s ease-out 0.2s both" }}
            >
              Browse verified, health-tested breeders across all 50 states. Every kennel on Vet Your Pet is reviewed for ethical standards before listing &mdash; so you can focus on finding your perfect puppy.
            </p>
          </div>

          <div style={{ animation: "fadeInUp 0.7s ease-out 0.3s both" }}>
            <SearchWidget />
          </div>

          {/* Trust badge row */}
          <div
            className="flex flex-wrap gap-3 max-w-lg"
            style={{ animation: "fadeInUp 0.7s ease-out 0.4s both" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
              <ShieldCheck className="w-4 h-4 text-brand-red" />
              <span className="text-sm font-semibold text-brand-dark">Verified in 50 States</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
              <HeartPulse className="w-4 h-4 text-brand-red" />
              <span className="text-sm font-semibold text-brand-dark">Health-Tested Parents</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-pet-stroke bg-white px-4 py-2">
              <ClipboardCheck className="w-4 h-4 text-brand-red" />
              <span className="text-sm font-semibold text-brand-dark">On-Site Facility Checks</span>
            </div>
          </div>
        </div>

        {/* RIGHT: hero image */}
        <div
          className="flex-1 relative w-full overflow-visible"
          style={{ animation: "fadeInRight 0.7s ease-out 0.2s both" }}
        >
          <Image
            src="/images/hero-image.png"
            alt="Family meeting a Goldendoodle puppy from a verified breeder"
            width={575}
            height={609}
            className="w-full h-auto rounded-t-2xl"
            style={{ borderRadius: "24px 24px 0 0" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}