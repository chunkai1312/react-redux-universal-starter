import { createStore, applyMiddleware } from 'redux';
// import { logger } from '../middlewares';
import rootReducer from '../reducers';

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    // logger
  )(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
