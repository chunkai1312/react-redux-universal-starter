import { handleActions } from 'redux-actions'
import { TOGGLE_NAV_DRAWER, SET_PAGE_TITLE } from '../constants/ActionTypes'

const initialState = {
  appName: 'React App Boilerplate',
  pageTitle: 'Home',
  isNavDrawerActive: false
}

export default handleActions({
  [TOGGLE_NAV_DRAWER]: (state, action) => Object.assign({}, state, { isNavDrawerActive: !state.isNavDrawerActive }),
  [SET_PAGE_TITLE]: (state, action) => Object.assign({}, state, { pageTitle: action.payload })
}, initialState)
