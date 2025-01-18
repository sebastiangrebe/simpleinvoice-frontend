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
  title: "MatureStack - Modern Web Development Templates",
  description: "Production-ready templates and boilerplates for modern web development. Built with Next.js, TypeScript, and best practices for scalable applications.",
  keywords: ["web development", "templates", "boilerplate", "Next.js", "TypeScript", "React", "full-stack"],
  authors: [{ name: "Sebastian Grebe", url: "https://sebastian-grebe.com" }],
  creator: "Sebastian Grebe",
  publisher: "Sebastian Grebe",
  metadataBase: new URL("https://www.maturestack.com"),
  openGraph: {
    title: "MatureStack - Modern Web Development Templates",
    description: "Production-ready templates and boilerplates for modern web development",
    url: "https://www.maturestack.com",
    siteName: "MatureStack",
    images: [
      {
        url: "https://www.maturestack.com/icon.png", // Make sure this image exists
        width: 1200,
        height: 630,
        alt: "MatureStack - Modern Web Development Templates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MatureStack - Modern Web Development Templates",
    description: "Production-ready templates and boilerplates for modern web development",
    images: ["https://www.maturestack.com/icon.png"], // Make sure this image exists
  },
  robots: {
    index: true,
    follow: true,
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
