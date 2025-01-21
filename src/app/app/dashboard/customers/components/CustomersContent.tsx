"use client";

import {
  Card,
  CardContent,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { Users, Plus, Search, Mail, Phone, MapPin } from "lucide-react";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  totalInvoices: number;
  totalPaid: number;
  status: "active" | "inactive";
}

const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "John Doe Enterprises",
    email: "john@doeenterprises.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business St, New York, NY 10001",
    totalInvoices: 12,
    totalPaid: 10000,
    status: "active",
  },
  {
    id: "2",
    name: "Sarah Smith Co",
    email: "sarah@smithco.com",
    phone: "+1 (555) 987-6543",
    address: "456 Commerce Ave, Los Angeles, CA 90001",
    totalInvoices: 8,
    totalPaid: 15000,
    status: "active",
  },

];

interface CustomersContentProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function CustomersContent({ searchQuery, setSearchQuery }: CustomersContentProps) {
  const filteredCustomers = mockCustomers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Customers</h1>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Customer
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredCustomers.map((customer) => (
          <Card key={customer.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold">{customer.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Mail className="h-4 w-4" />
                      {customer.email}
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {customer.phone}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {customer.address}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">
                    {customer.totalInvoices} Invoices
                  </div>
                  <div className="font-semibold">
                    ${customer.totalPaid.toLocaleString()}
                  </div>
                  <div className={`text-sm ${
                    customer.status === 'active' ? 'text-green-500' : 'text-gray-500'
                  }`}>
                    {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 