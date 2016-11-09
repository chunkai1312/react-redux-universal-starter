import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import layout from './modules/layout'
import counter from './modules/counter'

export default combineReducers({
  routing,
  layout,
  counter
})
