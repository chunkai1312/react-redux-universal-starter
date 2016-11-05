import { handleActions } from 'redux-actions'
import { TOGGLE_NAV_DRAWER, SET_PAGE_TITLE } from '../constants/ActionTypes'

const initialState = {
  appName: 'React App Boilerplate',
  pageTitle: 'Home',
  menuItems: [
    { name: 'Home', icon: 'home', path: '/' },
    { name: 'About', icon: 'info', path: '/about' }
  ],
  isNavDrawerActive: false
}

export default handleActions({
  [TOGGLE_NAV_DRAWER]: (state, action) => ({ ...state, isNavDrawerActive: !state.isNavDrawerActive }),
  [SET_PAGE_TITLE]: (state, action) => ({ ...state, pageTitle: action.payload })
}, initialState)
