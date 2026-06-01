import { breeds, Breed } from '@/data/breeds';

export interface QuizQuestion {
  id: string;
  label: string;
  prompt: string;
  helper?: string;
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  label: string;
  description?: string;
}

export interface QuizWeights {
  [questionId: string]: {
    [optionId: string]: {
      apartmentFriendly?: { true?: number; false?: number };
      size?: { [key: string]: number };
      energy?: { [key: string]: number };
      trainability?: { [key: string]: number };
      familyRating?: { [key: string]: number };
      goodWithKids?: { true?: number; false?: number };
      grooming?: { [key: string]: number };
      coat?: { [key: string]: number };
      shedding?: { [key: string]: number };
      hypoallergenic?: { true?: number; false?: number };
    };
  };
}

// The 10 Quiz Questions
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'living_space',
    label: 'Question 1 of 10 • Living Space',
    prompt: 'What type of home do you live in?',
    helper: 'Your living space affects how much room a dog needs to be comfortable.',
    options: [
      { id: 'apartment', label: 'Apartment', description: 'Works best for smaller, quieter breeds' },
      { id: 'townhouse', label: 'Townhouse or small home', description: 'Good for medium-sized dogs with moderate energy' },
      { id: 'house_yard', label: 'House with yard', description: 'Great for active dogs who love to play outdoors' },
      { id: 'acreage', label: 'Rural property or acreage', description: 'Perfect for high-energy or working breeds' },
    ],
  },
  {
    id: 'home_activity',
    label: 'Question 2 of 10 • Home Environment',
    prompt: 'How would you describe the activity level in your home?',
    helper: 'Some dogs thrive in calm environments, while others match a busy household.',
    options: [
      { id: 'calm', label: 'Calm and quiet', description: 'Peaceful household, minimal noise and chaos' },
      { id: 'moderate', label: 'Moderate', description: 'Balanced mix of activity and downtime' },
      { id: 'active', label: 'Always on the go', description: 'Busy household with frequent activity and movement' },
    ],
  },
  {
    id: 'exercise',
    label: 'Question 3 of 10 • Exercise',
    prompt: 'How much time can you dedicate to exercising your dog each day?',
    options: [
      { id: 'low', label: 'Less than 30 minutes', description: 'Quick walks or indoor play' },
      { id: 'medium_low', label: '30–60 minutes', description: 'A couple of walks or moderate play sessions' },
      { id: 'medium_high', label: '1–2 hours', description: 'Long walks, hikes, or active playtime' },
      { id: 'high', label: '2+ hours', description: 'Multiple daily outings and vigorous activity' },
    ],
  },
  {
    id: 'kids',
    label: 'Question 4 of 10 • Family',
    prompt: 'Do you have children at home?',
    helper: 'Some breeds are especially gentle and patient with young kids.',
    options: [
      { id: 'no_kids', label: 'No kids', description: 'Just adults in the household' },
      { id: 'babies_toddlers', label: 'Babies & toddlers (under 5)', description: 'Very young children who need extra-gentle dogs' },
      { id: 'kids_school', label: 'Kids 5–12', description: 'School-age children' },
      { id: 'teens', label: 'Teens or older', description: 'Teenage or adult children' },
    ],
  },
  {
    id: 'other_pets',
    label: 'Question 5 of 10 • Other Pets',
    prompt: 'Do you have other pets at home?',
    options: [
      { id: 'no_pets', label: 'No other pets', description: 'This will be your only pet' },
      { id: 'dogs', label: 'Other dog(s)', description: 'Already have one or more dogs' },
      { id: 'cats', label: 'Cat(s)', description: 'Have one or more cats' },
      { id: 'small_animals', label: 'Small animals or birds', description: 'Hamsters, rabbits, birds, etc.' },
    ],
  },
  {
    id: 'grooming',
    label: 'Question 6 of 10 • Grooming',
    prompt: 'How much grooming are you willing to do?',
    helper: 'Grooming ranges from quick weekly brushes to professional appointments every 6-8 weeks.',
    options: [
      { id: 'low', label: 'Low — quick brushes only', description: 'Minimal upkeep, low-maintenance coat' },
      { id: 'medium', label: 'Medium — weekly upkeep', description: 'Regular brushing and occasional grooming' },
      { id: 'high', label: 'High — I love grooming', description: 'Happy to do frequent grooming or regular professional visits' },
    ],
  },
  {
    id: 'shedding',
    label: 'Question 7 of 10 • Shedding',
    prompt: 'How much dog hair can you live with?',
    options: [
      { id: 'none', label: 'None please', description: 'I need a low- to no-shed breed' },
      { id: 'some', label: 'A little is fine', description: 'Some shedding is manageable' },
      { id: 'lots', label: 'Bring on the fur', description: 'I do not mind regular shedding' },
    ],
  },
  {
    id: 'allergies',
    label: 'Question 8 of 10 • Allergies',
    prompt: 'Does anyone in your household have dog allergies?',
    options: [
      { id: 'yes', label: 'Yes — need hypoallergenic' },
      { id: 'no', label: 'No allergies' },
    ],
  },
  {
    id: 'experience',
    label: 'Question 9 of 10 • Experience',
    prompt: 'How would you describe your experience with dogs?',
    helper: 'Some breeds are easier for first-time owners, while others need experienced handling.',
    options: [
      { id: 'first_time', label: 'First-time dog owner', description: 'This will be my first dog' },
      { id: 'some', label: 'Some experience', description: 'I have owned a dog before or spent significant time with them' },
      { id: 'experienced', label: 'Experienced', description: 'I have trained multiple dogs or handled challenging breeds' },
    ],
  },
  {
    id: 'climate',
    label: 'Question 10 of 10 • Climate',
    prompt: 'What is the climate like where you live?',
    helper: 'Coat type and breed tolerance matter for extreme heat or cold.',
    options: [
      { id: 'cold', label: 'Cold', description: 'Snowy winters or year-round cool weather' },
      { id: 'temperate', label: 'Temperate', description: 'Mild seasons, not too hot or cold' },
      { id: 'hot', label: 'Hot', description: 'Warm to very hot year-round' },
    ],
  },
];

