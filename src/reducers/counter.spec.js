import { expect } from 'chai'
import reducer, { initialState } from './counter'
import * as types from '../constants/actionTypes'

describe('Counter Reducer:', () => {
  let state

  beforeEach(() => {
    state = reducer(undefined, { type: 'NOT_TYPE' })
  })

  it('should be a function', () => {
    expect(reducer).to.be.a('function')
  })

  it('should return the initial state', () => {
    expect(state).to.eql(initialState)
  })

  it('should handle the action type "COUNTER_INCREMENT"', () => {
    state = reducer(state, { type: types.COUNTER_INCREMENT })
    expect(state).to.equal(initialState + 1)
  })

  it('should handle the action type "COUNTER_DECREMENT"', () => {
    state = reducer(state, { type: types.COUNTER_DECREMENT })
    expect(state).to.equal(initialState - 1)
  })
})
