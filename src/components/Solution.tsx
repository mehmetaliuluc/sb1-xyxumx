import React from 'react';
import { TreePine, GraduationCap, Users, Globe } from 'lucide-react';

const solutions = [
  {
    icon: TreePine,
    title: "Supporting Reforestation",
    description: "Proceeds from AWC tokens and NFTs fund global tree planting initiatives."
  },
  {
    icon: GraduationCap,
    title: "Blockchain Education",
    description: "Workshops and training sessions to introduce blockchain technology."
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Engaging events combining education with environmental action."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Worldwide community of environmental and blockchain enthusiasts."
  }
];

export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Solution
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Connecting blockchain technology with environmental impact
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="relative group"
            >
              <div className="h-full bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600">
                      <solution.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-600">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}