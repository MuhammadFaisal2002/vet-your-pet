"use client";

import Link from "next/link";

export default function BringingHomePuppySection() {
  return (
    <section className="w-full" style={{ background: "#F5F4F4" }}>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

        {/* Belgian Shepherd CTA Banner */}
        <div className="mb-16">
          <div
            className="relative overflow-hidden"
            style={{
              width: "100%",
              maxWidth: "1170px",
              height: "362px",
              background: "#3A7B74",
              borderRadius: "16px",
            }}
          >
            {/* Left content */}
            <div
              className="flex flex-col items-start px-6 md:px-0"
              style={{
                position: "absolute",
                left: "clamp(24px, 6.8%, 80px)",
                top: "59px",
                maxWidth: "488px",
                gap: "30px",
              }}
            >
              {/* Text block */}
              <div className="flex flex-col items-start" style={{ gap: "20px" }}>
                <h2
                  className="font-poppins text-white"
                  style={{
                    fontWeight: 500,
                    fontSize: "32px",
                    lineHeight: "140%",
                  }}
                >
                  Are You a Goldendoodle Breeder?
                </h2>
                <p
                  className="font-poppins text-white"
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  List your kennel on ThePetPros and connect with families looking for their perfect Goldendoodle puppy.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-row items-center" style={{ gap: "16px" }}>
                <Link
                  href="/claim-listing"
                  className="btn-animate font-poppins flex justify-center items-center"
                  style={{
                    padding: "16px 30px",
                    background: "#FFFFFF",
                    borderRadius: "100px",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#005950",
                    textAlign: "center",
                  }}
                >
                  List Your Kennel
                </Link>
                <Link
                  href="/claim-listing"
                  className="btn-animate font-poppins flex justify-center items-center"
                  style={{
                    padding: "16px 30px",
                    border: "2px solid #FFFFFF",
                    borderRadius: "100px",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Claim Your Listing
                </Link>
              </div>
            </div>

            {/* Dog image with oval background — positioned right, bottom-aligned */}
            <img
              src="/images/belgian-shepherd-cta-dog.png"
              alt="Goldendoodle"
              className="absolute hidden md:block"
              style={{
                height: "362px",
                width: "auto",
                right: "0px",
                bottom: "0px",
                objectFit: "contain",
                objectPosition: "bottom right",
              }}
            />

            {/* ThePetPros logo — white, positioned per Figma */}
            <img
              src="/images/thepetpros-logo-white.png"
              alt="ThePetPros"
              className="absolute hidden md:block"
              style={{
                width: "97px",
                height: "auto",
                right: "40px",
                bottom: "30px",
                zIndex: 10,
              }}
            />
          </div>
        </div>

        {/* Bringing Home Your New Puppy content */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          {/* Left — Puppy image */}
          <div className="w-full lg:w-auto flex-shrink-0">
            <img
              src="/images/bringing-home-puppy.png"
              alt="Goldendoodle puppy carrying a stick"
              className="object-cover"
              style={{
                width: "377px",
                height: "463px",
                borderRadius: "12px",
                boxShadow: "40px 40px 120px rgba(48, 56, 65, 0.05)",
              }}
            />
          </div>

          {/* Right — Text */}
          <div className="flex flex-col gap-6 flex-1">
            <h2
              className="font-poppins text-[#363941]"
              style={{
                fontWeight: 500,
                fontSize: "44px",
                lineHeight: "126%",
                letterSpacing: "-1px",
              }}
            >
              Bringing Home Your New Puppy
            </h2>
            <p
              className="font-poppins text-[#364153]"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              When the time comes to bring home your new puppy, preparation is key. Make sure you have a crate, food and water bowls, puppy-safe toys, and a designated sleeping area. Puppy-proof your home by securing loose wires, removing toxic plants, and gating off areas you&apos;d like to keep off-limits. A calm first night goes a long way.
            </p>
            <p
              className="font-poppins text-[#364153]"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              Goldendoodles thrive in loving homes that provide structure, socialization, and gentle guidance. Schedule a vet appointment within the first week, begin house training immediately, and introduce your puppy to new sights, sounds, and people gradually. The bond you build in these early weeks lasts a lifetime.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
