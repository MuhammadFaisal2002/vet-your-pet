"use client";

const popularAreas = [
  "Goldendoodle Breeders in Florida",
  "Goldendoodle Breeders in Texas",
  "Goldendoodle Breeders in California",
  "Goldendoodle Breeders in New York",
  "Goldendoodle Breeders in Georgia",
  "Goldendoodle Breeders in Ohio",
  "Goldendoodle Breeders in North Carolina",
  "Goldendoodle Breeders in Pennsylvania",
];

// 3 columns × 4 rows = 12 state cards matching the Figma grid layout
const stateCards = [
  "California",
  "Texas",
  "Florida",
  "New York",
  "Georgia",
  "Ohio",
  "Pennsylvania",
  "North Carolina",
  "Virginia",
  "Michigan",
  "Washington",
  "Colorado",
];

const PinIcon = () => (
  <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
    <path
      d="M8 4.00005C8 6.49658 5.2305 9.09661 4.3005 9.89962C4.21386 9.96477 4.1084 10 4 10C3.8916 10 3.78614 9.96477 3.6995 9.89962C2.7695 9.09661 0 6.49658 0 4.00005C0 2.93917 0.421427 1.92174 1.17157 1.17159C1.92172 0.421433 2.93913 0 4 0C5.06087 0 6.07828 0.421433 6.82843 1.17159C7.57857 1.92174 8 2.93917 8 4.00005Z"
      stroke="#46867F"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.00078 5.49851C4.82921 5.49851 5.50078 4.82693 5.50078 3.99849C5.50078 3.17005 4.82921 2.49847 4.00078 2.49847C3.17235 2.49847 2.50078 3.17005 2.50078 3.99849C2.50078 4.82693 3.17235 5.49851 4.00078 5.49851Z"
      stroke="#46867F"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className="flex-shrink-0"
  >
    <path
      d="M4.16797 10H15.8346"
      stroke="#46867F"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 4.16797L15.8333 10.0013L10 15.8346"
      stroke="#46867F"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function FindBreedersNearYouSection() {
  return (
    <section className="w-full bg-[#F7F7F8] py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="text-[#25272C] font-semibold text-[32px] sm:text-[40px] lg:text-[46px] leading-[112%] tracking-[-0.8px]">
            Find Goldendoodle Breeders Near You
          </h2>
          <p className="text-[#53565A] text-[14px] leading-[165%] max-w-[560px]">
            Use ThePetPros.com directory to explore Goldendoodle breeders by state or city
          </p>
        </div>

        {/* Popular Search Areas pills */}
        <div className="flex flex-col gap-3">
          <span className="text-[#8A8A8A] font-medium text-[13px] leading-[150%]">
            Popular Search Areas:
          </span>
          <div className="flex flex-wrap gap-2">
            {popularAreas.map((area) => (
              <a
                key={area}
                href="#"
                className="px-4 py-2 rounded-full border border-[#DDDCDA] bg-white text-[#25272C] text-[12px] font-medium leading-normal hover:bg-[#F3F2F0] hover:border-[#C8C7C4] transition-colors whitespace-nowrap"
              >
                {area}
              </a>
            ))}
          </div>
        </div>

        {/* State link cards — 3-col grid matching Figma */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stateCards.map((state) => (
            <a
              key={state}
              href="#"
              className="flex items-center justify-between px-6 py-6 rounded-lg border border-[#DFE4EB] bg-[#F5F7F9] hover:bg-white hover:border-[#46867F] hover:shadow-sm transition-all group"
            >
              {/* Left: icon + text */}
              <div className="flex items-center gap-2.5">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <PinIcon />
                    <span className="text-[#46867F] font-medium text-[14px] leading-normal">
                      {state}
                    </span>
                  </div>
                  <span className="text-[#3E4960] font-normal text-[14px] leading-normal">
                    Goldendoodle Breeders
                  </span>
                </div>
              </div>

              {/* Right: arrow */}
              <ArrowIcon />
            </a>
          ))}
        </div>

        {/* View All States text link */}
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-[7px] text-[#155DFC] font-normal text-[16px] leading-6 hover:underline transition-colors"
          >
            View All States
            <svg width="4" height="8" viewBox="0 0 4 8" fill="none">
              <path d="M0 0L4 4L0 8" stroke="#155DFC" strokeWidth="1" />
            </svg>
          </a>
        </div>

        {/* Bottom paragraph */}
        <p className="text-center text-[#B6BFCC] font-normal text-[16px] leading-6 max-w-[790px] mx-auto">
          Each listing includes breeder details, photos, and contact options. Verified breeders are marked clearly so families can feel confident when choosing where to find their next puppy.
        </p>

      </div>
    </section>
  );
}
