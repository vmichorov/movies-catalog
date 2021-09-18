import React from "react";

import "../styles/navigation.css";
import SearchBar from "./SearchBar";

class Navigation extends React.Component {
  state = {};

  render() {
    return (
      <div className="navigation">
        <div className="title-container">
          <a href="/">
            <h3>My Movie Collection</h3>
          </a>
        </div>
        <SearchBar />
      </div>
    );
  }
}

export default Navigation;
