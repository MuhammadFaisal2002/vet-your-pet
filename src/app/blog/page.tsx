import type { Metadata } from "next";
import BlogPageContent from "@/components/blog/BlogPageContent";

export const metadata: Metadata = {
  title: "Learn & Explore | Dog Care Articles & Guides - Vet Your Pet",
  description:
    "Explore dog care articles, training advice, health guidelines, and breed guides authored and reviewed by verified veterinarians and breeders.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
