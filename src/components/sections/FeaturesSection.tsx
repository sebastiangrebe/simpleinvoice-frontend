import { Clock, ContactRound, Logs, User, WalletCards, PieChart} from "lucide-react";
import FeatureCard from "../ui/FeatureCard";

const steps = [
  {
    icon: <WalletCards className="h-12 w-12 text-[#0091ea]" />,
    title: "Effortless Invoice Creation",
    description: "Create professional invoices with just a few clicks. Quick, simple, and error-free invoicing for freelancers."
  },
  {
    icon: <ContactRound className="h-12 w-12 text-[#0091ea]" />, // Replace `User` with the appropriate icon component you want to use
    title: "Manage Customers",
    description: "Easily organize customer information, view transaction history, and maintain detailed contact records."
  },
  {
    icon: <PieChart className="h-12 w-12 text-[#0091ea]" />, // Replace with an appropriate icon component
    title: "Dashboard Overview",
    description: "Get a clear overview of your open and closed invoices in one place, helping you stay on top of your finances."
  },
  {
    icon: <Logs className="h-12 w-12 text-[#0091ea]" />,
    title: "Personalize your invoice",
    description: "Personalize & Enhance your invoices by adding your business logo with our online invoice generator. "
  },
  {
    icon: <Clock className="h-12 w-12 text-[#0091ea]" />, // Replace with an appropriate icon
    title: "Time-Based Payment Tracking",
    description: "Monitor and manage payments tied to hourly rates or project durations with ease."
  },
  {
    icon: <User className="h-12 w-12 text-[#0091ea]" />, // Replace with an appropriate icon
    title: "Multi-User Access",
    description: "Collaborate effortlessly with your team by granting secure access to multiple users with role-based permissions."
  },
];


export function FeaturesSection() {
  return (
    <section className="container py-24 sm:py-32"  id="features">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Manage Invoices and Customers with Ease
        </h2>
      </div>
      <div className="mx-[9%] mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <FeatureCard
            key={index}
            className="pt-16"
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>            
    </section>
  );
}


