import React, { useState } from 'react';
import { Menu, X, ExternalLink, Sprout } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../lib/hooks/useAuth'; 
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

interface NavbarProps {
  onLaunchClick: (e: React.MouseEvent) => void;
}

export default function Navbar({ onLaunchClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { user } = useAuth();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const handleJoinUsClick = () => {
    if (!isHomePage) {
      window.location.href = '/#signup';
      return;
    }
    const signupSection = document.querySelector('#signup');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMoreClick = () => {
    if (!isHomePage) {
      window.location.href = '/#features';
      return;
    }
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (!isHomePage) {
      window.location.href = '/#contact';
      return;
    }
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Sprout className="h-6 w-6 text-emerald-600" />
            <span className="ml-2 text-lg sm:text-xl font-bold text-gray-900 truncate">AwarenessCoin</span>
            <span className="ml-2 text-sm text-emerald-600 hidden sm:block">.xyz</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={handleLearnMoreClick} className="text-gray-700 hover:text-emerald-600 transition">
              {t('nav.features')}
            </button>
            <Link to="/tokenomics" className="text-gray-700 hover:text-emerald-600 transition">Tokenomics</Link>
            <button onClick={handleJoinUsClick} className="text-gray-700 hover:text-emerald-600 transition">
              Join Us
            </button>
            <button onClick={handleContactClick} className="text-gray-700 hover:text-emerald-600 transition">
              {t('nav.contact')}
            </button>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className="text-emerald-600 hover:text-emerald-700 transition font-medium"
                >
                  {user.displayName || 'Profile'}
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-gray-700 hover:text-emerald-600 transition"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-emerald-600 transition"
                >
                  Sign In
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    const signupSection = document.querySelector('#signup');
                    if (signupSection) {
                      signupSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-emerald-600 hover:text-emerald-700 transition inline-flex items-center"
                >
                  Sign Up
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            )}
            <button 
              onClick={handleJoinUsClick}
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition"
            >
              {t('nav.launch')}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
            <button onClick={handleLearnMoreClick} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600">
              {t('nav.features')}
            </button>
            <Link to="/tokenomics" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Tokenomics</Link>
            <button onClick={handleJoinUsClick} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600">
              Join Us
            </button>
            <button onClick={handleContactClick} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600">
              {t('nav.contact')}
            </button>
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-emerald-600 hover:text-emerald-700"
                >
                  {user.displayName || 'Profile'}
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-700 hover:text-emerald-600"
                >
                  Sign In
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    const signupSection = document.querySelector('#signup');
                    if (signupSection) {
                      signupSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block px-3 py-2 text-emerald-600 hover:text-emerald-700 inline-flex items-center"
                >
                  Sign Up
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </>
            )}
            <button 
              onClick={handleJoinUsClick}
              className="block w-full text-center bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700"
            >
              {t('nav.launch')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}