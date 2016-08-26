import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../constants/ActionTypes'

const initialState = 0

export default function (state = initialState, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1

    case COUNTER_DECREMENT:
      return state - 1

    default:
      return state
  }
}
