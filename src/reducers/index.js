import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import appLayout from './appLayout'
import counter from './counter'

const rootReducer = combineReducers({
  routing,
  appLayout,
  counter
})

export default rootReducer
