import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [synPrice, setSynPrice] = useState("$ 3.25 (USD)");
  const [gasFees, setGasFees] = useState("0.002 SYN");
  const [currencyIndex, setCurrencyIndex] = useState(0);



  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Synergy Explorer</h1>
        <div className="navbar-info">
          <div className="info-box">SYN Price: <br /> {synPrice}</div>
          <div className="info-box">Gas Fees: <br /> {gasFees}</div>
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
