import { handleActions } from 'redux-actions'
import * as types from '../constants/actionTypes'

export const initialState = {
  appTitle: 'React Redux Boilerplate',
  pageTitle: 'Home',
  navMenuItems: [
    { title: 'Home', icon: 'home', path: '/' },
    { title: 'About', icon: 'info', path: '/about' }
  ],
  isNavDrawerActive: false
}

const appLayout = handleActions({
  [types.TOGGLE_NAV_DRAWER]: (state, action) => ({ ...state, isNavDrawerActive: !state.isNavDrawerActive }),
  [types.SET_PAGE_TITLE]: (state, action) => ({ ...state, pageTitle: action.payload })
}, initialState)

export default appLayout
