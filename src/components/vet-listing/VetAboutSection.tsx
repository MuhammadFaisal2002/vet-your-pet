/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { VetRecord } from "@/data/vet-types";

interface VetAboutSectionProps {
  vet: VetRecord;
}

export function VetAboutSection({ vet }: VetAboutSectionProps) {
  return (
    <section className="flex flex-col gap-8 rounded-2xl bg-white p-6 shadow-sm">
      <div>
        <h2 className="font-poppins text-xl font-semibold text-brand-dark">
          About {vet.name}
        </h2>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        {/* About text */}
        <div className="flex-1">
          <div className="prose prose-sm max-w-none font-poppins text-base text-nav-text">
            {vet.about.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Clinic photo */}
        <div className="relative h-[200px] w-full overflow-hidden rounded-xl lg:h-[250px] lg:w-[300px]">
          {vet.gallery[0] && (
            <Image
              src={vet.gallery[0]}
              alt={`${vet.name} clinic`}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}