import { extend } from "../../utils";
import {
  IState,
  IStateResult,
  Action,
  ResultActionTypes,
} from "../../types/state";

const initialState: IStateResult = {
  visibleBlock: false,
  norm: "",
  minimal: "",
  maximal: "",
};

export const ActionCreator = {
  changeVisibleBlock: () => ({
    type: ResultActionTypes.CHANGE_VISIBLE_BLOCK,
    payload: true,
  }),
  changeUnVisibleBlock: () => ({
    type: ResultActionTypes.CHANGE_UNVISIBLE_BLOCK,
    payload: false,
  }),
  changeResult: (result: IStateResult) => ({
    type: ResultActionTypes.CHANGE_RESULT,
    payload: result,
  }),
};

export const reducer = (state = initialState, action: Action): IState => {
  switch (action.type) {
    case ResultActionTypes.CHANGE_VISIBLE_BLOCK:
      return extend(state, { visibleBlock: action.payload });
    case ResultActionTypes.CHANGE_UNVISIBLE_BLOCK:
      return extend(state, { visibleBlock: action.payload });
    case ResultActionTypes.CHANGE_RESULT:
      return extend(state, action.payload);
    default:
      return state;
  }
};
