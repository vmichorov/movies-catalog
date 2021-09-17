import React from "react";

import "../styles/favourites.css";
import movie from "../images/movie.png";

class Favourites extends React.Component {
  state = {};

  render() {
    return (
      <div className="favourites">
        <h1 className="title">Your Favourites</h1>
        <div className="movies">
          <div className="movie">
            <a href="/">
              <img src={movie} alt="Movie Logo" width="100%" height="100%" />
            </a>
          </div>
          <div className="movie">
            <a href="/">
              <img src={movie} alt="Movie Logo" width="100%" height="100%" />
            </a>
          </div>
          <div className="movie">
            <a href="/">
              <img src={movie} alt="Movie Logo" width="100%" height="100%" />
            </a>
          </div>
          <div className="movie">
            <a href="/">
              <img src={movie} alt="Movie Logo" width="100%" height="100%" />
            </a>
          </div>
          <div className="movie">
            <a href="/">
              <img src={movie} alt="Movie Logo" width="100%" height="100%" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Favourites;
