import { expect } from 'chai'
import * as actions from '../../src/actions/counter'
import * as types from '../../src/constants/actionTypes'

describe('Counter Actions:', () => {
  describe('#increment()', () => {
    it('should be a function', () => {
      expect(actions.increment).to.be.a('function')
    })

    it('should create an action with type "COUNTER_INCREMENT"', () => {
      expect(actions.increment()).to.eql({ type: types.COUNTER_INCREMENT })
    })
  })

  describe('#decrement()', () => {
    it('should be a function', () => {
      expect(actions.decrement).to.be.a('function')
    })

    it('should create an action with type "COUNTER_DECREMENT"', () => {
      expect(actions.decrement()).to.eql({ type: types.COUNTER_DECREMENT })
    })
  })

  describe('#incrementAsync()', () => {
    it('should be a function', () => {
      expect(actions.incrementAsync).to.be.a('function')
    })

    it('should create an action with type "COUNTER_INCREMENT_ASYNC"', () => {
      expect(actions.incrementAsync()).to.eql({ type: types.COUNTER_INCREMENT_ASYNC })
    })
  })
})
