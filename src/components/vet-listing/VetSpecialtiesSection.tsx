import React from "react";
import { VetRecord } from "@/data/vet-types";

interface VetSpecialtiesSectionProps {
  vet: VetRecord;
}

function SpecialtyChip({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-chip-exp-bg px-3 py-1 text-xs font-medium text-chip-exp-text">
      {label}
    </span>
  );
}

export function VetSpecialtiesSection({ vet }: VetSpecialtiesSectionProps) {
  return (
    <section className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="font-poppins text-xl font-semibold text-brand-dark">
        Specialties
      </h2>
      
      <div className="flex flex-wrap gap-2">
        {vet.specialties.map((specialty) => (
          <SpecialtyChip key={specialty} label={specialty} />
        ))}
      </div>
    </section>
  );
}