'use client';

// FAQ Schema for JSON-LD
// From content spec §10

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "How long does the quiz take?",
    answer: "The quiz takes about 60 seconds to complete. There are 10 quick questions about your home, lifestyle, and preferences.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No, the breed quiz is completely free and no signup is required. You will see your results instantly after completing the quiz.",
  },
  {
    question: "How accurate are the matches?",
    answer: "Our matching algorithm considers 10 different factors including living space, activity level, family composition, and grooming preferences. The more accurately you answer, the better your matches will be.",
  },
  {
    question: "Can I take the quiz again?",
    answer: "Yes, you can retake the quiz as many times as you like. Each time you will answer the questions fresh, potentially getting different breed recommendations.",
  },
  {
    question: "What happens after I get my results?",
    answer: "After getting your results, you can view breed details and find trusted breeders in your area who specialize in the matched breeds.",
  },
];

export function QuizFaqSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Also export a visible FAQ component for the page
export function QuizFaqAccordion() {
  return (
    <div className="max-w-2xl mx-auto mt-16 border-t border-pet-stroke">
      <h2 className="font-poppins font-semibold text-xl text-brand-dark py-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-0">
        {faqData.map((item, index) => (
          <details 
            key={index}
            className="group border-b border-pet-stroke py-4 cursor-pointer"
          >
            <summary className="font-poppins font-medium text-nav-text flex items-center justify-between list-none">
              {item.question}
              <span className="font-poppins text-2xl text-brand-red opacity-50 group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="font-poppins text-sm text-[#53565A] mt-3">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}