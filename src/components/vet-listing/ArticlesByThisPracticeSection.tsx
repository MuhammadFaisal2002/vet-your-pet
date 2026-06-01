import React from "react";

interface ArticlesByThisPracticeSectionProps {
  vetName: string;
}

export function ArticlesByThisPracticeSection({ vetName }: ArticlesByThisPracticeSectionProps) {
  return (
    <section className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pet-bg">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 4h16v4h-4v14h-8v-14H8V4z"
            fill="#A5ADB7"
          />
          <path
            d="M14 22h4M14 26h4"
            stroke="#A5ADB7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="text-center">
        <h2 className="font-poppins text-lg font-semibold text-brand-dark">
          Articles Coming Soon
        </h2>
        <p className="mt-2 font-poppins text-sm text-nav-text">
          {vetName} hasn't published any articles yet.
        </p>
        <p className="mt-1 font-poppins text-xs text-nav-text">
          Check back later for helpful pet health tips and insights.
        </p>
      </div>
    </section>
  );
}