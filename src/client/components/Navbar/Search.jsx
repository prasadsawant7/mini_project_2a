import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <div className="search">
      <div className="search-bar">
        <FiSearch />
        <input type="search" name="search" id="search" placeholder="Search" />
      </div>
    </div>
  );
}
