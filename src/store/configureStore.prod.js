import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const configureStore = preloadedState => {
  const routeringMiddleware = routerMiddleware(browserHistory)
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(routeringMiddleware, sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
