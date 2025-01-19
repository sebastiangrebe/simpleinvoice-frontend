import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
  "Invoicing That Fuels Success",
  "Modern Invoice Templates",
  "Quick Setup & Onboarding",
  "Download in PDF Format",
  "Secure & Reliable",
];

export function ServicesSection() {
  return (
    <section
      className="px-6 sm:px-12 lg:px-[10%] bg-blue-50 rounded-xl container py-16 sm:py-24 lg:py-32"
      id="services"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr,1fr] lg:gap-16 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-800">
            Services That Drive Success
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-600 leading-relaxed">
            We offer comprehensive services to ensure you get the most out of
            our platform.
          </p>
          <ul className="mt-8 grid gap-6">
            {services.map((service) => (
              <li
                key={service}
                className="flex items-center gap-4 text-gray-700"
              >
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <span className="text-base lg:text-lg">{service}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">
            Learn More
          </Button>
        </div>

        {/* Image Content */}
        <div className="relative">
          <Image
            src="/services.jpeg"
            alt="Illustration showcasing services"
            className="rounded-lg shadow-lg"
            width={600}
            height={500}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent rounded-lg pointer-events-none" />
        </div>
      </div>
    </section>
  );
}