import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppPage } from 'components/AppLayout'
import * as actions from '../../actions'

class About extends Component {
  static propTypes = {
    appLayout: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.props.actions.toggleBackButton()
  }

  componentWillUnmount () {
    this.props.actions.toggleBackButton()
  }

  render () {
    return (
      <AppPage>
        About
      </AppPage>
    )
  }
}

const mapStateToProps = (state) => ({
  appLayout: state.appLayout
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
