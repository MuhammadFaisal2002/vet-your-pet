import {
  Stethoscope,
  Smile,
  Siren,
  Scissors,
  Layers,
  Brain,
  Heart,
  Bird,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { VET_SERVICES } from "@/data/services";

// Map service icon names → lucide components
const ICON_MAP: Record<string, LucideIcon> = {
  Stethoscope,
  Smile,
  Siren,
  Scissors,
  Layers,
  Brain,
  Heart,
  Bird,
};

export default function BrowseByService(): JSX.Element {
  return (
    <section className="bg-pet-bg py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
            By Specialty
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">
            Browse by Service
          </h2>
          <p className="mt-4 text-base text-nav-text max-w-2xl">
            Looking for something specific? Browse veterinarians by the services they specialize in.
          </p>
        </div>

        {/* Service grid */}
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch auto-rows-fr"
        >
          {VET_SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? Stethoscope;
            return (
              <li key={service.slug} role="listitem">
                <a
                  href={`#service-${service.slug}`}
                  className="group bg-white rounded-2xl border border-pet-stroke p-6 hover:shadow-md transition-shadow flex h-full flex-col focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 min-h-[44px]"
                >
                  <Icon className="w-8 h-8 text-brand-red mb-4" aria-hidden="true" />
                  <span className="text-brand-dark font-bold text-base leading-snug">
                    {service.label}
                  </span>
                  <span className="mt-2 text-sm text-nav-text leading-relaxed">
                    {service.description}
                  </span>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                    Learn more
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
