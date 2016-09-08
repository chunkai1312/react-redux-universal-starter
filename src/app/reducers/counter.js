import { handleActions } from 'redux-actions'
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../constants/ActionTypes'

const initialState = 0

export default handleActions({
  [COUNTER_INCREMENT]: (state, action) => state + 1,
  [COUNTER_DECREMENT]: (state, action) => state - 1
}, initialState)
