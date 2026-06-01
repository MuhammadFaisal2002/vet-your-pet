"use client";

import React from "react";
import { VetRecord } from "@/data/vet-types";
import { StarRating } from "@/components/ui/StarRating";

interface VetReviewsSectionProps {
  vet: VetRecord;
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
              {/* Uses shared StarRating with partial-fill support */}
              <StarRating rating={review.rating} max={5} size="sm" showEmpty />
            </div>
            <p className="font-poppins text-sm text-nav-text">{review.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}