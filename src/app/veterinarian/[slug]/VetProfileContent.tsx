"use client";

import React, { useState } from "react";
import { VetTabBar } from "@/components/vet-listing/VetTabBar";
import { VetAboutSection } from "@/components/vet-listing/VetAboutSection";
import { VetTeamSection } from "@/components/vet-listing/VetTeamSection";
import { VetServicesGrid } from "@/components/vet-listing/VetServicesGrid";
import { VetSpecialtiesSection } from "@/components/vet-listing/VetSpecialtiesSection";
import { VetReviewsSection } from "@/components/vet-listing/VetReviewsSection";
import { PhotoGallerySection } from "@/components/vet-listing/PhotoGallerySection";
import { InsuranceAcceptedSection } from "@/components/vet-listing/InsuranceAcceptedSection";
import { ArticlesByThisPracticeSection } from "@/components/vet-listing/ArticlesByThisPracticeSection";
import { VetRecord } from "@/data/vet-types";

interface VetProfileContentProps {
  vet: VetRecord;
}

export function VetProfileContent({ vet }: VetProfileContentProps) {
  const [activeTab, setActiveTab] = useState(0);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0: // About + Team
        return (
          <>
            <VetAboutSection vet={vet} />
            <VetTeamSection vet={vet} />
          </>
        );
      case 1: // Services
        return (
          <>
            <VetServicesGrid vet={vet} />
            <VetSpecialtiesSection vet={vet} />
            <InsuranceAcceptedSection vet={vet} />
          </>
        );
      case 2: // Reviews
        return <VetReviewsSection vet={vet} />;
      case 3: // Photos
        return (
          <>
            <PhotoGallerySection vet={vet} />
            <ArticlesByThisPracticeSection vetName={vet.name} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <VetTabBar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="mt-6">{renderTabContent()}</div>
    </>
  );
}