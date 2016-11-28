import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { MainContent } from 'components/AppLayout'
import * as actions from '../../actions'

class AboutPage extends Component {
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
      <MainContent>
        About
      </MainContent>
    )
  }
}

const mapStateToProps = (state) => ({
  appLayout: state.appLayout
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)
