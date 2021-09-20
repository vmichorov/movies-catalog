import React from "react";
import { Link } from "react-router-dom";

import "../styles/navigation.css";
import NavigationSearch from "./NavigationSearch";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="title-container">
          <Link to="/">
            <h3>My Movie Collection</h3>
          </Link>
        </div>
        <NavigationSearch />
      </div>
    );
  }
}

export default Navigation;
