import { Card, CardContent } from "@/components/ui/Card";
import { Lightbulb, Target, Users } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation at Core",
    description: "We bring cutting-edge solutions to transform your business processes.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Result Driven",
    description: "Our focus is on delivering measurable results that matter to your business.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Customer First",
    description: "Your success is our priority, with dedicated support every step of the way.",
  },
];

export function AboutSection() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid gap-8 lg:grid-cols-[1fr,1fr] lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Our Company
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;re on a mission to revolutionize how businesses operate in the digital age. Our platform combines powerful features with intuitive design to help you achieve more.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <h3 className="font-semibold">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
            alt="Team collaboration"
            className="rounded-lg shadow-xl"
            width={800}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-background/0 rounded-lg" />
        </div>
      </div>
    </section>
  );
}