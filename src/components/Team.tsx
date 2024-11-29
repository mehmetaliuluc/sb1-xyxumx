import React from 'react';
import { Shield, Code, LineChart, Users } from 'lucide-react';

const team = [
  {
    name: 'Alex Prime',
    role: 'Founder & CEO',
    bio: 'Leading with wisdom and unwavering dedication to protect and serve humanity.',
    icon: Shield
  },
  {
    name: 'Jay Chen',
    role: 'Chief Technology Officer',
    bio: 'Driving technical innovation and blockchain development.',
    icon: Code
  },
  {
    name: 'Zoe Kim',
    role: 'Marketing Director',
    bio: 'Crafting our brand strategy and public relations.',
    icon: LineChart
  },
  {
    name: 'Kai Ross',
    role: 'Head of Security',
    bio: 'Protecting our network and community with advanced security measures.',
    icon: Users
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A dedicated group of professionals committed to raising blockchain awareness
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {team.map((member) => (
            <div 
              key={member.name} 
              className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="h-12 w-12 mx-auto bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                  <member.icon className="h-6 w-6 text-emerald-600" />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm font-semibold text-gray-600 mt-1">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}