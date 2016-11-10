import { expect } from 'chai'
import reducer, { initialState, actionCreators, actionTypes } from '../../../src/redux/modules/counter'

describe('redux module: counter', () => {
  describe('action creator: increment()', () => {
    it('should be a function', () => {
      expect(actionCreators.increment).to.be.a('function')
    })

    it('should return an action with type "COUNTER_INCREMENT"', () => {
      expect(actionCreators.increment()).to.eql({ type: actionTypes.COUNTER_INCREMENT })
    })
  })

  describe('action creator: decrement()', () => {
    it('should be a function', () => {
      expect(actionCreators.decrement).to.be.a('function')
    })

    it('should return an action with type "COUNTER_DECREMENT"', () => {
      expect(actionCreators.decrement()).to.eql({ type: actionTypes.COUNTER_DECREMENT })
    })
  })

  describe('action creator: incrementAsync()', () => {
    it('should be a function', () => {
      expect(actionCreators.incrementAsync).to.be.a('function')
    })

    it('should return an action with type "COUNTER_INCREMENT_ASYNC"', () => {
      expect(actionCreators.incrementAsync()).to.eql({ type: actionTypes.COUNTER_INCREMENT_ASYNC })
    })
  })

  describe('reducer', () => {
    it('should be a function', () => {
      expect(reducer).to.be.a('function')
    })

    it('should return the initial state', () => {
      let state = reducer(undefined, { type: 'NOT_TYPE' })
      expect(state).to.eql(initialState)
    })

    it('should handle action type "COUNTER_INCREMENT"', () => {
      let state = reducer(undefined, { type: 'NOT_TYPE' })
      expect(state).to.equal(0)

      state = reducer(state, actionCreators.increment())
      expect(state).to.equal(1)
    })

    it('should handle action type "COUNTER_DECREMENT"', () => {
      let state = reducer(undefined, { type: 'NOT_TYPE' })
      expect(state).to.equal(0)

      state = reducer(state, actionCreators.decrement())
      expect(state).to.equal(-1)
    })
  })
})
