import { Scale, Info } from "lucide-react";
import type { StateRecord } from "@/data/states";

interface PuppyLawsSectionProps {
  state: StateRecord;
}

export default function PuppyLawsSection({ state }: PuppyLawsSectionProps) {
  return (
    <section className="bg-pet-bg py-12 md:py-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-nav-text mb-3">
              Know the Rules
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
              Puppy Laws &amp; Responsible Ownership in {state.name}
            </h2>
            <p className="mt-4 text-base text-nav-text">
              A quick overview of state-specific rules every {state.name} puppy buyer should know.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {state.puppyLawSummary.map((law, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white border border-pet-stroke rounded-2xl p-5 md:p-6"
              >
                <span className="w-10 h-10 rounded-full bg-pet-bg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-brand-red" aria-hidden="true" />
                </span>
                <p className="text-base text-brand-dark leading-relaxed pt-1.5">
                  {law}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-start gap-3 text-sm text-brand-gray-medium">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-nav-text" aria-hidden="true" />
            <p>
              Laws change. Verify current requirements with your local AKC chapter or the {state.name} Department of Agriculture before purchasing a puppy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}