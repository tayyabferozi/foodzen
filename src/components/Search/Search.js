import React from "react";
import "./Search.css";
import { ReactComponent as SearchIcon } from "assets/images/search-icon.svg";

function Search({ focus }) {
  return (
    <div className="search">
      <div className="search-icon">
        <SearchIcon />
      </div>
      <input type="text" autoFocus={focus} placeholder="Search Recipes" />
    </div>
  );
}

export default Search;
