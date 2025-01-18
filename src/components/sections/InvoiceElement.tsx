import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { Dot } from "lucide-react";

const Invoice = [
  {
    num:"1",
    name: "Customer Details",
    content: "This platform has transformed how we operate. The efficiency gains are remarkable.",
    features: [
      "Name",
      "Address",
      "Contact Information",
      "GSTIN (if applicable)",
    ],
  },
  {
    num:"2",
    name: "Supplier Details",
    content: "The best decision we made was switching to this platform. Customer support is outstanding.",
    features: [
      "Name",
      "Address",
      "Contact Information",
      "GSTIN (if applicable)",
    ],
  },
  {
    num:"3",
    name: "Services Provided",
    content: "Intuitive interface, powerful features, and great value for money. Highly recommended!",
    features: [
      "Item Name",
      "Quantity",
      "Unit Price",
      "Total Amount for Each Item",
    ],
  },
  {
    num:"4",
    name: "Amount & Terms",
    content: "Intuitive interface, powerful features, and great value for money. Highly recommended!",
    features: [
      "Subtotal (before tax)",
      "Total Tax Amount",
      "Grand Total (including taxes)",
      "Due date",
    ],
  },
];

export function InvoiceElement() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Key Elements to Create an Invoice
        </h2>
      </div>
      <div className=" mx-[7%] mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {Invoice.map((Invoices) => (
          <Card key={Invoices.name} className="bg-gray-900 border-[4px] pr-4 pt-4 text-slate-100 border-[#0091ea] ">
            <CardTitle className="ml-4 py-4">
              <div className="flex">
              <div className="bg-[#0191ea] p-2 pl-3 mr-2 w-8 h-8 rounded-full">{Invoices.num}</div>
                <p className="font-bold text-xl">{Invoices.name}</p>
              </div>
            </CardTitle>
            <CardContent>
              <ul className="ml-4">
                {Invoices.features.map((feature) => (
                  <li key={feature} className="flex text-slate-300 items-center ">
                    <Dot size={36} strokeWidth={3} absoluteStrokeWidth />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}