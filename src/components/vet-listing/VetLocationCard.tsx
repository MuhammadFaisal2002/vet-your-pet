/**
 * VetLocationCard — thin wrapper around shared ui/MapCard.
 * Kept for backwards-compatibility so existing page imports don't break.
 */
import { MapCard, buildGoogleMapsUrl } from "@/components/ui/MapCard";
import { VetRecord } from "@/data/vet-types";

interface VetLocationCardProps {
  vet: VetRecord;
}

export function VetLocationCard({ vet }: VetLocationCardProps) {
  const address = {
    line1: vet.address.line1,
    line2: vet.address.line2,
    city: vet.address.city,
    state: vet.address.state,
    zip: vet.address.zip,
  };

  const note = vet.acceptingNewPatients
    ? "✓ Accepting new patients"
    : "Not accepting new patients";

  return (
    <MapCard
      address={address}
      googleMapsUrl={buildGoogleMapsUrl(address)}
      note={note}
    />
  );
}