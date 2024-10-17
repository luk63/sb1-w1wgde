import React, { useState } from 'react';

interface PresaleFormProps {
  onContribute: (amount: number) => void;
}

const PresaleForm: React.FC<PresaleFormProps> = ({ onContribute }) => {
  const [amount, setAmount] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contributionAmount = parseFloat(amount);
    if (!isNaN(contributionAmount) && contributionAmount > 0) {
      onContribute(contributionAmount);
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">
          Contribution Amount (ETH)
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="0.1"
          step="0.01"
          min="0.01"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Contribute
      </button>
    </form>
  );
};

export default PresaleForm;