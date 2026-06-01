/**
 * LocationCard — thin wrapper around shared ui/MapCard.
 * Kept for backwards-compatibility so existing page imports don't break.
 *
 * Upgraded: now uses the CSS street-grid map mockup (no external image dep).
 */
import { MapCard } from "@/components/ui/MapCard";
import { BreederRecord } from "@/data/breeders";

export function LocationCard({ breeder }: { breeder?: BreederRecord }) {
  const address = breeder
    ? {
        line1: `${breeder.city}, ${breeder.state}`,
        city: breeder.city,
        state: breeder.state,
      }
    : {
        line1: "1234 Valley Road",
        city: "Austin",
        state: "TX",
        zip: "78701",
      };

  return (
    <MapCard
      address={address}
      note="Visitors welcome by appointment"
    />
  );
}
