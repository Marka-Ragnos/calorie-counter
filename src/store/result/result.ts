import {
  IState,
  IStateResult,
  Action,
  ResultActionTypes,
} from "../../types/state";
import { extend } from "../../utils";

const initialState: IStateResult = {
  visibleBlock: false,
  normResult: "",
  minimalResult: "",
  maximalResult: "",
};

export const ActionCreator = {
  changeVisibleBlock: () => ({
    type: ResultActionTypes.CHANGE_VISIBLE_BLOCK,
    payload: true,
  }),
  changeNormResult: (normResult: string) => ({
    type: ResultActionTypes.CHANGE_NORM_RESULT,
    payload: normResult,
  }),
  changeMinimalResult: (minimalResult: string) => ({
    type: ResultActionTypes.CHANGE_MINIMAL_RESULT,
    payload: minimalResult,
  }),
  changeMaximalResult: (maximalResult: string) => ({
    type: ResultActionTypes.CHANGE_MAXIMAL_RESULT,
    payload: maximalResult,
  }),
};

export const reducer = (state = initialState, action: Action): IState => {
  switch (action.type) {
    case ResultActionTypes.CHANGE_VISIBLE_BLOCK:
      return extend(state, { visibleBlock: action.payload });
    case ResultActionTypes.CHANGE_NORM_RESULT:
      return extend(state, { normResult: action.payload });
    case ResultActionTypes.CHANGE_MINIMAL_RESULT:
      return extend(state, { minimalResult: action.payload });
    case ResultActionTypes.CHANGE_MAXIMAL_RESULT:
      return extend(state, { maximalResult: action.payload });
    default:
      return state;
  }
};
