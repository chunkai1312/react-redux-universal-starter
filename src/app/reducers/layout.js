import { handleActions } from 'redux-actions'
import { TOGGLE_NAV_DRAWER, SET_PAGE_TITLE } from '../constants/ActionTypes'

const initialState = {
  appName: 'React App Boilerplate',
  pageTitle: 'Home',
  isNavDrawerActive: {
    active: false
  }
}

export default handleActions({
  [TOGGLE_NAV_DRAWER]: (state, action) => Object.assign({}, state, { navDrawer: { active: !state.navDrawer.active } }),
  [SET_PAGE_TITLE]: (state, action) => Object.assign({}, state, { pageTitle: action.payload })
}, initialState)
