import React, { useState } from 'react';
import { Coins } from 'lucide-react';
import PresaleForm from './components/PresaleForm';

function App() {
  const [totalRaised, setTotalRaised] = useState<number>(0);

  const handleContribution = (amount: number) => {
    setTotalRaised(prevTotal => prevTotal + amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      <header className="mb-8 text-center">
        <Coins className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">TokenX Presale</h1>
        <p className="text-xl">Join our exciting new token launch!</p>
      </header>
      <main className="w-full max-w-md">
        <PresaleForm onContribute={handleContribution} />
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold">Total Raised</h2>
          <p className="text-3xl font-bold">{totalRaised.toFixed(2)} ETH</p>
        </div>
      </main>
    </div>
  );
}

export default App;