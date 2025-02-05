"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/label";
import { Settings, CreditCard,} from "lucide-react";
import { PaymentContent } from "./PaymentContent";
import { ProfileContent } from "./ProfileContent";

export function SettingsContent() {
  return (
    <div className="container max-w-3xl mx-auto py-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="space-y-6">
        {/* Subscription Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Subscription Management
            </CardTitle>
            <CardDescription>
              View and update your subscription plan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Current Plan</Label>
              <p className="text-sm text-gray-500">Pro Plan ($29/month)</p>
            </div>
            <div className="space-y-2">
              <Label>Upgrade Plan</Label>
              <select className="w-full p-2 border rounded-md">
                <option value="basic">Basic Plan ($9/month)</option>
                <option value="pro">Pro Plan ($29/month)</option>
                <option value="enterprise">Enterprise Plan ($99/month)</option>
              </select>
            </div>
            <div className="flex justify-end">
              <Button>Upgrade Plan</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <ProfileContent/>
      <PaymentContent/>
    </div>
  );
}