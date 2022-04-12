import { ActionTypes } from '../action-types';
type updateIncrementAction = {
  type: ActionTypes.INCREMENT | ActionTypes.DECREMENT;
  payload: number;
};

type decreamentAction = {
  type: ActionTypes.RESET;
};

export type counterAction = updateIncrementAction | decreamentAction;
