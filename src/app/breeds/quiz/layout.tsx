import { Metadata } from 'next';
import { MinimalHeader } from '@/components/quiz/MinimalHeader';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dog Breed Quiz — Find Your Perfect Match | Vet Your Pet',
  description: 'Take our 60-second dog breed quiz to find breeds that fit your lifestyle. Answer 10 quick questions and get personalized recommendations with local breeders.',
  openGraph: {
    title: 'Dog Breed Quiz — Find Your Perfect Match | Vet Your Pet',
    description: 'Take our 60-second dog breed quiz to find breeds that fit your lifestyle. Answer 10 quick questions and get personalized recommendations.',
    type: 'website',
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MinimalHeader />
      <main className="min-h-screen bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
}