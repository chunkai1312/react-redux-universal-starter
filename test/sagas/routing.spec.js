import 'babel-polyfill'
import { expect } from 'chai'
import { put } from 'redux-saga/effects'
import { setPageTitle } from '../../src/sagas/routing'
import * as actions from '../../src/actions'

describe('Routing Sagas:', () => {
  describe('#setPageTitle()', () => {
    let generator

    it('should put action creator #setPageTitle() with payload to change title to "Home"', () => {
      generator = setPageTitle({ payload: { pathname: '/' } })
      expect(generator.next().value).to.eql(put(actions.setPageTitle('Home')))
    })

    it('should put action creator #setPageTitle() with payload to change title to "About"', () => {
      generator = setPageTitle({ payload: { pathname: '/about' } })
      expect(generator.next().value).to.eql(put(actions.setPageTitle('About')))
    })
  })
})
