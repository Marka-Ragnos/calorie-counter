import { IState } from "./types/state";

export const extend = (target: IState, update: IState): IState =>
  Object.assign({}, target, update);
