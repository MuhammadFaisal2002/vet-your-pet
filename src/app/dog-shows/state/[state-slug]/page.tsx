import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllStatesSlugs,
  getShowsByStateSlug,
  getStatesWithShowCounts,
} from "@/data/shows";
import DogShowsByStatePageContent from "@/components/dog-shows/DogShowsByStatePageContent";

interface PageProps {
  params: { "state-slug": string };
}

// Pre-render a static page for every state that has shows
export function generateStaticParams() {
  return getAllStatesSlugs().map((slug) => ({ "state-slug": slug }));
}

// Dynamic SEO metadata per state
export function generateMetadata({ params }: PageProps): Metadata {
  const stateSlug = params["state-slug"];
  const data = getShowsByStateSlug(stateSlug);
  if (!data) return {};

  const { stateName, shows } = data;
  const count = shows.length;

  return {
    title: `Dog Shows in ${stateName} (${count} AKC Events) | ThePetPros`,
    description: `Find upcoming AKC dog shows and kennel club events in ${stateName}. Browse ${count} conformation shows, agility trials, and obedience competitions near you.`,
    alternates: {
      canonical: `/dog-shows/state/${stateSlug}`,
    },
  };
}

export default function DogShowsByStatePage({ params }: PageProps) {
  const stateSlug = params["state-slug"];
  const data = getShowsByStateSlug(stateSlug);
  if (!data) notFound();

  const allStates = getStatesWithShowCounts();

  return (
    <DogShowsByStatePageContent
      stateName={data.stateName}
      stateAbbr={data.stateAbbr}
      stateSlug={stateSlug}
      shows={data.shows}
      allStates={allStates}
    />
  );
}
