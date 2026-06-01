"use client";

import type { Breed } from "@/data/breeds";

interface ComparisonTableRowProps {
  label: string;
  values: (string | number | boolean)[];
  shaded?: boolean;
}

function ComparisonTableRow({ label, values, shaded = false }: ComparisonTableRowProps) {
  return (
    <div
      className={`flex items-center justify-between px-3 py-2.5 ${
        shaded ? "bg-brand-gray-bg" : "bg-white"
      }`}
    >
      <span className="text-[#5A6376] font-medium text-sm">{label}</span>
      <div className="flex flex-1 justify-end gap-4 md:gap-8">
        {values.map((val, idx) => {
          // Format boolean as Yes/No
          let displayVal: React.ReactNode = val;
          if (typeof val === "boolean") {
            displayVal = val ? (
              <span className="text-pet-check-green">✓ Yes</span>
            ) : (
              <span className="text-pet-red">✗ No</span>
            );
          }
          // Format Energy with colored badges
          if (label === "Energy" && typeof val === "string") {
            const energyColors: Record<string, { bg: string; text: string }> = {
              Low: { bg: "#E8F5EC", text: "#2B7A3B" },
              Medium: { bg: "#EFF3FF", text: "#4A5FAD" },
              High: { bg: "#FCEBE6", text: "#D93F53" },
            };
            const colors = energyColors[val] || { bg: "#E8ECF0", text: "#747784" };
            displayVal = (
              <span
                className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium"
                style={{ backgroundColor: colors.bg, color: colors.text }}
              >
                {val}
              </span>
            );
          }
          return (
            <span key={idx} className="text-brand-dark text-sm text-right min-w-[80px]">
              {displayVal}
            </span>
          );
        })}
      </div>
    </div>
  );
}

interface ComparisonTableProps {
  breeds: Breed[];
}

const ATTRIBUTE_ROWS = [
  { key: "group", label: "AKC Group" },
  { key: "size", label: "Size" },
  { key: "energy", label: "Energy" },
  { key: "shedding", label: "Shedding" },
  { key: "hypoallergenic", label: "Hypoallergenic" },
  { key: "coat", label: "Coat Type" },
  { key: "grooming", label: "Grooming Needs" },
  { key: "trainability", label: "Trainability" },
  { key: "lifespan", label: "Lifespan" },
  { key: "apartmentFriendly", label: "Apartment Friendly" },
  { key: "goodWithKids", label: "Good with Kids" },
  { key: "familyRating", label: "Family Rating" },
];

export default function ComparisonTable({ breeds }: ComparisonTableProps) {
  if (breeds.length < 2) return null;

  const getValue = (breed: Breed, key: string): string | number | boolean => {
    switch (key) {
      case "group":
        return breed.group;
      case "size":
        return breed.size;
      case "energy":
        return breed.energy;
      case "shedding":
        return breed.shedding;
      case "hypoallergenic":
        return breed.hypoallergenic;
      case "coat":
        return breed.coat;
      case "grooming":
        return breed.grooming;
      case "trainability":
        return breed.trainability;
      case "lifespan":
        return `${breed.lifespanMin}–${breed.lifespanMax} years`;
      case "apartmentFriendly":
        return breed.apartmentFriendly;
      case "goodWithKids":
        return breed.goodWithKids;
      case "familyRating":
        return breed.familyRating;
      default:
        return "";
    }
  };

  return (
    <section className="w-full py-10 md:py-14 bg-white">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Table header */}
        <div className="flex items-center gap-4 pb-4 border-b border-[#EBEBEB]">
          <div className="w-24 flex-shrink-0" />
          {breeds.map((breed) => (
            <div key={breed.slug} className="flex-1 min-w-[80px]">
              <h3 className="font-poppins font-semibold text-base text-brand-dark truncate">
                {breed.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Table rows */}
        {ATTRIBUTE_ROWS.map((row, idx) => (
          <ComparisonTableRow
            key={row.key}
            label={row.label}
            values={breeds.map((breed) => getValue(breed, row.key))}
            shaded={idx % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}