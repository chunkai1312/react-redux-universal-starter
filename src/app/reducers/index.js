import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import application from './application'
import counter from './counter'

const rootReducer = combineReducers({
  routing,
  application,
  counter
})

export default rootReducer
