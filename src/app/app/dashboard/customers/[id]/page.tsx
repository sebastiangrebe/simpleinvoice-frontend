'use client'

import React, { useEffect, useState } from 'react';
import { useParams, useRouter  } from "next/navigation";
import { ArrowLeft, Building2, Mail, MapPin, Phone, FileText, DollarSign, Calendar, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CustomerDialog } from '../components/CustomerDialog';
import apiClient from '@/services/apiClient';
import { Customer } from '../../types/customer';

interface Invoice {
  id: string;
  number: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
}

export default function CustomerDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      if (!id) return;
      try {
        const response = await apiClient.get(`/customers/${id}`);
        setCustomer(response.data);

        // Fetch customer's invoices
        // const invoicesResponse = await apiClient.get(`/invoices/customer/${response.data._id}`);
        // setInvoices(invoicesResponse.data);
      } catch (err) {
        setError('Error fetching customer details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomerDetails();
  }, [id]);

  const handleSaveCustomer = async (updatedCustomer: Customer) => {
    try {
      const response = await apiClient.put(`/customers/${id}`, updatedCustomer);
      setCustomer(response.data);
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  const handleDeleteCustomer = async () => {
    try {
      await apiClient.delete(`/customers/${id}`);
      router.push('/app/dashboard/customers/'); 
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error || !customer) {
    return <div className="text-red-500 text-center">{error || 'Customer not found'}</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="ghost"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Customers
        </Button>
        <Button
          variant="outline"
          onClick={() => setIsDialogOpen(true)}
        >
          <Edit2 className="h-4 w-4 mr-2" />
          Edit Customer
        </Button>
      </div>

      <div className="">
        {/* Customer Details Card */}
        <div className="pb-10 lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-xl font-bold">{customer.name}</h1>
              <div className={`text-sm px-2 py-1 rounded-full ${
                customer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-500" />
                <span>{customer.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-500" />
                <span>{customer.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span>{customer.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-gray-500" />
                <div>
                  <div>VAT: {customer.vatNumber}</div>
                  <div>Reg: {customer.registrationNumber}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Total Invoices</div>
                  <div className="text-xl font-semibold">{customer.totalInvoices}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Total Paid</div>
                  <div className="text-xl font-semibold">${customer.totalPaid.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invoices List */}
        <div className="lg:col-span-2">
          <div className="rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Invoices</h2>

            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-gray-500" />
                        <span className="font-semibold">Invoice #{invoice.number}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {new Date(invoice.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        <span className="font-semibold">${invoice.amount.toLocaleString()}</span>
                      </div>
                      <div className={`mt-1 text-sm px-2 py-1 rounded-full inline-block
                        ${invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                          invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'}`}>
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {invoices.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  No invoices found for this customer
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <CustomerDialog
        customer={customer}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSaveCustomer}
        onDelete={handleDeleteCustomer}
      />
    </div>
  );
}