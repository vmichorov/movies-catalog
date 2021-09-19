import React from "react";

import "../styles/searchBar.css";

class SearchBar extends React.Component {
  state = { title: "" };

  onFormSubmit = (ev) => {
    ev.preventDefault();

    this.props.onSubmit(this.state.title);
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <div className="ui input">
            <input
              type="text"
              className="search-field"
              placeholder="Search movie by title..."
              value={this.state.title}
              onChange={(ev) => this.setState({ title: ev.target.value })}
            />
          </div>
          <div className="ui input">
            <button className="ui inverted green button search-btn">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
