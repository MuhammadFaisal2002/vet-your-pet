"use client";

import React from "react";
import Image from "next/image";
import {
  X,
  Calendar as CalendarIcon,
  MapPin,
  Building,
  DollarSign,
} from "lucide-react";
import { DogShow } from "@/data/shows";

interface ShowModalProps {
  show: DogShow;
  onClose: () => void;
}

export function ShowModal({ show, onClose }: ShowModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-pet-stroke">
        {/* Photo banner */}
        <div className="relative aspect-[16/9] w-full bg-gray-50">
          <Image
            src={show.photo}
            alt={show.name}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 672px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
            <div>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider mb-2 font-poppins">
                {show.organization}
              </span>
              <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white leading-tight">
                {show.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-brand-dark p-2 rounded-full shadow-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-pet-bg rounded-2xl p-4 border border-pet-stroke font-poppins text-sm text-nav-text">
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-5 h-5 text-brand-red flex-shrink-0" />
              <div>
                <span className="block text-[10px] text-nav-text uppercase tracking-wider">Date</span>
                <span className="font-semibold text-brand-dark">{show.dates}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-brand-red flex-shrink-0" />
              <div>
                <span className="block text-[10px] text-nav-text uppercase tracking-wider">Location</span>
                <span className="font-semibold text-brand-dark">
                  {show.city}, {show.stateAbbr}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div>
                <span className="block text-[10px] text-nav-text uppercase tracking-wider">Venue</span>
                <span className="font-semibold text-brand-dark line-clamp-1">{show.venue}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-pet-green flex-shrink-0" />
              <div>
                <span className="block text-[10px] text-nav-text uppercase tracking-wider">Entry Fee</span>
                <span className="font-semibold text-brand-dark">${show.entryFee} USD</span>
              </div>
            </div>
          </div>

          {/* Host club */}
          <div className="flex items-center gap-3 border-b border-pet-stroke pb-4">
            <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
            <span className="font-poppins text-xs font-semibold text-brand-dark uppercase tracking-wider">
              Host Club: <span className="text-brand-red">{show.club}</span>
            </span>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-poppins font-bold text-sm text-brand-dark mb-2">
              Event Details &amp; Eligibility
            </h4>
            <p className="font-poppins text-sm text-nav-text leading-relaxed">
              {show.details}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 border-t border-pet-stroke pt-6">
            <button
              onClick={onClose}
              className="flex-1 font-poppins font-semibold text-xs text-brand-dark border border-pet-stroke rounded-full py-3 hover:border-brand-dark transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                alert(`Directing to ${show.organization} official entry registry portal.`);
                onClose();
              }}
              className="flex-1 font-poppins font-semibold text-xs bg-brand-red text-white rounded-full py-3 hover:opacity-90 transition-opacity"
            >
              Enter Event / Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
