import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Article, getAuthorSlug } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  showAuthor?: boolean;
}

export default function ArticleCard({ article, showAuthor = true }: ArticleCardProps) {
  const authorSlug = getAuthorSlug(article.author.name);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-card border border-pet-stroke hover-lift flex flex-col h-full">
      {/* Photo */}
      <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden mb-5 bg-gray-50 border border-pet-stroke">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
        />
        <Link
          href={`/blog/category/${article.category.toLowerCase()}`}
          className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider shadow-sm whitespace-nowrap hover:opacity-90 transition-opacity z-10 font-poppins"
        >
          {article.category}
        </Link>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-nav-text mb-2 font-poppins">
        <span className="whitespace-nowrap">{article.date}</span>
        <span className="text-gray-300">•</span>
        <span className="whitespace-nowrap">{article.readTime}</span>
      </div>

      {/* Title */}
      <h3 className="font-poppins font-bold text-xl text-brand-dark leading-snug mb-3 hover:text-brand-red transition-colors">
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>

      {/* Description */}
      <p className="font-poppins text-sm text-nav-text leading-relaxed mb-6 flex-1">
        {article.description}
      </p>

      {/* Footer Row */}
      <div className="flex items-center justify-between border-t border-pet-stroke pt-4 mt-auto">
        {showAuthor ? (
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
              href={`/blog/author/${authorSlug}`}
              className="font-poppins text-xs font-semibold text-brand-dark hover:text-brand-red transition-colors"
            >
              {article.author.name}
            </Link>
          </div>
        ) : (
          <span className="text-xs text-nav-text font-poppins font-medium">
            Published in {article.category}
          </span>
        )}

        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center gap-1 font-poppins font-medium text-xs text-brand-red hover:opacity-85 transition-opacity"
        >
          Read
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
