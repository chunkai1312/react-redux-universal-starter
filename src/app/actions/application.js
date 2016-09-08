import { createAction } from 'redux-actions'
import { TOGGLE_NAV_DRAWER, SET_PAGE_TITLE } from '../constants/ActionTypes'

export const toggleNavDrawer = createAction(TOGGLE_NAV_DRAWER)
export const setPageTitle = createAction(SET_PAGE_TITLE, pageTitle => pageTitle)
