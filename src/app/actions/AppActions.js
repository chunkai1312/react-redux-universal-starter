import { APP_BAR_TITLE_CHANGE, NAV_DRAWER_TOGGLE } from '../constants/ActionTypes';

export function changeAppBarTitle(title) {
  return { type: APP_BAR_TITLE_CHANGE, title };
}

export function toggleNavDrawer() {
  return { type: NAV_DRAWER_TOGGLE };
}
