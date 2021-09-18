import React from "react";

import "../styles/searchBox.css";
import SearchBar from "./SearchBar";

class SearchBox extends React.Component {
  state = {};

  render() {
    return (
      <div className="search-box">
        <h1 className="title">Search</h1>
        <SearchBar />
      </div>
    );
  }
}

export default SearchBox;
