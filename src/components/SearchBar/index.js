import React from "react";
import { connect } from 'react-redux';
import { setSearchAction } from '../../actions';

import "./styles.css";

const SearchBar = ({ setSearchAction }) => {

  return (
    <input
      type="text"
      className="SearchBar"
      onChange={(e) => setSearchAction(e.target.value)}
      placeholder="What name are you looking for?"
    />
  );
}

const mapDispatchToProps = {
  setSearchAction,
}

export default connect(null, mapDispatchToProps)(SearchBar);
