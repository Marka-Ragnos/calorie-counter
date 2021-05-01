import { IState, Action, GenderActionTypes } from "../../types/state";
import { extend } from "../../utils";

const initialState: IState = {
  checkedGender: "male",
};

export const ActionCreator = {
  changeGender: (evt: React.MouseEvent<HTMLInputElement>) => ({
    type: GenderActionTypes.CHANGE_GENDER,
    payload: evt.currentTarget.defaultValue,
  }),
};

export const reducer = (state = initialState, action: Action): IState => {
  switch (action.type) {
    case GenderActionTypes.CHANGE_GENDER:
      return extend(state, { checkedGender: action.payload });
    default:
      return state;
  }
};
