import React, { Component, PropTypes } from 'react';

const propTypes = {
  actions: PropTypes.object.isRequired,
};

class Increment extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

Increment.propTypes = propTypes;

export default Increment;
