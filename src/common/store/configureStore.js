import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const routeringMiddleware = routerMiddleware(browserHistory)
const sagaMiddleware = createSagaMiddleware()

let createStoreWithMiddleware

if (process.env.NODE_ENV === 'production') {
  createStoreWithMiddleware = compose(
    applyMiddleware(routeringMiddleware, sagaMiddleware),
  )(createStore)
} else {
  createStoreWithMiddleware = compose(
    applyMiddleware(routeringMiddleware, sagaMiddleware),
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
}

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
