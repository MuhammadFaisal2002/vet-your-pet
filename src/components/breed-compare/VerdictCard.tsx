"use client";

import type { Verdict } from "@/lib/breed-compare";

interface VerdictCardProps {
  verdict: Verdict;
}

export default function VerdictCard({ verdict }: VerdictCardProps) {
  if (verdict.winners.length === 0) return null;

  return (
    <div className="bg-[#F6F5F3] rounded-2xl p-5 flex flex-col gap-3">
      {/* Emoji + label */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">{verdict.emoji}</span>
        <span className="font-poppins text-xs text-brand-red tracking-wide uppercase">
          {verdict.winners.length > 1 ? "TIE" : "WINNER"}
        </span>
      </div>

      {/* Heading */}
      <h4 className="font-poppins font-semibold text-base text-brand-dark leading-tight">
        {verdict.label}
      </h4>

      {/* Winners */}
      <div className="flex flex-wrap gap-2">
        {verdict.winners.map((breed) => (
          <span
            key={breed.slug}
            className="inline-flex items-center px-2.5 py-1 rounded-full bg-white border border-pet-input-border font-poppins text-sm text-[#2E794D]"
          >
            {breed.name}
          </span>
        ))}
      </div>

      {/* Reasoning */}
      <p className="font-poppins text-sm text-nav-text leading-relaxed">
        {verdict.reasoning}
      </p>
    </div>
  );
}