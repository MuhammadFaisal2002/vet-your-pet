import React from "react";
import { VetRecord } from "@/data/vet-types";

interface InsuranceAcceptedSectionProps {
  vet: VetRecord;
}

export function InsuranceAcceptedSection({ vet }: InsuranceAcceptedSectionProps) {
  if (!vet.insurancesAccepted.length) return null;

  return (
    <section className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="font-poppins text-xl font-semibold text-brand-dark">
        Insurance Accepted
      </h2>
      
      <div className="flex flex-wrap gap-2">
        {vet.insurancesAccepted.map((insurance) => (
          <span
            key={insurance}
            className="rounded-full bg-pet-check-green/10 px-3 py-1 text-xs font-medium text-pet-check-dark"
          >
            {insurance}
          </span>
        ))}
      </div>
    </section>
  );
}