"use client"
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/Button';
import invoice from '../../../public/invoice.webp'
import paid from '../../../public/paid.png'
import signup from '../../../public/signup.png'


export const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Step 1: Sign Up', 'Step 2: Create Invoice', 'Step 3: Send & Get Paid'];

  const content = [
    <div key="tab1" className="flex items-center p-4">
      <div className='w-1/2 p-8'>
      <h2 className="text-2xl font-bold mb-2">Kickstart Your Billing Journey</h2>
      <p className="text-gray-600 mb-4">
      Join in seconds and set the stage for seamless invoicing. Quick, easy, and hassle-free!
      </p>
      </div>
      <div className='w-1/2 p-8'>
      <Image
        src={signup}
        alt="Sample 1"
        className="w-96 h-96 object-cover rounded-lg"
      />
      </div>
    </div>,
    <div key="tab2" className="flex items-center p-4">
      <div className='w-1/2 p-4'>
      <h2 className="text-2xl font-bold mb-2">Craft Your Invoice, Your Way</h2>
      <p className="text-gray-600 mb-4">
      Design professional invoices with ease. Tailor every detail to suit your business needs in just a few clicks.
      </p>
      </div>
      <div className='w-1/2 p-4'>
      <Image
        src={invoice}
        alt="Sample 2"
        className="w-96 h-96 object-cover rounded-lg"
      />
      </div>
    </div>,
    <div key="tab3" className="flex  items-center p-4">
      <div className='w-1/2 p-4'>
      <h2 className="text-2xl font-bold mb-2">Send. Sit Back. Get Paid.</h2>
      <p className="text-gray-600 mb-4">
      Share your invoices instantly and watch the payments roll in. Efficient, secure, and stress-free!
      </p>
      </div>
      <div className='w-1/2 p-4'>
      <Image
        src={paid}
        alt="Sample 3"
        className="w-96 h-96 object-cover rounded-lg"
      />
      </div>
    </div>,
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
            <div className="text-center">
        <h2 className="text-3xl my-6 mb-12 font-bold tracking-tight sm:text-4xl">
          SignUp. Create Invoice. Get Paid
        </h2>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 mb-8 text-sm font-medium rounded ${
              activeTab === index
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

