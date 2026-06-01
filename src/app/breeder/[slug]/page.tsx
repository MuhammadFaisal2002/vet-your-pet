"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { BREEDERS } from "@/data/breeders";
import { AboutSection } from "@/components/breeder-listing/AboutSection";
import { ParentDogsSection } from "@/components/breeder-listing/ParentDogsSection";
import { AvailablePuppiesSection } from "@/components/breeder-listing/AvailablePuppiesSection";
import { ContactBreederCard } from "@/components/breeder-listing/ContactBreederCard";
import { BreederDetailsCard } from "@/components/breeder-listing/BreederDetailsCard";
import { VerifiedBreederCard } from "@/components/breeder-listing/VerifiedBreederCard";
import { LocationCard } from "@/components/breeder-listing/LocationCard";
import { BreederHeader } from "@/components/breeder-listing/BreederHeader";
import { BreederBreadcrumb } from "@/components/breeder-listing/BreederBreadcrumb";
import { BreederTabBar } from "@/components/breeder-listing/BreederTabBar";
import { ReviewsSection } from "@/components/breeder-listing/ReviewsSection";
import { HealthCertificationsSection } from "@/components/breeder-listing/HealthCertificationsSection";
import { AdoptionProcessSection } from "@/components/breeder-listing/AdoptionProcessSection";

export default function BreederProfilePage() {
  const [activeTab, setActiveTab] = useState(0);
  const params = useParams();
  const slug = params?.slug as string;

  const breeder = BREEDERS.find((b) => b.slug === slug);

  if (!breeder) {
    // If not in database, fall back or return notFound
    notFound();
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <>
            <AboutSection breeder={breeder} />
            <ParentDogsSection />
          </>
        );
      case 1:
        return <AvailablePuppiesSection />;
      case 2:
        return <ReviewsSection />;
      case 3:
        return <HealthCertificationsSection />;
      case 4:
        return <AdoptionProcessSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-pet-bg font-sans">
      {/* Breadcrumb + Breeder Hero Header — white background */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1170px] px-4 pb-10 pt-8 sm:px-6 lg:px-8">
          <BreederBreadcrumb breeder={breeder} />
          <div className="mt-[30px]">
            <BreederHeader breeder={breeder} />
          </div>
        </div>
      </div>

      {/* Tab bar — white background with bottom border */}
      <div className="border-b border-pet-stroke bg-white">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-8">
          <BreederTabBar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>

      {/* Main content — #FAFAFA background */}
      <div className="bg-pet-bg">
        <div className="mx-auto max-w-[1170px] px-4 py-[30px] sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10">
            {/* Main content — left column */}
            <div className="flex flex-col gap-10 lg:flex-1">
              {renderTabContent()}
            </div>

            {/* Sidebar — right column */}
            <div className="flex w-full flex-col gap-4 lg:w-[356px] lg:flex-shrink-0">
              <ContactBreederCard />
              <BreederDetailsCard />
              <VerifiedBreederCard />
              <LocationCard breeder={breeder} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
