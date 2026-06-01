"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Globe, ShieldCheck } from "lucide-react";
import { Article, AuthorProfileDetails } from "@/data/articles";
import { VETS } from "@/data/vets";
import { BREEDERS } from "@/data/breeders";
import ArticleCard from "./ArticleCard";

interface AuthorProfilePageContentProps {
  author: AuthorProfileDetails;
  articles: Article[];
}

export default function AuthorProfilePageContent({
  author,
  articles,
}: AuthorProfilePageContentProps) {
  const isVet = author.type === "vet";
  const directoryPath = `/${isVet ? "veterinarian" : "breeder"}/${author.practiceSlug}`;

  // Look up pro credentials from seed databases
  const vetClinic = isVet ? VETS.find((v) => v.slug === author.practiceSlug) : null;
  const breederKennel = !isVet ? BREEDERS.find((b) => b.slug === author.practiceSlug) : null;
  const isPro = !!(vetClinic || breederKennel);

  return (
    <div className="min-h-screen bg-pet-bg font-sans pb-16">
      {/* Container aligning with Navbar width exactly */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-6 flex flex-col items-start">
        
        {/* 1. Breadcrumbs */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap gap-2 text-xs font-poppins font-medium text-nav-text">
            <li>
              <Link href="/" className="hover:text-brand-red transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center text-gray-300">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand-red transition-colors">
                Blog
              </Link>
            </li>
            <li className="flex items-center text-gray-300">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-brand-dark font-semibold">
              Authors
            </li>
            <li className="flex items-center text-gray-300">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-brand-dark font-semibold truncate max-w-[200px] sm:max-w-xs">
              {author.name}
            </li>
          </ol>
        </nav>

        {/* 2. Author hero — avatar, name, role, bio */}
        <section className="w-full bg-white rounded-2xl p-6 md:p-10 border border-pet-stroke shadow-card flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
          {/* Avatar */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-pet-stroke flex-shrink-0 shadow-sm">
            <Image
              src={author.photo}
              alt={author.name}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 128px, 96px"
            />
          </div>

          {/* Details & Bio */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3 w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <h1 className="font-poppins font-bold text-3xl md:text-4xl text-brand-dark">
                {author.name}
              </h1>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-pet-green bg-pet-green/5 border border-pet-green/10 uppercase tracking-wide px-3 py-1 rounded-full w-fit font-poppins">
                <ShieldCheck className="w-3.5 h-3.5 text-pet-green" /> Verified {author.type}
              </span>
            </div>

            <p className="font-poppins text-xs font-semibold text-brand-red uppercase tracking-wider">
              {author.role} • {author.specialties}
            </p>

            <p className="font-poppins text-sm md:text-base text-nav-text leading-relaxed max-w-3xl mt-1">
              {author.bio}
            </p>
          </div>
        </section>

        {/* 3. If pro: link to vet/breeder profile + credentials */}
        {isPro && (
          <section className="w-full bg-white border border-pet-stroke rounded-2xl p-6 md:p-8 shadow-card mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1 text-left">
                <span className="text-[10px] font-poppins font-bold text-pet-green bg-pet-green/5 border border-pet-green/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider w-fit">
                  Connected Professional Profile
                </span>
                <h3 className="font-poppins font-bold text-2xl text-brand-dark mt-3 mb-1 font-poppins">
                  {vetClinic ? vetClinic.name : breederKennel?.name}
                </h3>
                <div className="flex items-center gap-2 flex-wrap text-sm text-nav-text font-poppins mb-2">
                  <span className="whitespace-nowrap flex items-center gap-1">
                    📍 {vetClinic ? `${vetClinic.city}, ${vetClinic.stateAbbr}` : `${breederKennel?.city}, ${breederKennel?.state}`}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="whitespace-nowrap flex items-center gap-1 font-semibold text-brand-dark">
                    ⭐ {vetClinic ? `${vetClinic.rating} (${vetClinic.reviewCount} reviews)` : `${breederKennel?.rating} (${breederKennel?.reviewCount} reviews)`}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-nav-text leading-relaxed font-poppins">
                  <span className="font-semibold text-brand-dark">{isVet ? "Practice Specialties" : "Available Breeds"}: </span>
                  {vetClinic ? vetClinic.specialties.join(", ") : breederKennel?.breeds.join(", ")}
                </p>
              </div>
              <Link
                href={directoryPath}
                className="btn-animate inline-flex items-center justify-center font-poppins font-semibold text-sm bg-brand-red text-white rounded-full px-6 py-3 hover:opacity-90 transition-opacity shadow-md whitespace-nowrap self-start md:self-center"
              >
                View Directory Listing
              </Link>
            </div>
          </section>
        )}

        {/* 4. Articles by this author (grid) */}
        <section className="w-full mb-8">
          <div className="flex flex-col items-start mb-8">
            <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-3 tracking-wide uppercase">
              Publications list
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-dark leading-tight flex items-center gap-3">
              Articles by {author.name}
              <span className="inline-flex items-center justify-center text-xs font-semibold bg-brand-red/10 text-brand-red px-2.5 py-1 rounded-full font-poppins border border-brand-red/20 shadow-sm">
                {articles.length}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch auto-rows-fr w-full">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                showAuthor={false}
              />
            ))}
          </div>
        </section>

        {/* 5. Social links */}
        <section className="w-full py-6 border-t border-b border-pet-stroke mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="font-poppins text-xs font-semibold text-brand-dark uppercase tracking-wider">
            Connect with {author.name}
          </span>
          <div className="flex items-center gap-3 flex-wrap">
            {/* Website */}
            {author.website && (
              <a
                href={author.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-pet-stroke text-nav-text hover:text-brand-red hover:border-brand-red transition-all shadow-sm"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            )}

            {/* Twitter */}
            {author.twitter && (
              <a
                href={author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-pet-stroke text-nav-text hover:text-brand-red hover:border-brand-red transition-all shadow-sm"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}

            {/* Facebook */}
            {author.facebook && (
              <a
                href={author.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-pet-stroke text-nav-text hover:text-brand-red hover:border-brand-red transition-all shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
            )}

            {/* Instagram */}
            {author.instagram && (
              <a
                href={author.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-pet-stroke text-nav-text hover:text-brand-red hover:border-brand-red transition-all shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
