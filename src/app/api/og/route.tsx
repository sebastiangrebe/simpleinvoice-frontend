// @ts-ignore
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: '#f5f7fa', // Softer light gray background
          color: '#333',
          width: '1200px',
          height: '630px',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Shapes */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            backgroundColor: '#0052cc',
            borderRadius: '50%',
            opacity: 0.2,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '300px',
            height: '300px',
            backgroundColor: '#007bff',
            borderRadius: '50%',
            opacity: 0.15,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50px',
            right: '150px',
            width: '200px',
            height: '200px',
            backgroundColor: '#48caff',
            borderRadius: '50%',
            opacity: 0.25,
          }}
        />

        {/* Logo */}
        <img
          src="http://localhost:3001/icon.png" // Replace with your actual logo URL
          alt="WhatsBill Logo"
          style={{
            width: '120px',
            marginBottom: '20px',
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 'bold',
            color: '#0052cc',
            lineHeight: '1.2',
          }}
        >
          WhatsBill
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '24px',
            marginTop: '20px',
            color: '#333',
            maxWidth: '800px',
            lineHeight: '1.5',
          }}
        >
          Simplify your billing process with a platform designed for small
          businesses and freelancers.
        </div>

        {/* Website */}
        <div
          style={{
            fontSize: '20px',
            marginTop: '40px',
            color: '#555',
          }}
        >
          www.whatsbill.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}