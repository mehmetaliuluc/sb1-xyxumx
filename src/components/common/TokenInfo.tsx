import React from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';

interface TokenInfoProps {
  variant?: 'default' | 'large';
  showExplorer?: boolean;
  colorScheme?: 'light' | 'dark' | 'emerald';
}

export default function TokenInfo({ 
  variant = 'default', 
  showExplorer = true, 
  colorScheme = 'light' 
}: TokenInfoProps) {
  const [copied, setCopied] = React.useState(false);
  const tokenAddress = '3UmUu3bEKkVxJ4KhhLqPefS5cjLiqsM1rNTmRrRKiTRP';
  const explorerUrl = `https://solscan.io/token/${tokenAddress}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const colorClasses = {
    light: {
      text: 'text-gray-600',
      link: 'text-emerald-600 hover:text-emerald-700',
      bg: 'bg-white',
      border: 'border-gray-200'
    },
    dark: {
      text: 'text-gray-300',
      link: 'text-emerald-400 hover:text-emerald-300',
      bg: 'bg-gray-800',
      border: 'border-gray-700'
    },
    emerald: {
      text: 'text-emerald-900',
      link: 'text-emerald-700 hover:text-emerald-800',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <div className={`flex flex-col ${variant === 'large' ? 'gap-4' : 'gap-2'}`}>
      <div className={`flex items-center gap-2 p-3 rounded-lg border ${colors.bg} ${colors.border}`}>
        <span className={`font-mono ${variant === 'large' ? 'text-lg' : 'text-sm'} ${colors.text}`}>
          {tokenAddress}
        </span>
        <button
          onClick={handleCopy}
          className={`p-1 rounded-md hover:bg-opacity-10 hover:bg-current ${colors.link}`}
          title="Copy address"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
        {showExplorer && (
          <a
            href={explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-1 rounded-md hover:bg-opacity-10 hover:bg-current ${colors.link}`}
            title="View on Solscan"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
      {showExplorer && (
        <a
          href={explorerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center text-sm ${colors.link}`}
        >
          View on Solscan
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      )}
    </div>
  );
}