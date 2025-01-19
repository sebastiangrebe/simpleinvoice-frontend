import { NextResponse } from 'next/server';

const CONVERTKIT_API_URL = 'https://api.convertkit.com/v3/forms';
const CONVERTKIT_API_KEY = 'oNQmTDe9mRp0FRAAjFlzzQ';
const FORM_ID = '7503650';

export async function POST(req: any) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      );
    }

    const response = await fetch(`${CONVERTKIT_API_URL}/${FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: CONVERTKIT_API_KEY,
        email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || 'Failed to subscribe' },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: 'Successfully subscribed!' });
  } catch {
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}