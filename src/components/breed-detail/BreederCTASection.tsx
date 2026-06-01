import Link from "next/link";

export default function BreederCTASection() {
  return (
    <section className="w-full bg-[#F7F7F8] py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1170px] mx-auto">
        <div
          className="relative overflow-hidden"
          style={{
            width: "100%",
            height: "362px",
            background: "#7B93E0",
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
                List your kennel on ThePetPros and connect with families looking for their perfect Goldendoodle puppy
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
                  color: "#4A63B5",
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

          {/* Dog image — uses the goldendoodle banner dog */}
          <img
            src="/images/breeder-cta-goldendoodle.png"
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

          {/* ThePetPros logo — white, positioned per Figma (left:1033, top:312 in 1170×362 container) */}
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
    </section>
  );
}
