import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Counter } from '../../components'
import * as actions from '../../actions'

class HomePage extends Component {
  static propTypes = {
    layout: PropTypes.object.isRequired,
    counter: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    const { counter, actions } = this.props
    return (
      <div style={{ padding: '2.4rem' }}>
        <Counter
          counter={counter}
          increment={actions.increment}
          decrement={actions.decrement}
          incrementAsync={actions.incrementAsync}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  layout: state.layout,
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
