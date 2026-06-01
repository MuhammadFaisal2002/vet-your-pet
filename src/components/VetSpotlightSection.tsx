"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const vets = [
  {
    name: "Dr. Sarah Mitchell, DVM",
    location: "Austin, Texas",
    specialty: "Emergency & Critical Care",
    specialtyColor: "bg-blue-50 text-blue-600",
    quote:
      '"My passion is providing compassionate, comprehensive care for every pet. We treat your furry family members like our own."',
    rating: "4.8",
    reviews: "189 reviews",
    experience: "12 years exp.",
    image:
      "https://images.pexels.com/photos/7108279/pexels-photo-7108279.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    badgeColor: "bg-blue-600",
  },
  {
    name: "Dr. Michael Chen, DVM",
    location: "Seattle, Washington",
    specialty: "Orthopedic Surgery & Sports Medicine",
    specialtyColor: "bg-purple-50 text-purple-600",
    quote:
      '"Specializing in advanced orthopedic care, I help active dogs return to the activities they love with cutting-edge treatments."',
    rating: "4.8",
    reviews: "189 reviews",
    experience: "12 years exp.",
    image:
      "https://images.pexels.com/photos/6235662/pexels-photo-6235662.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    badgeColor: "bg-yellow-500",
  },
  {
    name: "Dr. Emily Torres, DVM",
    location: "Denver, Colorado",
    specialty: "Internal Medicine",
    specialtyColor: "bg-green-50 text-green-600",
    quote:
      '"Every animal deserves the best possible care. I am dedicated to building lasting relationships with pets and their families."',
    rating: "4.9",
    reviews: "214 reviews",
    experience: "9 years exp.",
    image:
      "https://images.pexels.com/photos/7108279/pexels-photo-7108279.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    badgeColor: "bg-blue-600",
  },
];

export default function VetSpotlightSection() {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(vets.length / perPage);
  const visible = vets.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="bg-[#F5F2EE] px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6"/>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            Featured Professionals
          </span>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark mb-4">
            Veterinarian Spotlight
          </h2>
          <p className="font-poppins text-nav-text text-base">
            Meet our verified veterinary professionals committed to exceptional pet care
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-nav-text hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {visible.map((vet) => (
              <div
                key={vet.name}
                className="bg-white rounded-3xl p-6 shadow-sm flex flex-col gap-5"
              >
                {/* Top: Photo + Info */}
                <div className="flex items-start gap-4">
                  {/* Photo with badge */}
                  <div className="relative flex-shrink-0">
                    <Image
                      src={vet.image}
                      alt={vet.name}
                      width={80}
                      height={80}
                      className="rounded-2xl object-cover"
                    />
                    <span className={`absolute -top-2 -right-2 w-7 h-7 ${vet.badgeColor} rounded-full flex items-center justify-center`}>
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.09 6.26H21l-5.47 3.97 2.09 6.26L12 14.52 6.38 18.5l2.09-6.26L1 8.26h6.91z"/>
                      </svg>
                    </span>
                  </div>

                  {/* Name / Location / Specialty */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-poppins font-semibold text-lg text-brand-dark leading-tight">
                      {vet.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-nav-text">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-poppins text-sm">{vet.location}</span>
                    </div>
                    <span className={`inline-block font-poppins text-xs font-medium px-3 py-1 rounded-full w-fit ${vet.specialtyColor}`}>
                      {vet.specialty}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-[#F9F8F6] rounded-2xl px-5 py-4">
                  <p className="font-poppins text-sm text-nav-text leading-relaxed italic">
                    {vet.quote}
                  </p>
                </div>

                {/* Footer: Button + Stats */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/veterinarians"
                    className="font-poppins font-medium text-sm bg-brand-dark text-white rounded-full px-6 py-2.5 hover:opacity-90 transition-opacity flex items-center gap-1.5"
                  >
                    View Full Profile
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-poppins font-semibold text-sm text-brand-dark">{vet.rating}</span>
                    <span className="font-poppins text-xs text-nav-text">({vet.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-nav-text">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-poppins text-xs">{vet.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-nav-text hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`rounded-full transition-all ${
                i === page
                  ? "w-6 h-2.5 bg-brand-dark"
                  : "w-2.5 h-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
