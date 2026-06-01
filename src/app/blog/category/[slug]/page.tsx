import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getArticlesByCategory, CATEGORIES } from "@/data/articles";
import BlogCategoryPageContent from "@/components/blog/BlogCategoryPageContent";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for the 7 standard blog categories to pre-render during build time
export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((key) => ({
    slug: key,
  }));
}

// Generate dynamic SEO metadata using the category-specific details
export function generateMetadata({ params }: PageProps): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    return {};
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
    alternates: {
      canonical: `/blog/category/${category.slug}`,
    },
  };
}

export default function BlogCategoryPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(category.name);

  return (
    <BlogCategoryPageContent
      categoryDetails={category}
      articles={articles}
    />
  );
}
