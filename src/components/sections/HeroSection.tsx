import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-8 flex flex-col items-center justify-center">
      {/* Background Graph */}
      <div className="absolute inset-0 mt-96 pt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f9fafb" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            d="M0,224L40,202.7C80,181,160,139,240,149.3C320,160,400,224,480,229.3C560,235,640,181,720,160C800,139,880,149,960,176C1040,203,1120,245,1200,234.7C1280,224,1360,160,1400,128L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </div>

      <div className="text-center z-10">
        <h1 className="mt-8 text-5xl text-primary/95 sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter">
          Create, Send,{" "}
          <span className="block text-blue-500">Get Paid – Simple!</span>
        </h1>

        <p className="max-w-xl sm:mx-auto mt-6 mx-6 lg:text-lg text-muted-foreground">
          Creating Invoices can be a pain! WhatsBill makes it super
          easy for you to get paid on time!
        </p>

        <div className="mt-7 mb-12">
          <Link href="/#waitlist">
          <Button className="mx-auto mr-2 sm:mr-12 mb-4" size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}