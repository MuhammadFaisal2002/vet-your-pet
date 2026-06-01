import Link from "next/link";
import Image from "next/image";

export default function BreederCTASection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-10 md:py-14">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[#D93F53] min-h-[200px] md:min-h-[220px] flex items-center">

          {/* Left content */}
          <div className="relative z-10 flex flex-col gap-5 px-8 md:px-12 py-10 md:py-12 max-w-lg">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white leading-tight">
              Are You a Breeder?
            </h2>
            <p className="font-poppins text-sm md:text-base text-white/80 leading-relaxed">
              List your kennel on ThePetPros and connect with families
              looking for their perfect Golden Retriever puppy
            </p>
            <div className="flex flex-wrap gap-3 mt-1">
              <Link
                href="/claim-listing"
                className="font-poppins font-semibold text-sm bg-white text-[#D93F53] rounded-full px-6 py-3 hover:bg-opacity-90 transition-opacity"
              >
                List Your Kennel
              </Link>
              <Link
                href="/claim-listing"
                className="font-poppins font-semibold text-sm border-2 border-white text-white rounded-full px-6 py-3 hover:bg-white/10 transition-colors"
              >
                Claim Your Listing
              </Link>
            </div>
          </div>

          {/* Right: Composite image (woman + dog + decorations baked in) */}
          <div className="absolute right-0 bottom-0 h-full w-[45%] hidden md:flex items-end justify-end">
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
