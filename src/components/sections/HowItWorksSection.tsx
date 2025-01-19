import { Lock, FileText, DollarSign } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Lock size={48} className="text-blue-500" />,
      title: "Sign Up",
      description: "Create your account quickly to get started."
    },
    {
      icon: <FileText size={48} className="text-blue-500" />,
      title: "Create Invoices",
      description: "Craft professional invoices effortlessly."
    },
    {
      icon: <DollarSign size={48} className="text-blue-500" />,
      title: "Get Paid",
      description: "Send invoices and track payments easily."
    }
  ];

  return (
    <div className="max-w-6xl py-24 mx-auto">
      <div className="text-center my-6 mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How it works
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Start sending invoices in just a few clicks and get paid effortlessly.
        </p>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="rounded-xl bg-blue-100 flex flex-col items-center p-6 text-center"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
