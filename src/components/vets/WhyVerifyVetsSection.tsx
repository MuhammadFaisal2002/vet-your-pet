import { Award, ShieldCheck, MessageSquareHeart } from "lucide-react";

export default function WhyVerifyVetsSection(): JSX.Element {
  return (
    <section className="bg-pet-bg py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
            Our Standard
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">
            Why Choose a Verified Vet
          </h2>
          <p className="mt-4 text-base text-nav-text">
            Every clinic listed on Vet Your Pet is reviewed against the same checklist before they go live. Here&rsquo;s what that means for your pet.
          </p>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

          <div className="flex flex-col">
            <Award className="w-10 h-10 text-brand-red mb-5" aria-hidden="true" />
            <h3 className="text-xl font-bold text-brand-dark">Licensed &amp; Accredited</h3>
            <p className="mt-3 text-base text-nav-text">
              Every clinic on Vet Your Pet has active state veterinary licensing and current good standing with the relevant veterinary board. We don&rsquo;t list anyone who can&rsquo;t prove credentials.
            </p>
          </div>

          <div className="flex flex-col">
            <ShieldCheck className="w-10 h-10 text-brand-red mb-5" aria-hidden="true" />
            <h3 className="text-xl font-bold text-brand-dark">Quality of Care Reviewed</h3>
            <p className="mt-3 text-base text-nav-text">
              We review patient outcomes, facility cleanliness standards, and continuing-education records before listing &mdash; and re-verify annually. Clinics that slip are flagged and reviewed again.
            </p>
          </div>

          <div className="flex flex-col">
            <MessageSquareHeart className="w-10 h-10 text-brand-red mb-5" aria-hidden="true" />
            <h3 className="text-xl font-bold text-brand-dark">Real Patient Reviews</h3>
            <p className="mt-3 text-base text-nav-text">
              Every review is from a verified client visit &mdash; not anonymous internet drive-bys. Clinic responses, follow-up care, and bedside manner are all part of the score you see.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
