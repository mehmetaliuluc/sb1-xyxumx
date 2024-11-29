import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLaunchClick={() => {}} />
      
      <main className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-emerald max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using AwarenessCoin (AWC) services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

          <h2>2. Service Description</h2>
          <p>AwarenessCoin is a blockchain-based platform on the SOLANA network that enables:</p>
          <ul>
            <li>Token transactions and staking</li>
            <li>Community participation in governance</li>
            <li>Blockchain awareness initiatives</li>
            <li>Educational content access</li>
          </ul>

          <h2>3. User Obligations</h2>
          <p>Users must:</p>
          <ul>
            <li>Provide accurate information during registration</li>
            <li>Maintain the security of their wallet and credentials</li>
            <li>Comply with applicable laws and regulations</li>
            <li>Use the platform responsibly and ethically</li>
            <li>Not engage in any fraudulent or malicious activities</li>
          </ul>

          <h2>4. Token Usage</h2>
          <p>AwarenessCoin (AWC) tokens:</p>
          <ul>
            <li>Are utility tokens on the SOLANA network</li>
            <li>Do not represent ownership in any company</li>
            <li>Are not financial instruments or securities</li>
            <li>May have varying value based on market conditions</li>
            <li>Should not be considered as an investment vehicle</li>
          </ul>

          <h2>5. Platform Rules</h2>
          <p>Users agree not to:</p>
          <ul>
            <li>Manipulate or disrupt the platform's operations</li>
            <li>Use the service for illegal activities</li>
            <li>Attempt to access unauthorized areas</li>
            <li>Share false or misleading information</li>
            <li>Violate other users' rights</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>All platform content, including but not limited to:</p>
          <ul>
            <li>Software code and algorithms</li>
            <li>Graphics and visual elements</li>
            <li>Educational materials</li>
            <li>Brand assets and trademarks</li>
          </ul>
          <p>are protected by intellectual property rights and may not be copied or reproduced without permission.</p>

          <h2>7. Limitation of Liability</h2>
          <p>AwarenessCoin is not liable for:</p>
          <ul>
            <li>Cryptocurrency market volatility</li>
            <li>Technical issues or network failures</li>
            <li>Loss of access to digital wallets</li>
            <li>Third-party actions or services</li>
            <li>User errors or negligence</li>
          </ul>

          <h2>8. Modifications to Service</h2>
          <p>We reserve the right to:</p>
          <ul>
            <li>Modify or discontinue services</li>
            <li>Update these terms at any time</li>
            <li>Change platform features or functionality</li>
          </ul>

          <h2>9. Termination</h2>
          <p>We may suspend or terminate access to services for:</p>
          <ul>
            <li>Violation of these terms</li>
            <li>Suspicious or fraudulent activity</li>
            <li>Legal or regulatory requirements</li>
          </ul>

          <h2>10. Governing Law</h2>
          <p>These terms are governed by applicable laws and regulations related to blockchain technology and cryptocurrency operations.</p>

          <h2>11. Contact</h2>
          <p>For questions about these terms, contact us at:</p>
          <p>Email: legal@awarenesscoin.xyz</p>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600">Last updated: March 2024</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}