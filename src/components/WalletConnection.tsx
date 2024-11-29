import React, { useState } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useBalance, useSendTransaction } from 'wagmi';
import { Connection, PublicKey, LAMPORTS_PER_SOL, SystemProgram, Transaction } from '@solana/web3.js';
import { parseEther } from 'viem';
import { Wallet, Send, Loader2 } from 'lucide-react';

interface DonationAddress {
  network: string;
  address: string;
}

interface WalletConnectionProps {
  donationAddresses: DonationAddress[];
}

export default function WalletConnection({ donationAddresses }: WalletConnectionProps) {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });
  const { sendTransaction, isPending } = useSendTransaction();

  const [amount, setAmount] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendTransaction = async () => {
    if (!amount || !selectedNetwork || !address) return;

    const selectedAddress = donationAddresses.find(addr => addr.network === selectedNetwork);
    if (!selectedAddress) return;

    setIsLoading(true);
    try {
      if (selectedNetwork === 'SOLANA') {
        const connection = new Connection('https://api.mainnet-beta.solana.com');
        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: new PublicKey(address),
            toPubkey: new PublicKey(selectedAddress.address),
            lamports: LAMPORTS_PER_SOL * parseFloat(amount)
          })
        );

        const { blockhash } = await connection.getLatestBlockhash();
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = new PublicKey(address);
      } else if (['ETHEREUM', 'POLYGON', 'BASE'].includes(selectedNetwork)) {
        await sendTransaction({
          to: selectedAddress.address,
          value: parseEther(amount)
        });
      }

      setAmount('');
      alert('Transaction successful!');
    } catch (error) {
      console.error('Transaction failed:', error);
      alert('Transaction failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Connect Wallet</h3>
        <button
          onClick={() => open()}
          className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
        >
          <Wallet className="w-4 h-4 mr-2" />
          {isConnected ? 'Change Wallet' : 'Connect Wallet'}
        </button>
      </div>

      {isConnected && (
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Connected Address</p>
            <p className="font-mono text-sm">{address}</p>
            <p className="mt-2 text-sm text-gray-600">Balance</p>
            <p className="font-medium">{balance?.formatted} {balance?.symbol}</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Network
              </label>
              <select
                value={selectedNetwork}
                onChange={(e) => setSelectedNetwork(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select a network</option>
                {donationAddresses
                  .filter(addr => addr.network !== 'BITCOIN')
                  .map((addr) => (
                    <option key={addr.network} value={addr.network}>
                      {addr.network}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full p-2 border border-gray-300 rounded-lg"
                min="0"
                step="0.000001"
              />
            </div>

            <button
              onClick={handleSendTransaction}
              disabled={!amount || !selectedNetwork || isLoading || isPending}
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading || isPending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Send className="w-4 h-4 mr-2" />
              )}
              Send Donation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}