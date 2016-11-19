import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import appLayout from './appLayout'
import counter from './counter'

const rootReducer = combineReducers({
  appLayout,
  counter,
  routing
})

export default rootReducer
