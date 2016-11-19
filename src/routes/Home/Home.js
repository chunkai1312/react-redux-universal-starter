import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppPage } from 'components/AppLayout'
import Counter from 'components/Counter'
import * as actions from 'actions'

class Home extends Component {
  static propTypes = {
    appLayout: PropTypes.object.isRequired,
    counter: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    const { counter, actions } = this.props
    return (
      <AppPage>
        <Counter
          counter={counter}
          increment={actions.increment}
          decrement={actions.decrement}
          incrementAsync={actions.incrementAsync}
        />
      </AppPage>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
