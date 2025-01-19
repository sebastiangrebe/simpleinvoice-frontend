"use client";

import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";

import { useState } from "react";
import { Input } from "../ui/input";


export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  async function subscribeUser() {
    setLoading(true);
    setSuccess(false);
    setError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setEmail(''); // Clear the input
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-6xl mx-auto" id="waitlist">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join The {" "}
          <span className="bg-gradient-to-b from-blue-500/60 to-blue-500 text-transparent bg-clip-text">
            Waitlist
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          The first 10 subscribers will get the first month free!
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={email}
              className="max-w-md bg-white/10"
              disabled={loading}
            />
            <Button
              onClick={subscribeUser}
              disabled={loading || !email.trim()}
            >
              {loading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </>
              )}
            </Button>
            {success && (
            <p className="text-green-500 mt-2">
                🎉 Subscription successful! Check your inbox.
              </p>
            )}
            {error && (
              <p className="text-red-500 mt-2">
                {error}
              </p>
            )}
          </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};