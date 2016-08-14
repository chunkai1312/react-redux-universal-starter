import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import appBar from './appBar';
import navDrawer from './navDrawer';
import counter from './counter';

const rootReducer = combineReducers({
  routing,
  appBar,
  navDrawer,
  counter,
});

export default rootReducer;
