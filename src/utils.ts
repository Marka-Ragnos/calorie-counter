import { IState, IStateParameters, IStateResult } from "./types/state";
import {
  LEAD_ZERO,
  NOT_NUMBERS,
  CaloriesFormulaFactor,
  CaloriesMinMaxRatio,
} from "./const";

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

const checkGender = (genderProps: "male" | "female") => {
  return genderProps === "male" ? 5 : -161;
};

const checkActivity = (
  valueProps: "min" | "low" | "medium" | "high" | "max"
) => {
  switch (valueProps) {
    case "min":
      return 1.2;
    case "low":
      return 1.375;
    case "medium":
      return 1.55;
    case "high":
      return 1.725;
    case "max":
      return 1.9;
    default:
      return 1.2;
  }
};

export const calculateResult = (
  ageProps: string,
  weightProps: string,
  heightProps: string,
  genderProps: "male" | "female",
  valueProps: "min" | "low" | "medium" | "high" | "max"
): IStateResult => {
  const age = CaloriesFormulaFactor.AGE * Number(ageProps);
  const weight = CaloriesFormulaFactor.WEIGHT * Number(weightProps);
  const height = CaloriesFormulaFactor.HEIGHT * Number(heightProps);
  const gender = checkGender(genderProps);
  const activity = checkActivity(valueProps);

  const norm = String(Math.round((weight + height - age + gender) * activity));
  const minimal = String(Math.round(Number(norm) * CaloriesMinMaxRatio.MIN));
  const maximal = String(Math.round(Number(norm) * CaloriesMinMaxRatio.MAX));
  return { norm: norm, minimal: minimal, maximal: maximal };
};
