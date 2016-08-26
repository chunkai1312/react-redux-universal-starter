import React, { Component, PropTypes } from 'react'
import { Button } from 'react-toolbox'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement () {
    this.props.increment()
  }

  handleDecrement () {
    this.props.decrement()
  }

  render () {
    const { counter } = this.props
    return (
      <div>
        <p>Counter: { counter }</p>
        <Button icon="add" label="Increment" primary onClick={this.handleIncrement} />
        <Button icon="add" label="Decrement" accent onClick={this.handleDecrement} />
      </div>
    )
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default Counter
