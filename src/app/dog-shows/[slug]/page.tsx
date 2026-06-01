import { notFound } from "next/navigation";
import { DOG_SHOWS } from "@/data/shows";
import DogShowDetailPageContent from "@/components/dog-shows/DogShowDetailPageContent";

// Force static rendering for performance
export const dynamic = "force-static";

export function generateStaticParams() {
  return DOG_SHOWS.map((show) => ({
    slug: show.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const show = DOG_SHOWS.find((s) => s.slug === params.slug);
  if (!show) return { title: "Show Not Found - Vet Your Pet" };

  return {
    title: `${show.name} - Vet Your Pet`,
    description: show.details.substring(0, 160),
  };
}

export default function DogShowDetailPage({ params }: { params: { slug: string } }) {
  const show = DOG_SHOWS.find((s) => s.slug === params.slug);

  if (!show) {
    notFound();
  }

  return <DogShowDetailPageContent show={show} />;
}
