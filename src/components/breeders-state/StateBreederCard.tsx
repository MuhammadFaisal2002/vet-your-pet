import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, ShieldCheck, PawPrint } from "lucide-react";
import type { BreederRecord } from "@/data/breeders";

interface StateBreederCardProps {
  breeder: BreederRecord;
}

export default function StateBreederCard({ breeder: b }: StateBreederCardProps) {
  return (
    <Link
      href={`/breeder/${b.slug}`}
      className="group bg-white border border-pet-stroke rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex h-full flex-col focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
    >
      {/* Photo */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={b.photo}
          alt={`${b.name} — breeder in ${b.city}, ${b.state}`}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
        />
        {b.hasAvailablePuppies && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-white border border-pet-stroke rounded-full px-3 py-1.5 text-xs font-semibold text-brand-dark shadow-sm">
            <PawPrint className="w-3.5 h-3.5 text-brand-red" aria-hidden="true" />
            Puppies Available
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-brand-dark leading-snug">
            {b.name}
          </h3>
          {b.verified && (
            <span
              className="inline-flex items-center gap-1 flex-shrink-0 text-xs font-semibold text-brand-red"
              aria-label="Verified breeder"
            >
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              Verified
            </span>
          )}
        </div>

        <p className="mt-1 text-sm text-nav-text inline-flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-brand-red" aria-hidden="true" />
          {b.city}, {b.state}
        </p>

        {/* Breeds raised — eyebrow + chip row (core info for breeder directory) */}
        <div className="mt-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-nav-text mb-2">
            Breeds Raised
          </p>
          <ul className="flex flex-wrap gap-2">
            {b.breeds.slice(0, 3).map((breed) => (
              <li
                key={breed}
                className="inline-flex items-center gap-1 bg-brand-red/10 text-brand-red border border-brand-red/20 rounded-full px-3 py-1 text-xs font-semibold"
              >
                <PawPrint className="w-3 h-3" aria-hidden="true" />
                {breed}
              </li>
            ))}
            {b.breeds.length > 3 && (
              <li className="bg-brand-dark text-white rounded-full px-3 py-1 text-xs font-semibold">
                +{b.breeds.length - 3} more
              </li>
            )}
          </ul>
        </div>

        {/* Rating */}
        <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand-dark">
          <Star className="w-4 h-4 fill-brand-red text-brand-red" aria-hidden="true" />
          <span className="font-semibold">{b.rating.toFixed(1)}</span>
          <span className="text-nav-text">({b.reviewCount} reviews)</span>
        </div>

        {/* CTA */}
        <span className="mt-auto pt-6">
          <span className="inline-flex items-center justify-center rounded-full border border-pet-stroke bg-white px-6 py-3 text-sm font-semibold text-brand-dark group-hover:bg-pet-bg transition-colors min-h-[44px] w-full">
            View Profile
          </span>
        </span>
      </div>
    </Link>
  );
}