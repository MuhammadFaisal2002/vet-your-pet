import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic Listing",
    price: "Free",
    desc: "Get found in our directory with a standard profile.",
    features: [
      "Standard directory listing",
      "Business name & address",
      "Contact information",
    ],
    buttonText: "Claim Free Listing",
    buttonHref: "/claim",
    highlight: false,
  },
  {
    name: "Verified Pro",
    price: "$29",
    period: "/month",
    desc: "Build trust with the Verified Badge and manage your reputation.",
    features: [
      "Everything in Basic",
      "Verified Green Badge",
      "Reply to client reviews",
      "Publish educational articles",
      "Priority in search results",
    ],
    buttonText: "Become Verified",
    buttonHref: "/pricing",
    highlight: true,
  },
  {
    name: "Featured Pro",
    price: "$79",
    period: "/month",
    desc: "Maximum visibility and lead generation for your business.",
    features: [
      "Everything in Verified",
      "Featured placement on Homepage",
      "Featured placement on State pages",
      "Advanced analytics dashboard",
      "Dedicated account support",
    ],
    buttonText: "View Featured Plan",
    buttonHref: "/pricing",
    highlight: false,
  },
];

export default function PricingTeaserSection() {
  return (
    <section className="bg-pet-bg px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 items-center">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
            Plans & Pricing
          </span>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark mb-4">
            Plans to grow your practice.
          </h2>
          <p className="font-poppins text-nav-text text-base max-w-2xl">
            Whether you just want to claim your free listing or you're ready to supercharge your lead generation, we have a plan for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-full max-w-5xl">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col justify-between ${
                plan.highlight
                  ? "bg-brand-dark text-white shadow-xl relative scale-100 md:scale-105 z-10 border-none"
                  : "bg-white text-brand-dark shadow-card border border-pet-stroke"
              }`}
            >
              {plan.highlight && (
                <>
                  <style>{`
                    .css-ribbon {
                      --f: 0.6em; /* control the folded part */
                      
                      position: absolute;
                      top: 0;
                      left: 0;
                      line-height: 1.8;
                      padding-inline: 1.8em;
                      padding-bottom: var(--f);
                      border-image: conic-gradient(#0008 0 0) 51%/var(--f);
                      clip-path: polygon(
                        100% calc(100% - var(--f)),100% 100%,calc(100% - var(--f)) calc(100% - var(--f)),var(--f) calc(100% - var(--f)), 0 100%,0 calc(100% - var(--f)),999px calc(100% - var(--f) - 999px),calc(100% - 999px) calc(100% - var(--f) - 999px)
                      );
                      transform: translate(-29.29%, -100%) rotate(-45deg);
                      transform-origin: 100% 100%;
                      /* Text styling */
                      font-size: 13px;
                      font-weight: 700;
                      color: #fff;
                      text-transform: uppercase;
                      letter-spacing: 0.1em;
                      white-space: nowrap; /* CRITICAL: prevents squishing */
                      z-index: 20;
                    }
                  `}</style>
                  <div className="css-ribbon bg-brand-red">
                    Most Popular
                  </div>
                </>
              )}
              
              <div className={`flex flex-col gap-6 ${plan.highlight ? "pt-8" : ""}`}>
                <div className="flex flex-col gap-2">
                  <h3 className={`font-poppins font-bold text-xl ${plan.highlight ? "text-white" : "text-brand-dark"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`font-poppins font-bold text-4xl ${plan.highlight ? "text-white" : "text-brand-dark"}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`font-poppins text-sm ${plan.highlight ? "text-gray-300" : "text-nav-text"}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className={`font-poppins text-sm mt-2 ${plan.highlight ? "text-gray-300" : "text-nav-text"}`}>
                    {plan.desc}
                  </p>
                </div>

                <ul className="flex flex-col gap-3">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? "text-pet-green" : "text-brand-red"}`} />
                      <span className={`font-poppins text-sm ${plan.highlight ? "text-white" : "text-brand-dark"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href={plan.buttonHref}
                  className={`block w-full text-center font-poppins font-semibold text-sm rounded-full px-6 py-3 transition-colors ${
                    plan.highlight
                      ? "bg-brand-red text-white hover:bg-white hover:text-brand-red"
                      : "bg-[#F4F4F5] text-brand-dark hover:bg-brand-dark hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
