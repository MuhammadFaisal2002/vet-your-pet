import type { Metadata } from "next";
import DogShowsPageContent from "@/components/dog-shows/DogShowsPageContent";

export const metadata: Metadata = {
  title: "Dog Shows Calendar & Events Hub | Vet Your Pet",
  description: "Find upcoming dog shows near you. View our interactive events calendar, browse by state or breed club, and sign up for AKC show updates.",
};

export default function DogShowsPage() {
  return <DogShowsPageContent />;
}
