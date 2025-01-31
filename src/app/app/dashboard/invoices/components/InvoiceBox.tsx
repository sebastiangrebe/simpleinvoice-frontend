import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import {  Calendar, DollarSign,Download, Eye, Share2 } from "lucide-react";
import React from 'react'
import { Invoice } from '../../types/invoice';
import { useRouter } from 'next/navigation';
import apiClient from '@/services/apiClient';


    interface InvoiceBoxProps {
        filteredInvoices: Invoice[];
    }

    export default function InvoiceBox({ filteredInvoices }: InvoiceBoxProps) {
    const router = useRouter();

    const handleCustomerClick = (invoice: Invoice) => {
        router.push(`/app/dashboard/invoices/${invoice._id}`);
      };
    
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

      const downloadInvoicePdf = async (invoice: Invoice) => {
        try {
          const response = await apiClient.get(`/invoices/generate-pdf/${invoice._id}`, {
            responseType: 'blob',
          });
      
          // Create a URL for the blob
          const url = window.URL.createObjectURL(new Blob([response.data]));
      
          // Create a link element and trigger the download
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `invoice_${invoice._id}.pdf`);
          document.body.appendChild(link);
          link.click();
      
          // Clean up
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Error downloading PDF:', error);
        }
      };

  return (
    <div>
        <div className="grid gap-4">
      {filteredInvoices.length > 0 ? (
        filteredInvoices.map((invoice) => (
          <Card key={invoice._id}
            className="hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{invoice.invoiceNumber}</h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
                      onClick={() => handleCustomerClick(invoice)}
                    >
                      <Eye className="h-3 w-3" />
                      <span>View/Edit</span>
                    </Button>
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
                      onClick={() => downloadInvoicePdf(invoice)}
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
      
    </div>
  )
}
