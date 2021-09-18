import React from "react";

import "../styles/movieCard.css";
import movie from "../images/movie.png";

class MovieCard extends React.Component {
  state = {};

  render() {
    return (
      <div className="movie-card">
        <div className="img-container">
          <a href="/">
            <img src={movie} alt="Movie Logo" width="100%" height="100%" />
          </a>
        </div>
        <div className="movie-details">
          <h1 className="title-year">Movie Title (2009)</h1>
          <p className="genre-length">Drama, Thriller, Comedy | 90 minutes</p>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a href="/" className="read-more">
            Visit official ste
          </a>
        </div>
      </div>
    );
  }
}

export default MovieCard;
