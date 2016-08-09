import React, { Component, PropTypes } from 'react';

const propTypes = {
  actions: PropTypes.object.isRequired,
};

class Decrement extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

Decrement.propTypes = propTypes;

export default Decrement;
