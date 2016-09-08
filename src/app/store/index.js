import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default function configureStore (preloadedState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const sagaMiddleware = createSagaMiddleware()

  const createStoreWithMiddleware = applyMiddleware(
    sagaMiddleware
  )(create)

  const store = createStoreWithMiddleware(rootReducer, preloadedState)

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
