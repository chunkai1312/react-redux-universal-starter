import { APP_BAR_TITLE_CHANGE } from '../constants/ActionTypes';

const initialState = {
  title: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case APP_BAR_TITLE_CHANGE:
      return Object.assign({}, state, { title: action.title });

    default:
      return state;
  }
}
