import React from "react";

import Navigation from "./Navigation";

// eslint-disable-next-line
import HomePage from "./HomePage";
// eslint-disable-next-line
import SearchPage from "./SearchPage";
// eslint-disable-next-line
import DetailsPage from "./DetailsPage";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Navigation />
        {/* <HomePage /> */}
        <SearchPage />
        {/* <DetailsPage /> */}
      </div>
    );
  }
}

export default App;
