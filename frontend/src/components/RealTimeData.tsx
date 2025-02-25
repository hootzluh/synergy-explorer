// src/components/RealTimeData.tsx
import React, { useState, useEffect } from "react";

interface NetworkStats {
  latestBlock: number;
  transactionCount: number;
  activeNodes: number;
  hashRate: string;
}

const RealTimeData: React.FC = () => {
  const [stats, setStats] = useState<NetworkStats | null>(null);

  useEffect(() => {
    const fetchNetworkStats = async () => {
      try {
        const response = await fetch("https://24.181.87.76no i didnt/api/network/stats");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching network stats:", error);
      }
    };

    fetchNetworkStats();
    const interval = setInterval(fetchNetworkStats, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="real-time-data">
      <h2>Network Stats</h2>
      {stats ? (
        <ul>
          <li><strong>Latest Block:</strong> {stats.latestBlock}</li>
          <li><strong>Transaction Count:</strong> {stats.transactionCount}</li>
          <li><strong>Active Nodes:</strong> {stats.activeNodes}</li>
          <li><strong>Hash Rate:</strong> {stats.hashRate}</li>
        </ul>
      ) : (
        <p>Loading network data...</p>
      )}
    </div>
  );
};

export default RealTimeData;
