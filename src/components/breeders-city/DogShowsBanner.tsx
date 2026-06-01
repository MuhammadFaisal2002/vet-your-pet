"use client";

import Link from "next/link";
import { Trophy, ArrowRight } from "lucide-react";

interface DogShowsBannerProps {
  cityName: string;
  stateAbbr: string;
  stateSlug: string;
  citySlug: string;
}

export default function DogShowsBanner({
  cityName,
  stateAbbr,
  stateSlug,
  citySlug,
}: DogShowsBannerProps) {
  return (
    <section className="bg-white py-10 md:py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Link
          href={`/dog-shows/${stateSlug}/${citySlug}`}
          className="group block bg-amber-50 border border-amber-200 rounded-2xl px-6 md:px-10 py-6 md:py-8 hover:border-amber-400 transition-colors focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-2"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-white border border-amber-200 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-amber-600" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-1">
                  Events & Shows
                </p>
                <p className="text-lg md:text-xl font-bold text-brand-dark leading-snug">
                  Dog Shows & Events Near {cityName}, {stateAbbr}
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 flex-shrink-0">
              Browse Dog Shows
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}