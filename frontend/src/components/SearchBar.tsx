import { AiOutlineSearch } from "react-icons/ai";

const SearchBar: React.FC = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search Blockchain, Transactions, Addresses, Blocks" />
      <span className="search-icon">
        <AiOutlineSearch />
      </span>
    </div>
  );
};

export default SearchBar;
