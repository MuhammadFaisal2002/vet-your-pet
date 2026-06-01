export type SizeBand = "Toy" | "Small" | "Medium" | "Large" | "Giant";
export type EnergyBand = "Low" | "Medium" | "High";
export type SheddingBand = "None" | "Low" | "Medium" | "High";
export type GroomingBand = "Low" | "Medium" | "High";
export type TrainabilityBand = "Easy" | "Moderate" | "Challenging";

export interface TraitPill {
  label: string;
  tone: "neutral" | "akc";
}

export interface Breed {
  slug: string;
  name: string;
  aliases?: string[];
  image: string;
  group: string;
  size: SizeBand;
  energy: EnergyBand;
  shedding: SheddingBand;
  hypoallergenic: boolean;
  coat: string;
  grooming: GroomingBand;
  trainability: TrainabilityBand;
  familyRating: number;
  goodWithKids: boolean;
  apartmentFriendly: boolean;
  lifespanMin: number;
  lifespanMax: number;
  temperament: string[];
  traitPills: TraitPill[];
}

export const breeds: Breed[] = [
  {
    slug: "goldendoodle",
    name: "Goldendoodle",
    aliases: ["goldendoodle"],
    image: "/images/breeds/goldendoodle.jpg",
    group: "混合",
    size: "Medium",
    energy: "Medium",
    shedding: "Low",
    hypoallergenic: true,
    coat: "Long",
    grooming: "Medium",
    trainability: "Easy",
    familyRating: 5,
    goodWithKids: true,
    apartmentFriendly: true,
    lifespanMin: 10,
    lifespanMax: 15,
    temperament: ["Friendly", "Intelligent", "Devoted"],
    traitPills: [
      { label: "Medium", tone: "neutral" },
      { label: "Hybrid", tone: "akc" },
      { label: "Smart", tone: "neutral" },
    ],
  },
  {
    slug: "labrador-retriever",
    name: "Labrador Retriever",
    aliases: ["lab", "labrador"],
    image: "/images/breeds/labrador-retriever.jpg",
    group: "Sporting",
    size: "Large",
    energy: "High",
    shedding: "Medium",
    hypoallergenic: false,
    coat: "Short",
    grooming: "Low",
    trainability: "Easy",
    familyRating: 5,
    goodWithKids: true,
    apartmentFriendly: false,
    lifespanMin: 10,
    lifespanMax: 12,
    temperament: ["Friendly", "Active", "Outgoing"],
    traitPills: [
      { label: "Large", tone: "neutral" },
      { label: "Sporting", tone: "akc" },
      { label: "Friendly", tone: "neutral" },
    ],
  },
  {
    slug: "german-shepherd",
    name: "German Shepherd",
    aliases: ["gsd", "alsatian"],
    image: "/images/breeds/german-shepherd.jpg",
    group: "Herding",
    size: "Large",
    energy: "High",
    shedding: "High",
    hypoallergenic: false,
    coat: "Medium",
    grooming: "Medium",
    trainability: "Easy",
    familyRating: 5,
    goodWithKids: true,
    apartmentFriendly: false,
    lifespanMin: 9,
    lifespanMax: 13,
    temperament: ["Confident", "Courageous", "Smart"],
    traitPills: [
      { label: "Large", tone: "neutral" },
      { label: "Herding", tone: "akc" },
      { label: "Smart", tone: "neutral" },
    ],
  },
  {
    slug: "golden-retriever",
    name: "Golden Retriever",
    aliases: ["golden"],
    image: "/images/breeds/golden-retriever.jpg",
    group: "Sporting",
    size: "Large",
    energy: "High",
    shedding: "Medium",
    hypoallergenic: false,
    coat: "Long",
    grooming: "Medium",
    trainability: "Easy",
    familyRating: 5,
    goodWithKids: true,
    apartmentFriendly: false,
    lifespanMin: 10,
    lifespanMax: 12,
    temperament: ["Friendly", "Reliable", "Trustworthy"],
    traitPills: [
      { label: "Large", tone: "neutral" },
      { label: "Sporting", tone: "akc" },
      { label: "Reliable", tone: "neutral" },
    ],
  },
  {
    slug: "french-bulldog",
    name: "French Bulldog",
    aliases: ["frenchie", "frenchie"],
    image: "/images/breeds/french-bulldog.jpg",
    group: "Non-Sporting",
    size: "Small",
    energy: "Low",
    shedding: "Medium",
    hypoallergenic: false,
    coat: "Short",
    grooming: "Low",
    trainability: "Moderate",
    familyRating: 4,
    goodWithKids: true,
    apartmentFriendly: true,
    lifespanMin: 10,
    lifespanMax: 12,
    temperament: ["Adaptable", "Playful", "Smart"],
    traitPills: [
      { label: "Small", tone: "neutral" },
      { label: "Non-Sporting", tone: "akc" },
      { label: "Adaptable", tone: "neutral" },
    ],
  },
  {
    slug: "beagle",
    name: "Beagle",
    image: "/images/breeds/beagle.jpg",
    group: "Hound",
    size: "Small",
    energy: "High",
    shedding: "Medium",
    hypoallergenic: false,
    coat: "Short",
    grooming: "Low",
    trainability: "Moderate",
    familyRating: 4,
    goodWithKids: true,
    apartmentFriendly: true,
    lifespanMin: 10,
    lifespanMax: 15,
    temperament: ["Curious", "Friendly", "Merry"],
    traitPills: [
      { label: "Small", tone: "neutral" },
      { label: "Hound", tone: "akc" },
      { label: "Curious", tone: "neutral" },
    ],
  },
  {
    slug: "poodle",
    name: "Poodle",
    aliases: ["standard-poodle", "miniature-poodle", "toy-poodle"],
    image: "/images/breeds/poodle.jpg",
    group: "Non-Sporting",
    size: "Medium",
    energy: "Medium",
    shedding: "None",
    hypoallergenic: true,
    coat: "Curly",
    grooming: "High",
    trainability: "Easy",
    familyRating: 5,
    goodWithKids: true,
    apartmentFriendly: true,
    lifespanMin: 12,
    lifespanMax: 15,
    temperament: ["Intelligent", "Active", "Alert"],
    traitPills: [
      { label: "Medium", tone: "neutral" },
      { label: "Non-Sporting", tone: "akc" },
      { label: "Smart", tone: "neutral" },
    ],
  },
  {
    slug: "yorkshire-terrier",
    name: "Yorkshire Terrier",
    aliases: ["yorkie"],
    image: "/images/breeds/yorkshire-terrier.jpg",
    group: "Toy",
    size: "Toy",
    energy: "Medium",
    shedding: "Low",
    hypoallergenic: true,
    coat: "Long",
    grooming: "High",
    trainability: "Moderate",
    familyRating: 4,
    goodWithKids: false,
    apartmentFriendly: true,
    lifespanMin: 11,
    lifespanMax: 15,
    temperament: ["Affectionate", "Sprightly", "Tomboyish"],
    traitPills: [
      { label: "Toy", tone: "neutral" },
      { label: "Toy", tone: "akc" },
      { label: "Affectionate", tone: "neutral" },
    ],
  },
  {
    slug: "boxer",
    name: "Boxer",
    image: "/images/breeds/boxer.jpg",
    group: "Working",
    size: "Large",
    energy: "High",
    shedding: "Medium",
    hypoallergenic: false,
    coat: "Short",
    grooming: "Low",
    trainability: "Moderate",
    familyRating: 5,
    goodWithKids: true,
    apartmentFriendly: false,
    lifespanMin: 10,
    lifespanMax: 12,
    temperament: ["Bright", "Fun-Loving", "Active"],
    traitPills: [
      { label: "Large", tone: "neutral" },
      { label: "Working", tone: "akc" },
      { label: "Fun-Loving", tone: "neutral" },
    ],
  },
  {
    slug: "dachshund",
    name: "Dachshund",
    aliases: ["doxie", "wiener-dog"],
    image: "/images/breeds/dachshund.jpg",
    group: "Hound",
    size: "Small",
    energy: "Medium",
    shedding: "Medium",
    hypoallergenic: false,
    coat: "Short",
    grooming: "Low",
    trainability: "Moderate",
    familyRating: 4,
    goodWithKids: true,
    apartmentFriendly: true,
    lifespanMin: 12,
    lifespanMax: 16,
    temperament: ["Clever", "Devoted", "Lively"],
    traitPills: [
      { label: "Small", tone: "neutral" },
      { label: "Hound", tone: "akc" },
      { label: "Clever", tone: "neutral" },
    ],
  },
  {
    slug: "siberian-husky",
    name: "Siberian Husky",
    aliases: ["husky"],
    image: "/images/breeds/siberian-husky.jpg",
    group: "Working",
    size: "Medium",
    energy: "High",
    shedding: "High",
    hypoallergenic: false,
    coat: "Medium",
    grooming: "Medium",
    trainability: "Challenging",
    familyRating: 4,
    goodWithKids: true,
    apartmentFriendly: false,
    lifespanMin: 12,
    lifespanMax: 14,
    temperament: ["Loyal", "Outgoing", "Mischievous"],
    traitPills: [
      { label: "Medium", tone: "neutral" },
      { label: "Working", tone: "akc" },
      { label: "Loyal", tone: "neutral" },
    ],
  },
  {
    slug: "cavalier-king-charles-spaniel",
    name: "Cavalier King Charles Spaniel",
    aliases: ["cavalier", "ckcs"],
    image: "/images/breeds/cavalier-king-charles-spaniel.jpg",
    group: "Toy",
    size: "Small",
    energy: "Low",
    shedding: "Medium",
    hypoallergenic: false,
    coat: "Long",
    grooming: "Medium",
    trainability: "Easy",
    familyRating: 5,
    goodWithKids: true,
    apartmentFriendly: true,
    lifespanMin: 12,
    lifespanMax: 15,
    temperament: ["Affectionate", "Gentle", "Graceful"],
    traitPills: [
      { label: "Small", tone: "neutral" },
      { label: "Toy", tone: "akc" },
      { label: "Gentle", tone: "neutral" },
    ],
  },
];

export function getBreedBySlug(slug: string): Breed | undefined {
  return breeds.find(
    (b) =>
      b.slug === slug ||
      b.aliases?.some((a) => a.toLowerCase() === slug.toLowerCase())
  );
}

export function getAllBreeds(): Breed[] {
  return breeds;
}