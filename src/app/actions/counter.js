import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../constants/ActionTypes'

export function increment () {
  return { type: COUNTER_INCREMENT }
}

export function decrement () {
  return { type: COUNTER_DECREMENT }
}
