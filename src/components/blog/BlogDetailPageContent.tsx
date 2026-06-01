"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Article, getAuthorSlug } from "@/data/articles";
import { Breadcrumb } from "@/components/ui";
import AuthorCard from "./AuthorCard";
import ShareButtons from "./ShareButtons";
import ArticleCard from "./ArticleCard";

interface BlogDetailPageContentProps {
  article: Article;
  relatedArticles: Article[];
}

export default function BlogDetailPageContent({
  article,
  relatedArticles,
}: BlogDetailPageContentProps) {

  // Determine CTA details dynamically based on author type or category
  const isVetCTA =
    article.author.type === "vet" ||
    ["Health", "Nutrition", "Behavior", "Care"].includes(article.category);

  const ctaTitle = isVetCTA
    ? "Need Professional Medical Advice?"
    : "Looking for a Healthy, Responsibly Bred Puppy?";

  const ctaDescription = isVetCTA
    ? "Connect with verified animal hospitals and certified specialist veterinarians in your area to get personalized guidelines for your dog."
    : "Discover ethical dog breeders committed to health testing, responsible ownership standards, and purebred genetics in your state.";

  const ctaButtonText = isVetCTA ? "Find a Vet Near You" : "Find an Ethical Breeder";
  const ctaLink = isVetCTA ? "/veterinarians" : "/breeders";

  return (
    <div className="min-h-screen bg-pet-bg font-sans pb-16">
      {/* Container aligning everything cleanly to the navbar width sequence */}
      <div className="max-w-[1170px] mx-auto px-6 w-full pt-6 flex flex-col items-start">
        
        {/* 1. Breadcrumbs */}
        <Breadcrumb
          className="mb-6"
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: article.category, href: `/blog/category/${article.category.toLowerCase()}` },
            { label: article.title, isActive: true },
          ]}
        />

        {/* 2. Article Hero — left aligned title, author, date, category, hero image */}
        <header className="flex flex-col items-start text-left w-full mb-10">
          <Link
            href={`/blog/category/${article.category.toLowerCase()}`}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 text-xs font-semibold hover:bg-brand-red/20 transition-colors mb-4"
          >
            {article.category}
          </Link>
          
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-[1.1] mb-6 max-w-4xl">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-2 sm:gap-x-4 text-xs text-nav-text mb-8">
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
                href={`/blog/author/${getAuthorSlug(article.author.name)}`}
                className="font-poppins font-semibold text-brand-dark hover:text-brand-red transition-colors"
              >
                {article.author.name}
              </Link>
            </div>
            <span className="text-gray-300">•</span>
            <span className="whitespace-nowrap">{article.date}</span>
            <span className="text-gray-300">•</span>
            <span className="whitespace-nowrap">{article.readTime}</span>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/10] md:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-pet-stroke shadow-sm">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 1120px, 100vw"
            />
          </div>
        </header>

        {/* Constrain readability container left-aligned within the main grid */}
        <div className="w-full max-w-3xl flex flex-col items-start">
          
          {/* 3. Body Content (rich text — H2/H3, images, quotes, lists) */}
          <article className="prose max-w-none w-full">
            {article.content.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p
                      key={index}
                      className="font-poppins text-base md:text-lg text-nav-text leading-relaxed mb-6"
                    >
                      {block.text}
                    </p>
                  );
                case "heading-2":
                  return (
                    <h2
                      key={index}
                      className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark mt-10 mb-4 leading-snug"
                    >
                      {block.text}
                    </h2>
                  );
                case "heading-3":
                  return (
                    <h3
                      key={index}
                      className="font-poppins font-semibold text-xl text-brand-dark mt-8 mb-3 leading-snug"
                    >
                      {block.text}
                    </h3>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 border-brand-red bg-white p-6 rounded-r-2xl font-poppins italic text-brand-dark my-8 pl-6 shadow-sm border border-pet-stroke border-l-brand-red"
                    >
                      <p className="text-lg md:text-xl leading-relaxed mb-2 text-brand-dark">
                        &ldquo;{block.text}&rdquo;
                      </p>
                      {block.author && (
                        <cite className="block text-sm font-semibold text-nav-text not-italic">
                          — {block.author}
                        </cite>
                      )}
                    </blockquote>
                  );
                case "list":
                  return (
                    <ul
                      key={index}
                      className="list-disc list-inside mb-6 space-y-2.5 pl-4 text-nav-text font-poppins"
                    >
                      {block.items.map((item, idx) => (
                        <li key={idx} className="text-base">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                case "image":
                  return (
                    <figure key={index} className="my-8 w-full">
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-pet-stroke">
                        <Image
                          src={block.src}
                          alt={block.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {block.caption && (
                        <figcaption className="text-xs text-nav-text text-center mt-2 font-poppins">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                default:
                  return null;
              }
            })}
          </article>

          {/* 4. Author Card (avatar, bio, link to author page / pro profile) */}
          <AuthorCard author={article.author} />

          {/* 5. Share Buttons */}
          <ShareButtons title={article.title} />
        </div>

        {/* 6. Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="w-full py-12 border-t border-pet-stroke">
            <div className="flex flex-col items-start mb-10">
              <span className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-3 tracking-wide uppercase">
                Keep Reading
              </span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-dark leading-tight">
                Related Articles & Guides
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch auto-rows-fr">
              {relatedArticles.map((relArt) => (
                <ArticleCard
                  key={relArt.slug}
                  article={relArt}
                />
              ))}
            </div>
          </div>
        )}

        {/* 7. CTA — "Find a [Breeder/Vet] near you" contextual */}
        <div className="w-full bg-[#F0EDE8] rounded-xl px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 my-8 text-center md:text-left shadow-sm">
          <div className="max-w-md">
            <h2 className="font-poppins font-semibold text-[22px] sm:text-[26px] text-brand-dark leading-[120%] tracking-[-0.4px] mb-2">
              {ctaTitle}
            </h2>
            <p className="font-poppins text-xs sm:text-sm text-nav-text leading-relaxed">
              {ctaDescription}
            </p>
          </div>
          <Link
            href={ctaLink}
            className="btn-animate inline-flex items-center justify-center font-poppins font-semibold text-sm bg-brand-red text-white rounded-full px-6 py-3 hover:opacity-90 transition-opacity flex-shrink-0"
          >
            {ctaButtonText}
          </Link>
        </div>

      </div>
    </div>
  );
}
