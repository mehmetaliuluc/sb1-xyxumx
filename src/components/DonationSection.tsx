import React, { useState } from 'react';
import { Copy, Check, Sprout } from 'lucide-react';

interface DonationAddress {
  network: string;
  address: string;
}

interface DonationSectionProps {
  donationAddresses: DonationAddress[];
}

export default function DonationSection({ donationAddresses }: DonationSectionProps) {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <section id="support" className="py-20 bg-emerald-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Sprout className="h-12 w-12 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Support Our Mission</h3>
            <p className="mt-2 text-gray-600">
              Your contribution helps us plant more trees and raise blockchain awareness globally
            </p>
          </div>

          <div className="space-y-3">
            {donationAddresses.map(({ network, address }) => (
              <div 
                key={network}
                className="bg-emerald-50 rounded-lg p-4 flex items-center justify-between group hover:bg-emerald-100 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-emerald-700 min-w-[100px]">{network}</span>
                  <span className="text-gray-600 font-mono text-sm">{address}</span>
                </div>
                <button
                  onClick={() => handleCopy(address)}
                  className="p-2 text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
                  title="Copy address"
                >
                  {copiedAddress === address ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}