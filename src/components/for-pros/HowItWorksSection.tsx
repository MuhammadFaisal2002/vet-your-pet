import { Search, ShieldCheck, Settings, Users } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-5 h-5 text-brand-dark" />,
    title: "1. Find your listing",
    desc: "Search our directory to see if your practice or kennel is already listed.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-brand-dark" />,
    title: "2. Verify ownership",
    desc: "Confirm your identity securely to unlock your profile and get the Verified badge.",
  },
  {
    icon: <Settings className="w-5 h-5 text-brand-dark" />,
    title: "3. Customize profile",
    desc: "Add your photos, hours, services, and certifications to stand out.",
  },
  {
    icon: <Users className="w-5 h-5 text-brand-dark" />,
    title: "4. Get found",
    desc: "Connect with families and manage inquiries directly through your dashboard.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
            Simple Onboarding
          </span>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark mb-4">
            How It Works
          </h2>
          <p className="font-poppins text-nav-text text-base max-w-2xl">
            Get your business online and verified in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="flex flex-col gap-4 relative">
              {/* Connector Line (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-6 w-[calc(100%+2rem)] h-[2px] bg-pet-stroke" />
              )}
              
              <div className="w-12 h-12 rounded-full bg-pet-bg border-2 border-pet-stroke flex items-center justify-center flex-shrink-0 z-10 mx-auto lg:mx-0">
                {s.icon}
              </div>
              
              <div className="flex flex-col gap-2 text-center lg:text-left">
                <h3 className="font-poppins font-bold text-xl text-brand-dark">
                  {s.title}
                </h3>
                <p className="font-poppins text-sm text-nav-text leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
