import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import Root from './containers/Root'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(browserHistory, preloadedState)
const history = syncHistoryWithStore(browserHistory, store)
const rootElement = document.getElementById('root')

render(<Root store={store} history={history} />, rootElement)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default
    render(<NextRoot store={store} history={history} />, rootElement)
  })
}
