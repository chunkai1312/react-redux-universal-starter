import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, RouterContext } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import getRoutes from '../routes'

class Root extends Component {
  render () {
    const { store, history, renderProps } = this.props
    const routes = getRoutes(store)
    return (
      <AppContainer>
        <Provider store={store}>
          { __SERVER__
            ? <RouterContext {...renderProps} />
            : <Router key={Math.random()} history={history} routes={routes} />
          }
        </Provider>
      </AppContainer>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  renderProps: PropTypes.object
}

export default Root
