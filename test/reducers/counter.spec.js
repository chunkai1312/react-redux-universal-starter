import { expect } from 'chai'
import reducer, { initialState } from '../../src/reducers/counter'
import * as types from '../../src/constants/actionTypes'

describe('Counter Reducer:', () => {
  let state

  beforeEach(() => {
    state = reducer(undefined, { type: 'UNKNOWN' })
  })

  it('should be a function', () => {
    expect(reducer).to.be.a('function')
  })

  it('should return the initial state', () => {
    expect(state).to.eql(initialState)
  })

  it('should handle the action type "INCREMENT"', () => {
    state = reducer(state, { type: types.INCREMENT })
    expect(state).to.equal(initialState + 1)
  })

  it('should handle the action type "DECREMENT"', () => {
    state = reducer(state, { type: types.DECREMENT })
    expect(state).to.equal(initialState - 1)
  })
})
