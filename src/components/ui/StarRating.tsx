"use client";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StarRatingProps {
  /** Current rating value (supports decimals for future half-stars) */
  rating: number;
  /** Maximum stars to display. Default: 5 */
  max?: number;
  /** Visual size of each star. Default: "sm" */
  size?: "sm" | "md";
  /** Show empty (grey) stars for unfilled positions. Default: true */
  showEmpty?: boolean;
  className?: string;
}

// ─── Star icon paths ──────────────────────────────────────────────────────────

const STAR_PATH_SM =
  "M6.81631 0.426549C6.88573 0.265356 7.11427 0.265356 7.18369 0.426548L8.8457 4.28589C8.87465 4.35313 8.93803 4.39917 9.01092 4.40593L13.195 4.79399C13.3697 4.8102 13.4403 5.02756 13.3085 5.14339L10.1516 7.91666C10.0966 7.96497 10.0724 8.03947 10.0885 8.11089L11.0124 12.2101C11.051 12.3813 10.8661 12.5156 10.7152 12.426L7.10211 10.2806C7.03917 10.2433 6.96083 10.2433 6.89789 10.2806L3.28483 12.426C3.13393 12.5156 2.94903 12.3813 2.98761 12.2101L3.91149 8.11089C3.92758 8.03947 3.90338 7.96497 3.84838 7.91666L0.691512 5.14339C0.55966 5.02756 0.630285 4.8102 0.805039 4.79399L4.98908 4.40593C5.06197 4.39917 5.12535 4.35313 5.1543 4.28589L6.81631 0.426549Z";

const STAR_PATH_MD =
  "M7.81631 0.426548C7.88573 0.265355 8.11427 0.265356 8.18369 0.426548L10.1161 4.91374C10.145 4.98098 10.2084 5.02702 10.2813 5.03378L15.146 5.48497C15.3208 5.50118 15.3914 5.71854 15.2595 5.83437L11.5891 9.0588C11.5341 9.10712 11.5099 9.18162 11.526 9.25303L12.6002 14.0191C12.6388 14.1903 12.4539 14.3246 12.303 14.235L8.10211 11.7406C8.03917 11.7033 7.96083 11.7033 7.89789 11.7406L3.69705 14.235C3.54614 14.3246 3.36124 14.1903 3.39983 14.0191L4.474 9.25303C4.4901 9.18162 4.46589 9.10712 4.41089 9.0588L0.740455 5.83437C0.608603 5.71854 0.679229 5.50118 0.853983 5.48497L5.7187 5.03378C5.79159 5.02702 5.85497 4.98098 5.88392 4.91374L7.81631 0.426548Z";

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Star rating display — supports filled + empty stars.
 *
 * Usage:
 * ```tsx
 * // All-filled (legacy behaviour)
 * <StarRating rating={5} />
 *
 * // Partial fill with empty stars
 * <StarRating rating={4} max={5} showEmpty />
 *
 * // Larger stars
 * <StarRating rating={5} size="md" />
 * ```
 */
export function StarRating({
  rating,
  max = 5,
  size = "sm",
  showEmpty = true,
  className = "",
}: StarRatingProps) {
  const dim = size === "md" ? 16 : 14;
  const path = size === "md" ? STAR_PATH_MD : STAR_PATH_SM;

  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      aria-label={`${rating} out of ${max} stars`}
      role="img"
    >
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.round(rating);
        return (
          <svg
            key={i}
            width={dim}
            height={dim}
            viewBox={`0 0 ${dim} ${dim}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d={path}
              fill={filled ? "#FFB900" : showEmpty ? "#E9EAEE" : "#FFB900"}
            />
          </svg>
        );
      })}
    </div>
  );
}
