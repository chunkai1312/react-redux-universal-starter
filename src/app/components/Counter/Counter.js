import React, { Component, PropTypes } from 'react';
import { Button } from 'react-toolbox';

const propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  render() {
    return (
      <div>
        <p>Counter: { this.props.counter }</p>
        <Button icon="add" label="Increment" primary onClick={this.handleIncrement} />
        <Button icon="add" label="Decrement" accent onClick={this.handleDecrement} />
      </div>
    );
  }
}

Counter.propTypes = propTypes;

export default Counter;
