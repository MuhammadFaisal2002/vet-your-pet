import { CheckCircle2, TrendingUp, Star, PenTool } from "lucide-react";

const benefits = [
  {
    icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    iconBg: "bg-pet-green",
    title: "Verified Badge",
    desc: "Earn the trusted green badge that tells families you meet the highest standards of care and ethics.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    iconBg: "bg-brand-red",
    title: "Increased Traffic",
    desc: "Reach thousands of highly-intent pet owners actively searching for breeders and vets in your area.",
  },
  {
    icon: <Star className="w-6 h-6 text-white" />,
    iconBg: "bg-[#FFB900]",
    title: "Manage Reviews",
    desc: "Build your reputation. Collect, manage, and respond to reviews from your real clients.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-white" />,
    iconBg: "bg-pet-blue",
    title: "Publish Articles",
    desc: "Establish authority by publishing educational articles directly to the Vet Your Pet platform.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-pet-bg px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
            Platform Benefits
          </span>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark mb-4">
            Why join Vet Your Pet?
          </h2>
          <p className="font-poppins text-nav-text text-base max-w-2xl">
            We provide the tools you need to build trust, manage your online presence, and grow your business with responsible pet owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-2xl p-6 shadow-card border border-pet-stroke hover-lift flex flex-col gap-5">
              <div className={`w-12 h-12 rounded-full ${b.iconBg} flex items-center justify-center flex-shrink-0`}>
                {b.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-poppins font-bold text-xl text-brand-dark leading-snug">
                  {b.title}
                </h3>
                <p className="font-poppins text-sm text-nav-text leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
