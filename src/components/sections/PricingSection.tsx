import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Basic Plan",
    price: "$10",
    description: "Perfect for small teams with up to 5 users",
    features: [
      "Up to 5 users",
      "Basic invoicing features",
      "Email support",
    ],
  },
  {
    name: "Growth Plan",
    price: "$10 + $2/user",
    description: "Ideal for growing teams",
    features: [
      "Up to 5 users for $10/month, $2/user above 5",
      "Advanced invoicing features",
      "Priority email support",
    ],
    featured: true,
  },
  // {
  //   name: "Enterprise Plan",
  //   price: "Custom",
  //   description: "For large teams and businesses with complex needs",
  //   features: [
  //     "Unlimited users",
  //     "All premium invoicing features",
  //     "Priority support",
  //   ],
  // },
];

export function PricingSection() {
  return (
    <section className="px-[9%] container py-24 sm:py-32" id="pricing">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the plan that&apos;s right for you
        </p>
      </div>
      <div className="mt-16 gap-8 align-center justify-center flex flex-wrap">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={tier.featured ? "md:flex-1 relative bg-blue-100 border-[2px] border-[#0091ea] shadow-lg overflow-hidden" : "overflow-hidden md:flex-1 bg-blue-100"}
          >
            {tier.featured && (
              <div className="absolute top-0 right-0 bg-[#0091ea] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                Most Popular
              </div>
            )}
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
              <Link href="/#waitlist">
                <Button className="w-full" variant={tier.featured ? "default" : "outline"}>
                  Get Started
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}