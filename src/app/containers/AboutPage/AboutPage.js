import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/layout'

class AboutPage extends Component {
  static propTypes = {
    layout: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.props.actions.setPageTitle('About')
  }

  render () {
    return (
      <div style={{ padding: '2.4rem' }}>
        About
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  layout: state.layout
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)
