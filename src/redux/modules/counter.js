import { createAction, handleActions } from 'redux-actions'

export const actionTypes = {
  COUNTER_INCREMENT: 'app/counter/COUNTER_INCREMENT',
  COUNTER_DECREMENT: 'app/counter/COUNTER_DECREMENT',
  COUNTER_INCREMENT_ASYNC: 'app/counter/INCREMENT_ASYNC'
}

export const actionCreators = {
  increment: createAction(actionTypes.COUNTER_INCREMENT),
  decrement: createAction(actionTypes.COUNTER_DECREMENT),
  incrementAsync: createAction(actionTypes.COUNTER_INCREMENT_ASYNC)
}

export const initialState = 0

export default handleActions({
  [actionTypes.COUNTER_INCREMENT]: (state, action) => state + 1,
  [actionTypes.COUNTER_DECREMENT]: (state, action) => state - 1
}, initialState)
