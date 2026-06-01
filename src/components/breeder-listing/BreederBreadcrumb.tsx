/**
 * BreederBreadcrumb — thin wrapper around the shared ui/Breadcrumb.
 * Kept for backwards-compatibility so existing page imports don't break.
 */
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreederRecord } from "@/data/breeders";

export function BreederBreadcrumb({ breeder }: { breeder?: BreederRecord }) {
  const name = breeder ? breeder.name : "Golden Valley Doodles";
  const stateLabel = breeder ? breeder.state : "Goldendoodle";
  const stateHref = breeder
    ? `/breeders/${breeder.state.toLowerCase()}`
    : "/breeds/goldendoodle";

  return (
    <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Breeders", href: "/breeders" },
        { label: stateLabel, href: stateHref },
        { label: name, isActive: true },
      ]}
    />
  );
}
