import React, { useState } from 'react';
import { Copy, Check, Sprout } from 'lucide-react';

export default function SupportMission() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const donationAddress = "Dka9euMi1Tf2o7eELkiV752Pxy3fUmBibhUXnJw3WGpM";

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <section id="support" className="py-20 bg-emerald-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Sprout className="h-12 w-12 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Support Our Mission
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Your contribution helps us plant more trees and raise blockchain awareness globally
          </p>
        </div>

        <div className="mt-12">
          <div 
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">SOLANA Address</h3>
                <p className="text-sm text-gray-500">Send your contribution to this address</p>
              </div>
              <div className="p-2 bg-emerald-100 rounded-full">
                <Sprout className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-mono text-sm text-gray-600">{donationAddress}</span>
              <button
                onClick={() => handleCopy(donationAddress)}
                className="p-2 text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
                title="Copy address"
              >
                {copiedAddress === donationAddress ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}