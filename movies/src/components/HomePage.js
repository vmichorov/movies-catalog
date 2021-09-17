import React from "react";

import HeroSection from "./HeroSection";
import Favourites from "./Favourites";

class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <HeroSection />
        <Favourites />
      </div>
    );
  }
}

export default HomePage;
