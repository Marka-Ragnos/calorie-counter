interface IAction {
  type: string;
  payload?: any;
}

interface IGenderAction {
  type: GenderActionTypes.CHANGE_GENDER;
  payload: string;
}

export interface IState {
  checkedGender: string;
}

export enum GenderActionTypes {
  CHANGE_GENDER = `CHANGE_GENDER`,
}

export type Action = IAction | IGenderAction;
