import React, { Component, PropTypes } from 'react';

const propTypes = {
  counter: PropTypes.object.isRequired,
};

class Display extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.counter.num }</h1>
      </div>
    );
  }
}

Display.propTypes = propTypes;

export default Display;
