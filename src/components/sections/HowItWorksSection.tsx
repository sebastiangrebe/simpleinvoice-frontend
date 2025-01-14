import { Card, CardContent } from "@/components/ui/Card";
import { ClipboardCheck, Settings, UserPlus } from "lucide-react";
import BiggerCard from "../ui/BiggerCard";

const steps = [
  {
    icon: <UserPlus className="h-12 w-12" />,
    title: "Create Account",
    description: "Sign up in minutes with our simple onboarding process.",
  },
  {
    icon: <Settings className="h-12 w-12" />,
    title: "Configure Settings",
    description: "Customize the platform to match your specific needs.",
  },
  {
    icon: <ClipboardCheck className="h-12 w-12" />,
    title: "Start Working",
    description: "Begin using the platform and see immediate results.",
  },
  {
    icon: <ClipboardCheck className="h-12 w-12" />,
    title: "Start Working",
    description: "Begin using the platform and see immediate results.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Generate. Deliver. Receive Payment
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Begin your journey with our platform in just few easy steps.
        </p>
      </div>
      <div className="mx-[8%] mt-16 grid gap-8 sm:grid-cols-2">
        {steps.map((step) => (
          <Card key={step.title} className="w-full mt-10 relative">
            <CardContent className="pt-16">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full border-4 border-background bg-primary p-6 text-primary-foreground">
                {step.icon}
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-lg text-muted-foreground">{step.description}</p>
              </div>

              <div className="text-center">
                <a href="#" className="text-[#0091ea] ml-[40%] mt-10 font-semibold text-sm hover:underline flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}