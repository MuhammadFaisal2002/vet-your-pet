import type { Breed, EnergyBand, SheddingBand, TrainabilityBand, SizeBand } from "@/data/breeds";

export const COMPARE_MAX_SLOTS = 3;
export const COMPARE_MIN_TO_RENDER = 2;
export const SEARCH_DROPDOWN_MAX = 8;
export const SEARCH_DEBOUNCE_MS = 120;
export const MATCHUP_SEPARATOR = "-vs-";

// Scoring helpers for verdicts
const ENERGY_SCORE: Record<EnergyBand, number> = { Low: 1, Medium: 2, High: 3 };
const SHED_SCORE: Record<SheddingBand, number> = { None: 0, Low: 1, Medium: 2, High: 3 };
const TRAIN_SCORE: Record<TrainabilityBand, number> = { Easy: 3, Moderate: 2, Challenging: 1 };
const SIZE_SCORE: Record<SizeBand, number> = { Toy: 1, Small: 2, Medium: 3, Large: 4, Giant: 5 };

function pickWinners<T>(items: T[], scorer: (item: T) => number): T[] {
  if (items.length === 0) return [];
  let top = -Infinity;
  for (const item of items) top = Math.max(top, scorer(item));
  return items.filter((item) => scorer(item) === top);
}

export interface Verdict {
  id: string;
  label: string;
  emoji: string;
  winners: Breed[];
  reasoning: string;
}

export function bestForActive(breeds: Breed[]): Verdict {
  const score = (b: Breed) =>
    ENERGY_SCORE[b.energy] * 3 + TRAIN_SCORE[b.trainability] + SIZE_SCORE[b.size] * 0.5;
  const winners = pickWinners(breeds, score);
  return {
    id: "active-families",
    label: "Best for active families",
    emoji: "🏃",
    winners,
    reasoning: winners.length
      ? `${winners.length === 1 ? winners[0].name + " has " : "Both have "}the energy and trainability to keep up with hikes, runs, and active days outdoors.`
      : "Not enough data to call this one.",
  };
}

export function bestForApartments(breeds: Breed[]): Verdict {
  const score = (b: Breed) =>
    (b.apartmentFriendly ? 5 : 0) +
    (6 - SIZE_SCORE[b.size]) +
    (4 - ENERGY_SCORE[b.energy]);
  const winners = pickWinners(breeds, score);
  return {
    id: "apartments",
    label: "Best for apartments",
    emoji: "🛋️",
    winners,
    reasoning: winners.length
      ? `${winners.length === 1 ? winners[0].name + " is " : "These breeds are "}small enough and chill enough to thrive in tight quarters.`
      : "Not enough data to call this one.",
  };
}

export function bestForFirstTimeOwners(breeds: Breed[]): Verdict {
  const score = (b: Breed) =>
    TRAIN_SCORE[b.trainability] * 3 +
    b.familyRating +
    (4 - ENERGY_SCORE[b.energy]) +
    (b.goodWithKids ? 1 : 0);
  const winners = pickWinners(breeds, score);
  return {
    id: "first-time-owners",
    label: "Best for first-time owners",
    emoji: "🎓",
    winners,
    reasoning: winners.length
      ? `${winners.length === 1 ? winners[0].name + " is " : "Both are "}easy to train, forgiving with new habits, and friendly with the whole household.`
      : "Not enough data to call this one.",
  };
}

export function bestForAllergies(breeds: Breed[]): Verdict {
  const score = (b: Breed) => (b.hypoallergenic ? 10 : 0) + (4 - SHED_SCORE[b.shedding]);
  const winners = pickWinners(breeds, score);
  return {
    id: "allergies",
    label: "Best for allergy-prone homes",
    emoji: "🤧",
    winners,
    reasoning: winners.length
      ? `${winners.length === 1 ? winners[0].name + " sheds " : "Both shed "}minimally and are commonly tolerated by allergy sufferers.`
      : "Not enough data to call this one.",
  };
}

export function bestForKids(breeds: Breed[]): Verdict {
  const score = (b: Breed) =>
    (b.goodWithKids ? 5 : 0) + b.familyRating + TRAIN_SCORE[b.trainability] * 0.5;
  const winners = pickWinners(breeds, score);
  return {
    id: "kids",
    label: "Best with kids",
    emoji: "🧒",
    winners,
    reasoning: winners.length
      ? `${winners.length === 1 ? winners[0].name + " has " : "Both have "}the patience, sturdiness, and friendly nature that families with young kids need.`
      : "Not enough data to call this one.",
  };
}

export function bestForLowMaintenance(breeds: Breed[]): Verdict {
  const score = (b: Breed) =>
    (4 - ENERGY_SCORE[b.energy]) * 0.5 +
    (4 - SHED_SCORE[b.shedding]) +
    (b.grooming === "Low" ? 3 : b.grooming === "Medium" ? 1.5 : 0) +
    TRAIN_SCORE[b.trainability];
  const winners = pickWinners(breeds, score);
  return {
    id: "low-maintenance",
    label: "Best for low maintenance",
    emoji: "🧘",
    winners,
    reasoning: winners.length
      ? `${winners.length === 1 ? winners[0].name + " is " : "Both are "}easy keepers — minimal grooming, low shedding, and easy to train.`
      : "Not enough data to call this one.",
  };
}

export function computeAllVerdicts(breeds: Breed[]): Verdict[] {
  return [
    bestForActive(breeds),
    bestForApartments(breeds),
    bestForFirstTimeOwners(breeds),
    bestForAllergies(breeds),
    bestForKids(breeds),
    bestForLowMaintenance(breeds),
  ];
}

// URL serialization / parsing
export function serializeMatchup(breeds: Breed[]): string {
  return breeds.map((b) => b.slug).join(MATCHUP_SEPARATOR);
}

export function parseMatchupSlug(slug: string): string[] {
  const parts = slug.split(MATCHUP_SEPARATOR);
  return parts.filter((p) => p.length > 0);
}

export function buildCompareUrl(breeds: Breed[]): string {
  if (breeds.length === 0) return "/breeds/compare";
  const slugs = breeds.map((b) => b.slug).join(",");
  return `/breeds/compare?breeds=${slugs}`;
}