"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, PawPrint, ShieldCheck, Heart } from "lucide-react";
import type { Breed } from "@/data/breeds";
import { BREEDERS } from "@/data/breeders";
import StateBreederCard from "@/components/breeders-state/StateBreederCard";

interface DynamicBreedDetailProps {
  breed: Breed;
}

export default function DynamicBreedDetail({ breed }: DynamicBreedDetailProps) {
  // Find breeders who raise this breed
  const matchingBreeders = BREEDERS.filter((b) =>
    b.breeds.some(
      (br) =>
        br.toLowerCase() === breed.name.toLowerCase() ||
        breed.aliases?.some((al) => br.toLowerCase() === al.toLowerCase())
    )
  );

  return (
    <main className="min-h-screen bg-pet-bg font-sans">
      {/* 1. Hero Section */}
      <section className="w-full bg-white border-b border-pet-stroke py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left info column */}
          <div className="flex flex-col gap-6 w-full lg:w-[55%]">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-nav-text">
              <Link href="/breeds" className="hover:text-brand-red">
                Breeds
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-brand-red">{breed.name}</span>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark leading-tight">
                {breed.name}
              </h1>
              <p className="text-nav-text text-base md:text-lg leading-relaxed">
                The {breed.name} is a wonderful dog breed classified under the{" "}
                <span className="font-semibold text-brand-dark">{breed.group}</span> group. 
                They are famously known for being {breed.temperament.slice(0, 3).join(", ")}.
              </p>
            </div>

            {/* Temperament Tags */}
            <div className="flex flex-wrap gap-2">
              {breed.temperament.map((temp) => (
                <span
                  key={temp}
                  className="bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-semibold px-3.5 py-1.5 rounded-full"
                >
                  {temp}
                </span>
              ))}
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
              <div className="border border-pet-stroke rounded-xl p-4 bg-pet-bg text-center">
                <span className="block text-[10px] uppercase font-bold text-nav-text tracking-wider">
                  Size
                </span>
                <span className="text-base font-bold text-brand-dark">
                  {breed.size}
                </span>
              </div>
              <div className="border border-pet-stroke rounded-xl p-4 bg-pet-bg text-center">
                <span className="block text-[10px] uppercase font-bold text-nav-text tracking-wider">
                  Energy Level
                </span>
                <span className="text-base font-bold text-brand-dark">
                  {breed.energy}
                </span>
              </div>
              <div className="border border-pet-stroke rounded-xl p-4 bg-pet-bg text-center">
                <span className="block text-[10px] uppercase font-bold text-nav-text tracking-wider">
                  Lifespan
                </span>
                <span className="text-base font-bold text-brand-dark">
                  {breed.lifespanMin}-{breed.lifespanMax} Years
                </span>
              </div>
            </div>
          </div>

          {/* Right image column */}
          <div className="w-full lg:w-[45%]">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-pet-stroke">
              <Image
                src={breed.image}
                alt={breed.name}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 500px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Breed Details Stats Matrix */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-pet-stroke rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">
            Breed Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex justify-between py-3 border-b border-pet-stroke">
              <span className="text-nav-text text-sm">Grooming Needs</span>
              <span className="font-semibold text-brand-dark text-sm">{breed.grooming}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-pet-stroke">
              <span className="text-nav-text text-sm">Shedding Level</span>
              <span className="font-semibold text-brand-dark text-sm">{breed.shedding}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-pet-stroke">
              <span className="text-nav-text text-sm">Trainability</span>
              <span className="font-semibold text-brand-dark text-sm">{breed.trainability}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-pet-stroke">
              <span className="text-nav-text text-sm">Hypoallergenic</span>
              <span className="font-semibold text-brand-dark text-sm">{breed.hypoallergenic ? "Yes" : "No"}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-pet-stroke">
              <span className="text-nav-text text-sm">Good with Kids</span>
              <span className="font-semibold text-brand-dark text-sm">{breed.goodWithKids ? "Yes" : "No"}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-pet-stroke">
              <span className="text-nav-text text-sm">Apartment Friendly</span>
              <span className="font-semibold text-brand-dark text-sm">{breed.apartmentFriendly ? "Yes" : "No"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Breeders List Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-nav-text">
              Local Matches
            </span>
            <h2 className="text-3xl font-bold text-brand-dark mt-1">
              Verified {breed.name} Breeders
            </h2>
          </div>
          <Link
            href="/breeders"
            className="inline-flex items-center justify-center rounded-full bg-brand-dark text-white px-6 py-3 text-sm font-semibold hover:bg-opacity-95 transition-colors h-11 self-start sm:self-auto"
          >
            Browse All Breeders
          </Link>
        </div>

        {matchingBreeders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch auto-rows-fr">
            {matchingBreeders.map((breeder) => (
              <StateBreederCard key={breeder.slug} breeder={breeder} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-pet-stroke rounded-2xl p-12 text-center shadow-sm">
            <PawPrint className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-brand-dark">No Local Breeders Listed Yet</h3>
            <p className="text-nav-text text-sm mt-2 max-w-sm mx-auto">
              We are currently onboarding health-tested {breed.name} breeders. Check back soon or list your own kennel!
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
