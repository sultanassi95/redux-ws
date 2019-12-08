import React from "react";

import "./styles.css";

const SearchBar = ({ onChange }) => {

  return (
    <input
      type="text"
      className="SearchBar"
      onChange={(e) => onChange(e.target.value)}
      placeholder="What name are you looking for?"
    />
  );
}

export default SearchBar;
