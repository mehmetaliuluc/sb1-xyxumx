import React from 'react';
import { 
  Sprout, 
  GraduationCap, 
  Users, 
  TreePine,
  Leaf,
  BookOpen,
  Globe,
  Coins
} from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: "Supporting Reforestation",
    description: "Proceeds from AWC tokens and NFTs fund global tree planting initiatives.",
    category: "Environment"
  },
  {
    icon: GraduationCap,
    title: "Blockchain Education",
    description: "Workshops and training sessions to introduce blockchain technology.",
    category: "Education"
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Engaging events in public venues combining education with environmental action.",
    category: "Community"
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description: "Regular publications on blockchain's role in environmental sustainability.",
    category: "Education"
  },
  {
    icon: TreePine,
    title: "NFT Tree Tracking",
    description: "Track and verify tree planting progress through blockchain.",
    category: "Technology"
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Direct contribution to global reforestation efforts.",
    category: "Environment"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Worldwide community of environmental and blockchain enthusiasts.",
    category: "Community"
  },
  {
    icon: Coins,
    title: "Tokenized Impact",
    description: "Blockchain-powered rewards for environmental contributions.",
    category: "Technology"
  }
];

const categories = ["Environment", "Education", "Community", "Technology"];

export default function Features() {
  const [activeCategory, setActiveCategory] = React.useState("Environment");

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Connecting blockchain technology with environmental impact
          </p>
        </div>

        <div className="mt-12">
          <div className="flex justify-center flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-white text-gray-600 hover:bg-emerald-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {features
              .filter((feature) => feature.category === activeCategory)
              .map((feature) => (
                <div
                  key={feature.title}
                  className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}