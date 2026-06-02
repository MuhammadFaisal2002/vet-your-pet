import Image from "next/image";
import Link from "next/link";

export default function PublishingHighlightSection() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        <div className="flex-1 flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red tracking-wide uppercase">
            Build Authority
          </span>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark leading-[1.1]">
            Publish Articles directly<br />to our community.
          </h2>
          <p className="font-poppins text-base text-nav-text leading-relaxed">
            Share your expertise on pet care, training, or breed-specific advice. Articles published by Verified Pros are featured prominently on our platform, driving targeted traffic straight to your profile.
          </p>
          
          <div className="mt-4">
            <Link
              href="/claim"
              className="btn-animate inline-flex items-center font-poppins font-medium text-sm border border-brand-dark text-brand-dark rounded-full px-8 py-3 hover:bg-brand-dark hover:text-white transition-colors"
            >
              Get Started Publishing
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full relative aspect-[4/3] max-w-md mx-auto lg:max-w-none">
          <Image
            src="/images/article-publishing.png"
            alt="Article publishing illustration"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
