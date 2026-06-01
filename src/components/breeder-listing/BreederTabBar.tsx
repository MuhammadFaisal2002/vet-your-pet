"use client";

import React from "react";

export const TABS = [
  "Profile",
  "Available Puppies",
  "Reviews",
  "Health & Certifications",
  "Adoption Process",
];

interface BreederTabBarProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

export function BreederTabBar({ activeTab, onTabChange }: BreederTabBarProps) {
  return (
    <div className="animate-on-scroll animate-fade-in-up flex items-center gap-[30px] overflow-x-auto">
      {TABS.map((tab, i) => {
        const isActive = i === activeTab;
        return (
          <button
            key={tab}
            onClick={() => onTabChange(i)}
            className={`tab-animate flex flex-shrink-0 flex-col items-center justify-center gap-3 pt-[10px] transition-colors ${
              isActive ? "text-pet-blue active" : "text-[#ACB2BF] hover:text-pet-gray"
            }`}
          >
            <div className="px-[10px]">
              <span className="whitespace-nowrap text-[14px] font-medium leading-normal">
                {tab}
              </span>
            </div>

            {/* Active underline */}
            {isActive ? (
              <div className="h-[2px] w-full rounded-full bg-pet-blue" />
            ) : (
              /* Invisible spacer to keep tab height consistent */
              <div className="h-[2px] w-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
