import { Card, CardContent } from "@/components/ui/Card";
import { BadgeDollarSign, ChartBar, ClipboardCheck, CurrencyIcon, FileCheck, HandCoins, Logs, Settings, UserPlus, WalletCards ,} from "lucide-react";
import FeatureCard from "../ui/FeatureCard";

const steps = [
  {
    icon: <WalletCards className="h-12 w-12 text-[#0091ea]" />,
    title: "Effortless Invoice Creation",
    description: "Create professional invoices with just a few clicks. Quick, simple, and error-free invoicing for freelancers."
  },
  {
    icon: <BadgeDollarSign className="h-12 w-12 text-[#0091ea]" />,
    title: "Comprehensive Tax Reports",
    description: "Generate detailed tax reports based on your earnings and expenses, making tax season a breeze."
  },
  {
    icon: <ClipboardCheck className="h-12 w-12 text-[#0091ea]" />,
    title: "Real-Time Payment Tracking",
    description: "Track the status of your invoices, receive notifications when paid, and send automated payment reminders."
  },
  {
    icon: <HandCoins className="h-12 w-12 text-[#0091ea]" />,
    title: "Flexible Payment Options",
    description: "Offer clients multiple payment options like credit cards, PayPal, and bank transfers for convenience."
  },
  {
    icon: <Logs className="h-12 w-12 text-[#0091ea]" />,
    title: "Add Business Logo",
    description: "Personalize & Enhance your invoices by adding your business logo with our online invoice generator. "
  },
  {
    icon: <ChartBar className="h-12 w-12 text-[#0091ea]" />,
    title: "Financial Insights & Analytics",
    description: "Get a detailed overview of your income, expenses, and tax liabilities to better manage your finances."
  }
];


export function FeaturesSection() {
  return (
    <section className="container py-24 sm:py-32"  id="features">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Generate. Deliver. Receive Payment
        </h2>
      </div>
      <div className="mx-[9%] mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {steps.map(( step) => (
            <FeatureCard
            className="pt-16"
            icon={step.icon}
            title={step.title}
            description={step.description}
          >
            <div className="text-center">
              <a href="#" className="text-[#0091ea] ml-[30%] font-semibold text-sm hover:underline flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </FeatureCard>
        ))}
      </div>            
      </section>
  );
}


