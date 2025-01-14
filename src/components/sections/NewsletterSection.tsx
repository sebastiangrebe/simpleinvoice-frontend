import { Button } from "@/components/ui/Button";
// import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="relative isolate overflow-hidden bg-primary px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Start invoicing today!
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
          Bill Your Clients, Receive Payments Quickly!
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            {/* <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-md bg-white/10 text-primary-foreground placeholder:text-primary-foreground/75"
            /> */}
            <Button >
              <Mail className="mr-2 h-4 w-4" />
              Try Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}