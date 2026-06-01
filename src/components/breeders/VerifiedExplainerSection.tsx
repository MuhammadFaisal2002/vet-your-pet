import { HeartPulse, ShieldCheck, ClipboardCheck } from "lucide-react";

export default function VerifiedExplainerSection(): JSX.Element {
  return (
    <section className="bg-pet-bg py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
            Our Standard
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">
            Why Choose a Verified Breeder
          </h2>
          <p className="mt-4 text-base text-nav-text">
            Every breeder listed on Vet Your Pet is reviewed against the same checklist before they go live. Here&rsquo;s what that means for your puppy.
          </p>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

          <div className="flex flex-col">
            <HeartPulse className="w-10 h-10 text-brand-red mb-5" aria-hidden="true" />
            <h3 className="text-xl font-bold text-brand-dark">Health-Tested Parents</h3>
            <p className="mt-3 text-base text-nav-text">
              Every parent dog has documented health clearances appropriate to the breed &mdash; hips, eyes, heart, and genetic panels. We don&rsquo;t list breeders who skip the paperwork.
            </p>
          </div>

          <div className="flex flex-col">
            <ShieldCheck className="w-10 h-10 text-brand-red mb-5" aria-hidden="true" />
            <h3 className="text-xl font-bold text-brand-dark">Ethical Breeding Standards</h3>
            <p className="mt-3 text-base text-nav-text">
              Verified breeders cap their litter counts, socialize puppies from day one, and provide written health guarantees. Backyard operations and high-volume mills are turned away.
            </p>
          </div>

          <div className="flex flex-col">
            <ClipboardCheck className="w-10 h-10 text-brand-red mb-5" aria-hidden="true" />
            <h3 className="text-xl font-bold text-brand-dark">On-Site Facility Checks</h3>
            <p className="mt-3 text-base text-nav-text">
              Before a breeder is listed, we review their facility &mdash; in person or via verified live video &mdash; to confirm clean, humane conditions. Listings are re-checked annually.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}