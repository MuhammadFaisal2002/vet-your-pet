"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function NewsletterSignup({
  title = "Stay Updated with Vet Your Pet",
  description = "Receive weekly pet care updates, breed finder insights, and health advice directly from certified animal care specialists in your inbox.",
  className = "",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className={`px-6 py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F0EDE8] rounded-xl px-8 md:px-12 py-10 md:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="font-poppins font-semibold text-[28px] sm:text-[34px] text-brand-dark leading-[120%] tracking-[-0.4px] mb-2">
              {title}
            </h2>
            <p className="font-poppins text-sm md:text-base text-nav-text leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex-shrink-0 w-full lg:max-w-md">
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-pet-stroke bg-white px-[15px] py-[11px] text-[14px] placeholder:text-pet-placeholder focus:border-pet-blue focus:shadow-md focus:outline-none transition font-poppins"
                    placeholder="Enter your email address"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-animate inline-flex items-center justify-center font-poppins font-semibold text-sm bg-brand-red text-white rounded-full px-6 py-3 hover:opacity-90 transition-opacity flex-shrink-0"
                >
                  Subscribe Now
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 bg-white border border-pet-green/20 rounded-xl p-5 shadow-sm text-left">
                <CheckCircle2 className="w-8 h-8 text-pet-green flex-shrink-0" />
                <div>
                  <h4 className="font-poppins font-semibold text-sm text-brand-dark">
                    Successfully Subscribed!
                  </h4>
                  <p className="text-xs text-nav-text mt-0.5 font-poppins">
                    Thank you! You are now subscribed to our updates at {email}.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
