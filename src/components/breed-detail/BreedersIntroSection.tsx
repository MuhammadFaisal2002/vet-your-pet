"use client";

export default function BreedersIntroSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">

        {/* Heading */}
        <h2 className="text-center text-[#25272C] font-semibold text-[28px] sm:text-[32px] lg:text-[36px] leading-[130%] tracking-[-0.5px] max-w-[700px]">
          Find Trusted{" "}
          <span className="text-[#D93F53]">Goldendoodle Breeders</span>
          {" "}and{" "}
          <br className="hidden sm:block" />
          Healthy Puppies Across the U.S.
        </h2>

        {/* Info card */}
        <div className="w-full rounded-2xl bg-[#F3F0ED] flex flex-col sm:flex-row overflow-hidden">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-4 px-8 py-8 lg:px-10 lg:py-10">
            {/* Search icon circle */}
            <div className="w-10 h-10 rounded-full bg-[#E8E4E0] flex items-center justify-center flex-shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="5.5"
                  stroke="#53565A"
                  strokeWidth="1.5"
                />
                <path
                  d="M12.5 12.5L16 16"
                  stroke="#53565A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Question heading */}
            <p className="text-[#25272C] font-semibold text-[15px] leading-[150%]">
              Looking for a Goldendoodle breeder who raises healthy puppies with
              care and integrity?
            </p>

            {/* Body text */}
            <p className="text-[#53565A] text-[13px] leading-[160%]">
              ThePetPros.com connects you with responsible Goldendoodle breeders
              across the country who are passionate about breeding dogs for exceptional
              health, sound genetics, and well-balanced temperaments.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px bg-[#DDD9D5] self-stretch my-8" />
          <div className="sm:hidden h-px bg-[#DDD9D5] mx-8" />

          {/* Right column */}
          <div className="flex-1 flex items-center px-8 py-8 lg:px-10 lg:py-10">
            <p className="text-[#53565A] text-[13px] leading-[160%]">
              Our national directory includes{" "}
              <strong className="text-[#25272C] font-semibold">
                English Goldendoodles, Mini Goldendoodles, and Standard
                Goldendoodles,
              </strong>{" "}
              helping puppy owners find the perfect puppy that fits their family
              and lifestyle.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
