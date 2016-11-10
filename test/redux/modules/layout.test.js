import { expect } from 'chai'
import reducer, { initialState, actionCreators, actionTypes } from '../../../src/redux/modules/layout'

describe('redux module: layout', () => {
  describe('action creator: toggleNavDrawer()', () => {
    it('should be a function', () => {
      expect(actionCreators.toggleNavDrawer).to.be.a('function')
    })

    it('should return an action with type "TOGGLE_NAV_DRAWER"', () => {
      expect(actionCreators.toggleNavDrawer()).to.eql({ type: actionTypes.TOGGLE_NAV_DRAWER })
    })
  })

  describe('action creator: setPageTitle()', () => {
    it('should be a function', () => {
      expect(actionCreators.setPageTitle).to.be.a('function')
    })

    it('should return an action with type "SET_PAGE_TITLE"', () => {
      expect(actionCreators.setPageTitle()).to.eql({ type: actionTypes.SET_PAGE_TITLE })
    })
  })

  describe('action creator: clickMenuItem()', () => {
    it('should be a function', () => {
      expect(actionCreators.clickMenuItem).to.be.a('function')
    })

    it('should return an action with type "CLICK_MENU_ITEM"', () => {
      expect(actionCreators.clickMenuItem()).to.eql({ type: actionTypes.CLICK_MENU_ITEM })
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

    it('should handle action type "TOGGLE_NAV_DRAWER"', () => {
      let state = reducer(undefined, { type: 'NOT_TYPE' })
      expect(state.isNavDrawerActive).to.be.false

      state = reducer(state, actionCreators.toggleNavDrawer())
      expect(state.isNavDrawerActive).to.be.true

      state = reducer(state, actionCreators.toggleNavDrawer())
      expect(state.isNavDrawerActive).to.be.false
    })

    it('should handle action type "SET_PAGE_TITLE"', () => {
      let state = reducer(undefined, { type: 'NOT_TYPE' })
      expect(state.pageTitle).to.equal('Home')

      state = reducer(state, actionCreators.setPageTitle('About'))
      expect(state.pageTitle).to.equal('About')

      state = reducer(state, actionCreators.setPageTitle('Home'))
      expect(state.pageTitle).to.equal('Home')
    })
  })
})
