import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import StatsSection from "./components/StatsSection";
import BlocksTable from "./components/BlocksTable";
import TransactionsTable from "./components/TransactionsTable";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="app-container">
      <div className="main-content">
        <SearchBar />
        <StatsSection />
        <div className="tables-container">
          <BlocksTable />
          <TransactionsTable />
        </div>
      </div>
      <Footer />
    </div>
   </>
  );
};

export default App;
