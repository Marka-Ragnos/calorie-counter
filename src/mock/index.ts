import * as TypesMock from "./typesMock";

export const SwitcherData: Array<string> = ["male", "female"];

export const ParametersData: TypesMock.ParametersType = [
  { parameter: "age", title: "Возраст", unit: "лет" },
  { parameter: "height", title: "Рост", unit: "см" },
  { parameter: "weight", title: "Вес", unit: "кг" },
];

export const ResultData: TypesMock.ResultType = [
  { title: "norm", text: "поддержание веса" },
  { title: "minimal", text: "снижение веса" },
  { title: "maximal", text: "набор веса" },
];

export const ActivityData: TypesMock.ActivityType = [
  {
    title: "minimal",
    value: "min",
    description: "Минимальная",
    text: "Сидячая работа и нет физических нагрузок",
  },
  {
    title: "low",
    value: "low",
    description: "Низкая",
    text: "Редкие, нерегулярные тренировки, активность в быту",
  },
  {
    title: "medium",
    value: "medium",
    description: "Средняя",
    text: "Тренировки 3-5 раз в неделю",
  },
  {
    title: "high",
    value: "high",
    description: "Высокая",
    text: "Тренировки 6-7 раз в неделю",
  },
  {
    title: "maximal",
    value: "max",
    description: "Очень высокая",
    text: "Больше 6 тренировок в неделю и физическая работа",
  },
];
