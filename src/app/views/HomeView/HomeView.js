import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Counter } from '../../components'
import * as AppActions from '../../actions/application'
import * as CounterActions from '../../actions/counter'

class HomeView extends Component {
  static propTypes = {
    application: PropTypes.object.isRequired,
    counter: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.props.actions.setPageTitle('Home')
  }

  render () {
    const { counter, actions } = this.props
    return (
      <div>
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
  application: state.application,
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign({}, AppActions, CounterActions), dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
