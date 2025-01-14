'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import apiClient from '@/services/apiClient';
import { Loader2 } from "lucide-react"; // Assuming you're using Lucide icons for the loader

export default function GoogleCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const scope = urlParams.get('scope');
      const authuser = urlParams.get('authuser');
      const prompt = urlParams.get('prompt');

      if (!code) {
        console.error('No authorization code found in callback URL.');
        router.push('/error'); // Redirect to error page if no code is present
        return;
      }

      try {
        const { data, statusText } = await apiClient.post('auth/google/callback', { code, scope, authuser, prompt })

        if (!data) {
          throw new Error(`Failed to forward code to backend: ${statusText}`);
        }

        if (data) {
          localStorage.setItem('access_token', data.access_token)
        }
        // Handle success (e.g., store token, redirect to dashboard)
        router.push('/app/dashboard');
      } catch (error) {
        console.error('Error handling Google OAuth callback:', error);
        router.push('/error'); // Redirect to an error page on failure
      }
    };

    handleCallback();
  }, []);
  
    return (
      <div className="flex flex-col items-center justify-center min-h-96 bg-gray-50">
        <div className="flex flex-col items-center gap-4 bg-white p-6 shadow-lg rounded-lg">
          <Loader2 className="animate-spin text-blue-500 w-8 h-8" />
          <h1 className="text-lg font-medium text-gray-800">
            Signing in...
          </h1>
          <p className="text-sm text-gray-600 text-center">
            Please wait while we complete the authentication process. This might take a few seconds.
          </p>
        </div>
      </div>
    );
  
}