import Link from "next/link";
import { Dog } from "lucide-react";
import type { StateRecord } from "@/data/states";

interface AboutBreedingSectionProps {
  state: StateRecord;
}

export default function AboutBreedingSection({ state }: AboutBreedingSectionProps) {
  return (
    <section className="bg-white py-12 md:py-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
                Regional Context
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
                About Breeding in {state.name}
              </h2>
              <p className="mt-4 text-base text-nav-text">
                {state.climate}
              </p>
            </div>
            {state.aboutParagraphs.map((p, i) => (
              <p key={i} className="text-base text-nav-text leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <aside className="bg-pet-bg border border-pet-stroke rounded-2xl p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
              Most Requested
            </p>
            <h3 className="text-xl font-bold text-brand-dark mb-5">
              Popular Breeds in {state.name}
            </h3>
            <ul className="flex flex-col gap-3">
              {state.popularBreeds.map((breed) => {
                const slug = breed.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
                return (
                  <li key={breed}>
                    <Link
                      href={`/breeds/${slug}`}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-white border border-pet-stroke hover:border-brand-red transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2"
                    >
                      <span className="w-9 h-9 rounded-full bg-pet-bg flex items-center justify-center flex-shrink-0">
                        <Dog className="w-4 h-4 text-brand-red" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-red transition-colors">
                        {breed}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}