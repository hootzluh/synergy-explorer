// src/components/SearchBar.tsx
import React, {useState} from "react";
import "./SearchBar.css";
import {FaSearch} from "react-icons/fa";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const fetchSearchResults = async () => {
        setLoading(true);
        console.log("Searching for:", query);
        try {
            let response;
            let url = "";
            if (/^\d+$/.test(query)) {
                url = `http://24.181.87.76/api/block/${query}`;
            } else if (/^0x[a-fA-F0-9]{64}$/.test(query)) {
                url = `http://24.181.87.76/api/transaction/${query}`;
            } else if (/^0x[a-fA-F0-9]{40}$/.test(query)) {
                url = `http://24.181.87.76/api/address/${query}`;
            } else {
                throw new Error("Invalid search query");
            }

            console.log("Fetching data from:", url);
            response = await fetch(url);
            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();
            console.log("API Response:", data);
            setResult(data);
        } catch (error) {
            console.error("Error fetching search data:", error);
            setResult(null);
        }
        setLoading(false);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by Block #, Tx Hash, or Address"
            />
            <div className={`search-icon ${loading ? "shrink" : ""}`} onClick={fetchSearchResults}>
                <FaSearch />
            </div>

            {result && (
                <div className="search-results">
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
