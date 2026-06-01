const expectItems = [
  "Friendly staff ready to help from the moment you call",
  "Clear pricing and treatment explanations",
  "A compassionate veterinarian who takes time to understand your pet's needs",
  "A warm atmosphere to help your pet stay calm",
  "Efficient visits with minimal wait times",
];

function NumberedItem({ number, text }: { number: number; text: string }) {
  return (
    <li className="flex items-center gap-4 bg-white border border-[#E8EAED] rounded-xl px-5 py-4">
      {/* Blue number badge */}
      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-red text-white text-sm font-semibold flex items-center justify-center">
        {number}
      </span>
      {/* Text */}
      <span className="text-nav-text text-base font-normal leading-6">
        {text}
      </span>
    </li>
  );
}

export default function VetSmoothFirstVisit() {
  return (
    <section
      className="animate-on-scroll animate-fade-in-up bg-white py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Eyebrow */}
        <p className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
          What to Expect
        </p>

        {/* Heading */}
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-8">
          A Smooth and Stress-Free First Visit
        </h2>

        {/* Intro paragraph */}
        <p className="text-nav-text text-base font-normal leading-[162%] mb-8">
          If you're scheduling an appointment for the first time, most clinics strive to keep the
          process simple and welcoming. You can expect:
        </p>

        {/* Numbered list */}
        <ul className="stagger-children flex flex-col gap-3 mb-8">
          {expectItems.map((item, i) => (
            <NumberedItem key={i} number={i + 1} text={item} />
          ))}
        </ul>

        {/* Closing paragraph */}
        <p className="text-nav-text text-base font-normal leading-[162%]">
          Many clinics even offer online forms or phone check-in to make your first visit easier.
          New clients often leave feeling relieved and confident that their pets will receive
          wonderful care for years to come.
        </p>

      </div>
    </section>
  );
}