import { TOGGLE_NAV_DRAWER, SET_PAGE_TITLE } from '../constants/ActionTypes'

export function toggleNavDrawer () {
  return { type: TOGGLE_NAV_DRAWER }
}

export function setPageTitle (pageTitle) {
  return { type: SET_PAGE_TITLE, pageTitle }
}
