export default function VetExpectSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[1170px] mx-auto px-6 lg:px-8 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[75px] items-start">

          {/* Left: image */}
          <div className="animate-on-scroll animate-fade-in-left w-full lg:w-[520px] flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/26cb4311751e1e665e2ba763cfef0aea11ab9ed9?width=1040"
              alt="St. Augustine street scene"
              className="w-full lg:w-[520px] h-[320px] lg:h-[480px] object-cover rounded-xl"
            />
          </div>

          {/* Right: text content */}
          <div className="animate-on-scroll animate-fade-in-right flex flex-col gap-8 flex-1 min-w-0">
            {/* Heading */}
            <h2 className="text-[#25272C] text-[32px] lg:text-[44px] font-medium leading-[126%] tracking-[-0.025em]">
              What You Can Expect From St. Augustine Veterinarians
            </h2>

            {/* Paragraphs */}
            <div className="flex flex-col gap-8">
              <p className="text-[#364153] text-base font-normal leading-[162%]">
                Veterinary medicine in St. Augustine is known for compassionate care,
                warm communication, and a strong dedication to animals. Many
                practices are long-standing members of the community and strive to
                build lasting relationships with their clients and patients.
              </p>

              <p className="text-[#364153] text-base font-normal leading-[162%]">
                From your very first visit, most clinics offer a welcoming environment
                where all the staff are friendly, patient, and committed to providing the
                best care possible. The moment you walk in, your pet is greeted with
                kindness and treated like part of the family.
              </p>

              <p className="text-[#364153] text-base font-normal leading-[162%]">
                These local vets are honored to serve the pets of St. Augustine and
                take pride in offering a full range of medical services supported by
                experienced veterinarians and techs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}