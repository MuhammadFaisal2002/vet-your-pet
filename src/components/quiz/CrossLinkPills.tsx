'use client';

import Link from 'next/link';

interface CrossLinkPillsProps {
  currentSlug: string;
}

export function CrossLinkPills({ currentSlug }: CrossLinkPillsProps) {
  const breeds = [
    { slug: 'golden-retriever', name: 'Golden Retriever' },
    { slug: 'labrador-retriever', name: 'Labrador' },
    { slug: 'german-shepherd', name: 'German Shepherd' },
    { slug: 'goldendoodle', name: 'Goldendoodle' },
    { slug: 'french-bulldog', name: 'French Bulldog' },
  ].filter(b => b.slug !== currentSlug);

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {breeds.map((breed) => (
        <Link
          key={breed.slug}
          href={`/breeds/${breed.slug}`}
          className="font-poppins text-sm text-pet-blue bg-pet-blue-light px-3 py-1 rounded-full hover:opacity-80 transition-opacity"
        >
          {breed.name}
        </Link>
      ))}
    </div>
  );
}