import React from "react";

import "../../styles/navigation.css";

class Navigation extends React.Component {
  state = {};

  render() {
    return (
      <div className="navigation">
        <div className="title-container">
          <h3>My Movie Collection</h3>
        </div>
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
      </div>
    );
  }
}

export default Navigation;
