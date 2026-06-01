import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AUTHORS_DATA, getAuthorProfile, getArticlesByAuthor } from "@/data/articles";
import AuthorProfilePageContent from "@/components/blog/AuthorProfilePageContent";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all 6 authors to pre-render during build time
export function generateStaticParams() {
  return Object.keys(AUTHORS_DATA).map((slug) => ({
    slug,
  }));
}

// Generate dynamic SEO metadata using the author details
export function generateMetadata({ params }: PageProps): Metadata {
  const author = getAuthorProfile(params.slug);
  if (!author) {
    return {};
  }

  const roleLabel = author.type === "vet" ? "Veterinarian" : "Breeder";

  return {
    title: `${author.name} - Expert ${roleLabel} Contributor - Vet Your Pet`,
    description: author.bio.length > 155 ? `${author.bio.substring(0, 152)}...` : author.bio,
    alternates: {
      canonical: `/blog/author/${author.slug}`,
    },
  };
}

export default function AuthorProfilePage({ params }: PageProps) {
  const author = getAuthorProfile(params.slug);
  if (!author) {
    notFound();
  }

  // Retrieve all articles authored by this expert
  const articles = getArticlesByAuthor(author.name);

  return (
    <AuthorProfilePageContent
      author={author}
      articles={articles}
    />
  );
}
