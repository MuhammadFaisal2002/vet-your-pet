import Image from "next/image";
import SearchWidget from "./SearchWidget";

export default function Hero() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 pt-12 md:pt-16 pb-0 overflow-visible">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-16">
        {/* Left: Text + Search Widget */}
        <div className="flex-1 flex flex-col gap-8 py-4 md:py-8">
          {/* Headline */}
          <div className="flex flex-col gap-4">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.05]" style={{ animation: "fadeInDown 0.7s ease-out both" }}>
              Find the right breeder,<br />
              vet, and breed for you.
            </h1>
            <p className="font-poppins text-base md:text-lg text-nav-text leading-relaxed max-w-md" style={{ animation: "fadeInUp 0.7s ease-out 0.2s both" }}>
              A trusted directory connecting families with verified breeders and veterinarians across all 50 states &mdash; plus the breed guides to help you choose your perfect match.
            </p>
          </div>

          {/* Search Widget */}
          <div style={{ animation: "fadeInUp 0.7s ease-out 0.3s both" }}>
            <SearchWidget />
          </div>
        </div>

        {/* Right: Image — dog paws extend beyond the rounded card */}
        <div className="flex-1 relative w-full overflow-visible" style={{ animation: "fadeInRight 0.7s ease-out 0.2s both" }}>
          <Image
            src="/images/hero-image.png"
            alt="Man with Goldendoodle"
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
