import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { BarChart, Cloud, Code, Database, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud-Based",
    description: "Access your work from anywhere, anytime with our secure cloud infrastructure.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-grade security to protect your sensitive data.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Real-Time Updates",
    description: "Stay synchronized with instant updates across all devices.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "API Access",
    description: "Integrate with your existing tools using our robust API.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Analytics",
    description: "Gain insights with powerful analytics and reporting tools.",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Performance Metrics",
    description: "Track and optimize your business performance in real-time.",
  },
];

export function FeaturesSection() {
  return (
    <section className="container py-24 sm:py-32" id="features">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Powerful Features
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to manage and grow your business
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              
              <CardTitle className="flex flex-row items-center">
                <div className="mr-2 p-2 w-fit rounded-lg bg-primary text-primary-foreground">
                  {feature.icon}
                </div>
                {feature.title}
              </CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}