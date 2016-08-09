/* eslint react/prefer-stateless-function: 0 */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.node,
};

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Seed</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
