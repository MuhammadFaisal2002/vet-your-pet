interface Props {
  cityName?: string;
}

function StethoscopeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path
        d="M4.8 2.4A2.4 2.4 0 002.4 4.8v4.8a7.2 7.2 0 007.2 7.2 7.2 7.2 0 007.2-7.2V4.8A2.4 2.4 0 0014.4 2.4M9.6 16.8v2.4a4.8 4.8 0 004.8 4.8 4.8 4.8 0 004.8-4.8V18M21.6 15.6a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path
        d="M12 2l2.4 4.8 5.6.8-4 3.8.94 5.46L12 14.5l-4.94 2.36L8 11.4 4 7.6l5.6-.8L12 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function VetCtaSection({ cityName }: Props) {
  const locationRef = cityName || "your local community";

  return (
    <section
      className="animate-on-scroll animate-scale-in bg-white py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Branded card container */}
        <div className="relative overflow-hidden rounded-3xl bg-brand-red px-8 py-16 md:px-16 md:py-20">
          
          {/* Decorative paw icon in background */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 opacity-[0.08] pointer-events-none">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
              <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-8 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
            </svg>
          </div>

          {/* Content wrapper */}
          <div className="relative z-10 text-center">
            
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-white/80 mb-4 tracking-wide uppercase mx-auto">
              Ready to Book
            </p>

            {/* H2 — Focal point */}
            <h2 className="font-poppins font-bold text-3xl md:text-5xl text-white mb-8 max-w-3xl mx-auto">
              Find Your Perfect Vet in {cityName || "Your Area"}
            </h2>

            {/* Body copy — white text */}
            <p className="text-white/90 text-base font-normal leading-[162%] mb-10 max-w-2xl mx-auto">
              Whether you need a routine checkup for your dog, dental care for your cat, preventive
              treatment for your puppy, or guidance from a veterinarian you can trust,{" "}
              {locationRef} has many options ready to serve your family.
            </p>

            {/* CTAs — Two buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              
              {/* Primary: Browse All Clinics — white solid */}
              <button className="btn-animate flex items-center gap-2 bg-white text-brand-red text-base font-medium px-6 py-3 rounded-full hover:scale-105 transition-transform">
                <StethoscopeIcon />
                Browse All Clinics
              </button>

              {/* Secondary: Claim Your Listing — white outline */}
              <button className="btn-animate flex items-center gap-2 border-2 border-white text-white text-base font-medium px-6 py-3 rounded-full hover:bg-white hover:text-brand-red transition-colors">
                <BadgeIcon />
                Claim Your Listing
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}