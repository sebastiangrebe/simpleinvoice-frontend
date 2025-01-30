"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { FileText, Plus, Search, Calendar, DollarSign,Download, Share2 } from "lucide-react";
import { InvoiceDialog } from "./InvoiceDialog";
import { Invoice } from "../../types/invoice";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import apiClient from "@/services/apiClient";
import { useRouter } from "next/navigation";
import useInvoices from "@/hooks/useInvoices";
import useCustomers from "@/hooks/useCustomers";

interface InvoicesContentProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function InvoicesContent({ searchQuery, setSearchQuery }: InvoicesContentProps) {
  const { invoices, setInvoices } = useInvoices();
  const { customers } = useCustomers();
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [customerFilter, setCustomerFilter] = useState<string>('all');
  const router = useRouter();



  const handleCustomerClick = (invoices: Invoice) => {
    router.push(`/app/dashboard/invoices/${invoices._id}`);
  };

  const handleCreateInvoice = () => {
    setSelectedInvoice({
      invoiceNumber: `INV-${new Date().getFullYear()}-${String(invoices.length + 1).padStart(3, '0')}`,
      dateIssued: new Date().toISOString().split('T')[0] || '',
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] || '',
      companyName: 'Your Company',
      companyAddress: 'Your Address',
      companyPhone: 'Your Phone',
      companyEmail: 'your@email.com',
      companyTaxId: 'Your Tax ID',
      customerId: '',
      customerName: '',
      customerAddress: '',
      customerPhone: '',
      customerEmail: '',
      items: [],
      subtotal: 0,
      taxAmount: 0,
      amount: 0,
      paymentTerms: 'Net 30',
      paymentMethods: ['Bank Transfer'],
      bankDetails: '',
      paymentInstructions: '',
      status: 'pending'
    });
    setIsDialogOpen(true);
  };

  const handleSaveInvoice = async (updatedInvoice: Invoice) => {
    console.log(updatedInvoice);
    try {
      const response = await apiClient.post('/invoices', updatedInvoice);
      setInvoices(prevInvoices => [...prevInvoices, response.data]);
      setIsDialogOpen(false);
      setSelectedInvoice(null);
      console.log("Invoice successfully saved.");
    } catch (error) {
      console.error("Error saving invoice:", error);
    }
  };

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch = invoice.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    const matchesCustomer = customerFilter === 'all' || invoice.customerName === customerFilter;

    return matchesSearch && matchesStatus && matchesCustomer;
  });


  const getStatusColor = (status: Invoice["status"]) => {
    switch (status) {
      case "paid":
        return "text-green-500 bg-green-50";
      case "pending":
        return "text-yellow-500 bg-yellow-50";
      case "overdue":
        return "text-red-500 bg-red-50";
      default:
        return "text-gray-500 bg-gray-50";
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Invoices</h1>
        </div>
        <Button onClick={handleCreateInvoice}>
          <Plus className="h-4 w-4 mr-2" />
          Create Invoice
        </Button>
      </div>

      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search invoices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-4">
          <div className="w-48">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-64">
            <Select value={customerFilter} onValueChange={setCustomerFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by customer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Customers</SelectItem>
                {customers.map((customer) => (
                  <SelectItem key={customer.name} value={customer.name}>
                    {customer.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
      {filteredInvoices.length > 0 ? (
        filteredInvoices.map((invoice) => (
          <Card key={invoice._id}
            className="hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleCustomerClick(invoice)}
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{invoice.invoiceNumber}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{invoice.customerName}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Issued: {invoice.dateIssued}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Due: {invoice.dueDate}
                    </div>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <div className="flex items-center gap-1 text-lg mb-4 font-semibold justify-end">
                    <DollarSign className="h-4 w-4" />
                    {invoice.amount.toLocaleString()}
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(invoice.status)}`}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        // Handle PDF download
                        console.log('Download PDF:', invoice?.invoiceNumber);
                      }}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download PDF
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        window.location.href = `mailto:?subject=Invoice ${invoice?.invoiceNumber}&body=Please find the invoice attached.`;
                      }}
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      Share via Email
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ):
        (
          <p>No customers found</p>
        )
      }
      </div>

      <InvoiceDialog
        invoice={selectedInvoice}
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          setSelectedInvoice(null);
        }}
        onSave={handleSaveInvoice}
      />
    </div>
  );
} 
