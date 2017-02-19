import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import getRoutes from '../../routes'

class Root extends Component {
  render () {
    const { store, history } = this.props
    return (
      <AppContainer>
        <Provider store={store}>
          <Router key={Math.random()} history={history} routes={getRoutes()} />
        </Provider>
      </AppContainer>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
