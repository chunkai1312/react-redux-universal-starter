import { expect } from 'chai'
import * as actions from '../../src/actions/layout'
import * as types from '../../src/constants/actionTypes'

describe('Layout Actions:', () => {
  describe('#toggleNavDrawer()', () => {
    it('should be a function', () => {
      expect(actions.toggleNavDrawer).to.be.a('function')
    })

    it('should create an action with type "TOGGLE_NAV_DRAWER"', () => {
      expect(actions.toggleNavDrawer()).to.eql({ type: types.TOGGLE_NAV_DRAWER })
    })
  })

  describe('#setPageTitle()', () => {
    it('should be a function', () => {
      expect(actions.setPageTitle).to.be.a('function')
    })

    it('should create an action with type "SET_PAGE_TITLE" and payload', () => {
      const title = 'Home'
      expect(actions.setPageTitle(title)).to.eql({ type: types.SET_PAGE_TITLE, payload: title })
    })
  })

  describe('#clickMenuItem()', () => {
    it('should be a function', () => {
      expect(actions.clickMenuItem).to.be.a('function')
    })

    it('should create an action with type "CLICK_MENU_ITEM" and payload', () => {
      const menuItem = { name: 'Home', icon: 'home', path: '/' }
      expect(actions.clickMenuItem(menuItem)).to.eql({ type: types.CLICK_MENU_ITEM, payload: menuItem })
    })
  })
})
