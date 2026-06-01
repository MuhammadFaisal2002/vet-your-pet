"use client";

import { useState } from "react";

const thumbnails = [
  "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
  "https://images.unsplash.com/photo-1530041539828-114de669390e?w=800&q=80",
  "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80",
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80",
  "https://images.unsplash.com/photo-1625316708582-7c38734be31d?w=800&q=80",
  "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&q=80",
];

interface SpecRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  shaded?: boolean;
}

function SpecRow({ icon, label, value, shaded = false }: SpecRowProps) {
  return (
    <div
      className={`flex items-center justify-between px-2.5 py-0.5 rounded-sm ${shaded ? "bg-[#F6F7F8]" : "bg-white"}`}
    >
      <div className="flex items-center gap-2">
        <span className="flex-shrink-0 text-[#5A6376]">{icon}</span>
        <span className="text-[#5A6376] font-medium text-xs leading-[27px] tracking-[-0.4px]">
          {label}
        </span>
      </div>
      <span className="text-[#8D93A2] text-xs text-right leading-[27px]">
        {value}
      </span>
    </div>
  );
}

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(5);

  const handlePrev = () => {
    setActiveImage((prev) => (prev === 0 ? thumbnails.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImage((prev) => (prev === thumbnails.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF 0%, #F3F0ED 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        <div className="flex flex-col gap-6 w-full lg:w-[57%]">
          <div className="flex flex-col gap-0">
            <div className="flex items-end gap-5 pb-0">
              <div className="flex flex-col gap-[30px] flex-1 pb-7">
                <div className="flex items-center gap-2">
                  <span className="text-[#9C9EA3] font-medium text-[12px] leading-[126%] tracking-[-1px]">
                    Breeders
                  </span>
                  <svg width="3" height="6" viewBox="0 0 3 6" fill="none">
                    <path d="M0 0L3 3L0 6" stroke="#9C9EA3" strokeWidth="1" />
                  </svg>
                  <span className="text-[#D93F53] font-medium text-[12px] leading-[126%] tracking-[-1px]">
                    Goldendoodle
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  <h1 className="text-[28px] sm:text-[32px] font-medium leading-[126%] tracking-[-1px]">
                    <span className="text-[#363941]">Goldendoodle Breeders </span>
                    <span className="text-[#2E794D]">Across the U.S.</span>
                  </h1>
                  <p className="text-[#5A5F69] text-[12px] font-normal leading-[160%]">
                    The Goldendoodle combines the gentle, loving nature of the Golden Retriever with the intelligence and low-shedding coat of the Poodle, creating an ideal family companion.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-end items-end gap-3 self-stretch flex-shrink-0">
                <div className="flex items-center gap-1.5 px-2 py-[3px] rounded-full border border-[#F2EFEC] bg-[#F6F6F5]">
                  <div className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M7.66816 1.21647C7.69883 1.15148 7.74622 1.09677 7.80496 1.05852C7.86371 1.02027 7.93148 1 8.00063 1C8.06978 1 8.13755 1.02027 8.19629 1.05852C8.25504 1.09677 8.30243 1.15148 8.3331 1.21647L9.94995 4.65113C10.0565 4.87719 10.2137 5.07277 10.4081 5.22109C10.6026 5.3694 10.8285 5.46601 11.0664 5.50263L14.6822 6.05758C14.7507 6.06799 14.8151 6.0983 14.8681 6.14508C14.921 6.19186 14.9604 6.25324 14.9818 6.32229C15.0032 6.39133 15.0058 6.46528 14.9892 6.53577C14.9726 6.60626 14.9376 6.67048 14.888 6.72117L12.273 9.39167C12.1006 9.56792 11.9716 9.78548 11.8971 10.0256C11.8226 10.2658 11.8048 10.5213 11.8454 10.7702L12.4627 14.5433C12.4748 14.6151 12.4674 14.689 12.4414 14.7567C12.4153 14.8243 12.3717 14.8829 12.3154 14.9257C12.2592 14.9686 12.1925 14.994 12.1232 14.9991C12.0538 15.0041 11.9845 14.9886 11.9231 14.9544L8.69077 13.1721C8.47779 13.0548 8.24083 12.9935 8.00028 12.9935C7.75972 12.9935 7.52277 13.0548 7.30979 13.1721L4.07818 14.9544C4.01682 14.9884 3.94757 15.0038 3.87832 14.9986C3.80906 14.9934 3.74258 14.968 3.68642 14.9252C3.63027 14.8823 3.58671 14.8238 3.56069 14.7563C3.53467 14.6888 3.52723 14.615 3.53923 14.5433L4.15588 10.771C4.19661 10.5219 4.17896 10.2662 4.10446 10.0259C4.02995 9.78564 3.90082 9.56796 3.72821 9.39167L1.11325 6.7219C1.06327 6.67128 1.02785 6.60695 1.01103 6.53624C0.994212 6.46553 0.996666 6.3913 1.01811 6.32198C1.03956 6.25267 1.07914 6.19106 1.13234 6.14419C1.18554 6.09731 1.25023 6.06705 1.31903 6.05685L4.93421 5.50263C5.17236 5.4663 5.39854 5.36981 5.59325 5.22148C5.78797 5.07315 5.94541 4.87741 6.052 4.65113L7.66816 1.21647Z"
                        fill="#FFB900"
                      />
                    </svg>
                    <span className="text-[#101828] font-medium text-[12px]">4.8</span>
                  </div>
                  <span className="text-[#8995A6] text-[12px]">189 Owner reviews</span>
                </div>

                <div className="flex items-end">
                  <img
                    src="/images/goldendoodle-height-chart.png"
                    alt="Goldendoodle breed illustration with height measurement"
                    className="w-[220px] sm:w-[300px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-full rounded-[15px] bg-white p-5"
            style={{ boxShadow: "40px 40px 120px 0 rgba(48,56,65,0.05)" }}
          >
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-7">
              <div className="flex flex-col gap-2 flex-1">
                <SpecRow shaded label="Size" value="medium" icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.91406 5.25L1.16406 7L2.91406 8.75" stroke="#5A6376" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.25 2.91406L7 1.16406L8.75 2.91406" stroke="#5A6376" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.75 11.0859L7 12.8359L5.25 11.0859" stroke="#5A6376" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.0859 5.25L12.8359 7L11.0859 8.75" stroke="#5A6376" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /><path d="M1.16406 7H12.8307" stroke="#5A6376" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 1.16406V12.8307" stroke="#5A6376" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /></svg>} />
                <SpecRow label="Exercise" value="Up to 1 hour per day" icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#5A6376" strokeWidth="1.16667" /></svg>} />
                <SpecRow shaded label="Size of home" value="Flat/ Apartment" icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1.75 5.2474L7 1.16406L12.25 5.2474V11.6641C12.25 11.9735 12.1271 12.2702 11.9083 12.489C11.6895 12.7078 11.3928 12.8307 11.0833 12.8307H2.91667C2.60725 12.8307 2.3105 12.7078 2.09171 12.489C1.87292 12.2702 1.75 11.9735 1.75 11.6641V5.2474Z" stroke="#5A6376" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.25 12.8333V7H8.75V12.8333" stroke="#5A6376" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /></svg>} />
                <SpecRow label="Grooming" value="More than once a week" icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5" stroke="#5A6376" strokeWidth="1.16667" /></svg>} />
                <SpecRow shaded label="Coat length" value="Medium" icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="2" width="10" height="10" stroke="#5A6376" strokeWidth="1.16667" /></svg>} />
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <SpecRow label="Sheds" value="Low" icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5" stroke="#5A6376" strokeWidth="1.16667" /></svg>} />
                <SpecRow shaded label="Lifespan" value="10-15 years" icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12.1556 2.69023C11.8577 2.39215 11.5039 2.15569 11.1146 1.99436C10.7252 1.83304 10.3079 1.75 9.88643 1.75C9.46498 1.75 9.04766 1.83304 8.65831 1.99436C8.26895 2.15569 7.9152 2.39215 7.61726 2.69023L6.99893 3.30856L6.3806 2.69023C5.77878 2.08841 4.96253 1.75031 4.11143 1.75031C3.26033 1.75031 2.44408 2.08841 1.84226 2.69023C1.24044 3.29205 0.902344 4.1083 0.902344 4.9594C0.902344 5.8105 1.24044 6.62674 1.84226 7.22856L2.4606 7.8469L6.99893 12.3852L11.5373 7.8469L12.1556 7.22856C12.4537 6.93062 12.6901 6.57687 12.8515 6.18752C13.0128 5.79817 13.0958 5.38085 13.0958 4.9594C13.0958 4.53795 13.0128 4.12063 12.8515 3.73127C12.6901 3.34192 12.4537 2.98817 12.1556 2.69023Z" stroke="#5A6376" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /></svg>} />
                <SpecRow label="Vulnerable native breed" value="No" icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12.8307 7H10.4974L8.7474 12.25L5.2474 1.75L3.4974 7H1.16406" stroke="#5A6376" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" /></svg>} />
                <SpecRow shaded label="Town or country" value="Either" icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5" stroke="#5A6376" strokeWidth="1.16667" /></svg>} />
                <SpecRow label="Size of garden" value="Small/ medium garden" icon={<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5" stroke="#5A6376" strokeWidth="1.16667" /></svg>} />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pr-0 sm:pr-5">
            <div className="flex items-center gap-4 flex-wrap">
              <button className="flex items-center gap-1.5 px-6 py-3.5 rounded-full bg-[#2C2F36] text-white font-medium text-sm leading-[130%] hover:bg-[#1e2128] transition-colors">
                Search Breeders
              </button>
              <button className="flex items-center gap-1.5 pl-7 pr-4 py-3.5 rounded-full border border-[#2C2F36] text-[#2C2F36] font-medium text-sm leading-[130%] hover:bg-[#2C2F36] hover:text-white transition-colors">
                More info
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L9.85858 7.85858C9.93668 7.93668 9.93668 8.06332 9.85858 8.14142L6 12" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#trusted-clip)">
                  <path d="M10.0865 9.5L10.9958 14.1798C11.006 14.2349 10.9975 14.2916 10.9716 14.3422C10.9456 14.3927 10.9034 14.4349 10.8505 14.4629C10.7977 14.491 10.7367 14.5036 10.6758 14.4991C10.6149 14.4946 10.5569 14.4732 10.5096 14.4378L8.36096 12.9629C8.25723 12.8921 8.13122 12.8538 8.00174 12.8538C7.87226 12.8538 7.74626 12.8921 7.64253 12.9629L5.49024 14.4372C5.44301 14.4726 5.38512 14.494 5.32428 14.4985C5.26344 14.503 5.20255 14.4904 5.14972 14.4624C5.0969 14.4345 5.05466 14.3924 5.02864 14.3419C5.00262 14.2914 4.99405 14.2349 5.00408 14.1798L5.91277 9.5" stroke="#448D78" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.99446 1.58056C7.53772 0.996768 8.46228 0.996768 9.00554 1.58056C9.27711 1.87239 9.66206 2.03184 10.0604 2.01751C10.8574 1.98885 11.5111 2.64262 11.4825 3.43956C11.4682 3.83794 11.6276 4.22289 11.9194 4.49446C12.5032 5.03772 12.5032 5.96228 11.9194 6.50554C11.6276 6.77711 11.4682 7.16206 11.4825 7.56044C11.5111 8.35738 10.8574 9.01115 10.0604 8.98249C9.66206 8.96816 9.27711 9.12761 9.00554 9.41944C8.46228 10.0032 7.53772 10.0032 6.99446 9.41944C6.72289 9.12761 6.33794 8.96816 5.93956 8.98249C5.14262 9.01115 4.48885 8.35738 4.51751 7.56044C4.53184 7.16206 4.37239 6.77711 4.08056 6.50554C3.49677 5.96228 3.49677 5.03772 4.08056 4.49446C4.37239 4.22289 4.53184 3.83794 4.51751 3.43956C4.48885 2.64262 5.14262 1.98885 5.93956 2.01751C6.33794 2.03184 6.72289 1.87239 6.99446 1.58056Z" stroke="#448D78" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="trusted-clip">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="flex items-center gap-1">
                <span className="text-[#8995A6] text-xs font-normal leading-5">Trusted by</span>
                <span className="text-[#448D78] text-xs font-semibold leading-6">1000+ Families</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 w-full lg:w-[43%] items-center">
          <div className="relative w-full">
            <img
              src={thumbnails[activeImage]}
              alt="Golden Doodle"
              className="w-full h-[300px] sm:h-[380px] lg:h-[430px] object-cover rounded-xl"
              style={{ boxShadow: "40px 40px 120px 0 rgba(48,56,65,0.05)" }}
            />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3 pointer-events-none">
              <button
                onClick={handlePrev}
                className="pointer-events-auto flex-shrink-0 w-[42px] h-[42px] rounded-full bg-[#313131] flex items-center justify-center hover:bg-[#1e1e1e] transition-colors"
              >
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <path d="M24 14L17.1414 20.8586C17.0633 20.9367 17.0633 21.0633 17.1414 21.1414L24 28" stroke="white" strokeLinecap="round" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto flex-shrink-0 w-[42px] h-[42px] rounded-full bg-[#313131] flex items-center justify-center hover:bg-[#1e1e1e] transition-colors"
              >
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <path d="M18 14L24.8586 20.8586C24.9367 20.9367 24.9367 21.0633 24.8586 21.1414L18 28" stroke="white" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full overflow-x-auto pb-1">
            {thumbnails.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className="flex-shrink-0 rounded-xl overflow-hidden transition-all"
                style={{
                  width: "60px",
                  height: "60px",
                  opacity: i === activeImage ? 1 : 0.8,
                  border: i === activeImage ? "2px solid #497C67" : "2px solid transparent",
                }}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
