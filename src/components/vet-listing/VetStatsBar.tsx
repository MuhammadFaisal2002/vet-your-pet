import React from "react";
import { VetRecord } from "@/data/vet-types";

interface VetStatsBarProps {
  vet: VetRecord;
}

function StatItem({ label, value, suffix = "" }: { label: string; value: number | string; suffix?: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-white p-4 shadow-sm">
      <span className="font-poppins text-2xl font-bold text-brand-dark">
        {value}{suffix}
      </span>
      <span className="font-poppins text-xs font-medium text-nav-text">{label}</span>
    </div>
  );
}

export function VetStatsBar({ vet }: VetStatsBarProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      <StatItem label="Years in Practice" value={vet.yearsInPractice} suffix="+" />
      <StatItem label="Veterinarians on Staff" value={vet.team.length} />
      <StatItem label="Insurances Accepted" value={vet.insurancesAccepted.length} />
      <StatItem label="Patient Rating" value={vet.rating.toFixed(1)} />
    </div>
  );
}