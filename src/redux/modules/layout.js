import { createAction, handleActions } from 'redux-actions'

export const actionTypes = {
  TOGGLE_NAV_DRAWER: 'app/layout/TOGGLE_NAV_DRAWER',
  SET_PAGE_TITLE: 'app/layout/SET_PAGE_TITLE',
  CLICK_MENU_ITEM: 'app/layout/CLICK_MENU_ITEM'
}

export const actionCreators = {
  toggleNavDrawer: createAction(actionTypes.TOGGLE_NAV_DRAWER),
  setPageTitle: createAction(actionTypes.SET_PAGE_TITLE, pageTitle => pageTitle),
  clickMenuItem: createAction(actionTypes.CLICK_MENU_ITEM, menuItem => menuItem)
}

export const initialState = {
  appName: 'React App Boilerplate',
  pageTitle: 'Home',
  menuItems: [
    { name: 'Home', icon: 'home', path: '/' },
    { name: 'About', icon: 'info', path: '/about' }
  ],
  isNavDrawerActive: false
}

export default handleActions({
  [actionTypes.TOGGLE_NAV_DRAWER]: (state, action) => ({ ...state, isNavDrawerActive: !state.isNavDrawerActive }),
  [actionTypes.SET_PAGE_TITLE]: (state, action) => ({ ...state, pageTitle: action.payload })
}, initialState)
