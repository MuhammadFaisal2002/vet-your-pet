import React from "react";
import { VetRecord } from "@/data/vet-types";
import { VetTeamCard } from "./VetTeamCard";

interface VetTeamSectionProps {
  vet: VetRecord;
}

export function VetTeamSection({ vet }: VetTeamSectionProps) {
  if (!vet.team.length) return null;

  return (
    <section className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="font-poppins text-xl font-semibold text-brand-dark">
        Our Team
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vet.team.slice(0, 6).map((member) => (
          <VetTeamCard key={member.slug} member={member} />
        ))}
      </div>
    </section>
  );
}