import { createStore, applyMiddleware } from 'redux'
import { logger } from '../middlewares'
import rootReducer from '../reducers'

export default function configureStore (preloadedState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
    logger
  )(create)

  const store = createStoreWithMiddleware(rootReducer, preloadedState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
