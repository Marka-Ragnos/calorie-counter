import {
  IState,
  IStateActivity,
  Action,
  ActivityActionTypes,
} from "../../types/state";
import { extend } from "../../utils";

const initialState: IStateActivity = {
  checkedActivity: "min",
};

export const ActionCreator = {
  changeActivity: (evt: React.MouseEvent<HTMLInputElement>) => ({
    type: ActivityActionTypes.CHANGE_ACTIVITY,
    payload: evt.currentTarget.value,
  }),
};

export const reducer = (state = initialState, action: Action): IState => {
  switch (action.type) {
    case ActivityActionTypes.CHANGE_ACTIVITY:
      return extend(state, { checkedActivity: action.payload });
    default:
      return state;
  }
};
