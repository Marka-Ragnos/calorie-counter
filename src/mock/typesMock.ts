type ParameterTypeItem = {
  parameter: string;
  title: string;
  unit: string;
};

export type ParametersType = ParameterTypeItem[];

export type ResultTypeItem = {
  title: string;
  text: string;
  calories?: string;
};

export type ResultType = ResultTypeItem[];

export type ActivityTypeItem = {
  title: string;
  value: string;
  description: string;
  text: string;
};

export type ActivityType = ActivityTypeItem[];
