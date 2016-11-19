import { handleActions } from 'redux-actions'
import * as types from '../constants/actionTypes'

export const initialState = {
  appName: 'React Redux Boilerplate',
  pageTitle: 'Home',
  menuItems: [
    { name: 'Home', icon: 'home', path: '/' },
    { name: 'About', icon: 'info', path: '/about' }
  ],
  isNavDrawerActive: false
}

export default handleActions({
  [types.TOGGLE_NAV_DRAWER]: (state, action) => ({ ...state, isNavDrawerActive: !state.isNavDrawerActive }),
  [types.SET_PAGE_TITLE]: (state, action) => ({ ...state, pageTitle: action.payload })
}, initialState)
