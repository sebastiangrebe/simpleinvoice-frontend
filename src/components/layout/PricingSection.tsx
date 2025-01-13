import { Button } from "../ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams and startups",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "24/7 email support",
      "10GB storage",
      "API access",
    ],
  },
  {
    name: "Professional",
    price: "$99",
    description: "Best for growing businesses",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
      "API access",
      "Custom integrations",
      "Team training",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "24/7 phone support",
      "Unlimited storage",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "Custom training",
    ],
  },
];

export function PricingSection() {
  return (
    <section className="container " id="pricing">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-5xl font-bold text-slate-300">
          Choose the plan that&apos;s right for you
        </p>
      </div>
      <div className="mt-16 mx-24 py-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={tier.featured ? "border-primary shadow-lg" : ""}
          >
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <p className="mt-4 text-4xl font-bold">{tier.price}</p>
              <p className="text-sm text-muted-foreground">per month</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}