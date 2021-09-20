import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

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
        <BrowserRouter>
          <Navigation />
          <Route path="/" exact component={HomePage} />
          <Route path="/search" exact component={SearchPage} />
          <Route path="/movies/:title" component={DetailsPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
