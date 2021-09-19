import React from "react";
import axios from "axios";

import "../styles/searchBox.css";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";

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

  renderMovies(movies) {
    const result = movies.map((m) => {
      return <MovieCard movie={m} key={m._id} />;
    });

    return result;
  }

  render() {
    return (
      <div>
        <div className="search-box">
          <h1 className="title">Search</h1>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        {this.renderMovies(this.state.movies)}
      </div>
    );
  }
}

export default SearchBox;
