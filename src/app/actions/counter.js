import { createAction } from 'redux-actions'
import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_INCREMENT_ASYNC } from '../constants/ActionTypes'

export const increment = createAction(COUNTER_INCREMENT)
export const decrement = createAction(COUNTER_DECREMENT)
export const incrementAsync = createAction(COUNTER_INCREMENT_ASYNC)
