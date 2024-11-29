import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLaunchClick={() => {}} />
      
      <main className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-emerald max-w-none">
          <h2>1. Information We Collect</h2>
          <p>We collect the following types of information when you use AwarenessCoin:</p>
          <h3>1.1 Automatically Collected Information</h3>
          <ul>
            <li>Wallet addresses and transaction data</li>
            <li>Smart contract interactions</li>
            <li>Device and browser information</li>
            <li>Network and connection details</li>
            <li>Usage patterns and preferences</li>
          </ul>

          <h3>1.2 Information You Provide</h3>
          <ul>
            <li>Email address (if provided)</li>
            <li>Profile information</li>
            <li>Communication preferences</li>
            <li>Feedback and support requests</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Process transactions and maintain platform functionality</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Send important updates and notifications</li>
            <li>Improve user experience and platform features</li>
            <li>Detect and prevent fraudulent activities</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We may share information with:</p>
          <ul>
            <li>Service providers and technical partners</li>
            <li>Legal authorities when required by law</li>
            <li>Auditors for security assessments</li>
            <li>Partners with your explicit consent</li>
          </ul>

          <h2>4. Blockchain Data</h2>
          <p>Please note that:</p>
          <ul>
            <li>All blockchain transactions are public by nature</li>
            <li>Transaction history is permanently recorded</li>
            <li>Wallet addresses are publicly visible</li>
            <li>Smart contract interactions are traceable</li>
          </ul>

          <h2>5. Security Measures</h2>
          <p>We implement various security measures including:</p>
          <ul>
            <li>Encryption of sensitive data</li>
            <li>Regular security audits</li>
            <li>Access controls and authentication</li>
            <li>Monitoring for suspicious activities</li>
            <li>Secure data storage protocols</li>
          </ul>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Request data corrections</li>
            <li>Delete non-blockchain data</li>
            <li>Opt-out of communications</li>
            <li>Export your data</li>
          </ul>

          <h2>7. Data Retention</h2>
          <p>We retain information:</p>
          <ul>
            <li>As long as necessary for service provision</li>
            <li>As required by law and regulations</li>
            <li>Until you request deletion (where applicable)</li>
          </ul>

          <h2>8. Cookies and Tracking</h2>
          <p>We use:</p>
          <ul>
            <li>Essential cookies for platform functionality</li>
            <li>Analytics tools to improve services</li>
            <li>Security monitoring systems</li>
          </ul>

          <h2>9. Children's Privacy</h2>
          <p>Our services are not intended for users under 18 years of age. We do not knowingly collect information from children.</p>

          <h2>10. International Data Transfers</h2>
          <p>Your information may be processed in various countries with different data protection laws.</p>

          <h2>11. Changes to Privacy Policy</h2>
          <p>We may update this policy periodically. Users will be notified of significant changes.</p>

          <h2>12. Contact Information</h2>
          <p>For privacy-related inquiries, contact us at:</p>
          <p>Email: privacy@awarenesscoin.xyz</p>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600">Last updated: March 2024</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}