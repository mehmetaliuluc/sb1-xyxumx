import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Send, ExternalLink, BookOpen, Sprout, MessageCircle, Youtube, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center">
              <Sprout className="h-6 w-6 text-emerald-500" />
              <h3 className="text-white text-lg font-semibold ml-2">AwarenessCoin</h3>
            </div>
            <p className="text-sm mt-2">Transforming Nature Through Blockchain</p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-emerald-400 transition">Features</a></li>
              <li><a href="#roadmap" className="hover:text-emerald-400 transition">Roadmap</a></li>
              <li><a href="#join-us" className="hover:text-emerald-400 transition">Join Us</a></li>
              <li><a href="/privacy" className="hover:text-emerald-400 transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-emerald-400 transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@awarenesscoin.xyz" className="hover:text-emerald-400 transition">
                  info@awarenesscoin.xyz
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Twitter className="h-5 w-5" />
                <a href="https://x.com/AwarenessCoin" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  @AwarenessCoin
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Youtube className="h-5 w-5" />
                <a href="https://www.youtube.com/@AwarenessCoin" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  YouTube
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5" />
                <a href="https://www.linkedin.com/company/awarenesscoin" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <a href="https://discord.com/@awarenesscoin" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  Discord
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="h-5 w-5" />
                <a href="https://instagram.com/awarenesscoin" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  Instagram
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Send className="h-5 w-5" />
                <a href="https://t.me/AwarenessCoin" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  Telegram
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <a href="https://chat.whatsapp.com/FDaAQmPZYBHKMCPp5krjYB" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  WhatsApp Community
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <a href="https://medium.com/@AwarenessCoin" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  Medium
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Join our community and stay informed about the latest updates and opportunities.</p>
            <Link
              to="/"
              onClick={() => {
                const signupSection = document.querySelector('#signup');
                if (signupSection) {
                  signupSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
            >
              Subscribe Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} AwarenessCoin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}