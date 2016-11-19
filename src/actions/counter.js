import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

export const increment = createAction(types.INCREMENT)
export const decrement = createAction(types.DECREMENT)
export const incrementAsync = createAction(types.INCREMENT_ASYNC)
