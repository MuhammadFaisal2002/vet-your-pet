"use client";

/**
 * BreederTabBar — thin wrapper around shared ui/TabBar.
 * Kept for backwards-compatibility so existing page imports don't break.
 */
import { TabBar } from "@/components/ui/TabBar";

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
    <TabBar
      tabs={TABS}
      activeTab={activeTab}
      onTabChange={onTabChange}
      className="animate-on-scroll animate-fade-in-up"
    />
  );
}
