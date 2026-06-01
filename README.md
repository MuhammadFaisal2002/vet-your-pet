# ThePetPros / VetYourPet

**Live Site:** http://167.71.82.183:3045

This is a Next.js 14 App Router application for a pet professional directory (veterinarians and breeders).

## Tech Stack

- **Framework:** Next.js 14.2.35 (App Router)
- **UI:** React 18 + TypeScript
- **Styling:** Tailwind CSS 3.4.1
- **Icons:** Lucide React
- **Port:** 3045
- **Deployment:** Production server at `/opt/thepetpros` on 167.71.82.183

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── about/             # About page
│   ├── blog/              # Blog listing
│   ├── breeders/          # Breeder directory
│   │   ├── page.tsx       # Breeder hub
│   │   ├── [state]/       # State-level breeder pages
│   │   └── [state]/[city]/ # City-level breeder pages
│   ├── breeder/[slug]/    # Individual breeder profile
│   ├── breeds/            # Breed information
│   │   ├── page.tsx       # Breeds hub
│   │   ├── [matchup]/     # Breed comparison pages
│   │   ├── compare/       # Breed comparison tool
│   │   ├── quiz/          # Breed quiz
│   │   └── goldendoodle/  # Example breed page
│   ├── veterinarians/     # Vet directory
│   │   ├── page.tsx       # Vet hub
│   │   ├── [state]/       # State-level vet pages
│   │   └── [state]/[city]/ # City-level vet pages
│   ├── veterinarian/[slug]/ # Individual vet profile
│   ├── dog-shows/         # Dog shows page
│   ├── claim-listing/     # Claim listing page
│   └── api/               # API routes
│       └── breeds/quiz/email/ # Quiz email route
│
├── components/            # Reusable React components
│   ├── AnimationObserver.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SearchWidget.tsx
│   ├── breed-compare/    # Breed comparison components
│   ├── breed-detail/     # Breed detail page components
│   ├── breeder-listing/  # Individual breeder profile components
│   ├── breeders/         # Breeder hub components
│   ├── breeders-city/    # City breeder page components
│   ├── breeders-state/   # State breeder page components
│   ├── quiz/             # Breed quiz components
│   ├── vet-directory/    # Vet directory components
│   ├── vet-listing/      # Individual vet profile components
│   └── vets/             # Vet hub components
│
├── data/                 # Static data
│   ├── breeders.ts      # Breeder listings data
│   ├── breeds.ts        # Breed information data
│   ├── services.ts      # Vet services data
│   ├── states.ts        # US states data
│   ├── vet-types.ts     # Vet specialty types
│   └── vets.ts          # Vet listings data
│
└── lib/                  # Utility libraries
    ├── breed-compare.ts       # Breed comparison logic
    ├── breed-quiz-data.ts     # Quiz questions data
    └── breed-quiz-scoring.ts  # Quiz scoring algorithm