// Scoring Weights - translated from YAML in content spec
export const QUIZ_WEIGHTS: QuizWeights = {
  living_space: {
    apartment: {
      apartmentFriendly: { true: 30 },
      size: { Toy: 15, Small: 15, Medium: 5, Large: -10, Giant: -25 },
      energy: { Low: 10, Medium: 5, High: -10 },
    },
    townhouse: {
      apartmentFriendly: { true: 10 },
      size: { Toy: 5, Small: 10, Medium: 15, Large: 5, Giant: -10 },
      energy: { Low: 5, Medium: 10, High: 5 },
    },
    house_yard: {
      apartmentFriendly: { false: 5 },
      size: { Small: 5, Medium: 10, Large: 15, Giant: 10 },
      energy: { Low: -5, Medium: 10, High: 15 },
    },
    acreage: {
      apartmentFriendly: { false: 10 },
      size: { Medium: 10, Large: 20, Giant: 15 },
      energy: { Medium: 5, High: 20 },
    },
  },
  home_activity: {
    calm: {
      energy: { Low: 15, Medium: 5, High: -15 },
      trainability: { Easy: 5, Moderate: 5 },
    },
    moderate: {
      energy: { Low: 5, Medium: 10, High: 5 },
    },
    active: {
      energy: { Low: -10, Medium: 5, High: 15 },
    },
  },
  exercise: {
    low: {
      energy: { Low: 20, Medium: -5, High: -20 },
      size: { Toy: 10 },
    },
    medium_low: {
      energy: { Low: 10, Medium: 15, High: -5 },
    },
    medium_high: {
      energy: { Low: -5, Medium: 10, High: 15 },
    },
    high: {
      energy: { Medium: 5, High: 20 },
    },
  },
  kids: {
    no_kids: {
      goodWithKids: { true: 5 },
    },
    babies_toddlers: {
      goodWithKids: { true: 30 },
      familyRating: { 5: 25, 4: 10, 3: -10, 2: -20, 1: -30 },
      trainability: { Easy: 10, Moderate: 5, Challenging: -10 },
    },
    kids_school: {
      goodWithKids: { true: 25 },
      familyRating: { 5: 20, 4: 15, 3: 5, 2: -10, 1: -20 },
      energy: { High: 10, Medium: 10 },
    },
    teens: {
      goodWithKids: { true: 10 },
      familyRating: { 5: 10, 4: 10, 3: 5 },
    },
  },
  other_pets: {
    no_pets: {},
    dogs: {
      familyRating: { 5: 10, 4: 10 },
    },
    cats: {
      energy: { Low: 5, Medium: 5, High: -5 },
    },
    small_animals: {
      energy: { Low: 10, Medium: 5, High: -10 },
    },
  },
  grooming: {
    low: {
      grooming: { Low: 20, Medium: -10, High: -25 },
      coat: { Short: 10 },
    },
    medium: {
      grooming: { Low: 5, Medium: 15, High: 5 },
    },
    high: {
      grooming: { Low: -5, Medium: 5, High: 20 },
      coat: { Long: 10, Curly: 10 },
    },
  },
  shedding: {
    none: {
      shedding: { None: 30, Low: 20, Medium: -15, High: -30 },
      hypoallergenic: { true: 15 },
    },
    some: {
      shedding: { None: 10, Low: 15, Medium: 10, High: -10 },
    },
    lots: {
      shedding: { None: -10, Low: -5, Medium: 10, High: 15 },
    },
  },
  allergies: {
    yes: {
      hypoallergenic: { true: 30, false: -30 },
      shedding: { None: 20, Low: 15, Medium: -15, High: -25 },
    },
    no: {},
  },
  experience: {
    first_time: {
      trainability: { Easy: 25, Moderate: 5, Challenging: -25 },
      energy: { Low: 10, Medium: 10, High: -10 },
    },
    some: {
      trainability: { Easy: 10, Moderate: 15, Challenging: -5 },
    },
    experienced: {
      trainability: { Easy: 5, Moderate: 10, Challenging: 15 },
      energy: { High: 10 },
    },
  },
  climate: {
    cold: {
      coat: { Long: 10, Medium: 5, Short: -5 },
    },
    temperate: {},
    hot: {
      coat: { Short: 10, Medium: 5, Long: -5 },
      shedding: { High: -5 },
    },
  },
};

