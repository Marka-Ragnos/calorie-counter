import {
  IStateParameters,
  Action,
  ParametersActionTypes,
} from "../../types/state";
import { formatInput } from "../../utils";

const initialState: IStateParameters = {
  age: "",
  height: "",
  weight: "",
};

export const ActionCreator = {
  changeParameters: (evt: React.ChangeEvent<HTMLInputElement>) => ({
    type: ParametersActionTypes.CHANGE_PARAMETERS,
    payload: { [evt.currentTarget.name]: formatInput(evt.currentTarget.value) },
  }),
};

export const reducer = (
  state = initialState,
  action: Action
): IStateParameters => {
  switch (action.type) {
    case ParametersActionTypes.CHANGE_PARAMETERS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
