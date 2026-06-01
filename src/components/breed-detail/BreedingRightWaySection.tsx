"use client";

const breederQualities = [
  "Be transparent about their breeding dogs, including health history and genetics",
  "Provide health clearances for parent dogs",
  "Focus on raising healthy, socialized puppies",
  "Keep puppies with their mothers for at least eight weeks",
  "Offer support and guidance to puppy parents long after adoption",
  "Welcome questions from families preparing to bring home their new puppy",
];

export default function BreedingRightWaySection() {
  return (
    <section
      className="w-full py-14 lg:py-20"
      style={{ background: "linear-gradient(180deg, #FFF 0%, #F3F0ED 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 lg:gap-16">

        {/* Left column */}
        <div className="flex flex-col gap-6 lg:w-[48%]">
          <h2 className="text-[#25272C] font-semibold text-[28px] sm:text-[34px] leading-[120%] tracking-[-0.4px]">
            Raising and Breeding<br />
            Goldendoodles the Right Way
          </h2>
          <p className="text-[#25272C] font-semibold text-[13px] leading-[170%]">
            Responsible breeding begins long before a new puppy is born. Reputable Goldendoodle breeders focus on the well-being of every parent dog and raise their dogs in a loving home environment. Many are guided by structured programs such as Puppy Culture, a comprehensive curriculum that encourages early socialization, confidence, and healthy development.
          </p>
          <p className="text-[#53565A] text-[13px] leading-[170%]">
            From the first day of life, puppies are exposed to everyday sounds, textures, and interactions that help them grow into confident, well-behaved family dogs. Early experiences matter — they shape how a puppy responds to humans, children, and other dogs later in life.
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5 lg:w-[48%]">
          <p className="text-[#D93F53] font-semibold text-[15px] leading-[150%]">
            A quality Goldendoodle breeder will:
          </p>
          <ul className="flex flex-col gap-3">
            {breederQualities.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#D93F53] flex-shrink-0" />
                <span className="text-[#53565A] text-[13px] leading-[170%]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#53565A] text-[13px] leading-[170%] mt-2">
            When breeding dogs live inside a home rather than in kennels, the difference shows in the puppy's temperament, adaptability, and confidence. A puppy raised around humans and daily family activity tends to grow into a friendly, well-adjusted companion.
          </p>
        </div>

      </div>
    </section>
  );
}
