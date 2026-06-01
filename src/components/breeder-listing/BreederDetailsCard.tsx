import React from "react";

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6654 5L7.4987 14.1667L3.33203 10"
        stroke="#00A63E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface DetailRowProps {
  label: string;
  value?: string;
  isCheck?: boolean;
  isLast?: boolean;
}

function DetailRow({ label, value, isCheck, isLast }: DetailRowProps) {
  return (
    <div
      className={`flex h-[41px] items-center justify-between ${!isLast ? "border-b border-pet-divider" : "h-10"}`}
    >
      <span className="text-[14px] font-normal leading-6 text-pet-gray-dark">
        {label}
      </span>
      {isCheck ? (
        <CheckIcon />
      ) : (
        <span className="text-[14px] font-medium leading-6 text-pet-blue">
          {value}
        </span>
      )}
    </div>
  );
}

export function BreederDetailsCard() {
  return (
    <div className="animate-on-scroll animate-fade-in-right delay-200 flex flex-col rounded-[14px] border border-pet-stroke bg-white shadow-[10px_10px_60px_0_rgba(0,0,0,0.04)]">
      {/* Header */}
      <div className="flex items-center gap-[10px] px-6 pb-3 pt-6">
        <h3 className="text-[18px] font-medium leading-8 text-[#0A0A0A]">
          Breeder Details
        </h3>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1 px-6 pb-[10px]">
        <DetailRow label="Years in Operation" value="10 years" />
        <DetailRow label="Litters Per Year" value="2-3" />
        <DetailRow label="Health Tested Parents" isCheck />
        <DetailRow label="Transport Available" isCheck />
        <DetailRow label="AKC Registered" isCheck isLast />
      </div>
    </div>
  );
}
