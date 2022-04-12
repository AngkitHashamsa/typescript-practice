import { ActionTypes } from 'Redux/action-types';
import { Dispatch } from 'react';
import { counterAction } from 'Redux/actions';

export const increment = (amount: number) => (dispatch: Dispatch<counterAction>) =>
  dispatch({
    type: ActionTypes.INCREMENT,
    payload: amount,
  });

export const decrement = (amount: number) => (dispatch: Dispatch<counterAction>) =>
  dispatch({
    type: ActionTypes.DECREMENT,
    payload: amount,
  });

export const reset = () => (dispatch: Dispatch<counterAction>) =>
  dispatch({
    type: ActionTypes.RESET,
  });
