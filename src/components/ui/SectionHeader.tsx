// ─── Types ────────────────────────────────────────────────────────────────────

export interface SectionHeaderProps {
  /** Small coloured label above the title (e.g. "Events & Competitions") */
  eyebrow?: string;
  /** Main heading text — rendered as <h2> */
  title: string;
  /** Optional supporting copy below the title */
  subtitle?: string;
  /** Text alignment. Default: "left" */
  align?: "left" | "center";
  /** Extra wrapper classes */
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Standard section header: eyebrow label + h2 title + subtitle.
 * Covers the repeated pattern used across 19+ sections sitewide.
 *
 * Usage:
 * ```tsx
 * <SectionHeader
 *   eyebrow="Spotlight Events"
 *   title="Featured Dog Championships"
 *   subtitle="Top conformation evaluations and historic cups you shouldn't miss."
 *   align="left"
 * />
 *
 * <SectionHeader
 *   eyebrow="Location Map Directory"
 *   title="Browse Events by US State"
 *   align="center"
 * />
 * ```
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignClass =
    align === "center"
      ? "flex flex-col items-center text-center"
      : "flex flex-col items-start";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-3 tracking-wide uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-brand-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="font-poppins text-xs sm:text-sm text-nav-text mt-1 max-w-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
