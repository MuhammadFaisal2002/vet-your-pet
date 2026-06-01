'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MatchRing } from './MatchRing';

interface ResultCardProps {
  rank: number;
  slug: string;
  name: string;
  image: string;
  percent: number;
  variant: 'winner' | 'runnerUp';
}

export function ResultCard({ rank, slug, name, image, percent, variant }: ResultCardProps) {
  const badges = {
    winner: { text: 'BEST MATCH', bg: 'bg-[#E8F5EC]', textColor: 'text-[#2B7A3B]' },
    runnerUp: rank === 2 
      ? { text: 'ALSO A GREAT FIT', bg: 'bg-[#EFF3FF]', textColor: 'text-[#4A5FAD]' }
      : { text: 'WORTH CONSIDERING', bg: 'bg-[#F3F4F6]', textColor: 'text-[#474B52]' },
  };

  const badge = badges[variant];

  return (
    <div className="flex h-full flex-col bg-white rounded-2xl border border-pet-stroke overflow-hidden">
      {/* Image — fixed aspect ratio so it fills the card edge-to-edge with no crop surprises */}
      <div className="relative w-full aspect-[4/3] bg-pet-bg">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content — flex column so the CTA block can pin to the bottom */}
      <div className="flex flex-1 flex-col p-5">
        {/* Badge */}
        <span className={`self-start inline-flex px-3 py-1 rounded-full ${badge.bg} ${badge.textColor} font-semibold text-xs uppercase tracking-wide mb-3`}>
          {badge.text}
        </span>

        {/* Name — min-h reserves room for up to 2 lines so all 3 cards align */}
        <h3 className="font-poppins font-bold text-xl text-brand-dark mb-3 min-h-[3.5rem] leading-snug">
          {name}
        </h3>

        {/* Match strength */}
        <div className="flex items-center gap-3 mb-4">
          <MatchRing percent={percent} size={64} />
          <div>
            <p className="text-sm text-[#8995A6]">Match strength:</p>
            <p className="font-poppins font-bold text-lg text-brand-dark">
              {percent}% Compatible
            </p>
          </div>
        </div>

        {/* CTAs — mt-auto pins them to the bottom; fixed min-h on each so wrapping titles don't break alignment */}
        <div className="mt-auto space-y-2">
          <Link
            href={`/breeds/${slug}`}
            className="flex w-full items-center justify-center text-center font-poppins font-semibold text-sm bg-brand-dark text-white rounded-full px-4 py-2.5 min-h-[44px] hover:opacity-90 transition-opacity"
          >
            View Breed Details
          </Link>
          <Link
            href={`/breeds/${slug}`}
            className="flex w-full items-center justify-center text-center font-poppins font-semibold text-sm border-2 border-brand-dark text-brand-dark rounded-full px-4 py-2.5 min-h-[44px] leading-tight hover:bg-brand-dark hover:text-white transition-colors"
          >
            Find a {name} Breeder
          </Link>
        </div>
      </div>
    </div>
  );
}