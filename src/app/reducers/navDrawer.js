import { TOGGLE_NAV_DRAWER } from '../constants/ActionTypes';

const initialState = {
  active: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV_DRAWER:
      return Object.assign({}, state, { active: !state.active });

    default:
      return state;
  }
}
