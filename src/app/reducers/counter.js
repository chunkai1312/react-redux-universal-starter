import { INCREMENT, DECREMENT } from '../constants/ActionTypes';

const initialState = {
  num: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { num: state.num + 1 });

    case DECREMENT:
      return Object.assign({}, state, { num: state.num - 1 });

    default:
      return state;
  }
}
