import { NAV_DRAWER_TOGGLE } from '../constants/ActionTypes';

const initialState = {
  active: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NAV_DRAWER_TOGGLE:
      return Object.assign({}, state, { active: !state.active });

    default:
      return state;
  }
}
