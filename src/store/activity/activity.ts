import { extend } from "../../utils";
import {
  IState,
  IStateActivity,
  Action,
  ActivityActionTypes,
} from "../../types/state";

const initialState: IStateActivity = {
  checkedActivity: "min",
};

export const ActionCreator = {
  changeActivity: (evt: React.ChangeEvent<HTMLInputElement>) => ({
    type: ActivityActionTypes.CHANGE_ACTIVITY,
    payload: evt.currentTarget.value,
  }),
  clearActivity: () => ({
    type: ActivityActionTypes.CLEAR_ACTIVITY,
  }),
};

export const reducer = (state = initialState, action: Action): IState => {
  switch (action.type) {
    case ActivityActionTypes.CHANGE_ACTIVITY:
      return extend(state, { checkedActivity: action.payload });
    case ActivityActionTypes.CLEAR_ACTIVITY:
      return initialState;
    default:
      return state;
  }
};
