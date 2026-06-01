interface Props {
  cityName?: string;
}

export default function VetCompassionateTeams({ cityName }: Props) {
  const communityName = cityName || "your community";
  const practiceName = cityName || "local veterinary practice";

  return (
    <section
      className="animate-on-scroll animate-fade-in-up bg-white py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Eyebrow */}
        <p className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
          Compassionate Care
        </p>

        {/* Heading */}
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-8">
          Compassionate Teams Who Treat Your Pets Like Family
        </h2>

        {/* Paragraphs */}
        <div className="flex flex-col gap-6">
          <p className="text-nav-text text-base font-normal leading-[162%]">
            Pet parents across the {communityName} often praise local veterinarians for their
            dedication, compassion, and warm approach. Many practices have techs and staff who have
            been with the clinic for years—creating familiar faces and a comfortable environment for
            repeat visits.
          </p>

          <p className="text-nav-text text-base font-normal leading-[162%]">
            Testimonials often mention how impressed families are by the communication, kindness,
            and attention their pets receive. People frequently share that they felt grateful for
            the time veterinarians spent explaining treatments and answering questions.
          </p>

          <p className="text-nav-text text-base font-normal leading-[162%]">
            The goal of every {practiceName} is to create a heartfelt,
            trust-filled experience for both clients and their animals.
          </p>
        </div>

      </div>
    </section>
  );
}