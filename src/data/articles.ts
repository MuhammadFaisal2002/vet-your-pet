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

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading-2"; text: string }
  | { type: "heading-3"; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

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
  content: ContentBlock[];
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
    content: [
      {
        type: "paragraph",
        text: "Entering your first dog show is an exciting milestone for any dog owner. These events, officially known as conformation shows, assess how closely a dog matches the breed standard. The key is preparation—both for yourself and your dog.",
      },
      {
        type: "heading-2",
        text: "Understanding the Basics of AKC Conformation Events",
      },
      {
        type: "paragraph",
        text: "In a conformation show, dogs are not compared directly to each other. Instead, each dog is compared to the judge's mental image of the perfect specimen as described in the official breed standard. Factors include structural soundness, movement, gait, and overall temperament.",
      },
      {
        type: "quote",
        text: "Conformation is not just about looks; it's about structure, movement, and the preservation of historic breed characteristics.",
        author: "Dr. Sarah Chen",
      },
      {
        type: "heading-2",
        text: "Essential Grooming and Equipment",
      },
      {
        type: "paragraph",
        text: "Make sure you have all the grooming essentials ready before the event. Different breeds require different coats, but general essentials include:",
      },
      {
        type: "list",
        items: [
          "High-quality pin brushes and undercoat combs",
          "Slicker brushes for detangling and volumizing",
          "Dog-safe coat finishing sprays and chalks",
          "Show leads matching the dog's coat color to avoid breaking the visual line",
        ],
      },
      {
        type: "heading-3",
        text: "Ring Etiquette & Presentation",
      },
      {
        type: "paragraph",
        text: "In the ring, the judge will evaluate how your dog stands (stacks) and moves (gaits). You need to learn how to present your dog dynamically so their best features are visible. Maintain direct eye contact with the judge, follow instructions quickly, and remain polite at all times.",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        text: "Exploring the wilderness with your dog is a deeply rewarding experience. Hiking, trail running, or even canine camping are great ways to burn off excess energy and build a lasting bond of trust. However, safety must always come first.",
      },
      {
        type: "heading-2",
        text: "Preparing for the Great Outdoors",
      },
      {
        type: "paragraph",
        text: "Before hitting the trails, you need to verify your dog is physically ready and pack the necessary safety items. Ensure they are up-to-date on heartworm and tick prevention.",
      },
      {
        type: "list",
        items: [
          "Pack plenty of fresh water and a collapsible bowl (never let them drink from stagnant streams)",
          "Invest in a sturdy, padded harness with a rescue grab handle",
          "Bring a dedicated canine first-aid kit containing dog-safe antiseptic and bandages",
        ],
      },
      {
        type: "quote",
        text: "A tired dog is a happy dog, but an active dog in the wild requires constant vigilance and protective gear.",
        author: "Lone Star Kennels",
      },
      {
        type: "heading-2",
        text: "Trail Etiquette and Responsibilities",
      },
      {
        type: "paragraph",
        text: "Always keep your dog on a leash unless you are specifically in an designated off-leash wilderness zone. Respect other hikers, yield to horses, and always bag and dispose of your dog's waste to protect local wildlife ecosystems.",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        text: "Finding the perfect dog breed that matches your lifestyle, living situation, and activity level is crucial for a harmonious relationship. Many dogs end up in shelters simply because owners chose them based on appearance rather than behavioral traits.",
      },
      {
        type: "heading-2",
        text: "Assessing Your Lifestyle and Energy Level",
      },
      {
        type: "paragraph",
        text: "Before picking a puppy, you must evaluate your daily routine. High-energy working breeds like Border Collies, Australian Shepherds, or German Shepherds require hours of physical exercise and mental stimulation daily. Lower-energy companion breeds are happier with short walks and lap time.",
      },
      {
        type: "heading-2",
        text: "Size, Living Space, and Grooming Needs",
      },
      {
        type: "paragraph",
        text: "Living in an apartment? Sizing is a factor, but noise tendencies and activity levels matter more (for instance, large Great Danes are famously good apartment dogs). Additionally, consider coat maintenance:",
      },
      {
        type: "list",
        items: [
          "Hypoallergenic curly coats (Poodles, Doodles) require professional clipping every 6-8 weeks",
          "Double coats (Retrievers, Huskies) shed heavily twice a year and need intensive deshedding",
          "Short single coats (Boxers, Pugs) are low maintenance but shed small, prickly hairs constantly",
        ],
      },
    ],
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
    content: [
      {
        type: "paragraph",
        text: "A complete breakdown of puppy nutritional requirements, feeding schedules, and how to choose the best food for growing dogs. Proper nutrition is the building block of your dog's future health.",
      },
      {
        type: "heading-2",
        text: "Understanding Puppy Growth Demands",
      },
      {
        type: "paragraph",
        text: "Puppies grow incredibly fast, requiring higher amounts of protein, amino acids, fat, calcium, and phosphorus compared to adult dogs. Feeding them high-quality, growth-formulated food ensures their bones and joints develop at a safe rate.",
      },
      {
        type: "quote",
        text: "Proper, controlled nutrition during the first year set the foundation for lifetime skeletal health and helps prevent hip dysplasia.",
        author: "Dr. Patricia Santos",
      },
      {
        type: "heading-2",
        text: "Feeding Schedules and Portions",
      },
      {
        type: "paragraph",
        text: "How often should you feed your growing pup? Here is a general breakdown recommended by veterinarians:",
      },
      {
        type: "list",
        items: [
          "2 to 4 months old: 4 meals per day to prevent hypoglycemia",
          "4 to 6 months old: 3 meals per day",
          "6 months and older: 2 meals per day (morning and evening)",
        ],
      },
      {
        type: "heading-2",
        text: "What to Avoid in Puppy Diets",
      },
      {
        type: "paragraph",
        text: "Avoid table scraps, toxic foods (grapes, raisins, chocolate, onions, garlic), and over-feeding, which can lead to rapid growth skeletal disorders, especially in large-breed puppies like Great Danes and Mastiffs.",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        text: "Learn to read your dog's signals, from tail wags to ear positions, to better understand their emotions and build a stronger bond. Because dogs cannot speak, their bodies do all the talking.",
      },
      {
        type: "heading-2",
        text: "Reading the Tail and Ears",
      },
      {
        type: "paragraph",
        text: "A wagging tail doesn't always mean a friendly dog. A tail wagging high and stiffly can indicate high arousal, tension, or potential aggression. Ears pinned back flat against the head usually communicate fear, submission, or stress, whereas forward-alert ears show curiosity.",
      },
      {
        type: "heading-3",
        text: "Recognizing Signs of Anxiety and Stress",
      },
      {
        type: "paragraph",
        text: "Recognizing early stress signals can prevent behavioral escalations and bites. Look out for these subtle indicators:",
      },
      {
        type: "list",
        items: [
          "Frequent lip licking (when food is not nearby)",
          "Yawning repeatedly (when they aren't tired)",
          "Averted gaze (actively turning their head away to avoid confrontation)",
          "Showing the whites of their eyes (often called 'whale eye')",
        ],
      },
    ],
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
    content: [
      {
        type: "paragraph",
        text: "Vaccinations protect your dog from highly contagious, life-threatening viral diseases. Staying on top of your dog's immunization schedule is one of the most critical aspects of responsible pet ownership.",
      },
      {
        type: "heading-2",
        text: "Core vs. Non-Core Vaccines",
      },
      {
        type: "paragraph",
        text: "Veterinarians divide vaccines into core (mandatory for all dogs due to severity of exposure) and non-core (lifestyle-dependent vaccines):",
      },
      {
        type: "list",
        items: [
          "Core Vaccines: Rabies (legally mandated) and DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)",
          "Non-Core Vaccines: Bordetella (for kennel cough), Lyme disease, Leptospirosis, and Canine Influenza",
        ],
      },
      {
        type: "heading-2",
        text: "Recommended Puppy Schedule",
      },
      {
        type: "paragraph",
        text: "Puppy shots start around 6-8 weeks of age when maternal antibodies begin to fade. Booster shots are administered every 3-4 weeks until the puppy reaches 16 weeks of age, followed by a booster at 1 year, and then every 1-3 years afterward.",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        text: "Grooming is more than just keeping your dog looking good—it's essential for their physical health and hygiene. Regular brushing removes dead hair, aerates the skin, and allows you to check for ticks, lumps, or sore spots early.",
      },
      {
        type: "heading-2",
        text: "Brushing and Detangling Guidelines",
      },
      {
        type: "paragraph",
        text: "Select brushes appropriate for your dog's coat type. Long-coated breeds require daily brushing with a slicker brush and metal comb to prevent mats, while short-haired breeds only need weekly rubdowns with a rubber curry brush.",
      },
      {
        type: "heading-2",
        text: "Nail Trimming and Ear Cleaning",
      },
      {
        type: "paragraph",
        text: "Long nails can alter your dog's gait and cause skeletal pain. Trim nails monthly using sharp clippers or a grinder, making sure to avoid the sensitive quick. Inspect ears weekly and wipe clean with a cotton ball and vet-approved cleanser.",
      },
      {
        type: "quote",
        text: "Introduce nail trims and brushing early in puppyhood using treats to establish a positive, stress-free routine.",
        author: "Golden Coast Retrievers",
      },
    ],
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

export interface AuthorProfileDetails {
  name: string;
  slug: string;
  bio: string;
  role: string;
  type: "vet" | "breeder";
  photo: string;
  practiceSlug: string;
  specialties: string;
  website: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

export const AUTHORS_DATA: Record<string, AuthorProfileDetails> = {
  "dr-sarah-chen": {
    name: "Dr. Sarah Chen",
    slug: "dr-sarah-chen",
    role: "DVM, Clinic Owner",
    type: "vet",
    photo: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=200",
    practiceSlug: "coastal-pet-hospital",
    specialties: "Cardiology, Internal Medicine",
    bio: "Dr. Sarah Chen is a licensed veterinarian specializing in canine cardiology and general practice. With over 12 years of clinical experience, she runs Coastal Pet Hospital and is passionate about educating dog owners on early disease detection, cardiac care, and responsible breed health screenings.",
    website: "https://coastalpethospital.com",
    twitter: "https://twitter.com/drsarahchen",
    instagram: "https://instagram.com/coastalpethospital",
  },
  "lone-star-kennels": {
    name: "Lone Star Kennels",
    slug: "lone-star-kennels",
    role: "Verified Breeder",
    type: "breeder",
    photo: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=200",
    practiceSlug: "lone-star-kennels",
    specialties: "Working Breeds, Early Socialization",
    bio: "Lone Star Kennels is a premier German Shepherd breeding program based in Austin, Texas. Dedicated to the preservation of working lines, health screening, and balanced temperaments, they have been breeding companion and service dogs for over a decade.",
    website: "https://lonestarkennels.com",
    facebook: "https://facebook.com/lonestarkennels",
    instagram: "https://instagram.com/lonestarkennels",
  },
  "dr-michael-rodriguez": {
    name: "Dr. Michael Rodriguez",
    slug: "dr-michael-rodriguez",
    role: "DVM, Senior Associate",
    type: "vet",
    photo: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=200",
    practiceSlug: "coastal-pet-hospital",
    specialties: "Orthopedic Surgery, Sports Medicine",
    bio: "Dr. Michael Rodriguez is a Senior Associate at Coastal Pet Hospital. He specializes in orthopedic surgery and canine sports medicine, helping active dogs stay in top physical condition and recovering safely from injuries throughout their life stages.",
    website: "https://coastalpethospital.com",
    twitter: "https://twitter.com/drmichaelrod",
  },
  "dr-patricia-santos": {
    name: "Dr. Patricia Santos",
    slug: "dr-patricia-santos",
    role: "DVM, Practice Owner",
    type: "vet",
    photo: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=200",
    practiceSlug: "sunshine-animal-clinic",
    specialties: "Geriatric Care, Pain Management",
    bio: "Dr. Patricia Santos is the founder and medical director of Sunshine Animal Clinic. She has a special interest in geriatric canine care, pain management, and acupuncture, focusing on enhancing the comfort and quality of life for senior dogs.",
    website: "https://sunshineanimalclinic.com",
    facebook: "https://facebook.com/sunshineanimalclinic",
  },
  "dr-lisa-anderson": {
    name: "Dr. Lisa Anderson",
    slug: "dr-lisa-anderson",
    role: "DVM, Owner",
    type: "vet",
    photo: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=200",
    practiceSlug: "rocky-mountain-vet-care",
    specialties: "Behavioral Medicine, Anxiety",
    bio: "Dr. Lisa Anderson is a licensed veterinarian and behavior specialist. She helps owners resolve canine behavioral challenges, including separation anxiety, reactivity, and resource guarding through evidence-based behavioral modification plans.",
    website: "https://rockymountainvetcare.com",
    instagram: "https://instagram.com/dr_lisa_anderson",
  },
  "golden-coast-retrievers": {
    name: "Golden Coast Retrievers",
    slug: "golden-coast-retrievers",
    role: "Verified Breeder",
    type: "breeder",
    photo: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=200",
    practiceSlug: "golden-coast-retrievers",
    specialties: "Companion Retrievers, Early Training",
    bio: "Golden Coast Retrievers is a family-owned kennel specializing in health-tested Golden Retrievers. They prioritize early neurological stimulation (ENS), puppy socialization, and matching companion dogs with loving families.",
    website: "https://goldencoastretrievers.com",
    facebook: "https://facebook.com/goldencoastretrievers",
    instagram: "https://instagram.com/goldencoastretrievers",
  },
};

export function getAuthorSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getAuthorProfile(slug: string): AuthorProfileDetails | undefined {
  return AUTHORS_DATA[slug.toLowerCase()];
}

export function getArticlesByAuthor(authorName: string): Article[] {
  return ARTICLES.filter((a) => a.author.name.toLowerCase() === authorName.toLowerCase());
}
