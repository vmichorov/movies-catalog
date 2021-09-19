import React from "react";
import axios from "axios";

import "../styles/favourites.css";

class Favourites extends React.Component {
  state = { favourites: [] };

  showLogos() {
    const logos = this.state.favourites.map((f) => {
      return (
        <div key={f._id} className="movie">
          <a href="/">
            <img src={f.imgUrl} alt="Movie Logo" width="100%" height="100%" />
          </a>
        </div>
      );
    });
    return logos;
  }

  getFavouriteMovies = async () => {
    const response = await axios.get("http://localhost:3000/movies/favourites");

    console.log("data:", response.data);
    this.setState({ favourites: response.data });
  };

  componentDidMount() {
    this.getFavouriteMovies();
  }

  render() {
    return (
      <div className="favourites">
        <h1 className="title">Your Favourites</h1>
        <div className="movies">{this.showLogos()}</div>
      </div>
    );
  }
}

export default Favourites;
