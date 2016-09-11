import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Counter } from '../../components'
import * as layoutActions from '../../actions/layout'
import * as counterActions from '../../actions/counter'

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
  layout: state.layout,
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign({}, layoutActions, counterActions), dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
