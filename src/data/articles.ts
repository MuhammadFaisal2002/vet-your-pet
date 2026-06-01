export interface ArticleAuthor {
  name: string;
  role: string;
  slug: string; // Dynamic path back to their directory profile page
  type: "vet" | "breeder";
  photo: string;
}

export type BlogCategory =
  | "Care"
  | "Training"
  | "Health"
  | "Breeds"
  | "Shows"
  | "Nutrition"
  | "Behavior";

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: BlogCategory;
  author: ArticleAuthor;
  image: string;
  description: string;
  readTime: string;
  featured?: boolean;
}

export const ARTICLES: Article[] = [
  {
    slug: "preparing-for-first-dog-show",
    title: "Preparing for Your First Dog Show",
    date: "Nov 20, 2025",
    category: "Shows",
    readTime: "5 min read",
    featured: true,
    author: {
      name: "Dr. Sarah Chen",
      role: "DVM, Clinic Owner",
      slug: "coastal-pet-hospital",
      type: "vet",
      photo: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    image: "/images/blog-dog-show.png",
    description:
      "Everything you need to know about entering your first AKC dog show, from grooming essentials to ring etiquette and competition basics.",
  },
  {
    slug: "active-adventures-with-your-dog",
    title: "Active Adventures with Your Dog",
    date: "Nov 18, 2025",
    category: "Training",
    readTime: "4 min read",
    author: {
      name: "Lone Star Kennels",
      role: "Verified Breeder",
      slug: "lone-star-kennels",
      type: "breeder",
      photo: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    image: "https://images.pexels.com/photos/30502950/pexels-photo-30502950.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Discover the best outdoor activities, hiking trails, and adventure sports you can enjoy with your canine companion throughout the year.",
  },
  {
    slug: "choosing-the-right-breed-for-you",
    title: "Choosing the Right Breed for You",
    date: "Nov 15, 2025",
    category: "Breeds",
    readTime: "6 min read",
    author: {
      name: "Dr. Michael Rodriguez",
      role: "DVM, Senior Associate",
      slug: "coastal-pet-hospital",
      type: "vet",
      photo: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    image: "https://images.pexels.com/photos/33385817/pexels-photo-33385817.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Finding the perfect dog breed that matches your lifestyle, living situation, and activity level is crucial for a harmonious relationship.",
  },
  {
    slug: "puppy-nutrition-guide",
    title: "The Essential Puppy Nutrition Guide",
    date: "Nov 10, 2025",
    category: "Nutrition",
    readTime: "5 min read",
    author: {
      name: "Dr. Patricia Santos",
      role: "DVM, Practice Owner",
      slug: "sunshine-animal-clinic",
      type: "vet",
      photo: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    image: "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "A complete breakdown of puppy nutritional requirements, feeding schedules, and how to choose the best food for growing dogs.",
  },
  {
    slug: "understanding-canine-body-language",
    title: "Understanding Canine Body Language",
    date: "Nov 05, 2025",
    category: "Behavior",
    readTime: "4 min read",
    author: {
      name: "Dr. Lisa Anderson",
      role: "DVM, Owner",
      slug: "rocky-mountain-vet-care",
      type: "vet",
      photo: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Learn to read your dog's signals, from tail wags to ear positions, to better understand their emotions and build a stronger bond.",
  },
  {
    slug: "essential-vaccination-schedule",
    title: "Your Dog's Essential Vaccination Schedule",
    date: "Oct 28, 2025",
    category: "Health",
    readTime: "7 min read",
    author: {
      name: "Dr. Sarah Chen",
      role: "DVM, Clinic Owner",
      slug: "coastal-pet-hospital",
      type: "vet",
      photo: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    image: "https://images.pexels.com/photos/6235241/pexels-photo-6235241.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "A comprehensive schedule of core and non-core vaccines for dogs, explaining what they protect against and when they are required.",
  },
  {
    slug: "grooming-basics-at-home",
    title: "Grooming Basics You Can Do At Home",
    date: "Oct 20, 2025",
    category: "Care",
    readTime: "6 min read",
    author: {
      name: "Golden Coast Retrievers",
      role: "Verified Breeder",
      slug: "golden-coast-retrievers",
      type: "breeder",
      photo: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    image: "https://images.pexels.com/photos/6816858/pexels-photo-6816858.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "How to keep your dog clean, brushed, and smelling fresh between professional grooms. Includes nail clipping and ear cleaning tips.",
  },
];

export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getFeaturedArticle(): Article | undefined {
  return ARTICLES.find((a) => a.featured);
}

export interface CategoryDetails {
  name: BlogCategory;
  slug: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export const CATEGORIES: Record<string, CategoryDetails> = {
  care: {
    name: "Care",
    slug: "care",
    title: "Dog Care Articles & Grooming Tips",
    description: "Learn essential dog care tips, grooming guides, and daily routines to keep your canine companion happy, healthy, and thriving.",
    seoTitle: "Dog Care Articles & Grooming Tips - Vet Your Pet",
    seoDescription: "Discover verified dog care articles and grooming tips written and reviewed by professional veterinarians and ethical breeders."
  },
  training: {
    name: "Training",
    slug: "training",
    title: "Canine Training Tips & Obedience Guides",
    description: "Master puppy socialization, obedience training, and positive reinforcement techniques recommended by verified dog trainers.",
    seoTitle: "Dog Training Tips & Obedience Guides - Vet Your Pet",
    seoDescription: "Browse expert dog training tips, obedience guides, and positive reinforcement articles from certified professionals."
  },
  health: {
    name: "Health",
    slug: "health",
    title: "Dog Health Guidelines & Veterinary Advice",
    description: "Access expert guidelines on vaccines, preventive health, common canine ailments, and wellness routines.",
    seoTitle: "Dog Health Articles & Veterinary Tips - Vet Your Pet",
    seoDescription: "Stay informed with verified dog health articles, preventive wellness guides, and expert advice from licensed veterinarians."
  },
  breeds: {
    name: "Breeds",
    slug: "breeds",
    title: "Dog Breed Profiles & Guides",
    description: "Explore breed characteristics, sizing, energy levels, and history to find the perfect breed companion for your lifestyle.",
    seoTitle: "Dog Breed Articles & Sizing Tips - Vet Your Pet",
    seoDescription: "Learn about different dog breed profiles, characteristics, sizing, and history in our expert breeder-reviewed guides."
  },
  shows: {
    name: "Shows",
    slug: "shows",
    title: "Dog Show Preparation & Ringside Guides",
    description: "Step-by-step guides for entering AKC dog shows, understanding conformation standards, ring handling, and grooming preparation.",
    seoTitle: "Dog Shows Articles & Ring Handling Tips - Vet Your Pet",
    seoDescription: "Get ready for conformation events with expert dog shows articles, ring handling tips, and conformation guidelines."
  },
  nutrition: {
    name: "Nutrition",
    slug: "nutrition",
    title: "Dog Nutrition & Healthy Diet Advice",
    description: "Get recommendations on feeding schedules, puppy diets, raw vs kibble feeding, and understanding pet food labels.",
    seoTitle: "Dog Nutrition Articles & Diet Tips - Vet Your Pet",
    seoDescription: "Feed your canine the best with expert dog nutrition articles, puppy diet guides, and veterinarian-reviewed advice."
  },
  behavior: {
    name: "Behavior",
    slug: "behavior",
    title: "Canine Behavior Tips & Psychological Insights",
    description: "Understand canine psychology, decode body language, and manage separation anxiety or behavior challenges.",
    seoTitle: "Dog Behavior Articles & Psychological Tips - Vet Your Pet",
    seoDescription: "Understand your dog better with expert canine behavior articles, body language guides, and psychological tips."
  }
};

export function getCategoryBySlug(slug: string): CategoryDetails | undefined {
  return CATEGORIES[slug.toLowerCase()];
}

export function getArticlesByCategory(categoryName: BlogCategory): Article[] {
  return ARTICLES.filter((a) => a.category === categoryName);
}
