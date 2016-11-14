import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

export const increment = createAction(types.COUNTER_INCREMENT)
export const decrement = createAction(types.COUNTER_DECREMENT)
export const incrementAsync = createAction(types.COUNTER_INCREMENT_ASYNC)
