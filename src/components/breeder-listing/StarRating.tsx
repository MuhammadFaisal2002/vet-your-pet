/**
 * StarRating — re-export from shared ui/StarRating.
 * Kept for backwards-compatibility so existing imports from this path work.
 *
 * Legacy usage: <StarRating count={5} size="sm" />
 * New usage:    <StarRating rating={4} max={5} size="sm" showEmpty />
 */
export { StarRating } from "@/components/ui/StarRating";
export type { StarRatingProps } from "@/components/ui/StarRating";
