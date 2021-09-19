import React from "react";

import Navigation from "./Navigation";

// import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
// import DetailsPage from "./DetailsPage";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Navigation />
        <SearchPage />
      </div>
    );
  }
}

export default App;
