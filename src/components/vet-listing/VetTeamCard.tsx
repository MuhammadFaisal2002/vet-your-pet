import React from "react";
import Image from "next/image";
import { VetTeamMember } from "@/data/vet-types";

interface VetTeamCardProps {
  member: VetTeamMember;
}

export function VetTeamCard({ member }: VetTeamCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-pet-stroke bg-white p-4">
      <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-poppins text-sm font-semibold text-brand-dark">
          {member.name}
        </h3>
        <p className="font-poppins text-xs text-nav-text">{member.title}</p>
      </div>
      <div className="flex flex-wrap gap-1">
        {member.specialties.slice(0, 3).map((spec) => (
          <span
            key={spec}
            className="rounded-full bg-pet-bg px-2 py-0.5 text-[10px] font-medium text-nav-text"
          >
            {spec}
          </span>
        ))}
      </div>
      <p className="line-clamp-2 font-poppins text-xs text-nav-text">
        {member.bio}
      </p>
    </div>
  );
}