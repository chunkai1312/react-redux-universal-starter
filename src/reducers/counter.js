import { handleActions } from 'redux-actions'
import * as types from '../constants/actionTypes'

export const initialState = 0

const counter = handleActions({
  [types.COUNTER_INCREMENT]: (state, action) => state + 1,
  [types.COUNTER_DECREMENT]: (state, action) => state - 1
}, initialState)

export default counter
