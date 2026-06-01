"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { CategoryDetails, Article, CATEGORIES } from "@/data/articles";

interface BlogCategoryPageContentProps {
  categoryDetails: CategoryDetails;
  articles: Article[];
}

export default function BlogCategoryPageContent({
  categoryDetails,
  articles,
}: BlogCategoryPageContentProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Filter other categories for the "Related Categories" section
  const relatedCategories = useMemo(() => {
    return Object.values(CATEGORIES).filter(
      (cat) => cat.slug !== categoryDetails.slug
    );
  }, [categoryDetails.slug]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen bg-pet-bg font-sans">
      {/* 1. Breadcrumbs */}
      <nav className="px-6 md:px-12 lg:px-20 pt-6 pb-2 max-w-7xl mx-auto">
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
          <li className="text-brand-dark font-semibold whitespace-nowrap">
            {categoryDetails.name}
          </li>
        </ol>
      </nav>

      {/* 2. Hero Section */}
      <section className="bg-white px-6 md:px-12 lg:px-20 pt-8 pb-12 border-b border-pet-stroke mb-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
            Category Browse
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-[1.1] mb-6">
            {categoryDetails.name} Guidelines & Advice
          </h1>
          <p className="font-poppins text-base md:text-lg text-nav-text leading-relaxed max-w-2xl">
            {categoryDetails.description}
          </p>
        </div>
      </section>

      {/* 3. Articles Grid */}
      <section className="px-6 md:px-12 lg:px-20 py-8 bg-pet-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start mb-8">
            <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-3 tracking-wide uppercase">
              {categoryDetails.name} Articles
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-dark leading-tight">
              Latest Guides in {categoryDetails.name}
            </h2>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch auto-rows-fr">
              {articles.map((article) => (
                <div
                  key={article.slug}
                  className="bg-white rounded-2xl p-6 shadow-card border border-pet-stroke hover-lift flex flex-col h-full"
                >
                  {/* Photo */}
                  <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden mb-5 bg-gray-50 border border-pet-stroke">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
                      {article.category}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-nav-text mb-2">
                    <span className="whitespace-nowrap">{article.date}</span>
                    <span className="text-gray-300">•</span>
                    <span className="whitespace-nowrap">{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-poppins font-bold text-xl text-brand-dark leading-snug mb-3 hover:text-brand-red transition-colors">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="font-poppins text-sm text-nav-text leading-relaxed mb-6 flex-1">
                    {article.description}
                  </p>

                  {/* Author / CTA Row */}
                  <div className="flex items-center justify-between border-t border-pet-stroke pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-pet-stroke flex-shrink-0">
                        <Image
                          src={article.author.photo}
                          alt={article.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <Link
                        href={`/${article.author.type === "vet" ? "veterinarian" : "breeder"}/${article.author.slug}`}
                        className="font-poppins text-xs font-semibold text-brand-dark hover:text-brand-red transition-colors"
                      >
                        {article.author.name}
                      </Link>
                    </div>

                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1 font-poppins font-medium text-xs text-brand-red hover:opacity-85 transition-opacity"
                    >
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-pet-stroke rounded-2xl p-16 text-center shadow-card">
              <h3 className="text-xl font-bold text-brand-dark">No Articles Found</h3>
              <p className="text-nav-text text-sm mt-2 max-w-sm mx-auto">
                We couldn&apos;t find any articles under this category yet. Please check back later.
              </p>
              <Link
                href="/blog"
                className="mt-6 inline-flex items-center justify-center font-poppins font-semibold text-sm bg-brand-red text-white rounded-full px-6 py-2.5 hover:opacity-90 transition-opacity"
              >
                Back to Blog
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 4. Related Categories */}
      <section className="px-6 md:px-12 lg:px-20 py-12 bg-white border-t border-b border-pet-stroke">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-3 tracking-wide uppercase">
            Explore Other Topics
          </span>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark mb-6">
            Related Blog Categories
          </h2>

          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-3 w-full -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
            {relatedCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="flex-shrink-0 font-poppins text-xs font-semibold rounded-full px-5 py-2.5 border border-pet-stroke text-brand-dark bg-white hover:border-brand-dark hover:text-brand-red transition-all shadow-sm"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Newsletter Signup */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-pet-bg">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F0EDE8] rounded-xl px-8 md:px-12 py-10 md:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="font-poppins font-semibold text-[28px] sm:text-[34px] text-brand-dark leading-[120%] tracking-[-0.4px] mb-2">
                Stay Updated with Vet Your Pet
              </h2>
              <p className="font-poppins text-sm md:text-base text-nav-text leading-relaxed">
                Receive weekly pet care updates, breed finder insights, and health advice 
                directly from certified animal care specialists in your inbox.
              </p>
            </div>

            <div className="flex-shrink-0 w-full lg:max-w-md">
              {!newsletterSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                  <div className="flex-1">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full rounded-lg border border-pet-stroke bg-white px-[15px] py-[11px] text-[14px] placeholder:text-pet-placeholder focus:border-pet-blue focus:shadow-md focus:outline-none transition"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-animate inline-flex items-center justify-center font-poppins font-semibold text-sm bg-brand-red text-white rounded-full px-6 py-3 hover:opacity-90 transition-opacity flex-shrink-0"
                  >
                    Subscribe Now
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 bg-white border border-pet-green/20 rounded-xl p-5 shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-pet-green flex-shrink-0" />
                  <div>
                    <h4 className="font-poppins font-semibold text-sm text-brand-dark">
                      Successfully Subscribed!
                    </h4>
                    <p className="text-xs text-nav-text mt-0.5">
                      Thank you! You are now subscribed to the Vet Your Pet newsletter.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
