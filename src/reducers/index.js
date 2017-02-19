import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import counter from './counter'

const rootReducer = combineReducers({
  routing,
  counter
})

export default rootReducer
