"use client";

/**
 * VetTabBar — thin wrapper around shared ui/TabBar.
 * Kept for backwards-compatibility so existing page imports don't break.
 */
import { TabBar } from "@/components/ui/TabBar";

const TABS = ["About", "Services", "Reviews", "Photos"];

interface VetTabBarProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

export function VetTabBar({ activeTab, onTabChange }: VetTabBarProps) {
  return (
    <TabBar
      tabs={TABS}
      activeTab={activeTab}
      onTabChange={onTabChange}
      className="py-4"
    />
  );
}