import { breeds, Breed } from '@/data/breeds';
import { QUIZ_WEIGHTS, REASONING_FRAGMENTS } from './breed-quiz-data';

export interface QuizResult {
  slug: string;
  name: string;
  image: string;
  percent: number;
  reasoning: string;
}

interface ScoreContribution {
  questionId: string;
  optionId: string;
  weight: number;
  fragment: string;
}

function normalizeScore(maxPossible: number, actualScore: number): number {
  if (maxPossible <= 0) return 0;
  const rawPercent = (actualScore / maxPossible) * 100;
  return Math.round(rawPercent);
}

function getTraitValue(breed: Breed, trait: string): string | boolean | number | undefined {
  switch (trait) {
    case 'size':
      return breed.size;
    case 'energy':
      return breed.energy;
    case 'shedding':
      return breed.shedding;
    case 'hypoallergenic':
      return breed.hypoallergenic;
    case 'grooming':
      return breed.grooming;
    case 'trainability':
      return breed.trainability;
    case 'coat':
      return breed.coat;
    case 'familyRating':
      return breed.familyRating;
    case 'goodWithKids':
      return breed.goodWithKids;
    case 'apartmentFriendly':
      return breed.apartmentFriendly;
    default:
      return undefined;
  }
}

function calculateBreedScore(
  breed: Breed,
  answers: Record<string, string>
): { score: number; contributors: ScoreContribution[] } {
  let totalScore = 0;
  const contributors: ScoreContribution[] = [];

  Object.entries(answers).forEach(([questionId, optionId]) => {
    const questionWeights = QUIZ_WEIGHTS[questionId];
    if (!questionWeights) return;

    const optionWeights = questionWeights[optionId];
    if (!optionWeights) return;

    Object.entries(optionWeights).forEach(([trait, valueMap]) => {
      if (!valueMap) return;

      const breedValue = getTraitValue(breed, trait);
      if (breedValue === undefined) return;

      let weight = 0;
      
      if (typeof valueMap === 'object' && valueMap && breedValue !== undefined) {
        try {
          if (typeof breedValue === 'boolean') {
            weight = valueMap[breedValue ? 'true' : 'false'] ?? 0;
          } else if (typeof breedValue === 'number') {
            weight = (valueMap as Record<string, number>)[breedValue.toString()] ?? 0;
          } else {
            weight = (valueMap as Record<string, number>)[breedValue as string] ?? 0;
          }
        } catch {
          weight = 0;
        }
      }

      if (weight !== 0) {
        totalScore += weight;
        
        // Track positive contributors for reasoning
        if (weight > 0) {
          const qFragments = REASONING_FRAGMENTS[questionId];
          if (qFragments && qFragments[optionId]) {
            contributors.push({
              questionId,
              optionId,
              weight,
              fragment: qFragments[optionId],
            });
          }
        }
      }
    });
  });

  return { score: totalScore, contributors };
}

function generateReasoning(
  breed: Breed,
  contributors: ScoreContribution[]
): string {
  // Sort by absolute weight to get strongest drivers
  const sorted = [...contributors].sort((a, b) => b.weight - a.weight);
  const topFragments = sorted.slice(0, 4).map(c => c.fragment).filter(Boolean);

  if (topFragments.length === 0) {
    return `${breed.name} fits your lifestyle well based on your responses.`;
  }

  if (topFragments.length === 1) {
    return `${breed.name} is a strong match because ${topFragments[0]}.`;
  }

  if (topFragments.length === 2) {
    return `${breed.name} is a strong match because ${topFragments[0]} and ${topFragments[1]}.`;
  }

  // Join with commas, but fix the last one to use "and"
  const last = topFragments.pop();
  return `${breed.name} is a strong match because ${topFragments.join(', ')}, and ${last}.`;
}

export function scoreBreeds(answers: Record<string, string>): QuizResult[] {
  // Calculate scores for all breeds
  const breedScores = breeds.map((breed) => {
    const { score, contributors } = calculateBreedScore(breed, answers);
    return { breed, score, contributors };
  });

  // Find max possible score for normalization
  // Estimate based on max positive contributions per question
  const maxPossiblePerQuestion = 30; // Upper bound from weight schema
  const numQuestions = Object.keys(answers).length || 10;
  const estimatedMax = numQuestions * maxPossiblePerQuestion;

  // Normalize scores to percentages
  const normalized = breedScores.map(({ breed, score, contributors }) => ({
    breed,
    percent: normalizeScore(estimatedMax, score),
    contributors,
  }));

  // Sort by percentage desc, then name asc for determinism
  normalized.sort((a, b) => {
    if (b.percent !== a.percent) {
      return b.percent - a.percent;
    }
    return a.breed.name.localeCompare(b.breed.name);
  });

  // Take top 3
  const top3 = normalized.slice(0, 3);

  // Generate results
  return top3.map(({ breed, percent, contributors }) => ({
    slug: breed.slug,
    name: breed.name,
    image: breed.image,
    percent,
    reasoning: generateReasoning(breed, contributors),
  }));
}