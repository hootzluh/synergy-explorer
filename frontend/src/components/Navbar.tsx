import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo2.png";


const Navbar: React.FC = () => {
    const [synPrice] = useState("$ 3.250000 (USD)");
    const [gasFees] = useState("0.002 SYN");
    return (
        <nav className="navbar">
          <div className="navbar-left">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <h1>Synergy Explorer</h1>
                <div className="navbar-info">
                    <div className="info-box">
                        SYN Price: <br /> {synPrice}
                    </div>
                    <div className="info-box">
                        Gas Fees: <br /> {gasFees}
                    </div>
                </div>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/blocks">Blocks</Link>
                <Link to="/transactions">Transactions</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Navbar;
