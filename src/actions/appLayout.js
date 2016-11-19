import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

export const setPageTitle = createAction(types.SET_PAGE_TITLE, pageTitle => pageTitle)
export const toggleNavDrawer = createAction(types.TOGGLE_NAV_DRAWER)
export const toggleBackButton = createAction(types.TOGGLE_BACK_BUTTON)
export const clickMenuItem = createAction(types.CLICK_MENU_ITEM, menuItem => menuItem)
export const clickBackButton = createAction(types.CLICK_BACK_BUTTON)
export const backToHome = createAction(types.BACK_TO_HOME)
