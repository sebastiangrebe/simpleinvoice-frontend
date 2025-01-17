"use client"

import { useState } from 'react';
import { Button } from '../ui/Button';


export const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Step 1: Sign Up', 'Step 2: Create Invoice', 'Step 3: Send & Get Paid'];

  const content = [
    <div key="tab1" className="flex flex-wrap justify-center items-center p-4">
      <div className='w-full md:w-1/2 p-4 md:p-8'>
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-12">Kickstart Your Billing Journey</h2>
        <p className="text-gray-600 mb-4">
          Begin your journey with our platform in just a few easy steps. Whether you're a freelancer or a small business, our app simplifies the process of managing your invoices and payments.
          <h3 className='mt-4 md:mt-6'>Start by creating your account on our platform. The sign-up process is quick and easy, giving you access to all the essential tools you need to manage your invoices, clients, and payments.</h3>
        </p>
      </div>
      <div className='w-full md:w-1/2 p-4 md:p-8'>
        <img
          src="/signup.png"
          alt="Sample 1"
          className="w-full md:w-96 h-auto md:h-96 object-cover rounded-lg"
        />
      </div>
    </div>,
    <div key="tab2" className="flex flex flex-wrap justify-center items-center p-4">
      <div className='w-full md:w-1/2 p-4 md:p-8'>
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-12">Craft Your Invoice, Your Way</h2>
        <p className="text-gray-600 mb-4">
          Once you're signed in, you can easily create professional invoices with just a few clicks. Choose from customizable templates, add your client details, services, rates, and due dates. Personalize your invoices to match your brand and business style.
        </p>
      </div>
      <div className='w-full md:w-1/2 p-4 md:p-8'>
        <img
          src="/invoice.webp"
          alt="Sample 2"
          className="w-full md:w-96 h-auto md:h-96 object-cover rounded-lg"
        />
      </div>
    </div>,
    <div key="tab3" className="flex flex flex-wrap justify-center items-center p-4">
      <div className='w-full md:w-1/2 p-4 md:p-8'>
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-12">Send. Sit Back. Get Paid.</h2>
        <p className="text-gray-600 mb-4">
          After your invoice is ready, simply send it to your client via email or share a direct link. With real-time tracking, you can monitor the status of your invoice and receive notifications when it’s paid. If needed, send automated reminders to ensure timely payments.
        </p>
      </div>
      <div className='w-full md:w-1/2 p-4 md:p-8'>
        <img
          src="/paid.png"
          alt="Sample 3"
          className="w-full md:w-96 h-auto md:h-96 object-cover rounded-lg"
        />
      </div>
    </div>,
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-center my-6 mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          SignUp. Create Invoice. Get Paid
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Begin your journey with our platform in just few easy steps.
        </p>
      </div>
      <div className="flex flex-wrap justify-center sm:mx-4 mx-0 md:mx-0 lg:mx-0 mb-4">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-full sm:w-auto mx-2 px-4 py-2 mb-4 sm:mb-8 text-sm font-medium rounded ${activeTab === index
              ? 'bg-[#0191ea] text-white'
              : 'bg-gray-200 hover:bg-[#0191ea] text-gray-700'
              }`}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div className="p-4 bg-[#d6ebf3]   rounded-xl">
        {content[activeTab]}
      </div>
    </div>
  );
};

