import Image from "next/image";
import Link from "next/link";

export default function ForProsHero() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 pt-12 md:pt-16 pb-16 overflow-visible">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-8 py-4 md:py-8">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red tracking-wide uppercase" style={{ animation: "fadeInDown 0.7s ease-out both" }}>
              For Professionals
            </span>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.05]" style={{ animation: "fadeInDown 0.7s ease-out both" }}>
              Grow your practice<br />or kennel.
            </h1>
            <p className="font-poppins text-base md:text-lg text-nav-text leading-relaxed max-w-md" style={{ animation: "fadeInUp 0.7s ease-out 0.2s both" }}>
              Join the nation's most trusted network of verified veterinarians and ethical dog breeders. Claim your listing or create a new one to reach thousands of pet owners today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4" style={{ animation: "fadeInUp 0.7s ease-out 0.3s both" }}>
            <Link
              href="/claim"
              className="btn-animate inline-flex items-center font-poppins font-semibold text-sm bg-brand-red text-white rounded-full px-8 py-3.5 hover:opacity-90 transition-opacity"
            >
              Claim Your Listing
            </Link>
            <Link
              href="/list-your-business"
              className="btn-animate inline-flex items-center font-poppins font-medium text-sm border border-brand-dark text-brand-dark rounded-full px-8 py-3.5 hover:bg-brand-dark hover:text-white transition-colors"
            >
              List New Business
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full" style={{ animation: "fadeInRight 0.7s ease-out 0.2s both" }}>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-pet-stroke">
            <Image
              src="/images/for-pros-hero.png"
              alt="Veterinarian and breeder with a dog"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
