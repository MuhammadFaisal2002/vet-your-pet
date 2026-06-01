"use client";

const signsOfResponsibleBreeder = [
  "Clear and open communication",
  "Photos or videos showing how and where puppies are raised",
  "Knowledge of Goldendoodle Association standards",
  "A focus on raising puppies in a loving home",
  "References from past puppy parents and pet owners",
  "Guidance on training, feeding, and preparing for the first day home",
];

export default function ChoosingBreederSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* ── Left column ── */}
        <div className="flex flex-col gap-6 lg:w-[50%]">
          {/* Main heading */}
          <h2 className="text-[#25272C] font-semibold text-[36px] sm:text-[44px] leading-[112%] tracking-[-0.8px]">
            Choosing the Right Goldendoodle Breeder
          </h2>

          {/* Blue subheading */}
          <p className="text-[#4A7DE2] font-medium text-[15px] leading-[155%]">
            Finding the right puppy starts with finding the right breeder
          </p>

          {/* Primary paragraph */}
          <p className="text-[#25272C] text-[14px] leading-[170%]">
            A trustworthy Goldendoodle breeder will make the health, happiness, and future of their dogs the top priority. When you browse ThePetPros.com directory, you'll see some listings marked as "Verified Breeder." These are breeders who have provided documentation and have been reviewed by our team.
          </p>

          {/* Divider */}
          <hr className="border-t border-[#E0DFDD]" />

          {/* Secondary paragraph */}
          <p className="text-[#8A8A8A] text-[13px] leading-[170%]">
            Many breeders announce upcoming litters in advance. Ethical breeding takes time, so planning ahead gives families the chance to connect with the breeder, ask questions, and prepare their home for the arrival of a new pup.
          </p>
        </div>

        {/* ── Right column ── */}
        <div className="flex flex-col gap-6 lg:w-[50%]">
          {/* Section label */}
          <h3 className="text-[#25272C] font-semibold text-[20px] leading-[130%] tracking-[-0.2px]">
            Signs of a Responsible Breeder
          </h3>

          {/* Checklist */}
          <ul className="flex flex-col gap-4">
            {signsOfResponsibleBreeder.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                {/* Checkmark */}
                <span className="flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3.5 9.5L7 13L14.5 5"
                      stroke="#4A7DE2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[#25272C] text-[14px] leading-[160%]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
