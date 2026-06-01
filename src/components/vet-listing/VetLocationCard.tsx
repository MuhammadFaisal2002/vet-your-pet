import React from "react";
import { VetRecord } from "@/data/vet-types";
import { MapPin } from "lucide-react";

interface VetLocationCardProps {
  vet: VetRecord;
}

export function VetLocationCard({ vet }: VetLocationCardProps) {
  const fullAddress = [
    vet.address.line1,
    vet.address.line2,
    `${vet.address.city}, ${vet.address.state} ${vet.address.zip}`,
  ]
    .filter(Boolean)
    .join(" ");

  // Create Google Maps search URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <div className="animate-on-scroll animate-fade-in-right delay-400 flex flex-col gap-6 rounded-[14px] border border-pet-stroke bg-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-medium leading-8 text-brand-dark">
          Location
        </h3>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[14px] font-medium text-pet-blue hover:underline"
        >
          <MapPin className="w-4 h-4" />
          Open map
        </a>
      </div>

      {/* Mocked map — CSS-rendered street grid with center pin (no external deps) */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open map for ${vet.name} on Google Maps`}
        className="relative block h-[200px] w-full overflow-hidden rounded-[10px] bg-[#e8eef3] group"
      >
        {/* Soft background tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #eaf0f5 0%, #dde6ee 100%)",
          }}
          aria-hidden="true"
        />

        {/* Street grid (two layered gradients = streets) */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0, transparent 28px, rgba(255,255,255,0.85) 28px, rgba(255,255,255,0.85) 32px), repeating-linear-gradient(90deg, transparent 0, transparent 44px, rgba(255,255,255,0.85) 44px, rgba(255,255,255,0.85) 48px)",
          }}
          aria-hidden="true"
        />

        {/* Diagonal "highway" accent */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(115deg, transparent 38%, #c9d6e2 38%, #c9d6e2 44%, transparent 44%)",
          }}
          aria-hidden="true"
        />

        {/* "Park" / green block */}
        <div
          className="absolute rounded-md"
          style={{
            top: "18%",
            left: "62%",
            width: "22%",
            height: "30%",
            background: "linear-gradient(135deg, #cfe3cf, #b9d6b9)",
            opacity: 0.85,
          }}
          aria-hidden="true"
        />

        {/* "Water" / blue block */}
        <div
          className="absolute"
          style={{
            bottom: "0%",
            left: "0%",
            width: "32%",
            height: "26%",
            background: "linear-gradient(180deg, #cfe2ef, #b6d2e4)",
            opacity: 0.9,
          }}
          aria-hidden="true"
        />

        {/* Center pin */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex flex-col items-center">
            {/* Pin drop shadow */}
            <div
              className="absolute -bottom-1 w-6 h-1.5 rounded-full bg-black/20 blur-[2px]"
              aria-hidden="true"
            />
            {/* Pin */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pet-red shadow-lg ring-4 ring-white transition-transform group-hover:scale-110">
              <MapPin className="w-5 h-5 text-white" fill="white" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Subtle "view on map" hover hint */}
        <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-white/90 text-[11px] font-medium text-brand-dark shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          View on map →
        </div>
      </a>

      {/* Address */}
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 flex-shrink-0 text-nav-text mt-0.5" />
        <div className="flex flex-col gap-1">
          <span className="text-[14px] font-normal leading-6 text-nav-text">
            {vet.address.line1}
          </span>
          {vet.address.line2 && (
            <span className="text-[14px] font-normal leading-6 text-nav-text">
              {vet.address.line2}
            </span>
          )}
          <span className="text-[14px] font-normal leading-6 text-nav-text">
            {vet.address.city}, {vet.address.state} {vet.address.zip}
          </span>
          <span className="text-[12px] font-normal leading-5 text-pet-green pt-1">
            {vet.acceptingNewPatients ? "✓ Accepting new patients" : "Not accepting new patients"}
          </span>
        </div>
      </div>
    </div>
  );
}