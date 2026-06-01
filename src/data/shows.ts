export interface DogShow {
  slug: string;
  name: string;
  organization: string;
  dates: string;
  monthIndex: number; // 0-indexed (e.g. 5 = June, 6 = July)
  days: number[]; // Array of active days (e.g. [15, 16])
  city: string;
  stateAbbr: string;
  stateName: string;
  venue: string;
  entryFee: number;
  photo: string;
  club: string;
  featured: boolean;
  details: string;
}

export const DOG_SHOWS: DogShow[] = [
  {
    slug: "westminster-kennel-club-dog-show",
    name: "150th Westminster Kennel Club Dog Show",
    organization: "Westminster Kennel Club (WKC)",
    dates: "June 15-16, 2026",
    monthIndex: 5,
    days: [15, 16],
    city: "New York",
    stateAbbr: "NY",
    stateName: "New York",
    venue: "Madison Square Garden & Billie Jean King National Tennis Center",
    entryFee: 75,
    photo: "https://images.pexels.com/photos/10163359/pexels-photo-10163359.jpeg?auto=compress&cs=tinysrgb&w=600",
    club: "Westminster Kennel Club",
    featured: true,
    details: "The most prestigious dog show in America. Over 2,500 champion dogs from across the globe compete across seven breed groups, culminating in the historic Best in Show selection under the lights at Madison Square Garden.",
  },
  {
    slug: "san-diego-kennel-club-conformation-show",
    name: "San Diego Kennel Club Summer Conformation Show",
    organization: "American Kennel Club (AKC)",
    dates: "July 11-12, 2026",
    monthIndex: 6,
    days: [11, 12],
    city: "San Diego",
    stateAbbr: "CA",
    stateName: "California",
    venue: "San Diego Convention Center",
    entryFee: 35,
    photo: "https://images.pexels.com/photos/30502950/pexels-photo-30502950.jpeg?auto=compress&cs=tinysrgb&w=600",
    club: "San Diego Kennel Club",
    featured: true,
    details: "Southern California's leading conformation event. Featuring standard breed classes, obedience test rings, rally trials, and special junior handler showmanship showcases.",
  },
  {
    slug: "lone-star-state-classic-dog-show",
    name: "Lone Star State Classic Dog Show",
    organization: "American Kennel Club (AKC)",
    dates: "June 27-28, 2026",
    monthIndex: 5,
    days: [27, 28],
    city: "Austin",
    stateAbbr: "TX",
    stateName: "Texas",
    venue: "Austin Exposition Center",
    entryFee: 30,
    photo: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
    club: "Texas Kennel Club",
    featured: false,
    details: "A summer classic in Central Texas. Includes conformation breed evaluations, rally competition majors, and educational breed grooming seminars open to the public.",
  },
  {
    slug: "great-lakes-obedience-agility-trial",
    name: "Great Lakes Obedience & Agility Trial",
    organization: "American Kennel Club (AKC)",
    dates: "August 08-09, 2026",
    monthIndex: 7,
    days: [8, 9],
    city: "Chicago",
    stateAbbr: "IL",
    stateName: "Illinois",
    venue: "McCormick Place Center Hall",
    entryFee: 40,
    photo: "https://images.pexels.com/photos/33385817/pexels-photo-33385817.jpeg?auto=compress&cs=tinysrgb&w=600",
    club: "Windy City Dog Club",
    featured: false,
    details: "A high-speed agility and performance trial. Watch dogs race through complex obstacle courses, standard agility runs, dock diving, and precision obedience trials.",
  },
  {
    slug: "florida-sunshine-state-showdown",
    name: "Florida Sunshine State Retriever & Sporting Show",
    organization: "American Kennel Club (AKC)",
    dates: "September 12-13, 2026",
    monthIndex: 8,
    days: [12, 13],
    city: "Orlando",
    stateAbbr: "FL",
    stateName: "Florida",
    venue: "Orange County Convention Center",
    entryFee: 45,
    photo: "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=600",
    club: "Sunshine State Retriever Club",
    featured: false,
    details: "Focused on sporting group breeds. Includes specialty retriever classes, dock-jumping exhibitions, and hunt test simulations alongside conformation rings.",
  },
  {
    slug: "rocky-mountain-working-dog-specialty",
    name: "Rocky Mountain Working Dog Specialty",
    organization: "American Kennel Club (AKC)",
    dates: "July 25-26, 2026",
    monthIndex: 6,
    days: [25, 26],
    city: "Denver",
    stateAbbr: "CO",
    stateName: "Colorado",
    venue: "Denver Coliseum Arena",
    entryFee: 30,
    photo: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600",
    club: "Rocky Mountain Working Dog Club",
    featured: false,
    details: "Exclusively showcasing working group breeds. Events include draft cart pulls, guardian breed conformation judging, and intensive tracking scent-work trials.",
  },
  {
    slug: "pacific-northwest-autumn-classic",
    name: "Pacific Northwest Autumn Classic",
    organization: "American Kennel Club (AKC)",
    dates: "October 03-04, 2026",
    monthIndex: 9,
    days: [3, 4],
    city: "Seattle",
    stateAbbr: "WA",
    stateName: "Washington",
    venue: "Seattle Center Exhibition Hall",
    entryFee: 35,
    photo: "https://images.pexels.com/photos/6816858/pexels-photo-6816858.jpeg?auto=compress&cs=tinysrgb&w=600",
    club: "Evergreen State Kennel Club",
    featured: false,
    details: "A fall tradition in the Pacific Northwest, featuring conformation judging for working, herding, and sporting dogs with full spectator galleries.",
  },
  {
    slug: "empire-state-autumn-specialties",
    name: "Empire State Autumn Specialties",
    organization: "American Kennel Club (AKC)",
    dates: "October 17-18, 2026",
    monthIndex: 9,
    days: [17, 18],
    city: "Albany",
    stateAbbr: "NY",
    stateName: "New York",
    venue: "Empire State Plaza Concourse",
    entryFee: 30,
    photo: "https://images.pexels.com/photos/6235241/pexels-photo-6235241.jpeg?auto=compress&cs=tinysrgb&w=600",
    club: "Empire State Kennel Club",
    featured: false,
    details: "Specialty events for toys, terriers, and non-sporting dogs. Includes conformation judging rings and AKC trick dog title evaluations.",
  },
];

