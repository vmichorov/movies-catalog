import React from "react";

import MovieCard from "./MovieCard";

class MoviesList extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <MovieCard />
        <MovieCard />
      </div>
    );
  }
}

export default MoviesList;
