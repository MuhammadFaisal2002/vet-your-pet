"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Calendar as CalendarIcon,
  Trophy,
  DollarSign,
  Building,
  Award,
  Clock,
  ArrowRight,
  X,
  Sparkles,
  Users,
  Search,
  ExternalLink,
} from "lucide-react";
import { DogShow } from "@/data/shows";
import NewsletterSignup from "@/components/NewsletterSignup";
import { ShowCard } from "./ShowCard";
import { ShowModal } from "./ShowModal";
import { Breadcrumb, HeroGradientCard } from "@/components/ui";

interface StateInfo {
  slug: string;
  name: string;
  abbr: string;
  count: number;
}

interface Props {
  stateName: string;
  stateAbbr: string;
  stateSlug: string;
  shows: DogShow[];
  allStates: StateInfo[];
}

// Month name helper
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Derive upcoming vs past shows relative to today
function partitionShows(shows: DogShow[]): { upcoming: DogShow[]; past: DogShow[] } {
  const now = new Date();
  const upcoming: DogShow[] = [];
  const past: DogShow[] = [];

  shows.forEach((show) => {
    const lastDay = Math.max(...show.days);
    const showEnd = new Date(2026, show.monthIndex, lastDay, 23, 59, 59);
    if (showEnd >= now) {
      upcoming.push(show);
    } else {
      past.push(show);
    }
  });

  // Sort upcoming ASC by date, past DESC (most recent first)
  upcoming.sort((a, b) => {
    const dateA = new Date(2026, a.monthIndex, Math.min(...a.days));
    const dateB = new Date(2026, b.monthIndex, Math.min(...b.days));
    return dateA.getTime() - dateB.getTime();
  });
  past.sort((a, b) => {
    const dateA = new Date(2026, a.monthIndex, Math.min(...a.days));
    const dateB = new Date(2026, b.monthIndex, Math.min(...b.days));
    return dateB.getTime() - dateA.getTime();
  });

  return { upcoming, past };
}



