"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { CategoryDetails, Article, CATEGORIES, getAuthorSlug } from "@/data/articles";
import { Breadcrumb } from "@/components/ui";
import ArticleCard from "./ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";

interface BlogCategoryPageContentProps {
  categoryDetails: CategoryDetails;
  articles: Article[];
}

export default function BlogCategoryPageContent({
  categoryDetails,
  articles,
}: BlogCategoryPageContentProps) {

  // Filter other categories for the "Related Categories" section
  const relatedCategories = useMemo(() => {
    return Object.values(CATEGORIES).filter(
      (cat) => cat.slug !== categoryDetails.slug
    );
  }, [categoryDetails.slug]);

  return (
    <div className="min-h-screen bg-pet-bg font-sans">
      {/* 1. Breadcrumbs */}
      {/* 1. Breadcrumbs */}
      <div className="px-6 pt-6 pb-2 max-w-7xl mx-auto w-full">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: categoryDetails.name, isActive: true },
          ]}
        />
      </div>

      {/* 2. Hero Section */}
      <section className="bg-white px-6 pt-8 pb-12 border-b border-pet-stroke mb-8">
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
      <section className="px-6 py-8 bg-pet-bg">
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
                <ArticleCard
                  key={article.slug}
                  article={article}
                />
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
      <section className="px-6 py-12 bg-white border-t border-b border-pet-stroke">
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
      <NewsletterSignup className="bg-pet-bg" />
    </div>
  );
}
