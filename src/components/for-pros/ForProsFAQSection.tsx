"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does the verification process take?",
    a: "Verification typically takes 24-48 hours. Our team manually reviews your submitted licenses (for vets) or health testing documentation (for breeders) to ensure the highest standards.",
  },
  {
    q: "Do I have to pay to be listed in the directory?",
    a: "No. A basic listing is completely free and allows pet owners to find your business name, address, and contact information. You can upgrade to a Verified or Featured plan for additional benefits.",
  },
  {
    q: "How do I publish articles on Vet Your Pet?",
    a: "Once you become a Verified Pro, you will unlock the 'Articles' section in your account dashboard. You can draft, edit, and submit articles directly through our rich-text editor for publication.",
  },
  {
    q: "What if my business was already added to the directory?",
    a: "We pre-populate our directory using publicly available data to help pet owners find care immediately. You can click 'Claim Your Listing' to verify your ownership and gain full control over the profile.",
  },
];

export default function ForProsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`border rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? "border-brand-dark" : "border-pet-stroke hover:border-gray-400"
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-poppins font-bold text-lg text-brand-dark pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-nav-text transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-poppins text-nav-text text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
