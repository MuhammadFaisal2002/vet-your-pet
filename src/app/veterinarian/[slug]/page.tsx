import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getVetBySlug, VETS } from "@/data/vets";
import { VetHeader } from "@/components/vet-listing/VetHeader";
import { VetStatsBar } from "@/components/vet-listing/VetStatsBar";
import { VetHoursCard } from "@/components/vet-listing/VetHoursCard";
import { VetLocationCard } from "@/components/vet-listing/VetLocationCard";
import { ContactVetCard } from "@/components/vet-listing/ContactVetCard";
import { ClaimThisListingCard } from "@/components/vet-listing/ClaimThisListingCard";
import { VetProfileContent } from "./VetProfileContent";

// Generate static params for all vets
export function generateStaticParams() {
  return VETS.map((vet) => ({
    slug: vet.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vet = getVetBySlug(slug);

  if (!vet) {
    return {
      title: "Veterinarian Not Found",
    };
  }

  const description = vet.about.substring(0, 160).replace(/\n/g, " ").trim();

  return {
    title: `${vet.name} | Vet Your Pet`,
    description,
    alternates: {
      canonical: `/veterinarian/${vet.slug}`,
    },
  };
}

// Page component
export default async function VetProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vet = getVetBySlug(slug);

  if (!vet) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-pet-bg font-sans">
      {/* White background */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8">
          <div className="mt-[30px]">
            <VetHeader vet={vet} />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-pet-bg py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <VetStatsBar vet={vet} />
        </div>
      </div>

      {/* Main content — #FAFAFA background */}
      <div className="bg-pet-bg">
        <div className="mx-auto max-w-7xl px-4 py-[30px] sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10">
            {/* Main content — left column (below sidebar on mobile) */}
            <div className="flex flex-1 flex-col gap-10 lg:order-1">
              <VetProfileContent vet={vet} />
            </div>

            {/* Sidebar — right column (above main on mobile) */}
            <div className="flex w-full flex-col gap-4 lg:order-2 lg:w-[356px] lg:flex-shrink-0">
              <VetHoursCard vet={vet} />
              <VetLocationCard vet={vet} />
              <ContactVetCard vet={vet} />
              <ClaimThisListingCard vet={vet} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}