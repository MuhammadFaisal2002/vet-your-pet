"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, User, ArrowRight, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import { ARTICLES, Article, BlogCategory, getAuthorSlug } from "@/data/articles";
import ArticleCard from "./ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";

const categories: ("All" | BlogCategory)[] = [
  "All",
  "Care",
  "Training",
  "Health",
  "Breeds",
  "Shows",
  "Nutrition",
  "Behavior",
];

// Curated list of professional contributors for the "Authored by Pros" section
const proContributors = [
  {
    name: "Dr. Sarah Chen",
    role: "DVM, Cardiology Specialist",
    location: "San Diego, CA",
    clinic: "Coastal Pet Hospital",
    slug: "coastal-pet-hospital",
    type: "vet",
    photo: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Lone Star Kennels",
    role: "German Shepherd Breeder",
    location: "Austin, TX",
    clinic: "Lone Star Kennels",
    slug: "lone-star-kennels",
    type: "breeder",
    photo: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Dr. Patricia Santos",
    role: "DVM, Geriatric Care Specialist",
    location: "Sarasota, FL",
    clinic: "Sunshine Animal Clinic",
    slug: "sunshine-animal-clinic",
    type: "vet",
    photo: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export default function BlogPageContent() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured article is the first featured item in our array
  const featuredArticle = useMemo(() => {
    return ARTICLES.find((a) => a.featured);
  }, []);

  // Filtered recent articles (excluding the featured one if it's shown in the featured spot)
  const recentArticles = useMemo(() => {
    // If we have selected a category or are searching, show all matching items in the grid.
    // Otherwise, exclude the top featured article from the recent list to prevent duplication.
    if (selectedCategory !== "All" || searchQuery.trim() !== "") {
      return filteredArticles;
    }
    return filteredArticles.filter((a) => !a.featured);
  }, [filteredArticles, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-pet-bg font-sans">
      {/* 1. Hero Section */}
      <section className="bg-white px-6 pt-12 md:pt-16 pb-12 border-b border-pet-stroke">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
            Articles & Insights
          </span>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.05] mb-6">
            Learn & Explore
          </h1>
          <p className="font-poppins text-base md:text-lg text-nav-text leading-relaxed max-w-2xl">
            Read expert advice, training tips, health guidelines, and breed directories
            curated by verified veterinarians and ethical breeders.
          </p>
        </div>
      </section>

      {/* 2. Filter Bar & Search Widget */}
      <section className="bg-white px-6 py-8 border-b border-pet-stroke sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Categories Horizontal Pills list */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-shrink-0 cursor-pointer font-poppins text-xs font-semibold rounded-full px-5 py-2.5 border transition-all ${
                    isActive
                      ? "bg-brand-red text-white border-brand-red shadow-sm"
                      : "bg-white text-brand-dark border-pet-stroke hover:border-brand-dark"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search bar pill */}
          <div className="flex items-center gap-2 bg-gray-50 border border-pet-stroke rounded-full px-4 py-2.5 w-full md:max-w-xs transition-colors focus-within:bg-white focus-within:border-brand-dark shadow-sm">
            <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent font-poppins text-xs text-brand-dark placeholder-gray-400 outline-none"
              placeholder="Search articles..."
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-nav-text hover:text-brand-red font-poppins"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. Featured Article Section (Only displayed when not filtering/searching) */}
      {selectedCategory === "All" && !searchQuery && featuredArticle && (
        <section className="px-6 py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
              Featured Article
            </span>
            <div className="bg-white rounded-2xl shadow-card border border-pet-stroke overflow-hidden hover-lift flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Photo - Left */}
              <div className="w-full lg:w-[50%] relative aspect-[4/3] lg:aspect-auto min-h-[300px]">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              {/* Text info - Right */}
              <div className="w-full lg:w-[50%] p-6 md:p-10 flex flex-col justify-center gap-4">
                <div className="flex flex-wrap items-center gap-y-2 gap-x-2 sm:gap-x-3 text-xs text-nav-text">
                  <Link
                    href={`/blog/category/${featuredArticle.category.toLowerCase()}`}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 font-semibold whitespace-nowrap hover:bg-brand-red/20 transition-colors"
                  >
                    {featuredArticle.category}
                  </Link>
                  <span className="text-gray-300">•</span>
                  <span className="whitespace-nowrap">{featuredArticle.date}</span>
                  <span className="text-gray-300">•</span>
                  <span className="whitespace-nowrap">{featuredArticle.readTime}</span>
                </div>

                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-dark leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="font-poppins text-base text-nav-text leading-relaxed">
                  {featuredArticle.description}
                </p>

                {/* Author Bio Row */}
                <div className="flex items-center gap-3 py-2 border-t border-b border-pet-stroke my-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-pet-stroke flex-shrink-0">
                    <Image
                      src={featuredArticle.author.photo}
                      alt={featuredArticle.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link
                      href={`/blog/author/${getAuthorSlug(featuredArticle.author.name)}`}
                      className="block font-poppins text-xs font-semibold text-brand-dark hover:text-brand-red transition-colors"
                    >
                      {featuredArticle.author.name}
                    </Link>
                    <span className="block text-[10px] text-nav-text uppercase tracking-wider">
                      {featuredArticle.author.role}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="btn-animate inline-flex items-center justify-center font-poppins font-semibold text-sm bg-brand-red text-white rounded-full px-6 py-3 w-fit hover:opacity-90 transition-opacity"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Recent / Filtered Articles Grid */}
      <section className="px-6 py-16 md:py-20 bg-pet-bg">
        <div className="max-w-7xl mx-auto">
          {/* Header row */}
          <div className="flex flex-col items-start mb-10">
            <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
              {selectedCategory !== "All" || searchQuery ? "Filter Results" : "Recent Publications"}
            </span>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark leading-tight">
              {selectedCategory !== "All" || searchQuery ? `Showing ${selectedCategory} Articles` : "Recent Articles"}
            </h2>
            {searchQuery && (
              <p className="font-poppins text-sm text-nav-text mt-2">
                Matching search query: &ldquo;{searchQuery}&rdquo; ({filteredArticles.length} results)
              </p>
            )}
          </div>

          {recentArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch auto-rows-fr">
              {recentArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-pet-stroke rounded-2xl p-16 text-center shadow-card">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-dark">No Articles Found</h3>
              <p className="text-nav-text text-sm mt-2 max-w-sm mx-auto">
                We couldn&apos;t find any articles matching your filters or search keywords. Try adjusting your search query.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-6 inline-flex items-center justify-center font-poppins font-semibold text-sm bg-brand-red text-white rounded-full px-6 py-2.5 hover:opacity-90 transition-opacity"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. "Authored by Pros" Section */}
      <section className="px-6 py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
              Expert Contributors
            </span>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark mb-4">
              Authored by Verified Professionals
            </h2>
            <p className="font-poppins text-nav-text text-base max-w-2xl">
              All guides and articles on Vet Your Pet are written and reviewed by licensed
              veterinarians and verified breeders to ensure responsible pet care guidelines.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch w-full">
            {proContributors.map((pro) => (
              <div
                key={pro.name}
                className="bg-white rounded-2xl p-6 shadow-card border border-pet-stroke hover-lift flex flex-col items-center text-center justify-between"
              >
                {/* Photo */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-pet-stroke mb-4">
                  <Image
                    src={pro.photo}
                    alt={pro.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-1.5 mb-6">
                  <h3 className="font-poppins font-semibold text-lg text-brand-dark hover:text-brand-red transition-colors">
                    <Link href={`/blog/author/${getAuthorSlug(pro.name)}`}>
                      {pro.name}
                    </Link>
                  </h3>
                  <span className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-pet-green uppercase tracking-wide">
                    <ShieldCheck className="w-3.5 h-3.5 text-pet-green" /> Verified {pro.type}
                  </span>
                  <p className="text-xs text-nav-text font-medium mt-1">
                    {pro.role}
                  </p>
                  <p className="text-xs text-nav-text inline-flex items-center justify-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-brand-red" />
                    {pro.location}
                  </p>
                </div>

                <Link
                  href={`/${pro.type === "vet" ? "veterinarian" : "breeder"}/${pro.slug}`}
                  className="btn-animate inline-flex items-center justify-center font-poppins font-medium text-xs border border-brand-dark text-brand-dark rounded-full px-5 py-2.5 w-full hover:bg-brand-dark hover:text-white transition-colors"
                >
                  View Practice Profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Newsletter Signup Card */}
      <NewsletterSignup className="bg-pet-bg" />
    </div>
  );
}
