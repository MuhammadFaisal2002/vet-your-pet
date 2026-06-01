'use client';

import { HelpCircle, Sparkles, Heart } from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="max-w-2xl mx-auto text-center py-12 md:py-16">
      {/* Eyebrow */}
      <span className="inline-block font-poppins text-xs font-medium text-brand-red mb-4 tracking-wide uppercase">
        BREED FINDER
      </span>
      
      {/* Headline */}
      <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-[1.1] mb-6">
        Find the dog breed that fits your life
      </h1>
      
      {/* Subhead */}
      <p className="font-poppins text-base md:text-lg text-nav-text leading-relaxed max-w-lg mx-auto mb-10">
        Answer 10 quick questions about your home, lifestyle, and preferences. 
        In about 60 seconds, we will match you to breeds that truly fit — no signup required.
      </p>
      
      {/* CTA Button */}
      <button
        onClick={onStart}
        className="font-poppins font-semibold text-sm bg-brand-red text-white rounded-full px-8 py-3 hover:opacity-90 transition-opacity duration-200"
      >
        Get Started
      </button>
      
      {/* Trust line */}
      <p className="mt-6 font-poppins text-xs text-[#8995A6]">
        Used by over 5,000 families to find their new best friend
      </p>
      
      {/* How it works - 3 step strip */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-chip-akc-bg flex items-center justify-center mb-3">
            <HelpCircle className="w-6 h-6 text-chip-akc-text" />
          </div>
          <p className="font-poppins text-sm text-nav-text">
            Answer 10 quick questions
          </p>
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-chip-akc-bg flex items-center justify-center mb-3">
            <Sparkles className="w-6 h-6 text-chip-akc-text" />
          </div>
          <p className="font-poppins text-sm text-nav-text">
            We match you to breeds that fit your life
          </p>
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-chip-akc-bg flex items-center justify-center mb-3">
            <Heart className="w-6 h-6 text-chip-akc-text" />
          </div>
          <p className="font-poppins text-sm text-nav-text">
            See your top 3 — and where to find them
          </p>
        </div>
      </div>
    </div>
  );
}