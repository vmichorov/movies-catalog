import React from "react";
import axios from "axios";

import "../styles/searchBox.css";
import SearchBar from "./SearchBar";

class SearchBox extends React.Component {
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
  };

  render() {
    return (
      <div className="search-box">
        <h1 className="title">Search</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default SearchBox;
