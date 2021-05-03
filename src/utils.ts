import { IState, IStateParameters } from "./types/state";
import { LEAD_ZERO, NOT_NUMBERS } from "./const";

export const extend = (target: IState, update: IState): IState =>
  Object.assign({}, target, update);

export const formatInput = (str: string): string => {
  return str.replace(NOT_NUMBERS, ``).replace(LEAD_ZERO, ``);
};

export const checkAllFields = (Parameters: IStateParameters) => {
  return Object.values(Parameters).includes("");
};

export const checkOneField = (Parameters: IStateParameters) => {
  return !Boolean(Object.values(Parameters).filter((i) => i.length > 0).length);
};
