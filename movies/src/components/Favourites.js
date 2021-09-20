import React from "react";
import axios from "axios";

import "../styles/favourites.css";
import { Link } from "react-router-dom";

class Favourites extends React.Component {
  state = { favourites: [] };

  showLogos() {
    const logos = this.state.favourites.map((f) => {
      return (
        <div key={f._id} className="movie">
          <Link to={`/movies/${f.title}`}>
            <img src={f.imgUrl} alt="Movie Logo" width="100%" height="100%" />
          </Link>
        </div>
      );
    });
    return logos;
  }

  getFavouriteMovies = async () => {
    const response = await axios.get("http://localhost:3000/movies/favourites");
    this.setState({ favourites: response.data });
  };

  componentDidMount() {
    this.getFavouriteMovies();
  }

  render() {
    return (
      <div className="favourites">
        <h1 className="title">Favourite Movies</h1>
        <div className="movies">{this.showLogos()}</div>
      </div>
    );
  }
}

export default Favourites;
