"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar as CalendarIcon,
  Building,
  DollarSign,
  Trophy,
  Award,
  Clock,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { DogShow } from "@/data/shows";
import { Breadcrumb, HeroGradientCard, PhotoGallery } from "@/components/ui";
import NewsletterSignup from "@/components/NewsletterSignup";

interface Props {
  show: DogShow;
}

// Mock Schedule Data
const MOCK_SCHEDULE = [
  { time: "07:00 AM", event: "Venue Opens & Exhibitor Registration" },
  { time: "08:30 AM", event: "Judging Begins (All Rings)" },
  { time: "11:00 AM", event: "Junior Showmanship Master Class" },
  { time: "12:00 PM", event: "Lunch Break & Demonstration" },
  { time: "01:00 PM", event: "Group Judging Starts" },
  { time: "04:30 PM", event: "Best in Show Selection" },
];

const MOCK_BREEDS = [
  "Golden Retriever", "French Bulldog", "German Shepherd", 
  "Poodle (Standard)", "Bulldog", "Beagle", "Rottweiler", "Dachshund"
];

const MOCK_PHOTOS = [
  "https://images.pexels.com/photos/33385817/pexels-photo-33385817.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/30502950/pexels-photo-30502950.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export default function DogShowDetailPageContent({ show }: Props) {
  return (
    <div className="min-h-screen bg-pet-bg font-sans">
      <div className="max-w-[1170px] mx-auto px-6 pt-6 pb-10 flex flex-col gap-6">
        {/* ── 1. Breadcrumb ── */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Dog Shows", href: "/dog-shows" },
            { label: show.stateName, href: `/dog-shows/state/${show.stateAbbr.toLowerCase()}` },
            { label: show.name, isActive: true },
          ]}
        />

        {/* ── 2. Event Hero ── */}
        <HeroGradientCard
          leftContent={
            <div className="h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px] rounded-[16px] overflow-hidden relative shadow-md">
              <Image src={show.photo} alt={show.name} fill className="object-cover" />
            </div>
          }
          middleContent={
            <>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-[10px] font-bold uppercase tracking-wider">
                    {show.organization}
                  </span>
                  {show.featured && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark font-poppins leading-tight">
                  {show.name}
                </h1>
                
                <div className="flex flex-col gap-3 mt-2">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-brand-red" />
                    <span className="font-poppins text-sm md:text-base text-brand-dark font-medium">{show.dates}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-gray-400" />
                    <span className="font-poppins text-sm md:text-base text-nav-text">{show.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-red" />
                    <span className="font-poppins text-sm md:text-base text-nav-text">{show.city}, {show.stateAbbr}</span>
                  </div>
                </div>
              </div>
            </>
          }
          rightContent={
            <>
              {/* ── 6. Registration Link / How to Enter (Quick Access) ── */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-[12px] font-normal text-[#9199A4] uppercase tracking-wider mb-1">Standard Entry Fee</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-poppins font-bold text-3xl text-brand-dark">${show.entryFee}</span>
                    <span className="font-poppins text-xs text-nav-text">USD</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => alert(`Redirecting to ${show.organization} Registration Portal`)}
                  className="w-full bg-brand-red text-white rounded-full py-3.5 px-6 font-poppins font-bold text-sm hover:opacity-90 transition-opacity shadow-sm flex justify-center items-center gap-2"
                >
                  Register / Enter Event
                  <ExternalLink className="w-4 h-4" />
                </button>
                
                <p className="text-[10px] text-nav-text text-center font-poppins">
                  Entries close 2 weeks prior to event date.
                </p>
              </div>
            </>
          }
        />
      </div>

      <div className="max-w-[1170px] mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 flex flex-col gap-8">

          {/* ── 3. Quick Facts ── */}
          <section className="bg-white rounded-2xl border border-pet-stroke p-6 sm:p-8 shadow-sm">
            <h2 className="font-poppins font-bold text-xl text-brand-dark mb-6">Quick Facts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              <div className="flex items-start gap-3">
                <div className="bg-brand-red/10 p-2 rounded-lg"><Trophy className="w-5 h-5 text-brand-red" /></div>
                <div>
                  <span className="block text-[11px] text-nav-text uppercase tracking-wider mb-0.5">Organizer & Host</span>
                  <span className="font-poppins text-sm font-semibold text-brand-dark">{show.club}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-red/10 p-2 rounded-lg"><ShieldCheck className="w-5 h-5 text-brand-red" /></div>
                <div>
                  <span className="block text-[11px] text-nav-text uppercase tracking-wider mb-0.5">Sanctioning Body</span>
                  <span className="font-poppins text-sm font-semibold text-brand-dark">{show.organization} Sanctioned</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-pet-green/10 p-2 rounded-lg"><Award className="w-5 h-5 text-pet-green" /></div>
                <div>
                  <span className="block text-[11px] text-nav-text uppercase tracking-wider mb-0.5">Judging Panel</span>
                  <span className="font-poppins text-sm font-semibold text-brand-dark">Panel of 15 Approved Judges</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 p-2 rounded-lg"><DollarSign className="w-5 h-5 text-blue-500" /></div>
                <div>
                  <span className="block text-[11px] text-nav-text uppercase tracking-wider mb-0.5">Prizes & Awards</span>
                  <span className="font-poppins text-sm font-semibold text-brand-dark">Rosettes, Trophies & Cash Prizes</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── 4. Schedule ── */}
          <section className="bg-white rounded-2xl border border-pet-stroke p-6 sm:p-8 shadow-sm">
            <h2 className="font-poppins font-bold text-xl text-brand-dark mb-6">Event Schedule</h2>
            <div className="flex flex-col relative border-l-2 border-pet-stroke ml-4 pl-6 space-y-8">
              {MOCK_SCHEDULE.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-brand-red shadow ring-4 ring-white" />
                  <div className="font-poppins font-bold text-sm text-brand-dark mb-1">{item.time}</div>
                  <div className="font-poppins text-sm text-nav-text">{item.event}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-pet-bg rounded-xl p-4 flex items-start gap-3 border border-pet-stroke">
              <Clock className="w-5 h-5 text-nav-text flex-shrink-0" />
              <p className="font-poppins text-xs text-nav-text">
                *Times are approximate and subject to change. A finalized judging program will be mailed to all exhibitors 1 week prior to the event.
              </p>
            </div>
          </section>

          {/* ── 9. Photos from past years ── */}
          <section className="bg-white rounded-2xl border border-pet-stroke p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-poppins font-bold text-xl text-brand-dark">Gallery from Past Years</h2>
            </div>
            <PhotoGallery 
              photos={MOCK_PHOTOS.map((src, idx) => ({ 
                src, 
                alt: `Past event photo ${idx + 1}` 
              }))} 
            />
          </section>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="flex flex-col gap-6">
          
          {/* ── 5. Map / venue info ── */}
          <section className="bg-white rounded-2xl border border-pet-stroke p-6 shadow-sm">
            <h3 className="font-poppins font-bold text-lg text-brand-dark mb-4">Venue & Location</h3>
            <div className="aspect-[4/3] w-full bg-pet-bg rounded-xl mb-4 border border-pet-stroke flex flex-col items-center justify-center text-nav-text">
               <MapPin className="w-8 h-8 text-brand-red/50 mb-2" />
               <span className="font-poppins text-xs font-medium">Interactive Map Placeholder</span>
            </div>
            <p className="font-poppins font-semibold text-sm text-brand-dark">{show.venue}</p>
            <p className="font-poppins text-xs text-nav-text mt-1">{show.city}, {show.stateAbbr}</p>
            
            <div className="mt-4 pt-4 border-t border-pet-stroke">
              <h4 className="font-poppins font-semibold text-xs text-brand-dark mb-2">Venue Notes</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 font-poppins text-xs text-nav-text">
                  <CheckCircle2 className="w-4 h-4 text-pet-green flex-shrink-0" /> RV Parking available on-site
                </li>
                <li className="flex items-start gap-2 font-poppins text-xs text-nav-text">
                  <CheckCircle2 className="w-4 h-4 text-pet-green flex-shrink-0" /> Indoor & Outdoor rings
                </li>
                <li className="flex items-start gap-2 font-poppins text-xs text-nav-text">
                  <CheckCircle2 className="w-4 h-4 text-pet-green flex-shrink-0" /> Grooming spaces with electricity
                </li>
              </ul>
            </div>
          </section>

          {/* ── 7. Featured breeds at this show ── */}
          <section className="bg-white rounded-2xl border border-pet-stroke p-6 shadow-sm">
            <h3 className="font-poppins font-bold text-lg text-brand-dark mb-4">Typically Featured Breeds</h3>
            <div className="flex flex-wrap gap-2">
              {MOCK_BREEDS.map(breed => (
                <span key={breed} className="inline-flex px-3 py-1.5 bg-pet-bg border border-pet-stroke rounded-full font-poppins text-[11px] font-medium text-brand-dark">
                  {breed}
                </span>
              ))}
            </div>
            <p className="font-poppins text-[10px] text-nav-text mt-4 text-center">
              *Plus many more breeds competing in their respective groups.
            </p>
          </section>

          {/* ── 8. Related local breeders cross-link ── */}
          <section className="bg-gradient-to-br from-brand-dark to-[#1A1C20] rounded-2xl p-6 text-white shadow-card overflow-hidden relative">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
            <h3 className="font-poppins font-bold text-lg mb-2 relative z-10">Looking for a Puppy in {show.stateName}?</h3>
            <p className="font-poppins text-xs text-white/80 mb-6 relative z-10 leading-relaxed">
              Connect with top-rated, ethical breeders right here in {show.city} and across {show.stateName}. 
              Many of our verified breeders actively show their dogs at events just like this one!
            </p>
            <Link 
              href={`/breeders/state/${show.stateAbbr.toLowerCase()}`}
              className="inline-flex w-full justify-center items-center gap-2 bg-white text-brand-dark font-poppins font-bold text-xs py-3 rounded-xl hover:bg-gray-50 transition-colors relative z-10"
            >
              Find Breeders in {show.stateAbbr}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </section>

        </div>
      </div>

      {/* ── 10. Footer (Newsletter) ── */}
      <NewsletterSignup className="bg-white border-t border-pet-stroke" />
    </div>
  );
}
