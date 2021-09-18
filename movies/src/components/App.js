import React from "react";
import DetailsPage from "./DetailsPage";

import Navigation from "./Navigation";
// import HomePage from "./HomePage";
// import SearchPage from "./SearchPage";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Navigation />
        <DetailsPage />
      </div>
    );
  }
}

export default App;
