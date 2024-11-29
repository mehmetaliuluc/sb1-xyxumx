import React from 'react';
import { TreePine, AlertTriangle, Users, Globe } from 'lucide-react';

const problems = [
  {
    icon: TreePine,
    title: "Environmental Crisis",
    description: "Urgent need for global reforestation and environmental restoration."
  },
  {
    icon: AlertTriangle,
    title: "Limited Awareness",
    description: "Insufficient understanding of how blockchain can support environmental causes."
  },
  {
    icon: Users,
    title: "Disconnected Efforts",
    description: "Lack of coordination between environmental initiatives and technology."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Need for scalable solutions to address worldwide environmental challenges."
  }
];

export default function ProblemStatement() {
  return (
    <section id="problems" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            The Challenges We Face
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Critical environmental issues demanding innovative blockchain solutions
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 -translate-y-1/2">
                <div className="inline-flex p-3 rounded-xl text-white bg-emerald-600 shadow-lg">
                  <problem.icon className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {problem.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-700 rounded-3xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to make a change?</span>
                <span className="block">Join AwarenessCoin (AWC) and be part of the solution.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-emerald-200">
                Together, we can create meaningful impact through transparent, efficient, and engaging solutions that address these environmental challenges.
              </p>
              <a
                href="#"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-emerald-600 hover:bg-emerald-50"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative -mt-6 aspect-[3/2] md:aspect-[4/3] lg:aspect-[3/2]">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-green-400 opacity-90 mix-blend-multiply" />
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
              alt="Forest restoration visualization"
            />
          </div>
        </div>
      </div>
    </section>
  );
}