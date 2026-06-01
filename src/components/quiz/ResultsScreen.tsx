'use client';

import { ResultCard } from './ResultCard';
import { EmailResultsBand } from './EmailResultsBand';
import { CrossLinkPills } from './CrossLinkPills';

interface QuizResult {
  slug: string;
  name: string;
  image: string;
  percent: number;
  reasoning: string;
}

interface ResultsScreenProps {
  results: QuizResult[];
  onRetake: () => void;
}

export function ResultsScreen({ results, onRetake }: ResultsScreenProps) {
  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark mb-4">
          Meet your matches
        </h1>
        <p className="font-poppins text-base text-nav-text max-w-2xl mx-auto">
          Based on your answers, here are the breeds that fit your lifestyle best.
        </p>
      </div>

      {/* Result Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-stretch auto-rows-fr">
        {results.map((result, index) => (
          <ResultCard
            key={result.slug}
            rank={index + 1}
            slug={result.slug}
            name={result.name}
            image={result.image}
            percent={result.percent}
            variant={index === 0 ? 'winner' : 'runnerUp'}
          />
        ))}
      </div>

      {/* Reasoning snippets */}
      <div className="bg-[#F9F8F6] rounded-xl p-6 mb-8">
        <h2 className="font-poppins font-semibold text-lg text-brand-dark mb-4 text-center">
          Why these breeds fit you:
        </h2>
        <div className="space-y-4">
          {results.map((result) => (
            <div key={result.slug} className="border-b border-pet-stroke pb-4 last:border-0 last:pb-0">
              <p className="font-poppins text-sm text-nav-text">
                <span className="font-semibold text-brand-dark">{result.name}:</span>{' '}
                {result.reasoning}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Email Results Band */}
      <div className="mb-10">
        <EmailResultsBand results={results} />
      </div>

      {/* Cross-link pills */}
      <div className="mb-10">
        <p className="font-poppins text-sm text-center text-[#53565A] mb-3">
          Not the right fit? Explore other breeds:
        </p>
        <CrossLinkPills currentSlug={results[0]?.slug || ''} />
      </div>

      {/* Retake quiz CTA */}
      <div className="text-center">
        <button
          onClick={onRetake}
          className="font-poppins font-semibold text-sm text-brand-red hover:underline"
        >
          Take the quiz again
        </button>
      </div>
    </div>
  );
}