// Reasoning fragments keyed by question_id.option_id
export const REASONING_FRAGMENTS: Record<string, Record<string, string>> = {
  living_space: {
    apartment: "they are naturally apartment-friendly and do not need a yard to be happy",
    townhouse: "they adapt well to smaller homes with moderate space",
    house_yard: "they thrive when they have a yard to play and explore",
    acreage: "they thrive when they have room to roam and stay active",
  },
  home_activity: {
    calm: "they have the easygoing temperament to match a quiet household",
    moderate: "they balance energy and calm to fit a varied home environment",
    active: "they match your busy household energy and adapt to frequent activity",
  },
  exercise: {
    low: "they are content with short walks and indoor play",
    medium_low: "their moderate exercise needs fit well with your daily routine",
    medium_high: "they will keep up with your active lifestyle and daily outdoor time",
    high: "they will happily match your active pace with hikes, runs, and outdoor adventures",
  },
  kids: {
    no_kids: "they are a great companion for adult households",
    babies_toddlers: "they are known for being gentle and patient with very young children",
    kids_school: "they are playful and protective, making them ideal for school-age kids",
    teens: "they are a great fit for families with older children",
  },
  other_pets: {
    no_pets: "as your only pet, they will thrive with your full attention",
    dogs: "they are social and get along well with other dogs",
    cats: "they have a calm demeanor that works well in multi-pet homes with cats",
    small_animals: "their gentle nature makes them a safe choice around smaller pets",
  },
  grooming: {
    low: "their low-maintenance coat requires minimal grooming",
    medium: "their grooming needs are manageable with regular weekly brushing",
    high: "their coat is beautiful and you will enjoy the regular grooming routine",
  },
  shedding: {
    none: "they are low- to no-shed, which keeps your home cleaner",
    some: "they shed minimally, making upkeep straightforward",
    lots: "while they shed, their coat is easy to manage with regular brushing",
  },
  allergies: {
    yes: "they are hypoallergenic, which makes them a smart choice for households with allergies",
  },
  experience: {
    first_time: "they are known for being easy to train, making them perfect for first-time owners",
    some: "their trainability and temperament are well-suited to moderately experienced owners",
    experienced: "they will challenge and reward your experience with their intelligence and drive",
  },
  climate: {
    cold: "their coat helps them stay comfortable in colder climates",
    temperate: "they adapt well to mild, balanced weather",
    hot: "their short coat and build make them well-suited to warmer climates",
  },
};

export function getAllQuizQuestions(): QuizQuestion[] {
  return QUIZ_QUESTIONS;
}

export function getAvailableBreeds(): Breed[] {
  return breeds;
}