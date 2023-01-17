import React, { useState } from "react";
import "./searchbar.css";

function Search({ handleSearchValue, handleSearch }) {
  return (
    <form className="search-form" onSubmit={handleSearch} action="">
      <input
        className="text-input"
        type="text"
        id=""
        placeholder="Search..."
        onChange={handleSearchValue}
      />

      <input className="btn-submit" type="submit" value="Search" />
    </form>
  );
}

export default Search;
