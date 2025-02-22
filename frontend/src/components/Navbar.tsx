import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [synPrice, setSynPrice] = useState("$ 3.25 (USD)");
  const [gasFees, setGasFees] = useState("0.002 SYN");
  const [currencyIndex, setCurrencyIndex] = useState(0);

  const currencyPairs = [
    "SYN/USD: 3.250000",
    "SYN/BTC: 0.000045",
    "SYN/SOL: 0.120000",
    "SYN/ETH: 0.001200",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrencyIndex((prevIndex) => (prevIndex + 1) % currencyPairs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Synergy Explorer</h1>
        <div className="navbar-info">
          <div className="info-box">SYN Price: <br /> {synPrice}</div>
          <div className="info-box">Gas Fees: <br /> {gasFees}</div>
          <div className="info-box">{currencyPairs[currencyIndex]}</div>
        </div>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/blocks">Blocks</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/addresses">Addresses</Link>
      </div>
    </nav>
  );
};

export default Navbar;
