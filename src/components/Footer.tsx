import Link from "next/link";

const navColumns = [
  {
    heading: "Discover",
    links: [
      { label: "Find Veterinarians", href: "/veterinarians" },
      { label: "Trusted Breeders", href: "/breeders" },
      { label: "Dog Shows & Events", href: "/dog-shows" },
      { label: "Browse All Breeds", href: "/breeders" },
    ],
  },
  {
    heading: "For Professionals",
    links: [
      { label: "Claim Your Listing", href: "/claim-listing" },
      { label: "Veterinarian Sign Up", href: "/claim-listing" },
      { label: "Breeder Registration", href: "/claim-listing" },
      { label: "Advertise With Us", href: "/claim-listing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog & Articles", href: "/blog" },
      { label: "Breed Guides", href: "/blog" },
      { label: "Health & Wellness", href: "/blog" },
      { label: "Training Tips", href: "/blog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/about" },
      { label: "Privacy Policy", href: "/about" },
      { label: "Terms of Service", href: "/about" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="flex flex-col gap-5 lg:max-w-[240px]">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <img
                src="/images/thepetpros-logo.png"
                alt="ThePetPros"
                className="h-[24px] w-auto brightness-0 invert"
              />
            </Link>

            <p className="font-poppins text-sm text-[#9C9EA3] leading-relaxed">
              Connecting dog owners with trusted professionals nationwide since 2020.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-poppins font-medium text-sm text-white bg-[#3A5A48] rounded-full px-5 py-2.5 hover:bg-[#4a7060] transition-colors w-fit"
            >
              Contact us
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Nav link columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {navColumns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <h4 className="font-poppins font-semibold text-xs text-[#9C9EA3] uppercase tracking-widest">
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-poppins text-sm text-[#D0D0D0] hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Contact bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#9C9EA3] hover:text-white hover:border-white/50 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#252525] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#9C9EA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-poppins text-[10px] text-[#9C9EA3] uppercase tracking-widest mb-0.5">Email Us</p>
                <p className="font-poppins text-sm text-white">support@thepetpros.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#252525] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#9C9EA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-poppins text-[10px] text-[#9C9EA3] uppercase tracking-widest mb-0.5">Call Us</p>
                <p className="font-poppins text-sm text-white">1-800-PET-PROS</p>
              </div>
            </div>

            {/* HQ */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#252525] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#9C9EA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-poppins text-[10px] text-[#9C9EA3] uppercase tracking-widest mb-0.5">Headquarters</p>
                <p className="font-poppins text-sm text-white">New York, NY</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-poppins text-xs text-[#9C9EA3]">
            © 2025 ThePetPros.com. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-brand-red" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 14s-6-3.84-6-8a4 4 0 0 1 8 0 4 4 0 0 1 8 0c0 4.16-6 8-6 8Z" />
            </svg>
            <span className="font-poppins text-xs text-[#9C9EA3]">Built with care for the pet community.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
