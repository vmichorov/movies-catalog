import React from "react";

import Navigation from "./Navigation";
import HomePage from "./HomePage";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Navigation />
        <HomePage />
      </div>
    );
  }
}

export default App;
