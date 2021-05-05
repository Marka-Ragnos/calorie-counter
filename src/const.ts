export enum NameSpace {
  GENDER = `GENDER`,
  PARAMETERS = `PARAMETERS`,
  ACTIVITY = `ACTIVITY`,
  RESULT = `RESULT`,
}

export const LEAD_ZERO = /^0+/;

export const NOT_NUMBERS = /[^\d]/g;

export enum CaloriesFormulaFactor {
  AGE = 5,
  WEIGHT = 10,
  HEIGHT = 6.25,
}

export enum CaloriesMinMaxRatio {
  MIN = 0.85,
  MAX = 1.15,
}
