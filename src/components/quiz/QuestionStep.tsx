'use client';

import { ArrowLeft } from 'lucide-react';
import { QuizQuestion } from '@/lib/breed-quiz-data';
import { ProgressBar } from './ProgressBar';
import { AnswerCard } from './AnswerCard';

interface QuestionStepProps {
  question: QuizQuestion;
  currentStep: number;
  totalSteps: number;
  selectedAnswer: string | null;
  onSelectAnswer: (answerId: string) => void;
  onGoBack: () => void;
}

export function QuestionStep({
  question,
  currentStep,
  totalSteps,
  selectedAnswer,
  onSelectAnswer,
  onGoBack,
}: QuestionStepProps) {
  return (
    <div className="max-w-xl mx-auto py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <ProgressBar current={currentStep} total={totalSteps} />
      </div>
      
      {/* Back Button */}
      <button
        onClick={onGoBack}
        className={`
          flex items-center gap-2 font-poppins text-sm text-[#53565A] hover:text-brand-dark
          transition-colors duration-200 mb-6
          ${currentStep === 1 ? 'invisible' : 'visible'}
        `}
        aria-label="Go back to previous question"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>
      
      {/* Question Label */}
      <p className="font-poppins text-xs text-[#53565A] uppercase tracking-wide mb-2">
        {question.label}
      </p>
      
      {/* Prompt */}
      <h2 className="font-poppins font-bold text-2xl md:text-3xl text-brand-dark mb-3">
        {question.prompt}
      </h2>
      
      {/* Helper text */}
      {question.helper && (
        <p className="font-poppins text-sm text-[#53565A] mb-6">
          {question.helper}
        </p>
      )}
      
      {/* Answer Options */}
      <div 
        role="radiogroup" 
        aria-labelledby={`question-${question.id}`}
        className="space-y-3"
      >
        {question.options.map((option) => (
          <AnswerCard
            key={option.id}
            option={option}
            selected={selectedAnswer === option.id}
            onSelect={() => onSelectAnswer(option.id)}
          />
        ))}
      </div>
    </div>
  );
}