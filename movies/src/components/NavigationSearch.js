import React from "react";
import { Link } from "react-router-dom";

import "../styles/searchBar.css";

class NavigationSearch extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <div className="ui input">
          <Link to="/search">
            <button className="ui inverted green button search-btn">
              Search
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavigationSearch;
