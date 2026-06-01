import React from "react";
import { MapPin } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MapCardAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip?: string;
}

export interface MapCardProps {
  /** Full structured address */
  address: MapCardAddress;
  /** Pre-built Google Maps URL — use buildGoogleMapsUrl() helper if needed */
  googleMapsUrl?: string;
  /** Card heading. Default: "Location" */
  title?: string;
  /** Small note shown under the address (e.g. "Visitors welcome by appointment") */
  note?: string;
  /** Additional wrapper classes */
  className?: string;
}

// ─── Helper ───────────────────────────────────────────────────────────────────

/** Build a Google Maps search URL from an address object */
export function buildGoogleMapsUrl(address: MapCardAddress): string {
  const parts = [
    address.line1,
    address.line2,
    `${address.city}, ${address.state}${address.zip ? " " + address.zip : ""}`,
  ].filter(Boolean);
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parts.join(" "))}`;
}

// ─── CSS Map Mockup ───────────────────────────────────────────────────────────

function CssMapMockup({ mapsUrl, label }: { mapsUrl: string; label: string }) {
  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open map for ${label} on Google Maps`}
      className="relative block h-[200px] w-full overflow-hidden rounded-[10px] bg-[#e8eef3] group"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #eaf0f5 0%, #dde6ee 100%)" }}
        aria-hidden="true"
      />

      {/* Street grid */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0, transparent 28px, rgba(255,255,255,0.85) 28px, rgba(255,255,255,0.85) 32px), repeating-linear-gradient(90deg, transparent 0, transparent 44px, rgba(255,255,255,0.85) 44px, rgba(255,255,255,0.85) 48px)",
        }}
        aria-hidden="true"
      />

      {/* Diagonal highway accent */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 38%, #c9d6e2 38%, #c9d6e2 44%, transparent 44%)",
        }}
        aria-hidden="true"
      />

      {/* Green park block */}
      <div
        className="absolute rounded-md"
        style={{
          top: "18%", left: "62%", width: "22%", height: "30%",
          background: "linear-gradient(135deg, #cfe3cf, #b9d6b9)",
          opacity: 0.85,
        }}
        aria-hidden="true"
      />

      {/* Blue water block */}
      <div
        className="absolute"
        style={{
          bottom: "0%", left: "0%", width: "32%", height: "26%",
          background: "linear-gradient(180deg, #cfe2ef, #b6d2e4)",
          opacity: 0.9,
        }}
        aria-hidden="true"
      />

      {/* Center pin */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          <div
            className="absolute -bottom-1 w-6 h-1.5 rounded-full bg-black/20 blur-[2px]"
            aria-hidden="true"
          />
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pet-red shadow-lg ring-4 ring-white transition-transform group-hover:scale-110">
            <MapPin className="w-5 h-5 text-white" fill="white" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* Hover hint */}
      <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-white/90 text-[11px] font-medium text-brand-dark shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
        View on map →
      </div>
    </a>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Location card with a CSS-rendered map mockup (no external deps), address
 * display, and Google Maps deep-link.
 *
 * Usage:
 * ```tsx
 * <MapCard
 *   address={{ line1: "123 Main St", city: "Austin", state: "TX", zip: "78701" }}
 *   note="Visitors welcome by appointment"
 * />
 * ```
 */
export function MapCard({
  address,
  googleMapsUrl,
  title = "Location",
  note,
  className = "",
}: MapCardProps) {
  const mapsUrl =
    googleMapsUrl ?? buildGoogleMapsUrl(address);

  const displayLabel = `${address.line1}, ${address.city}, ${address.state}`;

  return (
    <div
      className={`animate-on-scroll animate-fade-in-right delay-400 flex flex-col gap-6 rounded-[14px] border border-pet-stroke bg-white p-6 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-medium leading-8 text-brand-dark">
          {title}
        </h3>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[14px] font-medium text-pet-blue hover:underline"
        >
          <MapPin className="w-4 h-4" />
          Open map
        </a>
      </div>

      {/* CSS Map */}
      <CssMapMockup mapsUrl={mapsUrl} label={displayLabel} />

      {/* Address */}
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 flex-shrink-0 text-nav-text mt-0.5" />
        <div className="flex flex-col gap-1">
          <span className="text-[14px] font-normal leading-6 text-nav-text">
            {address.line1}
          </span>
          {address.line2 && (
            <span className="text-[14px] font-normal leading-6 text-nav-text">
              {address.line2}
            </span>
          )}
          <span className="text-[14px] font-normal leading-6 text-nav-text">
            {address.city}, {address.state}
            {address.zip ? ` ${address.zip}` : ""}
          </span>
          {note && (
            <span className="text-[12px] font-normal leading-5 text-pet-green pt-1">
              {note}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
