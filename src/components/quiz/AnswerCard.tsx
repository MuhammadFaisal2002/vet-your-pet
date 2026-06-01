'use client';

import { QuizOption } from '@/lib/breed-quiz-data';

interface AnswerCardProps {
  option: QuizOption;
  selected: boolean;
  onSelect: () => void;
}

export function AnswerCard({ option, selected, onSelect }: AnswerCardProps) {
  return (
    <button
      onClick={onSelect}
      role="radio"
      aria-checked={selected}
      className={`
        w-full text-left p-4 rounded-xl border-2 transition-all duration-200
        font-poppins
        ${selected 
          ? 'border-brand-red bg-brand-red/5' 
          : 'border-[#E9EAEE] hover:border-[#B6BFCC] bg-white'
        }
        focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:ring-offset-2
      `}
    >
      <div className="flex items-start gap-3">
        {/* Selection indicator */}
        <div 
          className={`
            w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5
            flex items-center justify-center
            ${selected 
              ? 'border-brand-red bg-brand-red' 
              : 'border-[#B6BFCC]'
            }
          `}
        >
          {selected && (
            <svg 
              className="w-3 h-3 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          )}
        </div>
        
        {/* Content */}
        <div>
          <span className={`
            font-semibold text-base
            ${selected ? 'text-brand-dark' : 'text-nav-text'}
          `}>
            {option.label}
          </span>
          {option.description && (
            <p className="text-sm text-[#53565A] mt-1">
              {option.description}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}