// ─── State slug map ─────────────────────────────────────────────────────────
// Maps a URL-safe slug (e.g. "new-york") to the stateAbbr used in DOG_SHOWS.
export const STATE_SLUG_MAP: Record<string, { abbr: string; name: string }> = {
  "california":  { abbr: "CA", name: "California" },
  "colorado":    { abbr: "CO", name: "Colorado" },
  "florida":     { abbr: "FL", name: "Florida" },
  "illinois":    { abbr: "IL", name: "Illinois" },
  "new-york":    { abbr: "NY", name: "New York" },
  "texas":       { abbr: "TX", name: "Texas" },
  "washington":  { abbr: "WA", name: "Washington" },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getAllShows(): DogShow[] {
  return DOG_SHOWS;
}

export function getFeaturedShows(): DogShow[] {
  return DOG_SHOWS.filter((s) => s.featured);
}

/** Returns all state slugs — used for generateStaticParams in the by-state route. */
export function getAllStatesSlugs(): string[] {
  return Object.keys(STATE_SLUG_MAP);
}

/** Returns shows for a given state slug, or null if slug is unknown. */
export function getShowsByStateSlug(stateSlug: string): {
  shows: DogShow[];
  stateName: string;
  stateAbbr: string;
} | null {
  const entry = STATE_SLUG_MAP[stateSlug];
  if (!entry) return null;
  const shows = DOG_SHOWS.filter((s) => s.stateAbbr === entry.abbr);
  return { shows, stateName: entry.name, stateAbbr: entry.abbr };
}

/** Returns all states that have at least one show, with counts. */
export function getStatesWithShowCounts(): Array<{ slug: string; name: string; abbr: string; count: number }> {
  return Object.entries(STATE_SLUG_MAP).map(([slug, { abbr, name }]) => ({
    slug,
    name,
    abbr,
    count: DOG_SHOWS.filter((s) => s.stateAbbr === abbr).length,
  }));
}
