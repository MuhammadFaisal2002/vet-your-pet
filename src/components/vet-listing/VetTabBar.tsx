"use client";

import React from "react";

const TABS = ["About", "Services", "Reviews", "Photos"];

interface VetTabBarProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

export function VetTabBar({ activeTab, onTabChange }: VetTabBarProps) {
  return (
    <div role="tablist" className="flex items-center gap-[30px] overflow-x-auto py-4">
      {TABS.map((tab, i) => {
        const isActive = i === activeTab;
        return (
          <button
            key={tab}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(i)}
            className={`flex flex-shrink-0 flex-col items-center justify-center gap-2 transition-colors ${
              isActive ? "text-pet-blue" : "text-[#ACB2BF] hover:text-pet-gray"
            }`}
          >
            <span className="whitespace-nowrap text-[14px] font-medium leading-normal">
              {tab}
            </span>
            {isActive ? (
              <div className="h-[2px] w-full rounded-full bg-pet-blue" />
            ) : (
              <div className="h-[2px] w-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}