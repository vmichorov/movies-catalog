import React from "react";
import MoviesList from "./MoviesList";

import SearchBox from "./SearchBox";

class SearchPage extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <SearchBox />
        <MoviesList />
      </div>
    );
  }
}

export default SearchPage;
