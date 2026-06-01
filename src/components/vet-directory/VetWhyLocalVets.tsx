interface Props {
  cityName?: string;
}

const leftItems = [
  "Compassionate service",
  "Experienced veterinarians",
  "Honest pricing",
  "The feeling of partnership in their pet's health",
];

const rightItems = [
  "Dedicated teams",
  "Clear communication",
  "A friendly, welcoming atmosphere",
];

function HeartIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 mt-0.5"
    >
      <path
        d="M2 9.50053C2.00002 8.38773 2.33759 7.30111 2.96813 6.38419C3.59867 5.46727 4.49252 4.76319 5.53161 4.36493C6.5707 3.96667 7.70616 3.89297 8.78801 4.15357C9.86987 4.41417 10.8472 4.99681 11.591 5.82453C11.6434 5.88054 11.7067 5.9252 11.7771 5.95573C11.8474 5.98626 11.9233 6.00201 12 6.00201C12.0767 6.00201 12.1526 5.98626 12.2229 5.95573C12.2933 5.9252 12.3566 5.88054 12.409 5.82453C13.1504 4.99143 14.128 4.4039 15.2116 4.14013C16.2952 3.87636 17.4335 3.94887 18.4749 4.34801C19.5163 4.74715 20.4114 5.45398 21.0411 6.37443C21.6708 7.29488 22.0053 8.38529 22 9.50053C22 11.7905 20.5 13.5005 19 15.0005L13.508 20.3135C13.3217 20.5275 13.0919 20.6994 12.834 20.8178C12.5762 20.9362 12.296 20.9984 12.0123 21.0002C11.7285 21.002 11.4476 20.9434 11.1883 20.8283C10.9289 20.7131 10.697 20.5442 10.508 20.3325L5 15.0005C3.5 13.5005 2 11.8005 2 9.50053Z"
        stroke="#D93F53"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AppreciateItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <HeartIcon />
      <span className="text-nav-text text-base font-normal leading-6">{text}</span>
    </div>
  );
}

export default function VetWhyLocalVets({ cityName }: Props) {
  const h2City = cityName ? `Why ${cityName} Pet Owners Love Local Vets` : "Why Pet Owners Love Local Vets";
  const introCity = cityName 
    ? `${cityName} is known for its strong sense of community, and veterinary clinics here`
    : "These communities are known for their strong sense of community, and veterinary clinics here";

  return (
    <section
      className="animate-on-scroll animate-fade-in-up bg-white py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Eyebrow */}
        <p className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
          Community Trust
        </p>

        {/* Heading */}
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-8">
          {h2City}
        </h2>

        {/* Intro paragraph */}
        <p className="text-nav-text text-base font-normal leading-[162%] mb-8">
          {introCity} reflect that same spirit. Families consistently recommend local vets because of their
          professionalism, kindness, and commitment to providing the highest level of veterinary
          medicine.
        </p>

        {/* Residents appreciate card */}
        <div
          className="animate-on-scroll animate-scale-in bg-pet-bg rounded-2xl px-8 pt-8 pb-8 mb-6"
        >
          {/* Card heading */}
          <h3 className="text-brand-dark text-2xl font-normal leading-8 mb-6">
            Residents appreciate:
          </h3>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              {leftItems.map((item) => (
                <AppreciateItem key={item} text={item} />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {rightItems.map((item) => (
                <AppreciateItem key={item} text={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Closing paragraph */}
        <p className="text-nav-text text-base font-normal leading-[162%]">
          Many pet parents say they feel honored to have such knowledgeable and supportive
          veterinarians in their area.
        </p>

      </div>
    </section>
  );
}