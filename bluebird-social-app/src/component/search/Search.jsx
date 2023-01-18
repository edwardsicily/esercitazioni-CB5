import React, { useState } from "react";
import "./searchbar.css";

function Search({ setSearchValue }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(searchQuery);
    setSearchQuery("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} action="">
      <input
        className="text-input"
        type="text"
        id=""
        value={searchQuery}
        placeholder="Search..."
        onChange={handleSearchQuery}
      />

      <input className="btn-submit" type="submit" value="Search" />
    </form>
  );
}

export default Search;
