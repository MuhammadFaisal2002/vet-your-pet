// Veterinary services taxonomy — used by the Vets Hub "Browse by Service" section
// and (future) /veterinarians/services/[slug] pages.

export interface ServiceRecord {
  slug: string;
  label: string;
  icon: string; // lucide-react icon name (resolved client-side)
  description: string;
}

export const VET_SERVICES: ServiceRecord[] = [
  {
    slug: "wellness",
    label: "Wellness & Preventive",
    icon: "Stethoscope",
    description: "Annual exams, vaccinations, and routine checkups to keep your pet healthy.",
  },
  {
    slug: "dental",
    label: "Dental Care",
    icon: "Smile",
    description: "Cleanings, extractions, and dental imaging for cats and dogs.",
  },
  {
    slug: "emergency",
    label: "Emergency & Urgent Care",
    icon: "Siren",
    description: "24/7 emergency clinics and urgent-care providers for acute issues.",
  },
  {
    slug: "surgery",
    label: "Surgery",
    icon: "Scissors",
    description: "Spay/neuter, orthopedic, soft-tissue, and specialty surgical procedures.",
  },
  {
    slug: "dermatology",
    label: "Dermatology",
    icon: "Layers",
    description: "Allergy testing, skin conditions, and chronic dermatologic care.",
  },
  {
    slug: "behavior",
    label: "Behavior & Training",
    icon: "Brain",
    description: "Behavior consults, anxiety treatment, and certified trainer referrals.",
  },
  {
    slug: "senior",
    label: "Senior Care",
    icon: "Heart",
    description: "Geriatric medicine, mobility support, and end-of-life care.",
  },
  {
    slug: "exotic",
    label: "Exotic Pets",
    icon: "Bird",
    description: "Birds, reptiles, rabbits, and other exotic species — by specialist clinics.",
  },
];

export function getServiceBySlug(slug: string): ServiceRecord | undefined {
  return VET_SERVICES.find((s) => s.slug === slug);
}
