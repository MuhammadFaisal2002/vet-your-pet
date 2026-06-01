import Link from "next/link";

const demoPages = [
  { label: "Home", href: "/" },
  { label: "Breeders Directory", href: "/breeders" },
  { label: "Goldendoodle Breed Page", href: "/breeds/goldendoodle" },
  { label: "Breeder Profile (Golden Valley Doodles)", href: "/breeder/golden-valley-doodles" },
  { label: "Veterinarians (St. Augustine, FL)", href: "/veterinarians/fl/st-augustine" },
  { label: "Dog Shows", href: "/dog-shows" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Claim Listing", href: "/claim-listing" },
];

export default function Placeholder({ title }: { title: string }) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-16">
      <h1 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark mb-4">
        {title}
      </h1>
      <p className="font-poppins text-nav-text text-lg mb-10">
        This page is coming soon.
      </p>

      {/* Quick navigation to all demo pages */}
      <div className="w-full max-w-md">
        <h2 className="font-poppins font-semibold text-sm text-gray-400 uppercase tracking-wider mb-4 text-center">
          Browse Demo Pages
        </h2>
        <div className="flex flex-col gap-2">
          {demoPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="btn-animate font-poppins text-sm text-[#25272C] bg-white border border-gray-200 rounded-xl px-5 py-3 hover:border-brand-red hover:text-brand-red transition-colors flex items-center justify-between group"
            >
              <span>{page.label}</span>
              <svg className="w-4 h-4 text-gray-300 group-hover:text-brand-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
