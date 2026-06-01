const features = [
  {
    iconBg: "bg-[#4158D0]",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Verified Professionals",
    desc: "All breeders and veterinarians undergo thorough verification processes",
  },
  {
    iconBg: "bg-[#3A6B4A]",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Ethical Standards",
    desc: "We partner only with professionals who meet the highest ethical standards",
  },
  {
    iconBg: "bg-brand-red",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Nationwide Coverage",
    desc: "Access to thousands of verified professionals across all 50 states",
  },
];

import Image from "next/image";

export default function WhyChooseSection() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 font-poppins font-medium text-sm text-[#4A6CF7] bg-[#EEF1FD] rounded-full px-4 py-1.5 mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Why Choose ThePetPros?
          </span>

          {/* Heading */}
          <h2 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[56px] text-brand-dark leading-[1.1] mb-6">
            Your Trusted<br />
            Resource for Pet<br />
            Care Excellence
          </h2>

          {/* Body */}
          <p className="font-poppins text-nav-text text-base leading-relaxed">
            ThePetPros.com is your trusted resource for discovering reputable breeders, local veterinarians, and national dog events — all in one place. We're committed to connecting responsible pet owners with verified professionals who share your passion for exceptional animal care.
          </p>
        </div>

        {/* Right: Feature card + cat wave illustration */}
        <div className="flex-1 relative">
          {/* Cat wave illustration — extends from card right edge outward */}
          <div className="absolute -right-80 top-1/2 -translate-y-1/2 w-[550px] h-[280px] pointer-events-none hidden lg:block z-20">
            <Image
              src="/images/cat-wave-illustration.png"
              alt=""
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>

          <div className="bg-[#F0EDE8] rounded-3xl p-8 md:p-10 flex flex-col gap-8 relative">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-5">
              {/* Large colored circle icon */}
              <div className={`w-16 h-16 rounded-full ${f.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                {f.icon}
              </div>
              {/* Text */}
              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="font-poppins font-bold text-lg text-brand-dark">
                  {f.title}
                </h3>
                <p className="font-poppins text-sm text-nav-text leading-relaxed max-w-xs">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
