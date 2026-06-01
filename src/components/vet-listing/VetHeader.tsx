import React from "react";
import Image from "next/image";
import { VetRecord } from "@/data/vet-types";
import { StarRating } from "@/components/breeder-listing/StarRating";

// Icons for trust pills
function VerifiedIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0.875C4.516 0.875 2.625 2.766 2.625 5.25C2.625 7.441 4.169 9.238 6.125 9.856V12.156C6.152 12.323 6.291 12.438 6.458 12.438H7.542C7.709 12.438 7.848 12.323 7.875 12.156V9.856C9.831 9.238 11.375 7.441 11.375 5.25C11.375 2.766 9.484 0.875 7 0.875Z" fill="#2E794D"/>
      <path d="M6.125 8.436C4.723 8.008 3.625 6.578 3.625 5.25C3.625 3.508 4.758 2.125 6.5 2.125C8.242 2.125 9.375 3.508 9.375 5.25C9.375 6.578 8.277 8.008 6.875 8.436V11H6.125V8.436ZM7.875 6.625H8.75V7.5H7.875V6.625ZM7.875 4.375H8.75V5.25H7.875V4.375Z" fill="white"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0.875C4.516 0.875 2.625 2.766 2.625 5.25C2.625 7.441 4.169 9.238 6.125 9.856V12.156C6.152 12.323 6.291 12.438 6.458 12.438H7.542C7.709 12.438 7.848 12.323 7.875 12.156V9.856C9.831 9.238 11.375 7.441 11.375 5.25C11.375 2.766 9.484 0.875 7 0.875Z" fill="#4962AA"/>
      <path d="M6.875 4.375V4.75C6.875 4.75 7 5.25 7 5.75V6.5H7.125V6.875H6.125V6.5H6.25C6.08333 6.16667 6 5.75 6 5.25C6 4.58333 6.25 4 6.875 4.375ZM6.875 4C6.875 4 6.75 4.16667 6.75 4.75C6.75 4.83333 6.75 4.91667 6.875 4.91667C7.33333 4.91667 7.625 4.83333 7.625 4.75C7.625 4.5 7.33333 4 6.875 4Z" fill="white"/>
    </svg>
  );
}

function UserPlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 5.25V4.375C10.5 3.41001 10.025 2.50079 9.225 1.92579C8.42501 1.35079 7.38501 1.16797 6.325 1.41797C5.265 1.66797 4.375 2.33365 3.91335 3.23722C3.4517 4.14079 3.37409 5.18402 3.70627 6.12535C4.03845 7.06668 4.74659 7.81579 5.65626 8.22154C6.56593 8.62729 7.575 8.65597 8.4625 8.29967C9.35 7.94336 10.0425 7.24501 10.3594 6.375C10.541 5.875 10.541 5.625 10.5 5.25ZM8.125 5.25V5.625H3.5C3.5 5.625 3.5 5.75 3.5 5.875C3.5 7.00001 4.1625 8.00001 5.125 8.75001C5.5 9.00001 5.75 9.25001 5.75 9.25001C5.75 9.56251 5.5625 9.75001 5.25 9.75001H4.375V10.5H5.25C5.5625 10.5 6.5625 10.25 7.125 9.50001C7.5 8.75001 7.75 8.12501 7.75 8.12501C7.75 7.81251 7.9375 7.62501 8.25 7.62501H8.125V5.25H8.125Z" fill="#D93F53"/>
    </svg>
  );
}

function EmergencyBadge() {
  return (
    <div className="flex items-center gap-1 rounded-full bg-brand-red/10 px-3 py-1">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0.75L1.125 10.5H10.875L6 0.75ZM6.375 4.5H5.625V5.25H6.375V4.5ZM6.375 6.375H5.625V7.875H6.375V6.375Z" fill="#D93F53"/>
      </svg>
      <span className="text-[11px] font-semibold text-brand-red">24/7 Emergency</span>
    </div>
  );
}

interface TrustPillProps {
  icon: React.ReactNode;
  label: string;
  color?: string;
}

function TrustPill({ icon, label, color = "#2E794D" }: TrustPillProps) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-pet-stroke bg-white px-3 py-1.5">
      <span style={{ color }}>{icon}</span>
      <span className="text-xs font-medium text-nav-text">{label}</span>
    </div>
  );
}

interface VetHeaderProps {
  vet: VetRecord;
}

export function VetHeader({ vet }: VetHeaderProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Cover image - larger */}
      <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-pet-bg md:h-[360px]">
        <Image
          src={vet.photo}
          alt={vet.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Name, location, and trust badges */}
      <div className="flex flex-col gap-4">
        {/* Eyebrow - VERIFIED VETERINARIAN */}
        <div className="inline-flex items-center gap-2 font-poppins text-xs font-medium text-brand-red tracking-wide uppercase">
          {vet.verified && "Verified Veterinarian"}
        </div>

        {/* H1 - larger with fixed tracking */}
        <h1 className="font-poppins font-bold text-4xl text-brand-dark md:text-5xl tracking-[-1px]">
          {vet.name}
        </h1>

        {/* Location */}
        <p className="font-poppins text-lg text-nav-text">
          {vet.city}, {vet.stateAbbr}
        </p>

        {/* Trust Pills row */}
        <div className="flex flex-wrap items-center gap-3">
          {vet.verified && (
            <TrustPill icon={<VerifiedIcon />} label="Verified Practice" />
          )}
          <TrustPill 
            icon={<ClockIcon />} 
            label={`${vet.yearsInPractice || 10}+ Years in Practice`} 
            color="#4962AA"
          />
          {vet.acceptingNewPatients && (
            <TrustPill 
              icon={<UserPlusIcon />} 
              label="Accepting New Patients" 
              color="#D93F53"
            />
          )}
        </div>

        {/* Emergency badge (separate line) */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {vet.emergency && <EmergencyBadge />}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 pt-2">
          <StarRating count={Math.round(vet.rating)} size="md" />
          <span className="font-poppins text-base font-semibold text-brand-dark">
            {vet.rating.toFixed(1)}
          </span>
          <span className="font-poppins text-sm text-nav-text">
            ({vet.reviewCount} reviews)
          </span>
        </div>
      </div>
    </div>
  );
}