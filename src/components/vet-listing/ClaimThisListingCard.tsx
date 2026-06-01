import React from "react";
import Link from "next/link";
import { VetRecord } from "@/data/vet-types";

interface ClaimThisListingCardProps {
  vet: VetRecord;
}

export function ClaimThisListingCard({ vet }: ClaimThisListingCardProps) {
  // Only show if not claimed
  if (vet.claimed) return null;

  return (
    <Link
      href={`/claim/veterinarian/${vet.slug}`}
      className="animate-on-scroll animate-fade-in-right delay-400 block rounded-[14px] border border-red-200 bg-red-50 p-5"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-red/10">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2.5C7.462 2.5 5.5 4.462 5.5 7C5.5 9.538 7.462 11.5 10 11.5C12.538 11.5 14.5 9.538 14.5 7C14.5 4.462 12.538 2.5 10 2.5ZM10 10C8.068 10 6.5 8.432 6.5 7C6.5 5.568 8.068 4 10 4C11.932 4 13.5 5.568 13.5 7C13.5 8.432 11.932 10 10 10ZM10 18C6.5 18 3.5 13.5 3.5 13.5C3.5 13.5 3.5 13 3.5 13C3.5 12.5 4 12 4.5 12H15.5C16 12 16.5 12.5 16.5 13C16.5 13 16.5 13.5 16.5 13.5C16.5 13.5 13.5 18 10 18Z"
              fill="#D93F53"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-poppins text-base font-semibold text-brand-red">
            Claim This Listing
          </h3>
          <p className="font-poppins text-xs text-nav-text">
            Are you the owner? Verify ownership to manage your profile.
          </p>
        </div>
      </div>
    </Link>
  );
}