import React from "react";

import "../styles/heroSection.css";

class HeroSection extends React.Component {
  state = {};

  render() {
    return (
      <div className="hero-section">
        <div className="content">
          <h1 className="subtitle">AWC Movies</h1>
          <p className="welcome-msg">
            Sed scelerisque pellentesque libero ut fermentum. Integer tortor
            velit, bibendum elementum magna id, rutrum gravida nunc. Maecenas
            auctor justo in gravida pharetra.
          </p>
        </div>
      </div>
    );
  }
}

export default HeroSection;
