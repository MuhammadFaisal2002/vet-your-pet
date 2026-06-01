"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Link2, CheckCircle2 } from "lucide-react";
import { Article } from "@/data/articles";

interface BlogDetailPageContentProps {
  article: Article;
  relatedArticles: Article[];
}

export default function BlogDetailPageContent({
  article,
  relatedArticles,
}: BlogDetailPageContentProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

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
            <li>
              <Link
                href={`/blog/category/${article.category.toLowerCase()}`}
                className="hover:text-brand-red transition-colors"
              >
                {article.category}
              </Link>
            </li>
            <li className="flex items-center text-gray-300">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-brand-dark font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {article.title}
            </li>
          </ol>
        </nav>

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
                href={`/${article.author.type === "vet" ? "veterinarian" : "breeder"}/${article.author.slug}`}
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
          <div className="w-full bg-white rounded-2xl p-6 md:p-8 border border-pet-stroke shadow-card flex flex-col sm:flex-row gap-6 items-center sm:items-start my-12">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-pet-stroke flex-shrink-0 shadow-sm">
              <Image
                src={article.author.photo}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <span className="font-poppins font-semibold text-[10px] text-brand-red uppercase tracking-wider">
                Authored By
              </span>
              <h3 className="font-poppins font-bold text-xl text-brand-dark">
                {article.author.name}
              </h3>
              <p className="text-xs font-semibold text-pet-green uppercase tracking-wide">
                Verified {article.author.type === "vet" ? "Veterinarian" : "Ethical Breeder"}
              </p>
              <p className="font-poppins text-sm text-nav-text leading-relaxed">
                Expert contributor on Vet Your Pet. Committed to providing verified information, 
                responsible breeding standards, and evidence-based animal care guidelines.
              </p>
              <Link
                href={`/${article.author.type === "vet" ? "veterinarian" : "breeder"}/${article.author.slug}`}
                className="btn-animate inline-flex items-center justify-center font-poppins font-medium text-xs border border-brand-dark text-brand-dark rounded-full px-5 py-2 mt-2 hover:bg-brand-dark hover:text-white transition-colors"
              >
                View Professional Profile
              </Link>
            </div>
          </div>

          {/* 5. Share Buttons */}
          <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 mb-12 border-t border-b border-pet-stroke">
            <span className="font-poppins text-xs font-semibold text-brand-dark uppercase tracking-wider">
              Share this article
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Twitter */}
              <button
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      article.title
                    )}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`,
                    "_blank"
                  )
                }
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-pet-stroke text-nav-text hover:text-brand-red hover:border-brand-red transition-all cursor-pointer shadow-sm"
                aria-label="Share on Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>

              {/* Facebook */}
              <button
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`,
                    "_blank"
                  )
                }
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-pet-stroke text-nav-text hover:text-brand-red hover:border-brand-red transition-all cursor-pointer shadow-sm"
                aria-label="Share on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </button>

              {/* LinkedIn */}
              <button
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`,
                    "_blank"
                  )
                }
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-pet-stroke text-nav-text hover:text-brand-red hover:border-brand-red transition-all cursor-pointer shadow-sm"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>

              {/* Copy Link */}
              <div className="relative flex items-center">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-pet-stroke text-nav-text hover:text-brand-red hover:border-brand-red transition-all cursor-pointer shadow-sm"
                  aria-label="Copy article link"
                >
                  <Link2 className="w-4 h-4" />
                </button>
                {copied && (
                  <span className="absolute left-10 bg-brand-dark text-white text-[10px] rounded-full px-3 py-1 font-semibold whitespace-nowrap shadow-md animate-fade-in-up">
                    Link Copied!
                  </span>
                )}
              </div>
            </div>
          </div>
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
                <div
                  key={relArt.slug}
                  className="bg-white rounded-2xl p-6 shadow-card border border-pet-stroke hover-lift flex flex-col h-full"
                >
                  {/* Photo */}
                  <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden mb-5 bg-gray-50 border border-pet-stroke">
                    <Image
                      src={relArt.image}
                      alt={relArt.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <Link
                      href={`/blog/category/${relArt.category.toLowerCase()}`}
                      className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider shadow-sm whitespace-nowrap hover:opacity-90 transition-opacity z-10"
                    >
                      {relArt.category}
                    </Link>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-nav-text mb-2">
                    <span className="whitespace-nowrap">{relArt.date}</span>
                    <span className="text-gray-300">•</span>
                    <span className="whitespace-nowrap">{relArt.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-poppins font-bold text-xl text-brand-dark leading-snug mb-3 hover:text-brand-red transition-colors">
                    <Link href={`/blog/${relArt.slug}`}>{relArt.title}</Link>
                  </h3>

                  {/* Description */}
                  <p className="font-poppins text-sm text-nav-text leading-relaxed mb-6 flex-1">
                    {relArt.description}
                  </p>

                  {/* Author / CTA Row */}
                  <div className="flex items-center justify-between border-t border-pet-stroke pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-pet-stroke flex-shrink-0">
                        <Image
                          src={relArt.author.photo}
                          alt={relArt.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <Link
                        href={`/${relArt.author.type === "vet" ? "veterinarian" : "breeder"}/${relArt.author.slug}`}
                        className="font-poppins text-xs font-semibold text-brand-dark hover:text-brand-red transition-colors"
                      >
                        {relArt.author.name}
                      </Link>
                    </div>

                    <Link
                      href={`/blog/${relArt.slug}`}
                      className="inline-flex items-center gap-1 font-poppins font-medium text-xs text-brand-red hover:opacity-85 transition-opacity"
                    >
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
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
