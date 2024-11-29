import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './lib/hooks/useAuth';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Solution from './components/Solution';
import Features from './components/Features';
import WorldMap from './components/WorldMap';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Tokenomics from './pages/Tokenomics';
import CountryMembers from './pages/CountryMembers';
import Profile from './pages/Profile';
import Login from './pages/Login';
import LegalDisclaimerModal from './components/LegalDisclaimerModal';
import UnderConstructionModal from './components/UnderConstructionModal';
import DonationSection from './components/DonationSection';
import SignupForm from './components/SignupForm';

const donationAddresses = [
  {
    network: "SOLANA",
    address: "Dka9euMi1Tf2o7eELkiV752Pxy3fUmBibhUXnJw3WGpM"
  },
  {
    network: "ETHEREUM",
    address: "0xECBf4A7ad59d1E9619936dC1C5FbdE452216f9a4"
  },
  {
    network: "POLYGON",
    address: "0xECBf4A7ad59d1E9619936dC1C5FbdE452216f9a4"
  },
  {
    network: "BASE",
    address: "0xECBf4A7ad59d1E9619936dC1C5FbdE452216f9a4"
  },
  {
    network: "BITCOIN",
    address: "bc1q70l8yf4pnrtrrherj0qyu847w6zmwr3rt5zs2n"
  }
];

function HomePage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = React.useState(true);
  const { user } = useAuth();

  const handleLaunchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar onLaunchClick={handleLaunchClick} />
      <main>
        <Hero onLaunchClick={handleLaunchClick} />
        <ProblemStatement />
        <Solution />
        <Features />
        <WorldMap />
        {!user && <SignupForm />}
        <DonationSection donationAddresses={donationAddresses} />
      </main>
      <Footer />
      <UnderConstructionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LegalDisclaimerModal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/country/:countryCode" element={<CountryMembers />} />
      </Routes>
    </div>
  );
}