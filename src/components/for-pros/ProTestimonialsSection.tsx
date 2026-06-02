import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Since getting our Verified Badge, our inquiry volume has doubled. Families tell us they chose us specifically because they saw our health testing certifications on Vet Your Pet.",
    author: "Sarah Jenkins",
    role: "Golden Valley Doodles",
  },
  {
    quote: "Publishing articles on this platform has been a game-changer. It establishes our clinic's authority in the community and drives local traffic directly to our booking page.",
    author: "Dr. Marcus Chen",
    role: "Coastal Pet Hospital",
  }
];

export default function ProTestimonialsSection() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark mb-4">
            Trusted by top professionals.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 md:p-10 flex flex-col gap-8 justify-between shadow-xl shadow-gray-200/60 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  {/* 5 Yellow Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
                    ))}
                  </div>
                  {/* Quote Icon */}
                  <svg className="w-10 h-10 text-brand-red/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
                
                <p className="font-poppins text-lg md:text-xl text-brand-dark leading-relaxed italic font-medium">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-2">
                <div className="w-12 h-12 rounded-full bg-brand-red flex-shrink-0 flex items-center justify-center text-white font-bold font-poppins text-xl shadow-sm">
                   {t.author.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="font-poppins font-bold text-brand-dark">{t.author}</span>
                  <span className="font-poppins text-sm text-nav-text">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