// ─── Main Page Component ──────────────────────────────────────────────────────
export default function DogShowsByStatePageContent({
  stateName,
  stateAbbr,
  stateSlug,
  shows,
  allStates,
}: Props) {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const { upcoming, past } = useMemo(() => partitionShows(shows), [shows]);

  const displayedShows = activeTab === "upcoming" ? upcoming : past;

  // Other states for cross-link section
  const otherStates = allStates.filter((s) => s.slug !== stateSlug && s.count > 0);

  return (
    <div className="min-h-screen bg-pet-bg font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-10 flex flex-col gap-6">
        {/* ── 1. Breadcrumb ── */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Dog Shows", href: "/dog-shows" },
            { label: stateName, isActive: true },
          ]}
        />

        {/* ── 2. Hero ── */}
        <HeroGradientCard
          leftContent={
            <div className="h-[160px] w-[160px] bg-white border border-pet-stroke rounded-[6px] flex flex-col items-center justify-center shadow-sm">
              <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-brand-red" />
              </div>
              <p className="font-poppins font-extrabold text-4xl text-brand-dark">{stateAbbr}</p>
              <p className="font-poppins text-[10px] text-nav-text mt-1 uppercase tracking-widest">{stateName}</p>
            </div>
          }
          middleContent={
            <>
              <div className="flex flex-col gap-4">
                <h1 className="text-[20px] font-medium text-[#26292F]">
                  Dog Shows in {stateName}
                </h1>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 border border-[#E4DFDC] shadow-sm">
                    <Trophy className="w-3.5 h-3.5 text-[#4A5565]" />
                    <span className="text-[12px] font-medium text-[#26292F]">{shows.length} Total Shows</span>
                  </div>
                  {upcoming.length > 0 && (
                    <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 border border-[#E4DFDC] shadow-sm">
                      <CalendarIcon className="w-3.5 h-3.5 text-[#4A5565]" />
                      <span className="text-[12px] font-medium text-[#26292F]">{upcoming.length} Upcoming</span>
                    </div>
                  )}
                  {past.length > 0 && (
                    <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 border border-[#E4DFDC] shadow-sm">
                      <Clock className="w-3.5 h-3.5 text-[#9199A4]" />
                      <span className="text-[12px] font-medium text-[#26292F]">{past.length} Past</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex min-h-[24px] items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#9199A4]" />
                  <span className="text-[14px] font-medium leading-5 text-[#4A5565]">Region</span>
                  <span className="text-[14px] font-normal leading-5 text-[#9199A4]">All AKC events hosted in {stateName}</span>
                </div>
                <div className="flex min-h-[24px] items-center gap-2">
                  <Award className="w-4 h-4 text-[#9199A4]" />
                  <span className="text-[14px] font-medium leading-5 text-[#4A5565]">Coverage</span>
                  <span className="text-[14px] font-normal leading-5 text-[#9199A4] line-clamp-1">Conformation, obedience, agility & specialties</span>
                </div>
              </div>
            </>
          }
          rightContent={
            <>
              <div className="flex flex-col gap-[5px]">
                <span className="text-[12px] font-normal text-[#9199A4]">Directory Action:</span>
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className="text-left text-[14px] font-medium text-[#26292F] hover:text-brand-red transition-colors inline-flex items-center gap-1"
                >
                  View Local Events <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="text-[12px] font-normal text-[#9199A4]">Browse:</span>
                <a
                  href="#clubs"
                  className="text-left text-[14px] font-medium text-[#26292F] hover:text-brand-red transition-colors"
                >
                  Regional Breed Clubs
                </a>
              </div>
            </>
          }
        />
      </div>

      {/* ── 3. Events List (Upcoming + Past Tabs) ── */}
      <section className="px-6 py-12 max-w-7xl mx-auto w-full">

        {/* Tab switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-brand-dark">
              {activeTab === "upcoming" ? "Upcoming Events" : "Past Events Archive"}
            </h2>
            <p className="font-poppins text-xs text-nav-text mt-1">
              {displayedShows.length === 0
                ? "No events in this category"
                : `${displayedShows.length} ${displayedShows.length === 1 ? "event" : "events"} found`}
            </p>
          </div>

          <div className="flex bg-white border border-pet-stroke rounded-full p-1 self-start sm:self-center shadow-sm">
            <button
              id="tab-upcoming"
              onClick={() => setActiveTab("upcoming")}
              className={`flex items-center gap-2 font-poppins font-semibold text-xs px-5 py-2.5 rounded-full transition-all ${
                activeTab === "upcoming"
                  ? "bg-brand-red text-white shadow-sm"
                  : "text-nav-text hover:text-brand-dark"
              }`}
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              Upcoming ({upcoming.length})
            </button>
            <button
              id="tab-past"
              onClick={() => setActiveTab("past")}
              className={`flex items-center gap-2 font-poppins font-semibold text-xs px-5 py-2.5 rounded-full transition-all ${
                activeTab === "past"
                  ? "bg-brand-dark text-white shadow-sm"
                  : "text-nav-text hover:text-brand-dark"
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              Past ({past.length})
            </button>
          </div>
        </div>

        {/* Events grid or empty state */}
        {displayedShows.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedShows.map((show) => (
              <ShowCard
                key={show.slug}
                show={show}
                isPast={activeTab === "past"}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-pet-stroke rounded-2xl p-16 text-center shadow-card max-w-lg mx-auto">
            <Search className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <h3 className="font-poppins font-bold text-lg text-brand-dark">
              {activeTab === "upcoming"
                ? "No Upcoming Shows Listed"
                : "No Past Shows to Display"}
            </h3>
            <p className="font-poppins text-xs text-nav-text mt-2 max-w-xs mx-auto leading-relaxed">
              {activeTab === "upcoming"
                ? `We don't have upcoming shows for ${stateName} in our database yet. Check the full calendar for nearby states.`
                : `The past events archive for ${stateName} is empty.`}
            </p>
            <Link
              href="/dog-shows"
              className="mt-6 inline-flex items-center gap-2 font-poppins font-semibold text-sm bg-brand-red text-white rounded-full px-6 py-2.5 hover:opacity-90 transition-opacity"
            >
              View Full Calendar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </section>

      {/* ── 4. Past Events Archive callout (only when viewing upcoming & there ARE past events) ── */}
      {activeTab === "upcoming" && past.length > 0 && (
        <section className="px-6 pb-8 max-w-7xl mx-auto w-full -mt-4">
          <div className="bg-brand-dark/5 border border-brand-dark/10 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-nav-text flex-shrink-0" />
              <p className="font-poppins text-sm text-nav-text">
                <span className="font-semibold text-brand-dark">{past.length} past {past.length === 1 ? "event" : "events"}</span> from {stateName} are available in the archive.
              </p>
            </div>
            <button
              onClick={() => setActiveTab("past")}
              className="flex-shrink-0 font-poppins font-semibold text-xs text-brand-dark border border-brand-dark/30 rounded-full px-5 py-2.5 hover:border-brand-dark transition-colors"
            >
              View Past Events →
            </button>
          </div>
        </section>
      )}

      {/* ── 5. Local Breed Clubs Cross-link ── */}
      <section className="px-6 py-16 bg-white border-t border-b border-pet-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="inline-flex items-center gap-2 font-poppins font-semibold text-xs text-brand-red mb-3 tracking-widest uppercase">
              Sanctioning Bodies
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-brand-dark">
              Local Breed Clubs in {stateName}
            </h2>
            <p className="font-poppins text-xs sm:text-sm text-nav-text mt-2 max-w-lg">
              These kennel and specialty clubs organize the shows listed above and sanction AKC events in {stateName}.
            </p>
          </div>

          {shows.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from(new Set(shows.map((s) => s.club))).map((club) => {
                const clubShows = shows.filter((s) => s.club === club);
                return (
                  <div
                    key={club}
                    className="bg-pet-bg border border-pet-stroke rounded-2xl p-5 flex items-start gap-4 hover:border-brand-red/30 hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-5 h-5 text-brand-red" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-poppins font-bold text-sm text-brand-dark leading-snug">
                        {club}
                      </p>
                      <p className="font-poppins text-xs text-nav-text mt-1">
                        {clubShows.length} {clubShows.length === 1 ? "show" : "shows"} organized · {stateName}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {clubShows.map((s) => (
                          <span
                            key={s.slug}
                            className="text-[10px] font-poppins font-semibold text-pet-tag-text bg-pet-tag-bg rounded-full px-2 py-0.5"
                          >
                            {MONTH_NAMES[s.monthIndex]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center gap-1 font-poppins text-[10px] font-semibold text-brand-red bg-brand-red/10 rounded-full px-2.5 py-1">
                        <Award className="w-2.5 h-2.5" />
                        AKC
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center font-poppins text-sm text-nav-text">
              No clubs listed for {stateName} yet.
            </p>
          )}

          <div className="mt-8 text-center">
            <Link
              href="/dog-shows"
              className="inline-flex items-center gap-2 font-poppins font-semibold text-sm text-brand-dark border border-pet-stroke rounded-full px-6 py-3 hover:border-brand-dark transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-brand-red" />
              View All Kennel Clubs Nationwide
            </Link>
          </div>
        </div>
      </section>



    </div>
  );
}
