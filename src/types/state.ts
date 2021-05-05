interface IAction {
  type: string;
  payload?: any;
}

interface IGenderAction {
  type: GenderActionTypes.CHANGE_GENDER;
  payload: string;
}

export interface IStateGender {
  checkedGender: string;
}
export interface IStateParameters {
  [index: string]: string;
}
export interface IStateActivity {
  checkedActivity: string;
}
export interface IStateResult {
  visibleBlock?: boolean;
  norm?: string;
  minimal?: string;
  maximal?: string;
}

export type IState =
  | IStateGender
  | IStateParameters
  | IStateActivity
  | IStateResult;

export enum GenderActionTypes {
  CHANGE_GENDER = `CHANGE_GENDER`,
  CLEAR_GENDER = `CLEAR_GENDER`,
}

export enum ParametersActionTypes {
  CHANGE_PARAMETERS = `CHANGE_PARAMETERS`,
  CLEAR_PARAMETERS = `CLEAR_PARAMETERS`,
}

export enum ActivityActionTypes {
  CHANGE_ACTIVITY = `CHANGE_ACTIVITY`,
  CLEAR_ACTIVITY = `CLEAR_ACTIVITY`,
}

export enum ResultActionTypes {
  CHANGE_VISIBLE_BLOCK = `CHANGE_VISIBLE_BLOCK`,
  CHANGE_UNVISIBLE_BLOCK = `CHANGE_UNVISIBLE_BLOCK`,
  CHANGE_RESULT = `CHANGE_RESULT`,
}

export type Action = IAction | IGenderAction;
