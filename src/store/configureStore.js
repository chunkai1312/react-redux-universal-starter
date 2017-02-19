import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'

export default function configureStore (history, preloadedState) {
  const routeringMiddleware = routerMiddleware(history)

  const middlewares = [routeringMiddleware]
  const enhancers = []

  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__ && !window.__REDUX_DEVTOOLS_EXTENSION__) {
    console.warn('Install Redux DevTools Extension to inspect the app state: ' +
      'https://github.com/zalmoxisus/redux-devtools-extension#installation')
  }

  const composeEnhancers = (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    )
  }

  return store
}
