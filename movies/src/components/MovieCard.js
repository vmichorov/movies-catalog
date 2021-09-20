import React from "react";
import { Link } from "react-router-dom";

import "../styles/movieCard.css";

class MovieCard extends React.Component {
  state = {};

  render() {
    return (
      <div className="movie-card">
        <div className="img-container">
          <Link to={`/movies/${this.props.movie.title}`}>
            <img
              src={this.props.movie.imgUrl}
              alt="Movie Logo"
              width="100%"
              height="100%"
            />
          </Link>
        </div>
        <div className="movie-details">
          <h1 className="title-year">
            {this.props.movie.title} ({this.props.movie.releasedAt})
          </h1>
          <p className="genre-length">
            {this.props.movie.genre} | {this.props.movie.length} minutes
          </p>
          <p className="description">{this.props.movie.description}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
