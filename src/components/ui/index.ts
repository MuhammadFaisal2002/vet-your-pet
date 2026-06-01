/**
 * @/components/ui — Shared reusable UI component library
 *
 * Usage:
 *   import { Breadcrumb, StarRating, TabBar, MapCard, SectionHeader } from "@/components/ui";
 */
export { Breadcrumb } from "./Breadcrumb";
export type { BreadcrumbItem, BreadcrumbProps } from "./Breadcrumb";

export { StarRating } from "./StarRating";
export type { StarRatingProps } from "./StarRating";

export { TabBar } from "./TabBar";
export type { TabBarProps } from "./TabBar";

export { MapCard, buildGoogleMapsUrl } from "./MapCard";
export type { MapCardAddress, MapCardProps } from "./MapCard";

export * from "./Breadcrumb";
export * from "./SectionHeader";
export * from "./HeroGradientCard";
export type { SectionHeaderProps } from "./SectionHeader";
export { PhotoGallery } from "./PhotoGallery";
export type { PhotoGalleryProps } from "./PhotoGallery";

