"use client";

import { StarRating } from "./StarRating";

interface ReviewCardProps {
  name: string;
  adopted: string;
  date: string;
  text: string;
  rating?: number;
}

export function ReviewCard({
  name,
  adopted,
  date,
  text,
  rating = 5,
}: ReviewCardProps) {
  return (
    <div className="hover-lift flex flex-col gap-5 w-full rounded-[14px] border border-gvd-stroke bg-white p-[30px] shadow-[10px_10px_60px_0_rgba(0,0,0,0.04)]">
      <div className="flex justify-between items-start gap-4 w-full">
        <div className="flex flex-col gap-2">
          <p className="text-gvd-dark font-medium text-lg leading-normal">{name}</p>
          <p className="text-gvd-dark-2 font-normal text-xs leading-normal">{adopted}</p>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <StarRating count={rating} size="sm" />
          <span className="text-gvd-gray-3 text-sm font-normal leading-5">{date}</span>
        </div>
      </div>
      <p className="text-gvd-dark font-normal text-sm leading-[160%] w-full">{text}</p>
    </div>
  );
}
