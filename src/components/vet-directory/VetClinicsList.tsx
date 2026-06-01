"use client";

import { useState } from "react";

/* ─── Types ─────────────────────────────────────────────────── */
interface ClinicService {
  label: string;
}

interface ClinicData {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  address: string;
  distance: string;
  description: string;
  phone: string;
  website: string;
  websiteLabel: string;
  hoursWeekday: string;
  hoursSat: string;
  team: string;
  experience: string;
  servicesOffered: ClinicService[][];
  image: string;
}

/* ─── Mock data ──────────────────────────────────────────────── */
const clinics: ClinicData[] = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  name: "Ancient City Veterinary Hospital",
  rating: 4.8,
  reviewCount: 342,
  address: "Austin, TX 78701, 123 Main Street",
  distance: "1.2 mi away",
  description:
    "A long-standing member of the St. Augustine community, providing compassionate veterinary care for over 20 years. Our experienced team treats every pet like family.",
  phone: "(512) 555-0123",
  website: "austinpethos.com",
  websiteLabel: "austinpethos.com",
  hoursWeekday: "8AM–6PM",
  hoursSat: "9AM–2PM",
  team: "Dr. Sarah Martinez and her dedicated team of veterinarians and techs",
  experience: "20 years serving St. Augustine",
  servicesOffered: [
    [
      { label: "Wellness Exams" },
      { label: "Surgery" },
      { label: "Dental Care" },
      { label: "Emergency Care" },
      { label: "X-rays & Diagnostics" },
    ],
    [
      { label: "Surgery" },
      { label: "Emergency Care" },
      { label: "Senior Pet Care" },
    ],
  ],
  image:
    "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=300&fit=crop",
}));

/* ─── Sub-components ─────────────────────────────────────────── */
function RatingBadge({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-1 bg-[#1F986E] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
      <svg
        width="10"
        height="10"
        viewBox="0 0 12 12"
        fill="currentColor"
        className="flex-shrink-0"
      >
        <path d="M6 0l1.545 3.13L11 3.635l-2.5 2.435.59 3.44L6 7.87l-3.09 1.64.59-3.44L1 3.635l3.455-.505L6 0z" />
      </svg>
      {value}
    </span>
  );
}

function ServiceTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center justify-center bg-[#F2F3F4] text-[#7C8896] text-xs font-normal px-2 py-0.5 rounded-full whitespace-nowrap">
      {label}
    </span>
  );
}

