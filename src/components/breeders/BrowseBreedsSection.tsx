"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, ChevronRight, Heart } from "lucide-react";

type BreedSize = "Mini" | "Large" | "Medium";

interface Breed {
  name: string;
  size: BreedSize;
  life: string;
  origin: string;
  flag: string;
  photo: string;
}

// Colors per Figma: green for all sizes in the CSS, but differentiate visually
const SIZE_COLORS: Record<BreedSize, string> = {
  Mini: "#32B289",
  Large: "#E07B39",
  Medium: "#C8940D",
};

const BREEDS: Breed[] = [
  // A
  { name: "Afghan Hound",       size: "Large",  life: "12-14 years", origin: "Afghanistan",    flag: "🇦🇫", photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&q=80" },
  { name: "Airedale Terrier",   size: "Large",  life: "11-14 years", origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&q=80" },
  { name: "Akita",              size: "Large",  life: "10-13 years", origin: "Japan",           flag: "🇯🇵", photo: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=500&q=80" },
  { name: "Alaskan Malamute",   size: "Large",  life: "10-14 years", origin: "United States",  flag: "🇺🇸", photo: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&q=80" },
  { name: "American Bulldog",   size: "Large",  life: "10-15 years", origin: "United States",  flag: "🇺🇸", photo: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&q=80" },
  { name: "Australian Shepherd",size: "Medium", life: "12-15 years", origin: "United States",  flag: "🇺🇸", photo: "https://images.unsplash.com/photo-1575859431774-2e57ed632664?w=500&q=80" },
  { name: "Australian Terrier", size: "Mini",   life: "11-15 years", origin: "Australia",      flag: "🇦🇺", photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80" },
  { name: "Azawakh",            size: "Large",  life: "12-15 years", origin: "West Africa",    flag: "🌍",  photo: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=500&q=80" },
  // B
  { name: "Beagle",        size: "Medium", life: "10-15 years", origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&q=80" },
  { name: "Bichon Frise",  size: "Mini",   life: "12-15 years", origin: "France",         flag: "🇫🇷", photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80" },
  { name: "Border Collie", size: "Medium", life: "10-17 years", origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&q=80" },
  { name: "Boxer",         size: "Large",  life: "10-12 years", origin: "Germany",        flag: "🇩🇪", photo: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=500&q=80" },
  // C
  { name: "Chihuahua",     size: "Mini",   life: "12-20 years", origin: "Mexico",         flag: "🇲🇽", photo: "https://images.unsplash.com/photo-1575859431774-2e57ed632664?w=500&q=80" },
  { name: "Cocker Spaniel",size: "Medium", life: "10-14 years", origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&q=80" },
  { name: "Corgi",         size: "Medium", life: "12-15 years", origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&q=80" },
  // D
  { name: "Dachshund",     size: "Mini",   life: "12-16 years", origin: "Germany",        flag: "🇩🇪", photo: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=500&q=80" },
  { name: "Dalmatian",     size: "Large",  life: "10-13 years", origin: "Croatia",        flag: "🇭🇷", photo: "https://images.unsplash.com/photo-1593134257782-e89567b7718a?w=500&q=80" },
  { name: "Doberman",      size: "Large",  life: "10-13 years", origin: "Germany",        flag: "🇩🇪", photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&q=80" },
  // E
  { name: "English Bulldog",        size: "Medium", life: "8-10 years",  origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=500&q=80" },
  { name: "English Setter",         size: "Large",  life: "10-12 years", origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&q=80" },
  { name: "English Springer Spaniel", size: "Medium", life: "12-14 years", origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&q=80" },
  // F
  { name: "Finnish Spitz",  size: "Medium", life: "12-15 years", origin: "Finland",        flag: "🇫🇮", photo: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=500&q=80" },
  { name: "Fox Terrier",    size: "Mini",   life: "12-15 years", origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&q=80" },
  { name: "French Bulldog", size: "Mini",   life: "10-12 years", origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&q=80" },
  // G
  { name: "Golden Retriever", size: "Medium", life: "10-12 years", origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&q=80" },
  // L
  { name: "Labrador",      size: "Large",  life: "10-14 years", origin: "Canada",         flag: "🇨🇦", photo: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=500&q=80" },
  // M
  { name: "Maltipoo",      size: "Mini",   life: "10-12 years", origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80" },
  { name: "Morkie",        size: "Mini",   life: "10-12 years", origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1575859431774-2e57ed632664?w=500&q=80" },
  // P
  { name: "Pomeranian",    size: "Mini",   life: "12-16 years", origin: "Germany",        flag: "🇩🇪", photo: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=500&q=80" },
  { name: "Poodle",        size: "Medium", life: "12-15 years", origin: "France",         flag: "🇫🇷", photo: "https://images.unsplash.com/photo-1530041539828-114de669390e?w=500&q=80" },
  // S
  { name: "SheepaDoodle",  size: "Large",  life: "10-12 years", origin: "United Kingdom", flag: "🇬🇧", photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&q=80" },
  { name: "Shih Tzu",      size: "Mini",   life: "10-16 years", origin: "China",          flag: "🇨🇳", photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80" },
];

// Letters that have at least one breed
const LETTERS_WITH_BREEDS = new Set(BREEDS.map((b) => b.name[0].toUpperCase()));

function groupBreedsByLetter(breeds: Breed[]): Record<string, Breed[]> {
  const groups: Record<string, Breed[]> = {};
  for (const breed of breeds) {
    const letter = breed.name[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(breed);
  }
  return groups;
}

const ALPHABET = [
  "All","A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
];

function breedSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

// ─── Breed Card (matches Figma CSS spec) ──────────────────────────────────────
function BreedCard({ breed }: { breed: Breed }) {
  return (
    <Link href={`/breeds/${breedSlug(breed.name)}`} className="block">
    <div
      className="hover-lift relative bg-white overflow-hidden cursor-pointer"
      style={{
        width: "377px",
        minWidth: "377px",
        height: "224px",
        boxShadow: "40px 40px 120px rgba(48, 56, 65, 0.05)",
        borderRadius: "6px",
      }}
    >
      {/* Size label — top-left */}
      <span
        className="absolute font-medium"
        style={{ left: 30, top: 24, fontSize: 12, lineHeight: "18px", color: SIZE_COLORS[breed.size] }}
      >
        {breed.size}
      </span>

      {/* See more — top-right */}
      <button
        className="absolute flex items-center gap-[5px] hover:opacity-70 transition-opacity"
        style={{ right: 30, top: 24 }}
      >
        <span style={{ fontSize: 12, lineHeight: "18px", fontWeight: 500, color: "#BDC0C7" }}>
          See more
        </span>
        <svg width="3" height="6" viewBox="0 0 3 6" fill="none">
          <path d="M0.5 0.5L2.5 3L0.5 5.5" stroke="#BDC0C7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Breed name */}
      <h3
        className="absolute font-medium"
        style={{ left: 30, top: 47, fontSize: 20, lineHeight: "136%", color: "#36363B", maxWidth: 160 }}
      >
        {breed.name}
      </h3>

      {/* Life */}
      <div className="absolute flex flex-col" style={{ left: 30, top: 102 }}>
        <span style={{ fontSize: 12, lineHeight: "18px", fontWeight: 400, color: "#C2C7CF" }}>
          Life
        </span>
        <span style={{ fontSize: 12, lineHeight: "18px", fontWeight: 500, color: "#393F4D" }}>
          {breed.life}
        </span>
      </div>

      {/* Country of origin */}
      <div className="absolute flex flex-col gap-[3px]" style={{ left: 30, top: 160 }}>
        <span style={{ fontSize: 12, lineHeight: "18px", fontWeight: 400, color: "#C2C7CF" }}>
          Country of origin
        </span>
        <span className="flex items-center gap-[9px]" style={{ fontSize: 10, lineHeight: "15px", fontWeight: 500, color: "#393F4D" }}>
          <span className="text-sm">{breed.flag}</span> {breed.origin}
        </span>
      </div>

      {/* Vertical line with tick marks */}
      <div className="absolute" style={{ left: 200, top: 51, width: 1, height: 156, background: "#EEF0F6" }} />
      <div className="absolute" style={{ left: 195, top: 108, width: 10, height: 1, background: "#EEF0F6" }} />
      <div className="absolute" style={{ left: 195, top: 132, width: 10, height: 1, background: "#EEF0F6" }} />
      <div className="absolute" style={{ left: 195, top: 156, width: 10, height: 1, background: "#EEF0F6" }} />

      {/* Small sketch image — bottom center-right */}
      <img
        src={breed.photo}
        alt=""
        aria-hidden="true"
        className="absolute object-contain object-bottom opacity-30"
        style={{ left: 161, top: 157, width: 78, height: 58 }}
      />

      {/* Main dog image — right side */}
      <img
        src={breed.photo}
        alt={breed.name}
        className="absolute object-cover object-center"
        style={{ left: 232, top: 58, width: 139, height: 166, borderRadius: 4 }}
      />
    </div>
    </Link>
  );
}

// ─── Letter Section ─────────────────────────────────────────────────────────
function LetterSection({ letter, breeds }: { letter: string; breeds: Breed[] }) {
  return (
    <div id={`breed-section-${letter}`} className="scroll-mt-6 pt-4">
      {/* Letter header + separator — exactly as in the Figma screenshots */}
      <div className="flex items-center gap-4 mb-2">
        <span className="text-2xl font-bold text-gray-300 leading-none select-none">
          {letter}
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {breeds.map((breed) => (
          <BreedCard key={breed.name} breed={breed} />
        ))}
      </div>
    </div>
  );
}

// ─── Featured Carousel (swipeable breed showcase below alphabet) ─────────────
function FeaturedCarousel({ breeds }: { breeds: Breed[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const featured = breeds.slice(0, 10);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="animate-on-scroll stagger-children mb-8 md:mb-10 mx-4 md:mx-6 bg-white rounded-2xl py-5 sm:py-6 relative overflow-hidden" style={{ minHeight: "264px" }}>
      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label="Scroll left"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 4L6 8L10 12" stroke="#25272C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-12"
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
      >
        {featured.map((breed) => (
          <div
            key={`featured-${breed.name}`}
            className="flex-shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >
            <BreedCard breed={breed} />
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label="Scroll right"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke="#25272C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────
export default function BrowseBreedsSection() {
  const [searchValue, setSearchValue] = useState("");
  const [activeLetter, setActiveLetter] = useState("All");
  const headerRef = useRef<HTMLDivElement>(null);

  // Search filters breeds; letter just scrolls — never hides breeds
  const displayedBreeds =
    searchValue.trim().length > 1
      ? BREEDS.filter((b) => b.name.toLowerCase().includes(searchValue.toLowerCase()))
      : BREEDS;

  const grouped = groupBreedsByLetter(displayedBreeds);
  const sortedLetters = Object.keys(grouped).sort();

  // Scroll to selected letter section
  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter);
    if (letter === "All") {
      headerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setTimeout(() => {
        document
          .getElementById(`breed-section-${letter}`)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 20);
    }
  };

  // Update active letter as user scrolls through sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const letter = entry.target.id.replace("breed-section-", "");
            setActiveLetter(letter);
          }
        }
      },
      { threshold: 0.3 }
    );

    sortedLetters.forEach((l) => {
      const el = document.getElementById(`breed-section-${l}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sortedLetters.join("")]);

  const alphabetBtn = (letter: string) => {
    const hasBreeds = LETTERS_WITH_BREEDS.has(letter) || letter === "All";
    const isActive = activeLetter === letter;
    return (
      <button
        key={letter}
        onClick={() => hasBreeds && handleLetterClick(letter)}
        className={[
          "h-8 flex items-center justify-center text-[13px] font-medium transition-colors rounded-full",
          letter === "All" ? "px-4 min-w-[44px]" : "w-8",
          isActive ? "bg-[#D93F53] text-white" : "",
          !isActive && hasBreeds ? "text-[#53565A] hover:bg-gray-200" : "",
          !isActive && !hasBreeds ? "text-gray-300 cursor-default" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {letter}
      </button>
    );
  };

  return (
    <section className="bg-[#F5F5F2] py-10 md:py-14" ref={headerRef}>

      {/* Header */}
      <div className="text-center mb-6 md:mb-8 px-4 md:px-6">
        <h2 className="animate-on-scroll animate-fade-in-down text-3xl sm:text-4xl md:text-5xl font-bold text-[#25272C] leading-tight inline-flex items-start gap-1.5">
          Browse Dog Breeds
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#D93F53] fill-[#D93F53] flex-shrink-0 mt-1.5 sm:mt-2" />
        </h2>
        <p className="animate-on-scroll animate-fade-in-up delay-200 text-[#53565A] text-sm sm:text-base mt-2 sm:mt-3 max-w-sm sm:max-w-none mx-auto">
          Explore {BREEDS.length}+ recognized dog breeds and find reputable breeders near you
        </p>
      </div>

      {/* Search */}
      <div className="animate-on-scroll animate-fade-in-up flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-3 mb-3 px-4 md:px-6">
        <div className="flex items-center bg-white rounded-full px-4 py-[10px] gap-2.5 shadow-sm w-full sm:max-w-[500px]">
          <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1 outline-none text-sm text-[#25272C] bg-transparent placeholder:text-gray-400"
            placeholder="Search breed..."
          />
        </div>
        <div className="flex gap-2 sm:gap-3 flex-shrink-0">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#2B5F3E] text-white px-5 py-[10px] rounded-full text-sm font-medium hover:bg-[#1e4d31] transition-colors">
            Search <ChevronRight className="w-4 h-4" />
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 border border-[#25272C] text-[#25272C] px-4 py-[10px] rounded-full text-sm font-medium hover:bg-white transition-colors">
            Filter <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hint */}
      <p className="text-center text-xs text-gray-400 mb-6 md:mb-8 px-4">
        Find licensed veterinarians, certified breeders, and upcoming events in your area
      </p>

      {/* Alphabet filter — mobile: horizontal scroll / desktop: flex-wrap centered */}
      <div className="mb-6 md:mb-8 px-4 md:px-6">
        <div className="flex md:hidden gap-0.5 overflow-x-auto scrollbar-hide pb-1">
          {ALPHABET.map((l) => {
            const hasBreeds = LETTERS_WITH_BREEDS.has(l) || l === "All";
            const isActive = activeLetter === l;
            return (
              <button
                key={l}
                onClick={() => hasBreeds && handleLetterClick(l)}
                className={[
                  "flex-shrink-0 h-8 flex items-center justify-center text-[13px] font-medium transition-colors rounded-full",
                  l === "All" ? "px-3 min-w-[40px]" : "w-8",
                  isActive ? "bg-[#D93F53] text-white" : "",
                  !isActive && hasBreeds ? "text-[#53565A] hover:bg-gray-200" : "",
                  !isActive && !hasBreeds ? "text-gray-300 cursor-default" : "",
                ].filter(Boolean).join(" ")}
              >
                {l}
              </button>
            );
          })}
        </div>
        <div className="hidden md:flex items-center justify-center gap-0.5 flex-wrap max-w-[960px] mx-auto">
          {ALPHABET.map(alphabetBtn)}
        </div>
      </div>

      {/* Featured breeds — horizontal swipeable carousel below alphabet */}
      <FeaturedCarousel breeds={BREEDS} />

      {/* Cards panel — white bg */}
      <div className="bg-white mx-4 md:mx-6 rounded-2xl px-4 sm:px-6 pb-10 pt-2">
        {sortedLetters.length > 0 ? (
          <div className="space-y-6">
            {sortedLetters.map((letter) => (
              <LetterSection key={letter} letter={letter} breeds={grouped[letter]} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-[#53565A] text-sm">No breeds match your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
