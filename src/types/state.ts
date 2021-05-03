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

export type IState = IStateGender | IStateParameters | IStateActivity;

export enum GenderActionTypes {
  CHANGE_GENDER = `CHANGE_GENDER`,
}

export enum ParametersActionTypes {
  CHANGE_PARAMETERS = `CHANGE_PARAMETERS`,
}

export enum ActivityActionTypes {
  CHANGE_ACTIVITY = `CHANGE_ACTIVITY`,
}

export type Action = IAction | IGenderAction;
