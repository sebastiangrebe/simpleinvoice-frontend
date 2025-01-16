import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
  "Invoicing That Fuels Success",
  "Modern Invoice Templates",
  "Quick Setup & Onboarding",
  "Download in PDF format",
  "Secure & Reliable",
];

export function ServicesSection() {
  return (
    <section className="px-[9%] container py-24 sm:py-32" id="services">
      <div className="grid gap-8 lg:grid-cols-[1fr,1fr] lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Services That Drive Success
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer comprehensive services to ensure you get the most out of
            our platform
          </p>
          <ul className="mt-8 grid gap-4">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-4">
                <CheckCircle className="h-6 w-6 text-[#0191ea]" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-8">
            Learn More
          </Button>
        </div>
        <div className="relative">
          <Image
            src="/services.jpeg"
            alt="Service illustration"
            className="rounded-lg shadow-xl"
            width={500}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-background/0 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
