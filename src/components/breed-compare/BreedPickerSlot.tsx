"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { Breed } from "@/data/breeds";

export interface BreedPickerSlotProps {
  breed: Breed | null;
  allBreeds: Breed[];
  excludeSlugs: string[];
  onSelect: (breed: Breed) => void;
  onClear: () => void;
  autoFocus?: boolean;
  className?: string;
}

export default function BreedPickerSlot({
  breed,
  allBreeds,
  excludeSlugs,
  onSelect,
  onClear,
  autoFocus = false,
  className = "",
}: BreedPickerSlotProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter breeds based on search query, excluding already selected
  const filteredBreeds = allBreeds
    .filter(
      (b) =>
        !excludeSlugs.includes(b.slug) &&
        (b.name.toLowerCase().includes(query.toLowerCase()) ||
          b.aliases?.some((a) => a.toLowerCase().includes(query.toLowerCase())))
    )
    .slice(0, 8);

  // Focus input on mount if autoFocus
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (selectedBreed: Breed) => {
    onSelect(selectedBreed);
    setQuery("");
    setIsOpen(false);
  };

  if (!breed) {
    // Empty state
    return (
      <div
        ref={containerRef}
        className={`group relative w-full rounded-2xl border-2 border-dashed border-[#E9EAEE] bg-[#F7F7F8] p-6 flex flex-col items-stretch gap-4 min-h-[400px] transition-colors hover:border-[#D7D9DE] hover:bg-[#F2F2F4] focus-within:border-brand-red focus-within:bg-white ${className}`}
      >
        {/* Plus icon circle */}
        <div className="mx-auto w-10 h-10 rounded-full bg-white border border-[#E9EAEE] flex items-center justify-center text-nav-text group-hover:text-brand-dark transition-colors">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 4V16M4 10H16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Title */}
        <div className="text-center">
          <h3 className="font-poppins font-semibold text-base text-brand-dark leading-tight">
            Add a breed
          </h3>
          <p className="font-poppins text-xs text-nav-text leading-relaxed -mt-1">
            Type to search 200+ breeds
          </p>
        </div>

        {/* Search input + dropdown wrapper (relative so dropdown anchors to input, not outer card) */}
        <div className="relative">
          <div className="flex items-center gap-2 bg-white border border-pet-input-border rounded-full px-4 py-2.5 focus-within:border-pet-blue focus-within:shadow-sm transition-all">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-pet-placeholder flex-shrink-0"
            >
              <path
                d="M7.5 13C10.5376 13 13 10.5376 13 7.5C13 4.46243 10.5376 2 7.5 2C4.46243 2 2 4.46243 2 7.5C2 10.5376 4.46243 13 7.5 13Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M14 14L10.5 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search breeds…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              className="flex-1 bg-transparent font-poppins text-sm text-brand-dark placeholder:text-pet-placeholder outline-none"
            />
          </div>

          {/* Dropdown — anchored to input, max-height + scroll */}
          {isOpen && filteredBreeds.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-pet-input-border shadow-lg z-50 overflow-y-auto max-h-[280px]">
              {filteredBreeds.map((b) => (
                <button
                  key={b.slug}
                  onClick={() => handleSelect(b)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-brand-gray-bg transition-colors text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-gray-bg flex items-center justify-center overflow-hidden flex-shrink-0">
                    <span className="text-[#8D93A2] text-xs">📷</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-poppins text-sm text-brand-dark truncate">
                      {b.name}
                    </p>
                    <p className="font-poppins text-xs text-[#8D93A2] truncate">
                      {b.group} / {b.size}
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[#8D93A2] flex-shrink-0"
                  >
                    <path
                      d="M6 4L12 8L6 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Filled state
  return (
    <div
      className={`relative w-full rounded-2xl border border-[#EBEBEB] bg-white p-5 flex flex-col gap-4 min-h-[400px] ${className}`}
    >
      {/* Remove button */}
      <button
        onClick={onClear}
        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white border border-[#E9EAEE] flex items-center justify-center text-[#8D93A2] hover:text-brand-red hover:border-brand-red transition-colors"
        aria-label={`Remove ${breed.name}`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Breed image */}
      <div className="aspect-[4/5] rounded-xl overflow-hidden bg-brand-gray-bg relative">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-[#8D93A2] text-4xl">🐕</span>
        </div>
      </div>

      {/* Breed name */}
      <h3 className="font-poppins font-semibold text-lg text-brand-dark leading-tight">
        {breed.name}
      </h3>

      {/* Trait pills */}
      <div className="flex flex-wrap gap-2">
        {breed.traitPills.map((pill, idx) => (
          <span
            key={idx}
            className={`inline-flex items-center px-2.5 py-1 rounded-full font-poppins text-xs ${
              pill.tone === "akc"
                ? "bg-[#E8F5EC] text-[#2B7A3B]"
                : "bg-pet-tag-bg text-pet-tag-text"
            }`}
          >
            {pill.label}
          </span>
        ))}
      </div>

      {/* View link */}
      <Link
        href={`/breeds/${breed.slug}`}
        className="text-brand-red font-poppins text-sm font-medium flex items-center gap-1 mt-auto"
      >
        View Breed Info
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M4 3.5H10M10 3.5V9.5M10 3.5L4 10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}