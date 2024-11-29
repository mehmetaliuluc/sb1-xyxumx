import React from 'react';
import { 
  TreePine, 
  GraduationCap, 
  Code, 
  Shield, 
  Coins,
  LineChart,
  Leaf,
  Users
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TokenInfo from '../components/common/TokenInfo';

const allocation = [
  {
    category: "Environmental Impact Fund",
    percentage: 60,
    tokens: "600,000,000",
    purpose: "Tree planting and restoration projects.",
    icon: TreePine
  },
  {
    category: "Awareness Campaigns",
    percentage: 20,
    tokens: "200,000,000",
    purpose: "Blockchain awareness and education initiatives.",
    icon: GraduationCap
  },
  {
    category: "Team & Development",
    percentage: 10,
    tokens: "100,000,000",
    purpose: "Supporting project growth and innovation.",
    icon: Code
  },
  {
    category: "Reserve Fund",
    percentage: 10,
    tokens: "100,000,000",
    purpose: "Emergency funding and long-term goals.",
    icon: Shield
  }
];

const revenueDistribution = [
  {
    title: "Tree Planting",
    percentage: "60%",
    description: "Direct funding for global reforestation initiatives",
    icon: TreePine
  },
  {
    title: "Blockchain Education",
    percentage: "20%",
    description: "Supporting awareness and training programs",
    icon: GraduationCap
  },
  {
    title: "Operational Costs",
    percentage: "20%",
    description: "Ensuring platform sustainability and scalability",
    icon: LineChart
  }
];

const benefits = [
  {
    title: "Environmental Impact",
    description: "Direct contribution to global reforestation efforts through token and NFT proceeds.",
    icon: Leaf
  },
  {
    title: "Community Governance",
    description: "Token holders participate in decision-making for environmental projects.",
    icon: Users
  },
  {
    title: "Transparent Tracking",
    description: "Real-time monitoring of contributions and their environmental impact.",
    icon: LineChart
  }
];

export default function Tokenomics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLaunchClick={() => {}} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                Token Economics
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Empowering environmental restoration through transparent and sustainable tokenomics
              </p>
              <div className="mt-8 flex justify-center">
                <TokenInfo variant="large" colorScheme="dark" />
              </div>
            </div>

            {/* Token Details */}
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-400">Token Name</h3>
                <p className="mt-2 text-2xl font-bold">AwarenessCoin</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-400">Symbol</h3>
                <p className="mt-2 text-2xl font-bold">AWC</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-400">Network</h3>
                <p className="mt-2 text-2xl font-bold">SOLANA</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-400">Total Supply</h3>
                <p className="mt-2 text-2xl font-bold">1,000,000,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Token Allocation */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Token Allocation</h2>
              <p className="mt-4 text-xl text-gray-500">Strategic distribution to maximize environmental impact</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {allocation.map((item) => (
                <div key={item.category} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <item.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.category}</h3>
                      <p className="text-2xl font-bold text-emerald-600">{item.percentage}%</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{item.purpose}</p>
                  <p className="mt-2 text-sm text-gray-500">{item.tokens} AWC</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Distribution */}
        <section className="py-20 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Revenue Distribution</h2>
              <p className="mt-4 text-xl text-gray-500">How we allocate our resources for maximum impact</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {revenueDistribution.map((item) => (
                <div key={item.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <item.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-2xl font-bold text-emerald-600">{item.percentage}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Token Benefits</h2>
              <p className="mt-4 text-xl text-gray-500">Creating value through environmental impact</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}