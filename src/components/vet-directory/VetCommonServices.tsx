const services = [
  "Wellness exams for dogs, cats, and puppies",
  "Vaccinations and parasite prevention",
  "Surgery and dental procedures",
  "Diagnostics, X-rays, and lab testing",
  "Behavioral and nutritional consultations",
  "Senior pet care and chronic condition management",
  "Emergency or urgent care options",
  "Spay/neuter surgeries",
  "Puppy and kitten first-year care packages",
];

function ActivityIcon() {
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
        d="M22 12H19.52C19.083 11.9991 18.6577 12.1413 18.3091 12.405C17.9606 12.6686 17.708 13.0392 17.59 13.46L15.24 21.82C15.2249 21.8719 15.1933 21.9175 15.15 21.95C15.1067 21.9825 15.0541 22 15 22C14.9459 22 14.8933 21.9825 14.85 21.95C14.8067 21.9175 14.7751 21.8719 14.76 21.82L9.24 2.18C9.22485 2.12807 9.19327 2.08246 9.15 2.05C9.10673 2.01754 9.05409 2 9 2C8.94591 2 8.89327 2.01754 8.85 2.05C8.80673 2.08246 8.77515 2.12807 8.76 2.18L6.41 10.54C6.29246 10.9592 6.04138 11.3285 5.69486 11.592C5.34835 11.8555 4.92532 11.9988 4.49 12H2"
        stroke="#509874"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function VetCommonServices() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Eyebrow */}
        <p className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
          Services Offered
        </p>

        {/* Heading — Poppins bold, design tokens */}
        <h2 className="animate-on-scroll animate-fade-in-up font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-6">
          Common Services Offered by Local Clinics
        </h2>

        {/* Intro paragraph */}
        <p className="animate-on-scroll animate-fade-in-up delay-200 text-nav-text text-base font-normal leading-[162%] mb-6">
          The vet listings on this page include practices that provide a complete
          selection of veterinary services, such as:
        </p>

        {/* Services card */}
        <div className="animate-on-scroll animate-scale-in bg-pet-bg rounded-[16px] px-8 pt-8 pb-0 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] mb-6">
          <ul className="stagger-children flex flex-col gap-4 pb-8">
            {services.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <ActivityIcon />
                <span className="text-nav-text text-base font-normal leading-6">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing paragraph */}
        <p className="text-nav-text text-base font-normal leading-[162%]">
          These services ensure your pet receives thorough and professional care from a clinic you can trust.
        </p>

      </div>
    </section>
  );
}