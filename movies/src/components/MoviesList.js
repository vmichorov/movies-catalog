import React from "react";

import MovieCard from "./MovieCard";

class MoviesList extends React.Component {
  state = { movies: [] };

  render() {
    return (
      <div>
        <MovieCard />
      </div>
    );
  }
}

export default MoviesList;
