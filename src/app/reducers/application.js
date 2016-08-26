import { TOGGLE_NAV_DRAWER, SET_PAGE_TITLE } from '../constants/ActionTypes'

const initialState = {
  name: 'React App Boilerplate',
  pageTitle: 'Home',
  navDrawer: {
    active: false
  }
}

export default function (state = initialState, action) {
  switch (action.type) {

    case TOGGLE_NAV_DRAWER:
      return Object.assign({}, state, { navDrawer: { active: !state.navDrawer.active } })

    case SET_PAGE_TITLE:
      return Object.assign({}, state, { pageTitle: action.pageTitle })

    default:
      return state
  }
}
