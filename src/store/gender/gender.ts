import {
  IState,
  IStateGender,
  Action,
  GenderActionTypes,
} from "../../types/state";
import { extend } from "../../utils";

const initialState: IStateGender = {
  checkedGender: "male",
};

export const ActionCreator = {
  changeGender: (evt: React.ChangeEvent<HTMLInputElement>) => ({
    type: GenderActionTypes.CHANGE_GENDER,
    payload: evt.currentTarget.value,
  }),
  clearGender: () => ({
    type: GenderActionTypes.CLEAR_GENDER,
  }),
};

export const reducer = (state = initialState, action: Action): IState => {
  switch (action.type) {
    case GenderActionTypes.CHANGE_GENDER:
      return extend(state, { checkedGender: action.payload });
    case GenderActionTypes.CLEAR_GENDER:
      return initialState;
    default:
      return state;
  }
};
