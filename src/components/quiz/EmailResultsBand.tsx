'use client';

import { useState, FormEvent } from 'react';
import { Mail } from 'lucide-react';

interface QuizResult {
  slug: string;
  name: string;
  percent: number;
  reasoning: string;
}

interface EmailResultsBandProps {
  results: QuizResult[];
}

export function EmailResultsBand({ results }: EmailResultsBandProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/breeds/quiz/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          results: results.map(r => ({
            slug: r.slug,
            name: r.name,
            percent: r.percent,
            reasoning: r.reasoning,
          })),
        }),
      });

      const data = await response.json();

      if (data.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Unable to send results. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#E8F5EC] rounded-xl p-6 text-center">
        <Mail className="w-8 h-8 text-[#2B7A3B] mx-auto mb-3" />
        <p className="font-poppins font-semibold text-[#2B7A3B]">
          Results sent to {email}!
        </p>
        <p className="font-poppins text-sm text-[#2B7A3B]/80 mt-1">
          Check your inbox for your personalized breed matches.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#F6F7F8] rounded-xl p-6">
      <p className="font-poppins text-center text-nav-text mb-4">
        Want to save your results? Enter your email and we will send them to you.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          className="flex-1 font-poppins text-base px-4 py-2.5 rounded-full border border-pet-stroke bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/50"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="font-poppins font-semibold text-sm bg-brand-dark text-white rounded-full px-6 py-2.5 hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending...' : 'Email Me'}
        </button>
      </form>
      
      {status === 'error' && (
        <p className="font-poppins text-sm text-pet-red text-center mt-2">
          {errorMessage}
        </p>
      )}
    </div>
  );
}