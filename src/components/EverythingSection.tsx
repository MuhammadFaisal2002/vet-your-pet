import Link from "next/link";
import Image from "next/image";

function ArrowButton({
  bgColor,
  label,
  href,
}: {
  bgColor: string;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 bg-white rounded-full pl-2 pr-5 py-2 hover:shadow-md transition-shadow w-fit"
    >
      <span
        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${bgColor}`}
      >
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
      <span className="font-poppins font-medium text-sm text-brand-dark">
        {label}
      </span>
    </Link>
  );
}

export default function EverythingSection() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Heading Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[60px] text-brand-dark leading-[1.1] max-w-xl">
            Everything You<br />
            Need in{" "}
            <span className="text-brand-red">One Place</span>
          </h2>
          <p className="font-poppins text-nav-text text-sm md:text-base leading-relaxed md:text-right max-w-xs">
            Your comprehensive directory for<br className="hidden md:block" />
            all things dog-related
          </p>
        </div>

        {/* Top Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Breeders Card */}
          <div className="rounded-3xl overflow-hidden relative flex flex-col justify-between min-h-[280px] md:min-h-[320px]" style={{ backgroundColor: "#F5EEE3" }}>
            <div className="p-7 pb-0 flex flex-col gap-5 z-10 relative">
              {/* Icons */}
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-brand-red" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm15 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-5.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm11 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12 21c-3.5 0-7-1.5-7-4.5 0-2 2-3.5 5-3.5h4c3 0 5 1.5 5 3.5 0 3-3.5 4.5-7 4.5z"/>
                </svg>
                <svg className="w-7 h-7 text-brand-red" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="10" cy="9" r="3"/>
                  <circle cx="22" cy="9" r="3"/>
                  <ellipse cx="16" cy="19" rx="7" ry="5"/>
                  <path d="M9 14c-3 1-5 3-5 5 0 2 2 4 5 4"/>
                  <path d="M23 14c3 1 5 3 5 5 0 2-2 4-5 4"/>
                </svg>
              </div>

              <h3 className="font-poppins font-bold text-3xl md:text-4xl text-brand-dark leading-tight">
                Find Trusted<br />Breeders
              </h3>

              <ArrowButton bgColor="bg-brand-red" label="Explore Now" href="/breeders" />
            </div>

            {/* Image — positioned bottom-right */}
            <div className="absolute right-0 bottom-0 h-full w-[55%] pointer-events-none">
              <Image
                src="/images/breeders-cat-puppy.png"
                alt="Cat and Yorkie puppy"
                fill
                className="object-cover object-left-top"
              />
            </div>
          </div>

          {/* Vets Card */}
          <div className="rounded-3xl overflow-hidden relative flex flex-col justify-between min-h-[300px] md:min-h-[360px]" style={{ backgroundColor: "#D5EDDA" }}>
            <div className="p-7 pb-0 flex flex-col gap-5 z-10 relative">
              {/* Paw icon */}
              <svg className="w-7 h-7 text-[#4A7A5A]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm15 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-5.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm11 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12 21c-3.5 0-7-1.5-7-4.5 0-2 2-3.5 5-3.5h4c3 0 5 1.5 5 3.5 0 3-3.5 4.5-7 4.5z"/>
              </svg>

              <h3 className="font-poppins font-bold text-3xl md:text-4xl text-brand-dark leading-tight">
                Locate<br />Veterinarians
              </h3>

              <ArrowButton bgColor="bg-[#3A6B4A]" label="Explore Now" href="/veterinarians" />
            </div>

            {/* Image — right side, full height */}
            <div className="absolute right-0 bottom-0 h-full w-[55%] pointer-events-none">
              <Image
                src="/images/vet-with-dog.png"
                alt="Veterinarian holding white Pomeranian"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Dog Shows Full-Width Card */}
        <div
          className="rounded-3xl overflow-hidden relative flex flex-col md:flex-row items-center min-h-[180px] md:min-h-[200px]"
          style={{ backgroundColor: "#D9E8F8" }}
        >
          {/* Left: Text */}
          <div className="p-7 md:p-10 flex flex-col gap-3 z-10 relative flex-shrink-0 md:max-w-[300px]">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark leading-tight">
              Upcoming Dog Shows
            </h3>
            <p className="font-poppins text-sm text-nav-text leading-relaxed">
              Browse national and local AKC-sanctioned
              dog shows and competitions
            </p>
          </div>

          {/* Center: Dogs lineup image */}
          <div className="flex-1 flex items-end justify-center overflow-hidden self-stretch relative min-h-[200px]">
            <Image
              src="/images/dog-shows-lineup.png"
              alt="Dog show lineup - various breeds"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Right: Button */}
          <div className="p-7 md:p-10 flex-shrink-0 z-10">
            <ArrowButton bgColor="bg-[#1E3A5F]" label="View Calendar" href="/dog-shows" />
          </div>
        </div>
      </div>
    </section>
  );
}
