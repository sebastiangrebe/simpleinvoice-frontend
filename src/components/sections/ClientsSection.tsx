import { cn } from "@/lib/utils";
import Image from "next/image";

const clients = [
  { name: "Company 1", logo: "https://via.placeholder.com/150x50" },
  { name: "Company 2", logo: "https://via.placeholder.com/150x50" },
  { name: "Company 3", logo: "https://via.placeholder.com/150x50" },
  { name: "Company 4", logo: "https://via.placeholder.com/150x50" },
  { name: "Company 5", logo: "https://via.placeholder.com/150x50" },
  { name: "Company 6", logo: "https://via.placeholder.com/150x50" },
];

export function ClientsSection() {
  return (
    <section className="container py-12 sm:py-16">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-muted-foreground">
          Trusted by leading companies worldwide
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-x-12 gap-y-8">
          {clients.map((client) => (
            <Image
              key={client.name}
              src={client.logo}
              alt={client.name}
              width={150}
              height={50}
              className={cn(
                "h-12 object-contain grayscale transition-all hover:grayscale-0"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}