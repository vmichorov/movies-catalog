import axios from "axios";
import React from "react";

import MovieCard from "../components/MovieCard";
import "../styles/detailsPage.css";

class DetailsPage extends React.Component {
  state = { movie: {} };

  componentDidMount = async () => {
    const title = this.props.match.params.title;
    const response = await axios.get(`http://localhost:3000/movies/${title}`);
    const movie = response.data;
    this.setState({ movie: movie });
  };

  render() {
    return (
      <div className="details">
        <MovieCard movie={this.state.movie} />
        <div className="review" hidden>
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
