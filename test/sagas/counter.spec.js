import 'babel-polyfill'
import { expect } from 'chai'
import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import { incrementAsync } from '../../src/sagas/counter'
import * as actions from '../../src/actions'

describe('Counter Sagas:', () => {
  describe('#incrementAsync()', () => {
    let generator

    before(() => {
      generator = incrementAsync()
    })

    it('should call delay(1000)', () => {
      expect(generator.next().value).to.eql(call(delay, 1000))
    })

    it('should put action creator #increment()', () => {
      expect(generator.next().value).to.eql(put(actions.increment()))
    })
  })
})
