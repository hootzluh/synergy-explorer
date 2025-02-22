import React from "react";
import "./StatsSection.css";

const StatsSection: React.FC = () => {
  return (
    <div className="stats-container">
      <div className="stat-box"><span>Blocks</span> <strong>256,789</strong></div>
      <div className="stat-box"><span>Transactions</span> <strong>1,234,567</strong></div>
      <div className="stat-box"><span>Active Nodes</span> <strong>198</strong></div>
      <div className="stat-box"><span>Avg Block Time</span> <strong>2.3s</strong></div>
      {/* <div className="stat-box"><span>TPS</span> <strong>5,678</strong></div> */}
    </div>
  );
};

export default StatsSection;
