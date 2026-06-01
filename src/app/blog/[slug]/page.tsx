import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/data/articles";
import BlogDetailPageContent from "@/components/blog/BlogDetailPageContent";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for the 7 articles to pre-render during build time
export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

// Generate dynamic SEO metadata using the article details
export function generateMetadata({ params }: PageProps): Metadata {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    return {};
  }

  return {
    title: `${article.title} - Vet Your Pet`,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

export default function BlogDetailPage({ params }: PageProps) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    notFound();
  }

  // Filter 3 related articles: first try the same category, then fill with others (excluding current)
  let related = ARTICLES.filter(
    (a) => a.category === article.category && a.slug !== article.slug
  );
  if (related.length < 3) {
    const extra = ARTICLES.filter(
      (a) => a.category !== article.category && a.slug !== article.slug
    );
    related = [...related, ...extra].slice(0, 3);
  }

  return (
    <BlogDetailPageContent
      article={article}
      relatedArticles={related}
    />
  );
}
