import React from "react";
import { Stethoscope, Smile, Siren, Scissors, Layers, Brain, Heart, Bird } from "lucide-react";
import { VetRecord } from "@/data/vet-types";
import { VET_SERVICES } from "@/data/services";

interface VetServicesGridProps {
  vet: VetRecord;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Smile,
  Siren,
  Scissors,
  Layers,
  Brain,
  Heart,
  Bird,
};

export function VetServicesGrid({ vet }: VetServicesGridProps) {
  const serviceRecords = vet.services
    .map((slug) => VET_SERVICES.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <section className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="font-poppins text-xl font-semibold text-brand-dark">
        Services Offered
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {serviceRecords.map((service) => {
          if (!service) return null;
          const IconComponent = iconMap[service.icon] || Stethoscope;
          
          return (
            <div
              key={service.slug}
              className="flex items-start gap-3 rounded-xl bg-pet-bg p-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white">
                <IconComponent className="h-5 w-5 text-pet-blue" />
              </div>
              <div>
                <h3 className="font-poppins text-sm font-medium text-brand-dark">
                  {service.label}
                </h3>
                <p className="mt-1 font-poppins text-xs text-nav-text">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}