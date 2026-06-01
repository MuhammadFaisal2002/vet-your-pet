"use client";

import { useState } from "react";
import { VetTabBar } from "./VetTabBar";
import { VetAboutSection } from "./VetAboutSection";
import { VetTeamSection } from "./VetTeamSection";
import { VetServicesGrid } from "./VetServicesGrid";
import { VetSpecialtiesSection } from "./VetSpecialtiesSection";
import { VetReviewsSection } from "./VetReviewsSection";
import { PhotoGallerySection } from "./PhotoGallerySection";
import { InsuranceAcceptedSection } from "./InsuranceAcceptedSection";
import { ArticlesByThisPracticeSection } from "./ArticlesByThisPracticeSection";
import { VetRecord } from "@/data/vet-types";

interface VetTabBarWrapperProps {
  vet: VetRecord;
}

export function VetTabBarWrapper({ vet }: VetTabBarWrapperProps) {
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
      <div className="pb-6">{renderTabContent()}</div>
    </>
  );
}