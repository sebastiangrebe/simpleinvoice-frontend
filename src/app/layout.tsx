import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { CSPostHogProvider } from "@/providers/posthog.provider";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WhatsBill - Simplify Your Billing Process",
  description: "Effortlessly manage invoices and bills with WhatsBill. A user-friendly platform designed for small businesses and freelancers.",
  keywords: ["billing", "invoicing", "small business", "freelancers", "invoice management", "easy billing", "WhatsBill"],
  authors: [{ name: "Sebastian Grebe", url: "https://sebastian-grebe.com" }],
  creator: "Sebastian Grebe",
  publisher: "Sebastian Grebe",
  metadataBase: new URL("https://www.whatsbill.com"),
  openGraph: {
    title: "WhatsBill - Simplify Your Billing Process",
    description: "Effortlessly manage invoices and bills with WhatsBill. A user-friendly platform designed for small businesses and freelancers.",
    url: "https://www.whatsbill.com",
    siteName: "WhatsBill",
    images: [
      {
        url: "https://www.whatsbill.com/api/og", // Open Graph API route for the preview image
        width: 1200,
        height: 630,
        alt: "WhatsBill - Simplify Your Billing Process",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsBill - Simplify Your Billing Process",
    description: "Effortlessly manage invoices and bills with WhatsBill. A user-friendly platform designed for small businesses and freelancers.",
    images: ["https://www.whatsbill.com/api/og"], // Twitter uses the same OG API route
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#0052cc", // WhatsBill's brand color
  alternates: {
    canonical: "https://www.whatsbill.com",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <a
            href="https://www.maturestack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/90 px-2 py-1 text-sm text-gray-600 shadow-lg backdrop-blur hover:bg-white"
          >
            <Image src="https://www.maturestack.com/icon.png" width={24} height={24} alt="MatureStack Logo" />
            Built with MatureStack
          </a>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
