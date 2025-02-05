'use client'
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import apiClient from "@/services/apiClient";
import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const tiers = [
  {
    name: "Basic Plan",
    price: "$10",
    planId: "basic_plan_1",
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
    planId: "growth_plan_1",
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

  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handlePlanSelect = async (planId: string) => {
    setLoadingPlan(planId);
  
    try {
      const response = await apiClient.post("/paddle/generate-payment-link", {
        planId,
        userId: "test@example.com", 
        quantity: 1,
      });
  
      if (!response.data || !response.data.paymentLink) throw new Error("Failed to generate payment link");
  
      const paymentLink = response.data.paymentLink;
  
      if (paymentLink) {
        window.location.href = paymentLink;
      } else {
        toast.error("Payment link generation failed.");
      }
    } catch (error) {
      console.error("Payment request error:", error);
      toast.error("Error generating payment link. Please try again.");
    } finally {
      setLoadingPlan(null);
    }
  };


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
                <Button className="w-24" variant={tier.featured ? "default" : "outline"}
                onClick={() => handlePlanSelect(tier.planId)}
                disabled={loadingPlan === tier.planId}
                >
                  Get Started
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}