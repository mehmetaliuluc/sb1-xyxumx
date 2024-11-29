import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Search, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface Member {
  name: string;
  surname: string;
  nickname: string;
  country: string;
  walletAddress: string;
  expertise: string;
  joinedDate: string;
}

export const countries = [
  { code: 'us', name: 'United States', region: 'North America', members: 0 },
  { code: 'gb', name: 'United Kingdom', region: 'Europe', members: 0 },
  { code: 'de', name: 'Germany', region: 'Europe', members: 0 },
  { code: 'fr', name: 'France', region: 'Europe', members: 0 },
  { code: 'jp', name: 'Japan', region: 'Asia Pacific', members: 0 },
  { code: 'kr', name: 'South Korea', region: 'Asia Pacific', members: 0 },
  { code: 'sg', name: 'Singapore', region: 'Asia Pacific', members: 0 },
  { code: 'au', name: 'Australia', region: 'Asia Pacific', members: 0 },
  { code: 'br', name: 'Brazil', region: 'South America', members: 0 },
  { code: 'ca', name: 'Canada', region: 'North America', members: 0 },
  { code: 'in', name: 'India', region: 'Asia Pacific', members: 0 },
  { code: 'ae', name: 'UAE', region: 'Middle East', members: 0 },
  { code: 'es', name: 'Spain', region: 'Europe', members: 0 },
  { code: 'it', name: 'Italy', region: 'Europe', members: 0 },
  { code: 'nl', name: 'Netherlands', region: 'Europe', members: 0 },
  { code: 'se', name: 'Sweden', region: 'Europe', members: 0 },
  { code: 'ch', name: 'Switzerland', region: 'Europe', members: 0 },
  { code: 'cn', name: 'China', region: 'Asia Pacific', members: 0 },
  { code: 'hk', name: 'Hong Kong', region: 'Asia Pacific', members: 0 },
  { code: 'nz', name: 'New Zealand', region: 'Asia Pacific', members: 0 },
  { code: 'mx', name: 'Mexico', region: 'North America', members: 0 },
  { code: 'sa', name: 'Saudi Arabia', region: 'Middle East', members: 0 },
  { code: 'za', name: 'South Africa', region: 'Africa', members: 1 },
  { code: 'tr', name: 'Turkey', region: 'Middle East', members: 5 }
];

export default function WorldMap() {
  const [members, setMembers] = useState<Member[]>([]);
  const [countryData, setCountryData] = useState(countries);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const updateCountryData = useCallback((membersData: Member[]) => {
    const updatedCountries = countries.map(country => ({
      ...country,
      members: membersData.filter(member => member.country === country.name).length
    }));
    setCountryData(updatedCountries);
  }, []);

  useEffect(() => {
    // Subscribe to members collection in Firestore
    const q = query(collection(db, 'members'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const membersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Member[];
      setMembers(membersData);
      updateCountryData(membersData);
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, [updateCountryData]);


  const getRegionTotal = (region: string) => {
    return countryData
      .filter(country => country.region === region)
      .reduce((sum, country) => sum + country.members, 0);
  };

  const filteredMembers = members.filter(member => {
    const searchMatch = 
      member.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.expertise.toLowerCase().includes(searchTerm.toLowerCase());
    
    const countryMatch = !selectedCountry || member.country === selectedCountry;
    
    return searchMatch && countryMatch;
  })
  // Sort by joined date descending and take last 6 members
  .sort((a, b) => new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime())
  .slice(0, 6);

  return (
    <section id="join-us" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Global Community
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Join our growing network of environmental and blockchain enthusiasts
          </p>
        </div>

        {/* Members List */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center">
              <Users className="h-6 w-6 mr-2 text-emerald-600" />
              Community Members
            </h3>
            <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">All Countries</option>
                {countryData.map(country => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full divide-y divide-gray-200 overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-50">
                  <tr className="text-left">
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Latest Members
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Expertise
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Country
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                      Wallet Address
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Joined
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredMembers.map((member, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                            <span className="text-emerald-600 font-semibold">
                              {member.name[0]}{member.surname[0]}
                            </span>
                          </div>
                          <div className="ml-2 sm:ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {member.nickname}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="text-sm text-gray-900">{member.expertise}</div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={`https://flagcdn.com/w20/${countries.find(c => c.name === member.country)?.code.toLowerCase()}.png`}
                            alt={member.country}
                            className="mr-2 h-4"
                          />
                          <span className="text-sm text-gray-900">{member.country}</span>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <div className="text-sm text-gray-500 font-mono">
                          {member.walletAddress.slice(0, 6)}...{member.walletAddress.slice(-4)}
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-gray-400" />
                          {new Date(member.joinedDate).toLocaleDateString()}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredMembers.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No members found matching your search criteria.
              </div>
            )}
          </div>
        </div>

        {/* Country Statistics */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {countryData.map((country) => (
              <Link
                to={`/country/${country.code.toLowerCase()}`}
                key={country.code}
                className="relative bg-white rounded-xl shadow-md overflow-hidden group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                  <div className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={`https://flagcdn.com/w80/${country.code}.png`}
                        alt={`${country.name} flag`}
                        className="w-10 h-auto rounded shadow-sm"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{country.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{country.region}</span>
                          <span className="text-sm font-medium text-emerald-600">( {country.members} )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-gray-700">North America</span>
                <span className="text-sm font-medium text-emerald-600">( {getRegionTotal('North America')} )</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-gray-700">Europe</span>
                <span className="text-sm font-medium text-emerald-600">( {getRegionTotal('Europe')} )</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-gray-700">Asia Pacific</span>
                <span className="text-sm font-medium text-emerald-600">( {getRegionTotal('Asia Pacific')} )</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-gray-700">Middle East</span>
                <span className="text-sm font-medium text-emerald-600">( {getRegionTotal('Middle East')} )</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-gray-700">Africa</span>
                <span className="text-sm font-medium text-emerald-600">( {getRegionTotal('Africa')} )</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}