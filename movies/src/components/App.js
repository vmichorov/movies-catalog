import React from "react";

import Navigation from "./common/Navigation";
import HeroSection from "./HeroSection";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Navigation />
        <HeroSection />
      </div>
    );
  }
}

export default App;
