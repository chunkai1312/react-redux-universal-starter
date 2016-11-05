import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import layout from './layout'
import counter from './counter'

const rootReducer = combineReducers({
  routing,
  layout,
  counter
})

export default rootReducer
