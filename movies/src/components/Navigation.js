import React from "react";

import "../styles/navigation.css";
import SearchBar from "./SearchBar";

class Navigation extends React.Component {
  state = {};

  render() {
    return (
      <div className="navigation">
        <div className="title-container">
          <h3>My Movie Collection</h3>
        </div>
        <SearchBar />
      </div>
    );
  }
}

export default Navigation;
