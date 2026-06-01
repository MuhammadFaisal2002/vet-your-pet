"use client";

import { useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { StarRating } from "./StarRating";

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    adopted: "Adopted: Charlie",
    date: "2025-01-15",
    rating: 5,
    text: "We couldn't be happier with our goldendoodle from Golden Valley! The entire process was transparent and professional. Our puppy came home healthy, well-socialized, and has brought so much joy to our family. The ongoing support from the breeder has been invaluable.",
  },
  {
    id: 2,
    name: "Michael Torres",
    adopted: "Adopted: Bella",
    date: "2024-12-20",
    rating: 5,
    text: "Absolutely wonderful experience from start to finish. The breeder was incredibly knowledgeable and made sure we were the perfect match for our puppy. Bella has been a dream—healthy, happy, and so well-adjusted. We highly recommend Golden Valley Doodles to anyone looking for a new furry family member.",
  },
  {
    id: 3,
    name: "Emily Chen",
    adopted: "Adopted: Max",
    date: "2024-11-08",
    rating: 5,
    text: "We couldn't be happier with our goldendoodle from Golden Valley! The entire process was transparent and professional. Our puppy came home healthy, well-socialized, and has brought so much joy to our family. The ongoing support from the breeder has been invaluable.",
  },
  {
    id: 4,
    name: "James & Lisa Parker",
    adopted: "Adopted: Rosie",
    date: "2024-10-30",
    rating: 5,
    text: "From our very first inquiry to bringing Rosie home, the team at Golden Valley was exceptional. They answered all our questions patiently and kept us updated throughout the waiting period. Rosie is now 6 months old and is the most loving, gentle dog we've ever had.",
  },
  {
    id: 5,
    name: "Amanda Williams",
    adopted: "Adopted: Buddy",
    date: "2024-09-14",
    rating: 5,
    text: "We couldn't be happier with our goldendoodle from Golden Valley! The entire process was transparent and professional. Our puppy came home healthy, well-socialized, and has brought so much joy to our family. The ongoing support from the breeder has been invaluable.",
  },
];

const SORT_OPTIONS = ["Date", "Rating", "Name"] as const;
type SortOption = (typeof SORT_OPTIONS)[number];

export function ReviewsSection() {
  const [sortBy, setSortBy] = useState<SortOption>("Date");
  const [sortOpen, setSortOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const visibleReviews = REVIEWS.slice(0, visibleCount);
  const hasMore = visibleCount < REVIEWS.length;

  return (
    <div className="animate-on-scroll animate-fade-in-up flex flex-col gap-[30px]">
      {/* Reviews Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pb-5 border-b border-gvd-stroke">
        <div className="flex flex-col gap-2.5">
          <h1 className="text-gvd-black font-medium text-2xl leading-8">Reviews</h1>
          <p className="text-gvd-subtitle text-sm font-normal leading-[160%]">
            32 verified reviews
          </p>
        </div>

        <div className="flex items-center gap-5">
          {/* Rating Badge */}
          <div className="flex items-center gap-2 px-2.5 py-[5px] rounded-full border border-gvd-stroke bg-white">
            <div className="flex items-center gap-1">
              <StarRating rating={1} max={1} size="md" showEmpty={false} />
              <span className="text-gvd-black font-medium text-[15px] leading-[136%]">4.8</span>
            </div>
            <span className="text-[#A4ACB7] text-xs font-normal leading-[120%]">(32 reviews)</span>
          </div>

          <div className="w-px h-5 bg-gvd-stroke" />

          {/* Sort by */}
          <div className="flex items-center gap-4">
            <span className="text-gvd-gray-dark-3 text-sm font-normal leading-[112%]">Sort by</span>
            <div className="relative">
              <button
                onClick={() => setSortOpen((v) => !v)}
                className="flex w-[120px] items-center justify-between px-3 py-[7px] rounded border border-gvd-stroke bg-white text-gvd-gray-3 text-sm font-normal leading-[112%]"
              >
                <span>{sortBy}</span>
                <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0L4 4L8 0" stroke="#A5ADB7" strokeWidth="1" />
                </svg>
              </button>
              {sortOpen && (
                <div className="absolute right-0 mt-1 w-[120px] bg-white border border-gvd-stroke rounded shadow-sm z-10">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setSortBy(opt); setSortOpen(false); }}
                      className="block w-full text-left px-3 py-2 text-sm text-gvd-dark-2 hover:bg-gvd-stroke/40 transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="stagger-children flex flex-col gap-[10px]">
        {visibleReviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            adopted={review.adopted}
            date={review.date}
            rating={review.rating}
            text={review.text}
          />
        ))}
      </div>

      {/* See More Button */}
      {hasMore && (
        <div className="flex justify-center mt-[30px]">
          <button
            onClick={() => setVisibleCount((c) => c + 4)}
            className="flex items-center gap-2.5 px-[34px] py-3 rounded-full border border-gvd-blue text-gvd-blue text-sm font-medium leading-5 hover:bg-gvd-blue/5 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.25 8.00001C14.2501 9.6432 13.6032 11.2204 12.4491 12.3901C11.2951 13.5598 9.7268 14.228 8.08375 14.25H8C6.40442 14.2534 4.86872 13.6426 3.71125 12.5444C3.56662 12.4078 3.48218 12.2194 3.4765 12.0205C3.47081 11.8217 3.54435 11.6287 3.68094 11.4841C3.81752 11.3394 4.00597 11.255 4.20482 11.2493C4.40366 11.2436 4.59662 11.3172 4.74125 11.4538C5.42015 12.0947 6.27289 12.5214 7.1929 12.6804C8.11291 12.8395 9.05939 12.7238 9.91407 12.348C10.7687 11.9722 11.4937 11.3528 11.9984 10.5673C12.503 9.78181 12.765 8.86498 12.7516 7.93142C12.7381 6.99786 12.4499 6.08897 11.9228 5.31832C11.3957 4.54766 10.6532 3.94943 9.78804 3.59838C8.9229 3.24733 7.97348 3.15903 7.05843 3.34451C6.14338 3.52999 5.30328 3.98103 4.64313 4.64126C4.635 4.64938 4.6275 4.65688 4.61875 4.66438L3.43062 5.75001H4.5C4.69891 5.75001 4.88968 5.82903 5.03033 5.96968C5.17098 6.11033 5.25 6.3011 5.25 6.50001C5.25 6.69892 5.17098 6.88969 5.03033 7.03034C4.88968 7.17099 4.69891 7.25001 4.5 7.25001H1.5C1.30109 7.25001 1.11032 7.17099 0.96967 7.03034C0.829018 6.88969 0.75 6.69892 0.75 6.50001V3.50001C0.75 3.3011 0.829018 3.11033 0.96967 2.96968C1.11032 2.82903 1.30109 2.75001 1.5 2.75001C1.69891 2.75001 1.88968 2.82903 2.03033 2.96968C2.17098 3.11033 2.25 3.3011 2.25 3.50001V4.79501L3.5925 3.56626C4.46806 2.6954 5.58198 2.10344 6.79367 1.86509C8.00536 1.62673 9.2605 1.75267 10.4007 2.22701C11.5409 2.70135 12.515 3.50282 13.2 4.53027C13.8851 5.55773 14.2505 6.7651 14.25 8.00001Z"
                fill="#4962AA"
              />
            </svg>
            See more
          </button>
        </div>
      )}
    </div>
  );
}
