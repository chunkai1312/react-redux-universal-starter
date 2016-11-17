import 'babel-polyfill'
import { expect } from 'chai'
import { put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { clickMenuItem } from '../../src/sagas/layout'

describe('Layout Sagas:', () => {
  describe('#clickMenuItem()', () => {
    let generator
    const menuItem = { name: 'Home', icon: 'home', path: '/' }

    before(() => {
      generator = clickMenuItem({ payload: menuItem })
    })

    it('should change route to path "/"', () => {
      expect(generator.next().value).to.eql(put(push(menuItem.path)))
    })
  })
})
