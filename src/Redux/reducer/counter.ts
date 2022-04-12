import { counterAction } from '../actions';
import { ActionTypes } from '../action-types';

type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

export const counterReducer = (state = initialState, action: counterAction) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + action.payload };
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count - action.payload };
    case ActionTypes.RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
