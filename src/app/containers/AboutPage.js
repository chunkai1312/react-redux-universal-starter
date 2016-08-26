import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/application'

class AboutPage extends Component {

  componentWillMount () {
    this.props.setPageTitle('About')
  }

  render () {
    return (
      <div>
        About
      </div>
    )
  }
}

AboutPage.propTypes = {
  application: PropTypes.object.isRequired,
  setPageTitle: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({ application: state.application })

export default connect(mapStateToProps, {
  setPageTitle: actions.setPageTitle
})(AboutPage)
