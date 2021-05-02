import {
  IStateParameters,
  Action,
  ParametersActionTypes,
} from "../../types/state";

const initialState: IStateParameters = {
  age: 0,
  height: 0,
  weight: 0,
};

export const ActionCreator = {
  changeParameters: (evt: React.ChangeEvent<HTMLInputElement>) => ({
    type: ParametersActionTypes.CHANGE_PARAMETERS,
    payload: { [evt.currentTarget.name]: evt.currentTarget.value },
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
