"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Calendar as CalendarIcon,
  MapPin,
  Search,
  Trophy,
  Award,
  DollarSign,
  Check,
  List,
  Calendar as CalendarGridIcon,
  Info,
  X,
  Building,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { DOG_SHOWS, DogShow } from "@/data/shows";
import NewsletterSignup from "@/components/NewsletterSignup";
import { ShowCard } from "./ShowCard";
import { ShowModal } from "./ShowModal";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const US_STATES = [
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "FL", name: "Florida" },
  { code: "IL", name: "Illinois" },
  { code: "NY", name: "New York" },
  { code: "TX", name: "Texas" },
  { code: "WA", name: "Washington" },
];

export default function DogShowsPageContent() {
  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedClub, setSelectedClub] = useState("");

  // UI States
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  const [calendarMonth, setCalendarMonth] = useState(5); // Default to June (5)
  const [calendarYear] = useState(2026); // Fixed year
  const [selectedShow, setSelectedShow] = useState<DogShow | null>(null);

  // Sync calendar month view with filter month
  useEffect(() => {
    if (selectedMonth !== "") {
      setCalendarMonth(Number(selectedMonth));
    }
  }, [selectedMonth]);

  // Compute unique breed clubs dynamically
  const breedClubs = useMemo(() => {
    const clubs = Array.from(new Set(DOG_SHOWS.map((s) => s.club)));
    return clubs.sort();
  }, []);

  // Compute state show counts based on active data (unfiltered)
  const stateCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    DOG_SHOWS.forEach((show) => {
      counts[show.stateAbbr] = (counts[show.stateAbbr] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter shows reactively
  const filteredShows = useMemo(() => {
    return DOG_SHOWS.filter((show) => {
      const matchesKeyword =
        !searchQuery ||
        show.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        show.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        show.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        show.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
        show.club.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesState = !selectedState || show.stateAbbr === selectedState;
      
      const matchesMonth =
        selectedMonth === "" || show.monthIndex === Number(selectedMonth);

      const matchesClub = !selectedClub || show.club === selectedClub;

      return matchesKeyword && matchesState && matchesMonth && matchesClub;
    });
  }, [searchQuery, selectedState, selectedMonth, selectedClub]);

  // Featured shows list
  const featuredShows = useMemo(() => {
    return DOG_SHOWS.filter((s) => s.featured);
  }, []);

  // Calendar Helpers
  const daysInMonth = useMemo(() => {
    return new Date(calendarYear, calendarMonth + 1, 0).getDate();
  }, [calendarMonth, calendarYear]);

  const firstDayOfWeek = useMemo(() => {
    return new Date(calendarYear, calendarMonth, 1).getDay(); // 0 is Sunday, 1 is Monday...
  }, [calendarMonth, calendarYear]);

  const handlePrevMonth = () => {
    if (calendarMonth > 5) {
      setCalendarMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (calendarMonth < 9) {
      setCalendarMonth((prev) => prev + 1);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedState("");
    setSelectedMonth("");
    setSelectedClub("");
  };

  const handleStateClick = (stateCode: string) => {
    if (selectedState === stateCode) {
      setSelectedState("");
    } else {
      setSelectedState(stateCode);
    }
  };

  const handleClubClick = (clubName: string) => {
    if (selectedClub === clubName) {
      setSelectedClub("");
    } else {
      setSelectedClub(clubName);
    }
  };

  return (
    <div className="min-h-screen bg-pet-bg font-sans">
      {/* 1. Breadcrumbs */}
      <nav className="px-6 pt-6 pb-2 max-w-7xl mx-auto w-full">
        <ol className="flex items-center flex-wrap gap-2 text-xs font-poppins font-medium text-nav-text">
          <li>
            <Link href="/" className="hover:text-brand-red transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="text-brand-dark font-semibold whitespace-nowrap">
            Dog Shows
          </li>
        </ol>
      </nav>

      {/* 2. Hero Section & Interactive Search */}
      <section className="bg-white px-6 pt-8 pb-12 border-b border-pet-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-3 tracking-wide uppercase">
                Events & Competitions
              </span>
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-dark leading-[1.1]">
                Find Dog Shows Near You
              </h1>
              <p className="font-poppins text-sm sm:text-base text-nav-text leading-relaxed mt-3">
                Explore conformation shows, obedience trials, agility events, and major national championships. 
                Filter by date, state, and club to find show entry details and spectator schedules.
              </p>
            </div>
          </div>

          {/* Search Panel */}
          <div className="bg-white border border-pet-stroke rounded-2xl p-4 sm:p-6 shadow-card grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Keyword Search */}
            <div className="flex flex-col gap-2">
              <label htmlFor="search-input" className="font-poppins font-semibold text-xs text-brand-dark">
                Search Shows
              </label>
              <div className="flex items-center gap-2 bg-pet-input-bg border border-pet-stroke rounded-lg px-3 py-2.5 w-full focus-within:bg-white focus-within:border-brand-dark transition-all">
                <Search className="w-4 h-4 text-pet-placeholder flex-shrink-0" />
                <input
                  id="search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent font-poppins text-xs text-brand-dark placeholder:text-pet-placeholder outline-none"
                  placeholder="Club, city, keyword..."
                />
              </div>
            </div>

            {/* US State Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="state-select" className="font-poppins font-semibold text-xs text-brand-dark">
                US State
              </label>
              <select
                id="state-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full bg-pet-input-bg border border-pet-stroke rounded-lg px-3 py-2.5 font-poppins text-xs text-brand-dark outline-none focus:bg-white focus:border-brand-dark transition-all"
              >
                <option value="">All States</option>
                {US_STATES.map((state) => (
                  <option key={state.code} value={state.code}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date/Month Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="month-select" className="font-poppins font-semibold text-xs text-brand-dark">
                Month (2026)
              </label>
              <select
                id="month-select"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full bg-pet-input-bg border border-pet-stroke rounded-lg px-3 py-2.5 font-poppins text-xs text-brand-dark outline-none focus:bg-white focus:border-brand-dark transition-all"
              >
                <option value="">All Months</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
              </select>
            </div>

            {/* Clear / Status Action */}
            <div>
              <button
                onClick={clearFilters}
                className="w-full flex items-center justify-center gap-1.5 font-poppins font-semibold text-xs text-brand-red border border-brand-red rounded-full px-5 py-2.5 hover:bg-brand-red hover:text-white transition-all text-center shadow-sm cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. List / Calendar View Toggle & Listings */}
      <section className="px-6 py-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-brand-dark">
              Upcoming Shows Calendar
            </h2>
            <p className="font-poppins text-xs text-nav-text mt-1">
              Found {filteredShows.length} matching events
            </p>
          </div>

          {/* Toggle Switcher */}
          <div className="flex bg-white border border-pet-stroke rounded-full p-1 self-start sm:self-center shadow-sm">
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 font-poppins font-semibold text-xs px-4 py-2 rounded-full transition-all ${
                viewMode === "list"
                  ? "bg-brand-dark text-white shadow-sm"
                  : "text-nav-text hover:text-brand-dark"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              List View
            </button>
            <button
              onClick={() => setViewMode("calendar")}
              className={`flex items-center gap-2 font-poppins font-semibold text-xs px-4 py-2 rounded-full transition-all ${
                viewMode === "calendar"
                  ? "bg-brand-dark text-white shadow-sm"
                  : "text-nav-text hover:text-brand-dark"
              }`}
            >
              <CalendarGridIcon className="w-3.5 h-3.5" />
              Calendar View
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        {viewMode === "list" ? (
          /* List View Layout */
          filteredShows.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {filteredShows.map((show) => (
                <ShowCard key={show.slug} show={show} onDetails={setSelectedShow} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-pet-stroke rounded-2xl p-16 text-center shadow-card max-w-xl mx-auto">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-dark font-poppins">No Dog Shows Found</h3>
              <p className="text-nav-text text-sm mt-2 max-w-sm mx-auto font-poppins">
                We couldn&apos;t find any upcoming dog shows matching your current search parameters. Try resetting your filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 inline-flex items-center justify-center font-poppins font-semibold text-sm bg-brand-red text-white rounded-full px-6 py-2.5 hover:opacity-90 transition-opacity"
              >
                Reset Filters
              </button>
            </div>
          )
        ) : (
          /* Calendar View Layout */
          <div className="bg-white border border-pet-stroke rounded-2xl p-4 sm:p-6 shadow-card">
            {/* Calendar Month Header Controller */}
            <div className="flex items-center justify-between border-b border-pet-stroke pb-6 mb-6">
              <button
                onClick={handlePrevMonth}
                disabled={calendarMonth <= 5}
                className="flex items-center gap-1 font-poppins font-semibold text-xs text-brand-dark border border-pet-stroke rounded-lg px-3 py-2 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>
              <h3 className="font-poppins font-bold text-lg sm:text-xl text-brand-dark">
                {MONTH_NAMES[calendarMonth]} {calendarYear}
              </h3>
              <button
                onClick={handleNextMonth}
                disabled={calendarMonth >= 9}
                className="flex items-center gap-1 font-poppins font-semibold text-xs text-brand-dark border border-pet-stroke rounded-lg px-3 py-2 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-2 text-center border-b border-pet-stroke pb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (
                <div key={dayName} className="font-poppins font-bold text-xs text-brand-dark uppercase tracking-wider py-1">
                  {dayName}
                </div>
              ))}
            </div>

            {/* Calendar Grid cells */}
            <div className="grid grid-cols-7 gap-2 mt-2 auto-rows-[100px] sm:auto-rows-[120px]">
              {/* Padding empty cells */}
              {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
                <div key={`empty-${idx}`} className="bg-gray-50 border border-gray-100 rounded-lg opacity-50" />
              ))}

              {/* Day cells */}
              {Array.from({ length: daysInMonth }).map((_, idx) => {
                const day = idx + 1;
                // Get shows on this calendar day
                const showsOnDay = filteredShows.filter(
                  (show) => show.monthIndex === calendarMonth && show.days.includes(day)
                );

                return (
                  <div
                    key={`day-${day}`}
                    className={`border border-pet-stroke rounded-lg p-2 flex flex-col justify-between overflow-hidden transition-colors ${
                      showsOnDay.length > 0 ? "bg-white border-brand-red/30 shadow-sm" : "bg-white hover:bg-gray-50/50"
                    }`}
                  >
                    <span className={`font-poppins font-semibold text-xs ${showsOnDay.length > 0 ? "text-brand-red font-bold" : "text-brand-dark"}`}>
                      {day}
                    </span>

                    {/* Show listings for this day cell */}
                    <div className="flex-1 flex flex-col justify-end gap-1 mt-1 overflow-y-auto scrollbar-hide">
                      {showsOnDay.map((show) => (
                        <div
                          key={show.slug}
                          onClick={() => setSelectedShow(show)}
                          title={`${show.name} - ${show.city}, ${show.stateAbbr}`}
                          className="bg-brand-red text-white text-[9px] font-poppins font-medium rounded p-1 leading-tight truncate cursor-pointer transition-opacity hover:opacity-90 flex items-center gap-0.5"
                        >
                          <Trophy className="w-2.5 h-2.5 flex-shrink-0" />
                          <span className="truncate">{show.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-2 mt-4 text-[11px] text-nav-text font-poppins bg-pet-bg rounded-lg p-3 border border-pet-stroke">
              <Info className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>Click on any show badge inside the calendar grid to inspect entry deadlines, event addresses, and breed classes.</span>
            </div>
          </div>
        )}
      </section>

      {/* 4. Featured Events Section */}
      <section className="px-6 py-16 bg-white border-t border-b border-pet-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start mb-10">
            <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-3 tracking-wide uppercase">
              Spotlight Events
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-brand-dark">
              Featured Dog Championships
            </h2>
            <p className="font-poppins text-xs sm:text-sm text-nav-text mt-1">
              Top conformation evaluations and historic cups you shouldn&apos;t miss.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredShows.map((show) => (
              <ShowCard key={`featured-${show.slug}`} show={show} onDetails={setSelectedShow} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Browse by State Section */}
      <section className="px-6 py-16 bg-pet-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-3 tracking-wide uppercase">
              Location Map Directory
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-brand-dark">
              Browse Events by US State
            </h2>
            <p className="font-poppins text-xs sm:text-sm text-nav-text mt-1 max-w-lg">
              Explore dog shows within specific jurisdictions to minimize handler travel schedules.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {US_STATES.map((state) => {
              const count = stateCounts[state.code] || 0;
              const isActive = selectedState === state.code;
              // Derive the URL-safe slug from the state name
              const stateSlug = state.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <div key={state.code} className="flex flex-col gap-2">
                  <button
                    onClick={() => handleStateClick(state.code)}
                    className={`border rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-brand-red border-brand-red text-white shadow-md hover:bg-brand-red/90"
                        : "bg-white border-pet-stroke text-brand-dark hover:border-brand-dark hover:-translate-y-0.5 shadow-sm"
                    }`}
                  >
                    <MapPin className={`w-6 h-6 mb-2 ${isActive ? "text-white" : "text-brand-red"}`} />
                    <span className="font-poppins font-semibold text-xs leading-snug line-clamp-1">
                      {state.name}
                    </span>
                    <span className={`font-poppins text-[10px] mt-1 ${isActive ? "text-white/80" : "text-nav-text"}`}>
                      {count} {count === 1 ? "Show" : "Shows"}
                    </span>
                  </button>
                  <Link
                    href={`/dog-shows/state/${stateSlug}`}
                    className="group flex items-center justify-center gap-1.5 rounded-[10px] bg-white border border-pet-stroke px-3 py-2 font-poppins text-[11px] font-semibold text-brand-dark shadow-sm transition-all hover:bg-brand-red hover:border-brand-red hover:text-white"
                  >
                    View state events
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Browse by Breed Club Section */}
      <section className="px-6 py-12 bg-white border-t border-b border-pet-stroke">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-3 tracking-wide uppercase">
            Sanctioning Bodies
          </span>
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-brand-dark mb-6">
            Browse Kennel & Breed Clubs
          </h2>

          <div className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-3 w-full -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
            {breedClubs.map((club) => {
              const isActive = selectedClub === club;
              return (
                <button
                  key={club}
                  onClick={() => handleClubClick(club)}
                  className={`flex-shrink-0 font-poppins text-xs font-semibold rounded-full px-5 py-2.5 border transition-all shadow-sm cursor-pointer ${
                    isActive
                      ? "bg-brand-dark border-brand-dark text-white hover:opacity-90"
                      : "border-pet-stroke text-brand-dark bg-white hover:border-brand-dark hover:text-brand-red"
                  }`}
                >
                  {club}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. "New to Dog Shows?" Card */}
      <section className="px-6 py-12 max-w-7xl mx-auto w-full">
        <div className="bg-[#E4EEFE] border border-pet-blue-light rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 shadow-sm">
          <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-pet-stroke">
            <Award className="w-10 h-10 text-pet-blue" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-poppins font-semibold text-2xl text-brand-dark leading-[120%] tracking-[-0.4px] mb-2">
              New to Dog Shows?
            </h3>
            <p className="font-poppins text-sm md:text-base text-nav-text leading-relaxed max-w-2xl">
              Attending your first dog show can be overwhelming. Learn about conformation rules, obedience tests, 
              agility standards, and handler ring etiquettes in our official guide for first-time exhibitors and spectators.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/blog/preparing-for-first-dog-show"
              className="btn-animate inline-flex items-center justify-center font-poppins font-semibold text-sm bg-pet-blue text-white rounded-full px-8 py-3.5 hover:opacity-90 transition-opacity"
            >
              Read Beginner Guide
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Newsletter Signup */}
      <NewsletterSignup className="bg-pet-bg" />

      {/* Show Details Modal */}
      {selectedShow && (
        <ShowModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>
  );
}
