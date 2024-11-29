import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Code2, 
  Shield, 
  Users, 
  Globe2, 
  Wallet, 
  Building2,
  Network,
  Blocks,
  Handshake,
  Smartphone,
  LineChart,
  Coins,
  Workflow,
  Share2,
  Award,
  ChevronLeft,
  ChevronRight,
  BookOpen
} from 'lucide-react';

const allPhases = [
  {
    year: 2024,
    quarters: [
      {
        quarter: "Q1",
        title: "Strategic Planning",
        items: [
          "Project conceptualization",
          "Team formation and roles",
          "Initial market research",
          "Technology stack selection"
        ],
        icon: Rocket,
        color: "from-purple-500 to-indigo-500"
      },
      {
        quarter: "Q2",
        title: "Website Development",
        items: [
          "Website design and development",
          "Whitepaper creation",
          "Social media presence setup",
          "Community engagement strategy"
        ],
        icon: Code2,
        color: "from-blue-500 to-cyan-500"
      },
      {
        quarter: "Q3",
        title: "Token Development",
        items: [
          "SOLANA smart contract development",
          "Token economics finalization",
          "Security audit preparation",
          "Partnership discussions"
        ],
        icon: Shield,
        color: "from-emerald-500 to-green-500"
      },
      {
        quarter: "Q4",
        title: "Launch Preparation",
        items: [
          "Smart contract deployment",
          "Security audit completion",
          "Community platform beta",
          "Pre-launch marketing"
        ],
        icon: Rocket,
        color: "from-orange-500 to-red-500"
      }
    ]
  },
  {
    year: 2025,
    quarters: [
      {
        quarter: "Q1",
        title: "Token Launch",
        items: [
          "Public token launch on SOLANA",
          "Exchange listings initiation",
          "Staking platform launch",
          "Marketing campaign rollout"
        ],
        icon: Coins,
        color: "from-pink-500 to-rose-500"
      },
      {
        quarter: "Q2",
        title: "Platform Development",
        items: [
          "Staking mechanism implementation",
          "Governance framework setup",
          "Educational content creation",
          "First awareness campaigns"
        ],
        icon: BookOpen,
        color: "from-violet-500 to-purple-500"
      },
      {
        quarter: "Q3",
        title: "Community Growth",
        items: [
          "DAO governance launch",
          "Regional community hubs",
          "Ambassador program",
          "Partnership expansion"
        ],
        icon: Users,
        color: "from-amber-500 to-yellow-500"
      },
      {
        quarter: "Q4",
        title: "Global Expansion",
        items: [
          "International market entry",
          "Multi-language support",
          "Regional token listings",
          "Global marketing campaign"
        ],
        icon: Globe2,
        color: "from-teal-500 to-emerald-500"
      }
    ]
  },
  {
    year: 2026,
    quarters: [
      {
        quarter: "Q1",
        title: "DeFi Integration",
        items: [
          "Yield farming launch",
          "Liquidity mining program",
          "Cross-chain bridges",
          "DeFi partnerships"
        ],
        icon: Wallet,
        color: "from-cyan-500 to-blue-500"
      },
      {
        quarter: "Q2",
        title: "Enterprise Solutions",
        items: [
          "Corporate partnership program",
          "Enterprise API launch",
          "B2B integration tools",
          "Industry alliances"
        ],
        icon: Building2,
        color: "from-indigo-500 to-violet-500"
      },
      {
        quarter: "Q3",
        title: "Ecosystem Expansion",
        items: [
          "NFT marketplace launch",
          "Gaming integration",
          "Creator tools",
          "Developer grants program"
        ],
        icon: Network,
        color: "from-purple-500 to-pink-500"
      },
      {
        quarter: "Q4",
        title: "Advanced Features",
        items: [
          "AI integration",
          "Predictive analytics",
          "Smart contract upgrades",
          "Advanced security features"
        ],
        icon: Blocks,
        color: "from-red-500 to-orange-500"
      }
    ]
  },
  {
    year: 2027,
    quarters: [
      {
        quarter: "Q1",
        title: "Strategic Partnerships",
        items: [
          "Government collaborations",
          "Academic partnerships",
          "Research initiatives",
          "Industry standards development"
        ],
        icon: Handshake,
        color: "from-emerald-500 to-teal-500"
      },
      {
        quarter: "Q2",
        title: "Mobile First",
        items: [
          "Mobile app 2.0",
          "Biometric security",
          "Offline functionality",
          "Mobile payments integration"
        ],
        icon: Smartphone,
        color: "from-blue-500 to-indigo-500"
      },
      {
        quarter: "Q3",
        title: "Market Expansion",
        items: [
          "New market entry",
          "Regulatory compliance",
          "Institutional partnerships",
          "Enterprise solutions"
        ],
        icon: LineChart,
        color: "from-violet-500 to-purple-500"
      }
    ]
  }
];

export default function Roadmap() {
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentPhaseIndex(current => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setCurrentPhaseIndex(current => Math.min(allPhases.length - 1, current + 1));
  };

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Roadmap
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Our journey to revolutionize social impact through blockchain technology
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            disabled={currentPhaseIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-emerald-600 text-white shadow-lg ${
              currentPhaseIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-emerald-700'
            }`}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentPhaseIndex === allPhases.length - 1}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-emerald-600 text-white shadow-lg ${
              currentPhaseIndex === allPhases.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-emerald-700'
            }`}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-emerald-700" />

          {/* Current Phase */}
          <div className="mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={allPhases[currentPhaseIndex].year}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="flex justify-center items-center mb-12">
                <div className="bg-emerald-600 text-white px-6 py-2 rounded-full text-xl font-bold shadow-lg shadow-emerald-500/30">
                  {allPhases[currentPhaseIndex].year}
                </div>
              </div>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-4">
              {allPhases[currentPhaseIndex].quarters.map((quarter, quarterIndex) => (
                <motion.div
                  key={quarter.quarter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: quarterIndex * 0.1 }}
                >
                  <div className="relative group">
                    <div className="h-full bg-gray-800 backdrop-blur-lg bg-opacity-50 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 border border-gray-700">
                      <div className={`h-2 bg-gradient-to-r ${quarter.color}`} />
                      <div className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${quarter.color} text-white`}>
                            <quarter.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-emerald-400">
                              {quarter.quarter}
                            </span>
                            <h4 className="text-lg font-bold text-white">
                              {quarter.title}
                            </h4>
                          </div>
                        </div>
                        
                        <ul className="mt-4 space-y-3">
                          {quarter.items.map((item, itemIndex) => (
                            <motion.li 
                              key={itemIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                              className="flex items-center text-sm text-gray-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Year navigation dots */}
        <div className="flex justify-center space-x-4 mt-8">
          {allPhases.map((phase, index) => (
            <button
              key={phase.year}
              onClick={() => setCurrentPhaseIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPhaseIndex === index 
                  ? 'bg-emerald-500 w-12'
                  : 'bg-gray-600 hover:bg-emerald-400'
              }`}
              aria-label={`View ${phase.year} roadmap`}
            />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
          <div className="aspect-[1200/800] w-[600px] bg-gradient-to-br from-emerald-400 to-purple-500" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20">
          <div className="aspect-[1200/800] w-[600px] bg-gradient-to-tr from-blue-400 to-emerald-500" />
        </div>
      </div>
    </section>
  );
}