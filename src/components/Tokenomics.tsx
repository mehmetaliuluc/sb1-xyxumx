import React from 'react';
import { PieChart, Users, Handshake, Code, Shield } from 'lucide-react';

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tokenomics
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Total Supply: 1,000,000,000 AWC
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
            <div>
              <div className="absolute rounded-md bg-emerald-500 p-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="ml-16 pt-1">
                <p className="text-2xl font-semibold text-gray-900">50%</p>
                <p className="text-sm text-gray-500">Community Distribution</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Airdrops, campaigns, and community events</p>
            </div>
          </div>

          <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
            <div>
              <div className="absolute rounded-md bg-emerald-500 p-3">
                <Handshake className="h-6 w-6 text-white" />
              </div>
              <div className="ml-16 pt-1">
                <p className="text-2xl font-semibold text-gray-900">30%</p>
                <p className="text-sm text-gray-500">Strategic Partnerships</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Partnerships and donations to causes</p>
            </div>
          </div>

          <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
            <div>
              <div className="absolute rounded-md bg-emerald-500 p-3">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div className="ml-16 pt-1">
                <p className="text-2xl font-semibold text-gray-900">10%</p>
                <p className="text-sm text-gray-500">Team & Development</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Core team and ongoing development</p>
            </div>
          </div>

          <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
            <div>
              <div className="absolute rounded-md bg-emerald-500 p-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="ml-16 pt-1">
                <p className="text-2xl font-semibold text-gray-900">10%</p>
                <p className="text-sm text-gray-500">Reserve Fund</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Future projects and emergency funds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}