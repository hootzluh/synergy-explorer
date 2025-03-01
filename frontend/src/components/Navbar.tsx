import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/Explorer-logo1.png";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="navbar-logo" />
            </div>
            <div className="navbar-right">
                <button>Connect Wallet</button>
            </div>
        </nav>
    );
};

export default Navbar;
