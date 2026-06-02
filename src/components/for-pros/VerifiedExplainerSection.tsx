import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function VerifiedExplainerSection() {
  return (
    <section className="bg-pet-bg px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 w-full relative aspect-square max-w-md mx-auto lg:max-w-none">
          <Image
            src="/images/verified-badge-explainer.png"
            alt="Verified badge illustration"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red tracking-wide uppercase">
            Trust & Safety
          </span>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark leading-[1.1]">
            The Verified Badge:<br />A Symbol of Excellence
          </h2>
          <p className="font-poppins text-base text-nav-text leading-relaxed">
            Pet owners are increasingly cautious about where they find their pets and care providers. Our Verified Badge instantly communicates that you are a legitimate, ethical, and high-quality professional.
          </p>
          
          <ul className="flex flex-col gap-4 mt-2">
            {[
              "State-level license verification for Veterinarians",
              "Health testing and ethical standard checks for Breeders",
              "Priority placement in our directory search results",
              "Higher trust and conversion rates from potential clients"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-pet-green flex-shrink-0 mt-0.5" />
                <span className="font-poppins text-brand-dark text-base">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <Link
              href="/about/verification"
              className="btn-animate inline-flex items-center font-poppins font-semibold text-sm bg-brand-dark text-white rounded-full px-8 py-3 hover:opacity-90 transition-opacity"
            >
              Read our Verification Standards
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
