"use client";

export default function HealthGeneticsPuppyCareSection() {
  return (
    <section className="w-full bg-[#F0EFED] py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

        {/* Left — text */}
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="text-[#25272C] font-semibold text-[32px] sm:text-[38px] leading-[115%] tracking-[-0.5px]">
            Health, Genetics, and Puppy Care
          </h2>

          <p className="text-[#3E4960] text-[14px] leading-[170%]">
            The well-being of every puppy begins with healthy genetics. Ethical breeders are committed to maintaining high standards through health testing, selective breeding, and transparent communication. They care deeply about the future of each litter and the families who welcome their puppies home.
          </p>

          <p className="text-[#3E4960] text-[14px] leading-[170%]">
            Before you bring home a new puppy, ask the breeder about vaccination records, food recommendations, and what kind of socialization the puppies have received. Many breeders use structured early training routines and provide detailed guidance for continued care, potty training, and socialization.
          </p>

          <p className="text-[#3E4960] text-[14px] leading-[170%]">
            With the right preparation and support, your puppy will grow into a confident, happy companion. Good nutrition, daily play, and affection from their humans are key to their long-term health and well-being.
          </p>
        </div>

        {/* Right — dog image */}
        <div className="w-full lg:w-auto lg:flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
            alt="Healthy Goldendoodle puppy"
            className="w-full lg:w-[320px] xl:w-[360px] aspect-[4/5] object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}
