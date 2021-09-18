import React from "react";

import "../styles/searchBar.css";

class SearchBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="search-bar">
        <div className="ui input">
          <input
            type="text"
            className="search-field"
            placeholder="Search movie by title..."
          />
        </div>
        <div className="ui input">
          <button className="ui inverted green button search-btn">
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
