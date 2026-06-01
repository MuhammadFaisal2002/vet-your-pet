/**
 * VetBreadcrumb — thin wrapper around the shared ui/Breadcrumb.
 * Kept for backwards-compatibility so existing page imports don't break.
 */
import { Breadcrumb } from "@/components/ui/Breadcrumb";

interface VetBreadcrumbProps {
  state: string;
  stateSlug: string;
  city: string;
  name: string;
}

export function VetBreadcrumb({ state, stateSlug, city, name }: VetBreadcrumbProps) {
  return (
    <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Veterinarians", href: "/veterinarians" },
        { label: state, href: `/veterinarians/${stateSlug}` },
        { label: city },
        { label: name, isActive: true },
      ]}
    />
  );
}