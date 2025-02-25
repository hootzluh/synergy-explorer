// src/components/TransactionTracker.tsx
import React, { useState, useEffect } from "react";

interface Transaction {
  hash: string;
  amount: string;
  sender: string;
  receiver: string;
  timestamp: string;
}

const TransactionTracker: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("https://24.181.87.76/api/transactions/latest");
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
    const interval = setInterval(fetchTransactions, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="transaction-tracker">
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.hash}>
            <strong>Hash:</strong> {tx.hash} | <strong>Amount:</strong> {tx.amount} |
            <strong>From:</strong> {tx.sender} → <strong>To:</strong> {tx.receiver} |
            <strong>Time:</strong> {tx.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionTracker;
