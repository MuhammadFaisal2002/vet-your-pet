"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  Building,
  DollarSign,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { DogShow } from "@/data/shows";

interface ShowCardProps {
  show: DogShow;
  /** Whether the event has already passed (changes styling) */
  isPast?: boolean;
}

export function ShowCard({
  show,
  isPast = false,
}: ShowCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border shadow-card overflow-hidden hover-lift flex flex-col transition-all duration-300 h-full justify-between ${
        isPast ? "border-pet-stroke opacity-80" : "border-pet-stroke hover:border-brand-red/30"
      }`}
    >
      <div>
        {/* Photo */}
        <Link href={`/dog-shows/${show.slug}`} className="relative aspect-[3/2] w-full overflow-hidden bg-gray-50 border-b border-pet-stroke block group">
          <Image
            src={show.photo}
            alt={show.name}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isPast ? "grayscale-[40%]" : ""}`}
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider shadow-sm font-poppins">
              {show.organization}
            </span>
            {isPast && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-dark text-white text-[10px] font-bold uppercase tracking-wider shadow-sm font-poppins">
                <Clock className="w-2.5 h-2.5" />
                Past Event
              </span>
            )}
            {show.featured && !isPast && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm font-poppins">
                <Sparkles className="w-2.5 h-2.5" />
                Featured
              </span>
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3">
          <h3 className="font-poppins font-bold text-base text-brand-dark leading-snug line-clamp-2 hover:text-brand-red transition-colors">
            <Link href={`/dog-shows/${show.slug}`} className="text-left">
              {show.name}
            </Link>
          </h3>

          <div className="flex flex-col gap-2 text-xs font-poppins text-nav-text">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              <span>{show.dates}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="line-clamp-1">{show.venue}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-3.5 h-3.5 text-pet-green flex-shrink-0" />
              <span>
                Entry: <span className="font-semibold text-brand-dark">${show.entryFee}</span>
              </span>
            </div>
          </div>

          <p className="font-poppins text-xs text-nav-text leading-relaxed line-clamp-2 border-t border-pet-stroke pt-3 mt-2">
            {show.details}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-2 border-t border-pet-stroke mt-auto flex items-center justify-between">
        <span className="text-[10px] font-bold text-pet-tag-text bg-pet-tag-bg px-2.5 py-1 rounded-full uppercase tracking-wider font-poppins line-clamp-1 max-w-[55%]">
          {show.club}
        </span>
        <Link
          href={`/dog-shows/${show.slug}`}
          className="inline-flex items-center gap-1.5 font-poppins font-semibold text-xs bg-brand-red text-white rounded-full px-4 py-2 hover:opacity-90 transition-opacity flex-shrink-0"
        >
          View Details
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
