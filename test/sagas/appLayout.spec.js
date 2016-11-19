import 'babel-polyfill'
import { expect } from 'chai'
import { put } from 'redux-saga/effects'
import { push, goBack } from 'react-router-redux'
import { clickMenuItem, clickBackButton, backToHome } from '../../src/sagas/appLayout'

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

  describe('#clickBackButton()', () => {
    let generator

    before(() => {
      generator = clickBackButton()
    })

    it('should go back to previous route', () => {
      expect(generator.next().value).to.eql(put(goBack()))
    })
  })

  describe('#backToHome()', () => {
    let generator

    before(() => {
      generator = backToHome()
    })

    it('should back to home page', () => {
      expect(generator.next().value).to.eql(put(push('/')))
    })
  })
})
