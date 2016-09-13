import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default function configureStore (initialState) {
  const routeringMiddleware = routerMiddleware(browserHistory)
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(routeringMiddleware, sagaMiddleware),
      window.devToolsExtension && window.devToolsExtension()
    )
  )

  sagaMiddleware.run(rootSaga)

  if (window.devToolsExtension) window.devToolsExtension.updateStore(store)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
