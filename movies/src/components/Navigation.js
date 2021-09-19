import React from "react";
import axios from "axios";

import "../styles/navigation.css";
import SearchBar from "./SearchBar";

class Navigation extends React.Component {
  state = { movies: [] };

  onSearchSubmit = async (title) => {
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/search",
      data: {
        title: title,
      },
    });
    this.setState({ movies: response.data });
    console.log("From navigation search:", this.state.movies);
  };

  render() {
    return (
      <div className="navigation">
        <div className="title-container">
          <a href="/">
            <h3>My Movie Collection</h3>
          </a>
        </div>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default Navigation;
