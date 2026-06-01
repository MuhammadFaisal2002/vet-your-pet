import { NextRequest, NextResponse } from 'next/server';

interface QuizEmailPayload {
  email: string;
  results: Array<{
    slug: string;
    name: string;
    percent: number;
    reasoning: string;
  }>;
}

export async function POST(request: NextRequest) {
  try {
    const body: QuizEmailPayload = await request.json();
    
    const { email, results } = body;

    // Validate email format
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { ok: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate results
    if (!Array.isArray(results) || results.length === 0) {
      return NextResponse.json(
        { ok: false, error: 'Results are required' },
        { status: 400 }
      );
    }

    // Log the payload (stub - no actual email sent)
    console.log('[QUIZ_EMAIL] Received quiz results email request:', {
      email,
      resultsCount: results.length,
      topMatch: results[0] ? `${results[0].name} (${results[0].percent}%)` : null,
      timestamp: new Date().toISOString(),
    });

    // Stub response - in production, integrate with email service (SendGrid, Resend, etc.)
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[QUIZ_EMAIL] Error processing request:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}