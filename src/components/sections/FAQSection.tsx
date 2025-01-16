import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What can I access during the free trial period?",
    answer: "With the free trial, you get unrestricted access to all the features of the Freelancer Invoice & Tax Manager for 14 days. No payment details are required to start the trial."
  },
  {
    question: "Am I locked into a plan for a long time?",
    answer: "No, we offer flexible month-to-month plans with no long-term contracts. You can change or cancel your plan whenever you choose."
  },
  {
    question: "What are the accepted payment methods for subscriptions?",
    answer: "We accept major credit cards, PayPal, and bank transfers for yearly plans, making it easy for you to choose the payment method that works best."
  },
  {
    question: "Can I modify my subscription plan after signing up?",
    answer: "Absolutely! You can upgrade or downgrade your subscription at any time, and the changes will take effect immediately without disrupting your invoices or tax data."
  },
  {
    question: "How is my financial and personal information kept safe?",
    answer: "Your data is protected with the latest encryption technologies, ensuring that all your financial records and tax details remain secure and private."
  },
  {
    question: "Can I generate Invoice reports with this app?",
    answer: "Yes! Our app simplifies Invoice reporting by allowing you to generate comprehensive reports for your income, expenses, and deductions."
  },
]

export function FAQSection() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Find answers to common questions about our platform
        </p>
      </div>
      <div className="mt-16 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-bold text-md rounded-xl bg-[#d6ebf3] mb-4 px-6">{faq.question}</AccordionTrigger>
              <AccordionContent className="px-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}