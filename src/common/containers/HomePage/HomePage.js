import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { MainContent } from '../../components/AppLayout'
import Counter from '../../components/Counter'
import * as actions from '../../actions'

class HomePage extends Component {
  static propTypes = {
    appLayout: PropTypes.object.isRequired,
    counter: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    const { counter, actions } = this.props
    return (
      <MainContent>
        <Helmet title="Home" />
        <Counter
          counter={counter}
          increment={actions.increment}
          decrement={actions.decrement}
          incrementAsync={actions.incrementAsync}
        />
      </MainContent>
    )
  }
}

const mapStateToProps = (state) => ({
  appLayout: state.appLayout,
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
