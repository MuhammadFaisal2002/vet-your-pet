"use client";

import type { Breed } from "@/data/breeds";
import { computeAllVerdicts, type Verdict } from "@/lib/breed-compare";
import VerdictCard from "./VerdictCard";

interface BestForVerdictsProps {
  breeds: Breed[];
}

export default function BestForVerdicts({ breeds }: BestForVerdictsProps) {
  if (breeds.length < 2) return null;

  const verdicts: Verdict[] = computeAllVerdicts(breeds);

  return (
    <section className="w-full py-10 md:py-14 bg-white">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="font-poppins font-medium text-xs text-brand-red tracking-wide uppercase">
            Who Wins What
          </span>
        </div>

        {/* Section title */}
        <h2 className="font-poppins font-semibold text-[26px] sm:text-[30px] leading-[120%] tracking-[-0.4px] text-[#25272C] mb-8">
          The Verdict, Broken Down.
        </h2>

        {/* Verdict grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {verdicts.map((verdict) => (
            <VerdictCard key={verdict.id} verdict={verdict} />
          ))}
        </div>
      </div>
    </section>
  );
}