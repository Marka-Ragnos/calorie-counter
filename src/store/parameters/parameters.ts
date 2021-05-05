import { formatInput } from "../../utils";
import {
  IStateParameters,
  Action,
  ParametersActionTypes,
} from "../../types/state";

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
  clearParameters: () => ({
    type: ParametersActionTypes.CLEAR_PARAMETERS,
  }),
};

export const reducer = (
  state = initialState,
  action: Action
): IStateParameters => {
  switch (action.type) {
    case ParametersActionTypes.CHANGE_PARAMETERS:
      return Object.assign({}, state, action.payload);
    case ParametersActionTypes.CLEAR_PARAMETERS:
      return initialState;
    default:
      return state;
  }
};
