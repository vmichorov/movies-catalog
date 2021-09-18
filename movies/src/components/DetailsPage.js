import React from "react";

import MovieCard from "../components/MovieCard";
import "../styles/detailsPage.css";

class DetailsPage extends React.Component {
  state = {};

  render() {
    return (
      <div className="details">
        <MovieCard />
        <div className="review">
          <h1 className="review-title">Your Review</h1>
          <textarea
            className="review-text"
            placeholder="Your private notes and comments about the movie..."
          ></textarea>
        </div>
      </div>
    );
  }
}

export default DetailsPage;
