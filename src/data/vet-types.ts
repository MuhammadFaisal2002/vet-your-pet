// Expanded VetRecord type definition for veterinarian profiles

export interface VetAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
}

export interface VetHours {
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
  sun: string;
}

export interface VetTeamMember {
  slug: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  specialties: string[];
}

export interface VetReview {
  author: string;
  rating: number;
  date: string;
  body: string;
}

export interface VetRecord {
  slug: string;
  name: string;
  city: string;
  stateSlug: string;
  stateAbbr: string;
  services: string[];
  photo: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  featured?: boolean;
  emergency?: boolean;
  // Expanded fields
  yearsInPractice: number;
  specialties: string[];
  insurancesAccepted: string[];
  hours: VetHours;
  address: VetAddress;
  phone: string;
  website?: string;
  email?: string;
  about: string;
  team: VetTeamMember[];
  gallery: string[];
  reviews: VetReview[];
  claimed: boolean;
  acceptingNewPatients: boolean;
}