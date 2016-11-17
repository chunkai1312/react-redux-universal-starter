import { expect } from 'chai'
import reducer, { initialState } from '../../src/reducers/layout'
import * as types from '../../src/constants/actionTypes'

describe('Layout Reducer:', () => {
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

  it('should handle the action type "TOGGLE_NAV_DRAWER"', () => {
    state = reducer(state, { type: types.TOGGLE_NAV_DRAWER })
    expect(state.isNavDrawerActive).to.be.true

    state = reducer(state, { type: types.TOGGLE_NAV_DRAWER })
    expect(state.isNavDrawerActive).to.be.false
  })

  it('should handle the action type "SET_PAGE_TITLE"', () => {
    state = reducer(state, { type: types.SET_PAGE_TITLE, payload: 'About' })
    expect(state.pageTitle).to.equal('About')

    state = reducer(state, { type: types.SET_PAGE_TITLE, payload: 'Home' })
    expect(state.pageTitle).to.equal('Home')
  })
})
