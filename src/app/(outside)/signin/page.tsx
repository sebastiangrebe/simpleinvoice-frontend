import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import { UserSigninAuthForm } from "@/components/auth/UserSigninAuthForm";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div className="container relative md:min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 py-12 md:py-0">
      
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "link" }),
          "text-[#0091ea] absolute left-10 sm:left-36 top-4 md:right-8 md:top-8"
        )}
      >
        Home
      </Link>
      
      <Link
        href="/register"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Register
      </Link>
      <div className="relative h-full w-full flex-col bg-muted p-10 pb-28 hidden md:text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-white lg:bg-gradient-to-b from-primary/60 to-primary" />
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
            Empower Your Invoicing: Simplify, Save, Succeed!
            </p>
            <footer className="text-sm">Sebastian Grebe</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <UserSigninAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
