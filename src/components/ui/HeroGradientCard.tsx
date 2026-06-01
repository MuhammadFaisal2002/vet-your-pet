import React, { ReactNode } from "react";

export interface HeroGradientCardProps {
  /** Content for the left column (usually an image, avatar, or state icon block) */
  leftContent: ReactNode;
  /** Content for the middle column (usually the main heading, badges, and details) */
  middleContent: ReactNode;
  /** Content for the right column (usually contact info, quick links, or CTA) */
  rightContent: ReactNode;
  /** Optional extra classes to apply to the outer wrapper */
  className?: string;
}

/**
 * A highly reusable premium hero card featuring a subtle gradient background,
 * rounded corners, and a strict 3-column responsive flex layout.
 * Used for Breeder Profiles, Vet Profiles, and State Directories.
 */
export function HeroGradientCard({
  leftContent,
  middleContent,
  rightContent,
  className = "",
}: HeroGradientCardProps) {
  return (
    <div
      className={`animate-on-scroll animate-fade-in-down w-full overflow-hidden rounded-[20px] border border-pet-stroke ${className}`}
      style={{
        background: "linear-gradient(270deg, #F6F5F4 0%, #F8F6F5 100%)",
      }}
    >
      <div className="flex flex-col gap-6 p-[30px] md:flex-row md:items-stretch md:gap-0 md:p-0">
        {/* Left Column (Image / Avatar / Icon) */}
        <div className="flex-shrink-0 md:p-[30px] flex justify-center">
          {leftContent}
        </div>

        {/* Middle Column (Main Info) */}
        <div className="flex flex-1 flex-col justify-center gap-5 md:py-[34px] md:pr-6">
          {middleContent}
        </div>

        {/* Right Column (Contact / Actions) */}
        <div className="flex flex-col justify-end gap-5 border-t border-[#E4DFDC] py-5 md:border-l md:border-t-0 md:px-10 md:py-5 min-w-[220px]">
          {rightContent}
        </div>
      </div>
    </div>
  );
}