function ClinicCard({ clinic }: { clinic: ClinicData }) {
  return (
    <div className="hover-lift bg-white border border-[#E8EAED] rounded-2xl overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* ── Col 1: Info ── */}
        <div className="flex-1 min-w-0 p-6 lg:p-7 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-[#E8EAED]">
          {/* Name */}
          <h3 className="text-[#25272C] text-lg font-semibold leading-snug">
            {clinic.name}
          </h3>

          {/* Rating + reviews */}
          <div className="flex items-center gap-2">
            <RatingBadge value={clinic.rating} />
            <span className="text-[#9C9EA3] text-xs">
              ({clinic.reviewCount} reviews)
            </span>
            <svg
              width="5"
              height="8"
              viewBox="0 0 5 8"
              fill="none"
              className="text-[#9C9EA3]"
            >
              <path
                d="M1 1l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Address */}
          <div className="flex items-start gap-1.5">
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              className="flex-shrink-0 mt-0.5 text-[#9C9EA3]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 0C3.24 0 1 2.24 1 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                fill="currentColor"
              />
            </svg>
            <p className="text-[#9C9EA3] text-xs leading-relaxed">
              {clinic.address}{" "}
              <span className="text-[#2563EB]">· {clinic.distance}</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-[#727781] text-sm leading-relaxed">
            {clinic.description}
          </p>

          {/* Contact + hours grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div>
              <p className="text-[#9C9EA3] text-xs mb-0.5">Telephone:</p>
              <p className="text-[#25272C] text-sm font-normal">{clinic.phone}</p>
            </div>
            <div>
              <p className="text-[#9C9EA3] text-xs mb-0.5">Mon-Fri:</p>
              <p className="text-[#25272C] text-sm font-normal">{clinic.hoursWeekday}</p>
            </div>
            <div>
              <p className="text-[#9C9EA3] text-xs mb-0.5">Website:</p>
              <a
                href={`https://${clinic.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] text-sm hover:underline"
              >
                {clinic.websiteLabel}
              </a>
            </div>
            <div>
              <p className="text-[#9C9EA3] text-xs mb-0.5">Sat:</p>
              <p className="text-[#25272C] text-sm font-normal">{clinic.hoursSat}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 mt-1">
            <button className="px-5 py-2 bg-[#25272C] text-white text-sm font-medium rounded-lg hover:bg-[#363941] transition-colors">
              View Profile
            </button>
            <button className="px-5 py-2 border border-[#D5D8DE] text-[#25272C] text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              View Profile
            </button>
          </div>
        </div>

        {/* ── Col 2: Team / Services ── */}
        <div className="w-full lg:w-[350px] flex-shrink-0 border-b lg:border-b-0 lg:border-l border-[#F3F4F8] p-5 lg:py-5 lg:px-4 flex flex-col gap-4">
          {/* Team */}
          <div className="flex flex-col gap-1">
            <p className="text-[#9199A4] text-xs font-normal leading-[18px]">Team:</p>
            <p className="text-[#4A5565] text-xs font-normal leading-[18px]">{clinic.team}</p>
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-1">
            <p className="text-[#9199A4] text-xs font-normal leading-[18px]">Experience:</p>
            <p className="text-[#4A5565] text-xs font-normal leading-[18px]">{clinic.experience}</p>
          </div>

          {/* Services blocks */}
          {clinic.servicesOffered.map((group, gi) => (
            <div key={gi} className="flex flex-col gap-2">
              <p className="text-[#9199A4] text-xs font-normal leading-[18px]">Services offered:</p>
              <div className="flex flex-wrap items-center gap-[5px]">
                {group.map((svc) => (
                  <ServiceTag key={`${gi}-${svc.label}`} label={svc.label} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Col 3: Image ── */}
        <div className="w-full lg:w-[346px] flex-shrink-0 overflow-hidden">
          <img
            src={clinic.image}
            alt={clinic.name}
            className="w-full h-48 lg:h-full lg:w-[346px] object-cover rounded bg-[#BFC9DB]"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Sort / View / Filter bar ──────────────────────────────── */
function ListControls({
  view,
  onViewChange,
}: {
  view: "list" | "map";
  onViewChange: (v: "list" | "map") => void;
}) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {/* Sort by */}
      <div className="relative">
        <select className="appearance-none text-sm text-[#363941] border border-[#D5D8DE] rounded-lg px-4 py-2 pr-8 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25272C]/20">
          <option>Sort by</option>
          <option>Rating</option>
          <option>Distance</option>
          <option>Name</option>
        </select>
        <svg
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9C9EA3]"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M3 4.5l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* List / Map toggle */}
      <div className="flex items-center border border-[#D5D8DE] rounded-lg overflow-hidden">
        <button
          onClick={() => onViewChange("list")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            view === "list"
              ? "bg-[#F2F3F5] text-[#25272C]"
              : "bg-white text-[#9C9EA3] hover:bg-gray-50"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="2" width="12" height="2" rx="1" fill="currentColor" />
            <rect x="1" y="6" width="12" height="2" rx="1" fill="currentColor" />
            <rect x="1" y="10" width="12" height="2" rx="1" fill="currentColor" />
          </svg>
          List View
        </button>
        <div className="w-px h-6 bg-[#D5D8DE]" />
        <button
          onClick={() => onViewChange("map")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            view === "map"
              ? "bg-[#F2F3F5] text-[#25272C]"
              : "bg-white text-[#9C9EA3] hover:bg-gray-50"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4z"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
            />
            <circle cx="7" cy="5" r="1.2" fill="currentColor" />
          </svg>
          Map View
        </button>
      </div>

      {/* Filter button */}
      <div className="relative">
        <button className="flex items-center gap-2 px-4 py-2 bg-[#25272C] text-white text-sm font-medium rounded-lg hover:bg-[#363941] transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 3h12M3 7h8M5 11h4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Filter
        </button>
        {/* Red notification dot */}
        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#D93F53] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
          1
        </span>
      </div>
    </div>
  );
}

/* ─── Main export ────────────────────────────────────────────── */
export default function VetClinicsList() {
  const [view, setView] = useState<"list" | "map">("list");

  return (
    <section className="animate-on-scroll animate-fade-in bg-white py-10 lg:py-14">
      <div className="max-w-[1170px] mx-auto px-6 lg:px-8 xl:px-0">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[#25272C] text-[32px] lg:text-[38px] font-semibold leading-tight tracking-[-0.02em]">
              Veterinary clinics
            </h2>
            <p className="text-[#9C9EA3] text-sm">
              Showing{" "}
              <span className="text-[#25272C] font-semibold">{clinics.length} clinics</span>
            </p>
          </div>
          <ListControls view={view} onViewChange={setView} />
        </div>

        {/* Clinic cards */}
        <div className="stagger-children flex flex-col gap-4">
          {clinics.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>

      </div>
    </section>
  );
}