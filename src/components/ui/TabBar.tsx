"use client";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TabBarProps {
  /** Array of tab label strings */
  tabs: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
  /** Extra wrapper classes (e.g. animation utilities) */
  className?: string;
  /** Colour of the active tab + underline. Default: "blue" */
  accentColor?: "blue" | "red";
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Generic horizontal tab bar with animated blue/red underline.
 *
 * Usage:
 * ```tsx
 * const TABS = ["About", "Services", "Reviews", "Photos"];
 * const [active, setActive] = useState(0);
 *
 * <TabBar tabs={TABS} activeTab={active} onTabChange={setActive} />
 * ```
 */
export function TabBar({
  tabs,
  activeTab,
  onTabChange,
  className = "",
  accentColor = "blue",
}: TabBarProps) {
  const activeTextColor =
    accentColor === "red" ? "text-brand-red" : "text-pet-blue";
  const activeBarColor =
    accentColor === "red" ? "bg-brand-red" : "bg-pet-blue";

  return (
    <div
      role="tablist"
      className={`flex items-center gap-[30px] overflow-x-auto ${className}`}
    >
      {tabs.map((tab, i) => {
        const isActive = i === activeTab;
        return (
          <button
            key={tab}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(i)}
            className={`tab-animate flex flex-shrink-0 flex-col items-center justify-center gap-2 pt-[10px] transition-colors ${
              isActive
                ? `${activeTextColor} active`
                : "text-[#ACB2BF] hover:text-pet-gray"
            }`}
          >
            <div className="px-[10px]">
              <span className="whitespace-nowrap text-[14px] font-medium leading-normal">
                {tab}
              </span>
            </div>
            {/* Active underline / invisible spacer */}
            <div
              className={`h-[2px] w-full rounded-full ${
                isActive ? activeBarColor : ""
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
