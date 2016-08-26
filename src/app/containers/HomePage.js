import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Counter } from '../components'
import * as actions from '../actions/application'
import * as counter from '../actions/counter'

class HomePage extends Component {

  componentWillMount () {
    this.props.setPageTitle('Home')
  }

  render () {
    const { counter, increment, decrement } = this.props
    return (
      <div>
        <Counter counter={counter} increment={increment} decrement={decrement} />
      </div>
    )
  }
}

HomePage.propTypes = {
  application: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
  setPageTitle: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  application: state.application,
  counter: state.counter
})

export default connect(mapStateToProps, {
  setPageTitle: actions.setPageTitle,
  increment: counter.increment,
  decrement: counter.decrement
})(HomePage)
