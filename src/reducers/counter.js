import { handleActions } from 'redux-actions'
import * as types from '../constants/actionTypes'

const initialState = 0

export default handleActions({
  [types.COUNTER_INCREMENT]: (state, action) => state + 1,
  [types.COUNTER_DECREMENT]: (state, action) => state - 1
}, initialState)
