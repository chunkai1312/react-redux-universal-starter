import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

export const toggleNavDrawer = createAction(types.TOGGLE_NAV_DRAWER)
export const setPageTitle = createAction(types.SET_PAGE_TITLE, pageTitle => pageTitle)
export const clickMenuItem = createAction(types.CLICK_MENU_ITEM, menuItem => menuItem)
export const backToHome = createAction(types.BACK_TO_HOME)
