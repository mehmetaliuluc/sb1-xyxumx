import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { Search, Users, Clock } from 'lucide-react';
import { db } from '../lib/firebase';
import { countries } from '../components/WorldMap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Member {
  name: string;
  surname: string;
  nickname: string;
  country: string;
  walletAddress: string;
  expertise: string;
  joinedDate: string;
}

export default function CountryMembers() {
  const { countryCode } = useParams();
  const [members, setMembers] = useState<Member[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const country = countries.find(c => c.code.toLowerCase() === countryCode);

  useEffect(() => {
    if (!country) return;

    const q = query(
      collection(db, 'members'),
      where('country', '==', country.name)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const membersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Member[];
      setMembers(membersData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [country]);

  const filteredMembers = members.filter(member =>
    member.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.expertise.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!country) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar onLaunchClick={() => {}} />
        <main className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">Country Not Found</h1>
              <p className="mt-4 text-gray-600">The specified country could not be found.</p>
              <Link to="/" className="mt-8 inline-block text-emerald-600 hover:text-emerald-700">
                Return to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLaunchClick={() => {}} />
      
      <main className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center space-x-4 text-sm">
            <Link
              to="/"
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              to="/#join-us"
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              Global Community
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{country.name}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <img
                src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                alt={`${country.name} flag`}
                className="w-16 h-auto rounded shadow-sm"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{country.name} Members</h1>
            <p className="mt-2 text-gray-600">
              Community members from {country.name}
            </p>
            <Link
              to="/#join-us"
              className="mt-4 inline-block text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              ← Back to Global Community
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center mb-4 sm:mb-0">
                <Users className="h-6 w-6 mr-2 text-emerald-600" />
                Members List
              </h2>
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
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading members...</p>
              </div>
            ) : filteredMembers.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Member
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Expertise
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Wallet Address
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Joined
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredMembers.map((member, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                              <span className="text-emerald-600 font-semibold">
                                {member.name[0]}{member.surname[0]}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {member.nickname}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{member.expertise}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 font-mono">
                            {member.walletAddress.slice(0, 6)}...{member.walletAddress.slice(-4)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-gray-400" />
                            {new Date(member.joinedDate).toLocaleDateString()}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No members found in {country.name}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}