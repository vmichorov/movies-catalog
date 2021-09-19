import React from "react";

import "../styles/movieCard.css";

class MovieCard extends React.Component {
  state = {};

  render() {
    return (
      <div className="movie-card">
        <div className="img-container">
          <a href="/">
            <img
              src={this.props.movie.imgUrl}
              alt="Movie Logo"
              width="100%"
              height="100%"
            />
          </a>
        </div>
        <div className="movie-details">
          <h1 className="title-year">
            {this.props.movie.title} ({this.props.movie.releasedAt})
          </h1>
          <p className="genre-length">
            {this.props.movie.genre} | {this.props.movie.length} minutes
          </p>
          <p className="description">{this.props.movie.description}</p>
          <a href="/" className="read-more">
            Visit official ste
          </a>
        </div>
      </div>
    );
  }
}

export default MovieCard;
