"use client";

import React from "react";
import { VetRecord } from "@/data/vet-types";

interface VetReviewsSectionProps {
  vet: VetRecord;
}

function StarRatingInline({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.81631 0.426549C6.88573 0.265356 7.11427 0.265356 7.18369 0.426548L8.8457 4.28589C8.87465 4.35313 8.93803 4.39917 9.01092 4.40593L13.195 4.79399C13.3697 4.8102 13.4403 5.02756 13.3085 5.14339L10.1516 7.91666C10.0966 7.96497 10.0724 8.03947 10.0885 8.11089L11.0124 12.2101C11.051 12.3813 10.8661 12.5156 10.7152 12.426L7.10211 10.2806C7.03917 10.2433 6.96083 10.2433 6.89789 10.2806L3.28483 12.426C3.13393 12.5156 2.94903 12.3813 2.98761 12.2101L3.91149 8.11089C3.92758 8.03947 3.90338 7.96497 3.84838 7.91666L0.691512 5.14339C0.55966 5.02756 0.630285 4.8102 0.805039 4.79399L4.98908 4.40593C5.06197 4.39917 5.12535 4.35313 5.1543 4.28589L6.81631 0.426549Z"
            fill={i <= count ? "#FFB900" : "#E9EAEE"}
          />
        </svg>
      ))}
    </div>
  );
}

export function VetReviewsSection({ vet }: VetReviewsSectionProps) {
  if (!vet.reviews.length) return null;

  // Sort by date descending
  const sortedReviews = [...vet.reviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="font-poppins text-xl font-semibold text-brand-dark">
        Reviews ({vet.reviewCount})
      </h2>

      <div className="flex flex-col gap-4">
        {sortedReviews.slice(0, 10).map((review, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 rounded-xl bg-pet-bg p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-poppins text-sm font-medium text-brand-dark">
                  {review.author}
                </span>
                <span className="text-[10px] text-nav-text">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <StarRatingInline count={review.rating} />
            </div>
            <p className="font-poppins text-sm text-nav-text">{review.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}