```

## Key Features

### 1. Veterinarian Directory
- **Hub Page:** `/veterinarians` - Main veterinarian directory
- **State Pages:** `/veterinarians/[state]` - Vets by state
- **City Pages:** `/veterinarians/[state]/[city]` - Vets by city
- **Profile Pages:** `/veterinarian/[slug]` - Individual vet profiles with:
  - Services offered
  - Hours of operation
  - Team members
  - Reviews
  - Photo gallery
  - Insurance accepted

### 2. Breeder Directory
- **Hub Page:** `/breeders` - Main breeder directory
- **State Pages:** `/breeders/[state]` - Breeders by state
- **City Pages:** `/breeders/[state]/[city]` - Breeders by city
- **Profile Pages:** `/breeder/[slug]` - Individual breeder profiles with:
  - Available puppies
  - Parent dogs
  - Health certifications
  - Reviews
  - Adoption process

### 3. Breed Information
- **Breeds Hub:** `/breeds` - Browse all breeds
- **Breed Pages:** `/breeds/goldendoodle` - Individual breed information
- **Breed Quiz:** `/breeds/quiz` - Interactive quiz to find the right breed
- **Breed Comparison:** `/breeds/compare` - Side-by-side breed comparison tool
- **Matchup Pages:** `/breeds/[matchup]` - Direct breed vs breed comparisons

### 4. Other Features
- Blog section
- Dog shows information
- Claim listing functionality
- Responsive design
- Animation system
- SEO-optimized pages

## Design System

### Colors
The project uses a comprehensive color system defined in `tailwind.config.js`:

- **Brand Colors:**
  - `brand-blue` (#4962AA) - Primary blue
  - `brand-black` (#25272C) - Primary dark
  - `brand-gray` variants - Multiple gray shades

- **Pet-Specific:**
  - `pet-blue` (#4962AA)
  - `pet-green` (#509874)
  - `pet-red` (#FB461E)

- **Component-Specific:**
  - `chip-*` colors for status chips
  - `health-*` colors for health sections
  - `adopt-*` colors for adoption sections

### Fonts
- **Poppins:** Primary font family
- **Manrope:** Secondary font family

### Shadows
- `shadow-card`: Custom card shadow (10px 10px 60px rgba(0,0,0,0.04))

## Data Structure

### Breeders (`src/data/breeders.ts`)
Each breeder entry includes:
- Basic info (name, location, slug)
- Breeds offered
- Certifications
- Reviews
- Contact information
- Available puppies
- Parent dogs

### Vets (`src/data/vets.ts`)
Each vet entry includes:
- Practice name and location
- Services offered
- Hours of operation
- Team members
- Reviews
- Insurance accepted
- Specialties

### Breeds (`src/data/breeds.ts`)
Each breed includes:
- Basic characteristics
- Size, weight, lifespan
- Temperament traits
- Care requirements
- Health considerations

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Opens on http://localhost:3045

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

The production site runs as a systemd service:

**Service:** `thepetpros.service`
**Location:** `/opt/thepetpros`
**Port:** 3045
**Logs:** `/var/log/thepetpros.log`

```bash
# Check status
sudo systemctl status thepetpros

# Restart service
sudo systemctl restart thepetpros

# View logs
tail -f /var/log/thepetpros.log
```

## Configuration

### Next.js Config (`next.config.js`)
- React Strict Mode: Disabled
- Remote image patterns: Pexels, Unsplash, Builder.io
- Custom dev server settings

### TypeScript Config
- Strict mode enabled
- Path aliases: `@/*` maps to `./src/*`

## Key Components

### Navigation & Layout
- `Navbar.tsx` - Main navigation
- `Footer.tsx` - Site footer
- `layout.tsx` - Root layout with fonts and metadata

### Homepage
- `Hero.tsx` - Homepage hero section
- `SearchWidget.tsx` - Main search interface
- `PopularBreedsSection.tsx` - Featured breeds
- `VetSpotlightSection.tsx` - Featured vets
- `BlogSection.tsx` - Latest blog posts

### Quiz System
- `IntroScreen.tsx` - Quiz introduction
- `QuestionStep.tsx` - Individual quiz questions
- `ResultsScreen.tsx` - Quiz results with breed matches
- `MatchRing.tsx` - Visual match indicator
- `EmailResultsBand.tsx` - Email capture for results

### Animations
- `AnimationObserver.tsx` - Intersection observer for animations
- `animations.css` - CSS animations for fade-in/slide-up effects

## API Routes

- `/api/breeds/quiz/email` - Handles quiz result email submissions

## Environment

- **Node.js:** Compatible with Node 20+
- **React:** Version 18
- **Next.js:** 14.2.35
- **TypeScript:** Version 5

## Notes

- React Strict Mode is disabled for compatibility
- Build activity indicators are disabled
- Long-lived dev sessions configured (60min inactive timeout)
- Images sourced from Pexels, Unsplash, and Builder.io
