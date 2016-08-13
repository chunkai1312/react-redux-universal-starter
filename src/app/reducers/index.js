import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import navDrawer from './navDrawer';

const rootReducer = combineReducers({
  routing,
  navDrawer,
  counter,
});

export default rootReducer;
