"use client";

const DogIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 8.5C10.5 7.1 11.6 6 13 6C14.4 6 15.5 7.1 15.5 8.5C15.5 9.9 14.4 11 13 11C11.6 11 10.5 9.9 10.5 8.5Z" fill="#BCBCBC"/>
    <path d="M7 13C7 11.3 8.3 10 10 10H16C17.7 10 19 11.3 19 13V18C19 19.7 17.7 21 16 21H10C8.3 21 7 19.7 7 18V13Z" fill="#BCBCBC"/>
    <path d="M10 21V24M16 21V24" stroke="#BCBCBC" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 13C7 13 5 12 4.5 10.5C4 9 5 7 6.5 7.5C8 8 8 10 8 10" fill="#BCBCBC"/>
    <path d="M19 13C19 13 21 12 21.5 10.5C22 9 21 7 19.5 7.5C18 8 18 10 18 10" fill="#BCBCBC"/>
  </svg>
);

const featureCards = [
  {
    title: "Appearance",
    text: "Goldendoodles are medium-to-large dogs with a soft, wavy or curly coat that comes in cream, apricot, red, chocolate, black, or parti-color. They inherit the Poodle's low-shedding coat and the Golden Retriever's expressive eyes and friendly face, giving them their signature teddy-bear look.",
  },
  {
    title: "Temperament",
    text: "Goldendoodles are friendly, gentle, and remarkably intelligent. They are eager to please, social with children and other pets, and adapt easily to new environments. Their loving, calm nature makes them excellent family dogs and popular choices for therapy and service work.",
  },
  {
    title: "Care Needs",
    text: "Goldendoodles need at least an hour of daily exercise — walks, fetch, or swimming work well. Their coat requires brushing several times a week and a professional groom every 6–8 weeks to prevent matting. Routine ear checks help prevent infections, and they thrive on consistent training and family time.",
  },
  {
    title: "Living Environment",
    text: "Goldendoodles are highly adaptable. They do well in apartments if given enough daily exercise, but truly thrive in homes with a yard where they can run and play. They form strong bonds with their families and don't do well when left alone for long stretches.",
  },
];

export default function AboutBreedSection() {
  return (
    <section className="w-full bg-white py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* Two-column top block */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col gap-6 lg:w-[48%]">
            <h2 className="text-[#25272C] font-semibold text-[32px] sm:text-[38px] leading-[120%] tracking-[-0.5px]">
              About the<br />Goldendoodle Breed
            </h2>
            <p className="text-[#25272C] font-semibold text-[13px] leading-[170%]">
              The Goldendoodle is a hybrid breed created by crossing a Golden Retriever with a Standard Poodle. This mix produces friendly, intelligent, and well-behaved dogs that make outstanding family companions, therapy dogs, and even service dogs.
            </p>
            <p className="text-[#53565A] text-[13px] leading-[170%]">
              Goldendoodles are known for their soft, teddy bear-like coats, gentle nature, and playful personalities. They bring joy and companionship to families all over the world. They thrive in homes where they can be close to their humans, play outdoors, and share in daily life. Whether you live an active lifestyle or simply want a loyal companion, the Goldendoodle is a breed that adapts beautifully.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6 lg:w-[48%] lg:pt-2">
            <p className="text-[#D93F53] font-medium italic text-[16px] leading-[150%]">
              A perfect blend of intelligence, affection, and playful energy
            </p>
            <p className="text-[#53565A] text-[13px] leading-[170%] lg:mt-auto lg:pt-16">
              Because of their gentle nature, Goldendoodles are often chosen to be therapy or service dogs. Their loyalty and responsiveness make them wonderful family companions.
            </p>
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureCards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 bg-[#F6F5F3] rounded-xl p-5"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <DogIcon />
              </div>
              <h3 className="text-[#25272C] font-semibold text-[14px] leading-[140%]">
                {card.title}
              </h3>
              <p className="text-[#53565A] text-[11.5px] leading-[170%]">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
