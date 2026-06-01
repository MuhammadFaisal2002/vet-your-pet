import Link from "next/link";

export default function CompareHero() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF 0%, #F3F0ED 100%)" }}
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 flex flex-col gap-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/breeders"
                className="text-[#9C9EA3] hover:text-brand-dark font-medium text-xs transition-colors"
              >
                Breeders
              </Link>
            </li>
            <li aria-hidden="true">
              <svg width="3" height="6" viewBox="0 0 3 6" fill="none">
                <path d="M0 0L3 3L0 6" stroke="#9C9EA3" strokeWidth="1" />
              </svg>
            </li>
            <li>
              <span className="text-brand-red font-medium text-xs">Compare</span>
            </li>
          </ol>
        </nav>

        {/* Main heading — matches BreedersHubHero / VetsHubHero canonical pattern */}
        <div className="flex flex-col gap-4">
          <h1
            className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.05]"
            style={{ animation: "fadeInDown 0.7s ease-out both" }}
          >
            Compare Dog Breeds<br />Side by Side
          </h1>
          <p
            className="font-poppins text-base md:text-lg text-nav-text leading-relaxed max-w-md"
            style={{ animation: "fadeInUp 0.7s ease-out 0.2s both" }}
          >
            Side-by-side traits, temperament, and care needs. Find the perfect match for your lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
}
