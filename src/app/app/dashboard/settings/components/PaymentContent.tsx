"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CreditCard } from "lucide-react";

export function PaymentContent() {
  const handlePayment = () => {
    // Paddle payment logic here
    console.log("Payment initiated");
  };

  return (
    <div className="container max-w-3xl mx-auto py-6">
      <div className="flex items-center gap-2 mb-6">
        <CreditCard className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Payment Management</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment Options</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              Manage your payment methods and subscriptions
            </p>
          </div>
          <div className="flex justify-end">
            <Button onClick={handlePayment}>Upgrade Plan</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}